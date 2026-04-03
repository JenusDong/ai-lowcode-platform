const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const http = require('http');

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
  
  // ============================================
  // 最终稳健方案：UMD + 全局别名
  // ============================================
  // 
  // 核心思路：
  // 1. 使用 format: 'iife' 输出 IIFE 格式
  // 2. 通过 alias 将 react/react-dom/antd 映射到全局变量
  // 3. 这样组件使用的是页面中已有的 React 实例，不会产生多实例问题
  //
  // 优点：
  // - 只有一个 React 实例（来自低代码引擎）
  // - 无需字符串替换
  // - 文件体积小（~50KB vs ~1.7MB）
  // - 完全兼容低代码引擎
  
  const componentsContext = await esbuild.context({
    entryPoints: [path.resolve(__dirname, '../src/plugins/plugin-mall-components/entry-components.ts')],
    bundle: true,
    outfile: path.resolve(outDir, 'mall-components.umd.js'),
    format: 'iife',
    globalName: 'MallComponents',
    charset: 'utf8',
    
    // 关键配置：将外部依赖映射到全局变量
    // 这样 import React from 'react' 会变成 const React = window.React
    alias: {
      'react': path.resolve(__dirname, '../src/shims/react.js'),
      'react-dom': path.resolve(__dirname, '../src/shims/react-dom.js'),
      'antd': path.resolve(__dirname, '../src/shims/antd.js'),
    },
    
    plugins: [livereloadPlugin],
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
      '.scss': 'css',
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
}
`
    }
  });

  if (isWatch) {
    await metaContext.watch();
    await componentsContext.watch();
    
    console.log('Watching for changes in src/plugins/plugin-mall-components...');
    console.log('Press Ctrl+C to stop');
    
    process.on('SIGINT', () => {
      metaContext.dispose();
      componentsContext.dispose();
      process.exit(0);
    });
  } else {
    await metaContext.rebuild();
    await componentsContext.rebuild();
    console.log('Build completed successfully!');
    
    await metaContext.dispose();
    await componentsContext.dispose();
  }
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
