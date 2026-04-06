const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const http = require('http');
const sass = require('sass');

const outDir = path.resolve(__dirname, '../public');
const isWatch = process.argv.includes('--watch');

let clients = [];
if (isWatch) {
  const sseServer = http.createServer((req, res) => {
    if (req.url === '/esbuild-livereload') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      });
      clients.push(res);
      req.on('close', () => {
        clients = clients.filter(client => client !== res);
      });
    } else {
      res.writeHead(404);
      res.end();
    }
  });
  sseServer.listen(5557, () => {
    console.log('Live reload server running on http://localhost:5557');
  });
}

let reloadTimeout;
const livereloadPlugin = {
  name: 'livereload',
  setup(build) {
    build.onEnd(result => {
      if (isWatch && result.errors.length === 0) {
        clearTimeout(reloadTimeout);
        reloadTimeout = setTimeout(() => {
          console.log('Build successful, triggering livereload...');
          clients.forEach(client => client.write('data: reload\n\n'));
        }, 500);
      }
    });
  },
};

const cssInjectPlugin = {
  name: 'css-inject',
  setup(build) {
    build.onLoad({ filter: /\.scss$/ }, async (args) => {
      const scssPath = args.path;
      
      try {
        const result = sass.compile(scssPath, {
          style: 'compressed',
        });
        
        const css = result.css;
        const js = `
          const css = ${JSON.stringify(css)};
          if (typeof document !== 'undefined') {
            const style = document.createElement('style');
            style.setAttribute('data-source', '${path.basename(scssPath)}');
            style.textContent = css;
            document.head.appendChild(style);
          }
          export default css;
        `;
        
        return {
          contents: js,
          loader: 'js',
        };
      } catch (error) {
        console.error(`Error compiling SCSS: ${scssPath}`, error);
        return {
          contents: `console.error('Failed to load ${scssPath}'); export default '';`,
          loader: 'js',
        };
      }
    });
  },
};

const livereloadClient = isWatch ? `
  if (typeof window !== 'undefined') {
    const es = new window.EventSource('http://localhost:5557/esbuild-livereload');
    es.onmessage = () => {
      try {
        if (window.AliLowCodeEngine && window.AliLowCodeEngine.project) {
          const scenarioName = 'general';
          const schema = window.AliLowCodeEngine.project.exportSchema('save');
          window.localStorage.setItem(scenarioName + ':projectSchema', JSON.stringify(schema));
          console.log('Auto-saved schema before reload.');
        }
      } catch (e) {
        console.error('Auto-save failed:', e);
      }
      console.log('Reloading page due to UMD changes...');
      window.location.reload();
    };
  }
` : '';

async function build() {
  console.log('Building Meta...');
  const metaContext = await esbuild.context({
    entryPoints: [path.resolve(__dirname, '../src/plugins/plugin-mall-components/entry-meta.ts')],
    bundle: true,
    outfile: path.resolve(outDir, 'mall-components-meta.js'),
    format: 'iife',
    globalName: 'MallComponentsMeta',
    charset: 'utf8',
    plugins: [livereloadPlugin],
    banner: { js: livereloadClient },
    footer: { js: 'MallComponentsMeta = MallComponentsMeta.default || MallComponentsMeta;' }
  });

  console.log('Building Components (UMD + Global Alias mode)...');
  
  const componentsContext = await esbuild.context({
    entryPoints: [path.resolve(__dirname, '../src/plugins/plugin-mall-components/entry-components.ts')],
    bundle: true,
    outfile: path.resolve(outDir, 'mall-components.umd.js'),
    format: 'iife',
    globalName: 'MallComponents',
    charset: 'utf8',
    
    alias: {
      'react': path.resolve(__dirname, '../src/shims/react.js'),
      'react-dom': path.resolve(__dirname, '../src/shims/react-dom.js'),
      'antd': path.resolve(__dirname, '../src/shims/antd.js'),
      '@ant-design/icons': path.resolve(__dirname, '../src/shims/icons.js'),
      'react-transition-group': path.resolve(__dirname, '../src/shims/react-transition-group.js'),
    },
    
    plugins: [livereloadPlugin, cssInjectPlugin],
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
      '.css': 'css'
    },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    minify: false,
    banner: {
      js: livereloadClient + `
// MallComponents - LowCode Component Library
// Uses global React/AntD instances (shared with LowCode Engine)
// No duplicate React instances!
`
    },
    footer: {
      js: `
MallComponents = MallComponents.default || MallComponents;

if (typeof window !== 'undefined') {
  window.MallComponents = MallComponents;
  console.log('[MallComponents] Registered:', Object.keys(MallComponents));
  
  // 确保 @ant-design/icons 可用
  if (!window.icons && typeof require !== 'undefined') {
    try {
      window.icons = require('@ant-design/icons');
    } catch(e) {}
  }
}
`
    }
  });

  if (isWatch) {
    await metaContext.watch();
    await componentsContext.watch();
    console.log('Watching for changes...');
  } else {
    await metaContext.rebuild();
    await componentsContext.rebuild();
    
    const metaStats = fs.statSync(path.resolve(outDir, 'mall-components-meta.js'));
    const componentsStats = fs.statSync(path.resolve(outDir, 'mall-components.umd.js'));
    
    console.log(`Build completed successfully!`);
    console.log(`  Meta: ${(metaStats.size / 1024).toFixed(2)}KB`);
    console.log(`  Components: ${(componentsStats.size / 1024).toFixed(2)}KB`);
    
    await metaContext.dispose();
    await componentsContext.dispose();
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
