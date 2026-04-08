const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const sass = require('sass');

const isWatch = process.argv.includes('--watch');
const outDir = path.resolve(__dirname, '../build');
const publicDir = path.resolve(__dirname, '../../../public');

const externalPlugin = {
  name: 'external-deps',
  setup(build) {
    const deps = ['react', 'react-dom', 'antd', '@ant-design/icons', 'moment'];
    const globalMap = {
      'react': 'Object.assign(window.React, { jsx: window.React.createElement, jsxs: window.React.createElement, Fragment: window.React.Fragment })',
      'react-dom': 'window.ReactDOM',
      'antd': 'window.antd',
      '@ant-design/icons': 'window.icons',
      'moment': 'window.moment',
    };

    deps.forEach((dep) => {
      build.onResolve({ filter: new RegExp(`^${dep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\/|$)`) }, (args) => ({
        path: dep,
        namespace: 'external',
      }));
    });

    build.onLoad({ filter: /.*/, namespace: 'external' }, (args) => {
      const globalVar = globalMap[args.path] || `window.${args.path}`;
      return {
        contents: `module.exports = ${globalVar};`,
        loader: 'js',
      };
    });
  },
};

async function buildComponents() {
  // Build JS
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../src/index.ts')],
    outfile: path.join(outDir, 'mall-components.umd.js'),
    format: 'iife',
    globalName: 'MallComponents',
    bundle: true,
    minify: !isWatch,
    sourcemap: isWatch,
    plugins: [externalPlugin],
    define: { 'process.env.NODE_ENV': '"production"', 'process.env.IS_CDN': '"true"' },
    loader: { '.scss': 'css', '.css': 'css', '.tsx': 'tsx', '.ts': 'ts' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    footer: {
      js: `
MallComponents = MallComponents.default || MallComponents;
if (typeof window !== 'undefined') {
  window.MallComponents = MallComponents;
  console.log('[MallComponents] Registered:', Object.keys(MallComponents));
}
`,
    },
  });
  console.log('✓ Built mall-components.umd.js');
}

async function buildCSS() {
  // Compile SCSS to CSS using sass
  const scssEntry = path.resolve(__dirname, '../src/index.scss');
  const cssOutput = path.join(outDir, 'mall-components.umd.css');
  
  try {
    const result = sass.compile(scssEntry, {
      style: isWatch ? 'expanded' : 'compressed',
      sourceMap: isWatch,
      loadPaths: [path.resolve(__dirname, '../src')],
    });
    
    fs.writeFileSync(cssOutput, result.css);
    console.log('✓ Built mall-components.umd.css');
  } catch (e) {
    console.error('✗ CSS build failed:', e.message);
    // Create empty CSS file to prevent errors
    fs.writeFileSync(cssOutput, '/* Mall Components CSS - Build Error */');
  }
}

async function buildMeta() {
  const tmpFile = path.join(outDir, '_meta-raw.js');

  await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../src/meta.ts')],
    outfile: tmpFile,
    format: 'iife',
    globalName: '__META_RAW__',
    bundle: true,
    minify: false,
    sourcemap: false,
    plugins: [externalPlugin],
    define: { 'process.env.NODE_ENV': '"production"' },
    write: true,
  });

  const raw = fs.readFileSync(tmpFile, 'utf-8');
  const cleaned = `(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MallComponentsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
${raw}
  var result = __META_RAW__;
  if (result && result.default) result = result.default;
  if (result && result.components) return result;
  return { components: [] };
}));
`;
  fs.writeFileSync(path.join(outDir, 'mall-components-meta.js'), cleaned);
  fs.unlinkSync(tmpFile);
  console.log('✓ Built mall-components-meta.js');
}

function copyToPublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  ['mall-components.umd.js', 'mall-components.umd.css', 'mall-components-meta.js'].forEach((file) => {
    const src = path.join(outDir, file);
    const dest = path.join(publicDir, file);
    if (fs.existsSync(src)) { fs.copyFileSync(src, dest); console.log(`✓ Copied ${file}`); }
  });
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  console.log('Building mall-components...');
  await Promise.all([buildComponents(), buildCSS(), buildMeta()]);
  copyToPublic();
  console.log('Done!');
  if (isWatch) {
    console.log('\nWatching...');
    const chokidar = require('chokidar');
    chokidar.watch(path.resolve(__dirname, '../src')).on('change', async () => {
      console.log('Rebuilding...');
      await Promise.all([buildComponents(), buildCSS(), buildMeta()]);
      copyToPublic();
    });
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
