const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const isWatch = process.argv.includes('--watch');
const outDir = path.resolve(__dirname, '../build');
const publicDir = path.resolve(__dirname, '../../../public');

const externalPlugin = {
  name: 'external-deps',
  setup(build) {
    const deps = ['react', 'react-dom', 'echarts', 'echarts-for-react', '@ant-design/icons'];
    const globalMap = {
      'react': 'Object.assign(window.React, { jsx: window.React.createElement, jsxs: window.React.createElement, Fragment: window.React.Fragment })',
      'react-dom': 'window.ReactDOM',
      'echarts': 'window.echarts',
      'echarts-for-react': 'window.ReactECharts',
      '@ant-design/icons': 'window.icons',
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
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../src/index.ts')],
    outfile: path.join(outDir, 'plugin-echarts.umd.js'),
    format: 'iife',
    globalName: 'PluginEcharts',
    bundle: true,
    minify: !isWatch,
    sourcemap: isWatch,
    plugins: [externalPlugin],
    define: { 'process.env.NODE_ENV': '"production"' },
    loader: { '.scss': 'css', '.css': 'css', '.tsx': 'tsx', '.ts': 'ts' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    footer: {
      js: `
// Merge default export with named exports
if (PluginEcharts.default) {
  var merged = Object.assign({}, PluginEcharts.default, PluginEcharts);
  delete merged.default;
  PluginEcharts = merged;
}
if (typeof window !== 'undefined') {
  window.PluginEcharts = PluginEcharts;
  console.log('[PluginEcharts] Registered:', Object.keys(PluginEcharts));

  if (PluginEcharts.DataEditorSetter && window.AliLowCodeEngine && window.AliLowCodeEngine.setters) {
    window.AliLowCodeEngine.setters.registerSetter('DataEditorSetter', PluginEcharts.DataEditorSetter);
    console.log('[PluginEcharts] Registered DataEditorSetter');
  }
  if (PluginEcharts.JSONPathSetter && window.AliLowCodeEngine && window.AliLowCodeEngine.setters) {
    window.AliLowCodeEngine.setters.registerSetter('JSONPathSetter', PluginEcharts.JSONPathSetter);
    console.log('[PluginEcharts] Registered JSONPathSetter');
  }

  function registerToRenderer() {
    if (typeof window === 'undefined') return false;

    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }

      var components = ['EChartsPie', 'EChartsLine', 'EChartsBar', 'EChartsArea', 'EChartsScatter', 'EChartsRadar', 'EChartsGauge', 'EChartsFunnel', 'EChartsBase'];
      var registered = [];
      components.forEach(function(name) {
        if (PluginEcharts[name]) {
          win.SimulatorRenderer._components[name] = PluginEcharts[name];
          registered.push(name);
        }
      });

      if (registered.length > 0) {
        console.log('[PluginEcharts] Registered ' + registered.join(', ') + ' to ' + source);
        return true;
      }
      return false;
    }

    tryRegister(window, 'main window');

    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      try {
        if (iframe.contentWindow) {
          tryRegister(iframe.contentWindow, 'iframe');
        }
      } catch (e) {
        console.log('[PluginEcharts] Cannot access iframe:', e);
      }
    });

    return true;
  }

  setTimeout(registerToRenderer, 0);
  setTimeout(registerToRenderer, 100);
  setTimeout(registerToRenderer, 500);
  setTimeout(registerToRenderer, 1000);
  setTimeout(registerToRenderer, 2000);
  setTimeout(registerToRenderer, 3000);

  if (window.addEventListener) {
    window.addEventListener('load', registerToRenderer);
  }
}
`,
    },
  });
  console.log('✓ Built plugin-echarts.umd.js');
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

  let raw = fs.readFileSync(tmpFile, 'utf-8');
  
  // Replace npm package references
  raw = raw.replace(/@local\/plugin-echarts/g, '@jenusdong/echarts-for-lowcode');
  raw = raw.replace(/version: ['"]1\.0\.0['"]/g, "version: '1.1.8'");
  
  const cleaned = `(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.PluginEchartsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
${raw}
  var result = __META_RAW__;
  if (result && result.default) result = result.default;
  if (result && result.components) return result;
  return { components: [] };
}));
`;
  fs.writeFileSync(path.join(outDir, 'plugin-echarts-meta.js'), cleaned);
  fs.unlinkSync(tmpFile);
  console.log('✓ Built plugin-echarts-meta.js');
}

function copyToPublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  ['plugin-echarts.umd.js', 'plugin-echarts-meta.js'].forEach((file) => {
    const src = path.join(outDir, file);
    const dest = path.join(publicDir, file);
    if (fs.existsSync(src)) { fs.copyFileSync(src, dest); console.log(`✓ Copied ${file}`); }
  });
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  console.log('Building plugin-echarts...');
  await Promise.all([buildComponents(), buildMeta()]);
  copyToPublic();
  console.log('Done!');
  if (isWatch) {
    console.log('\nWatching...');
    const chokidar = require('chokidar');
    chokidar.watch(path.resolve(__dirname, '../src')).on('change', async () => {
      console.log('Rebuilding...');
      await Promise.all([buildComponents(), buildMeta()]);
      copyToPublic();
    });
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
