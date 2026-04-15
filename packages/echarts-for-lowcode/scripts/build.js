const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, '../build');
const publicDir = path.resolve(__dirname, '../../../public');

async function buildUMD() {
  const bannerCode = `var __globalRequire = (function() {
  return function(mod) {
    if (mod === 'react' || mod === 'react-dom') {
      var React = (typeof window !== 'undefined' && window.React) || (typeof globalThis !== 'undefined' && globalThis.React);
      if (!React) { throw new Error('[EChartsForLowCode] React not found'); }
      return React;
    }
    if (mod === 'echarts') {
      var echarts = (typeof window !== 'undefined' && window.echarts) || (typeof globalThis !== 'undefined' && globalThis.echarts);
      if (!echarts) { throw new Error('[EChartsForLowCode] echarts not found'); }
      return echarts;
    }
    throw new Error('[EChartsForLowCode] Unknown module: ' + mod);
  };
})();
`;

  await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../src/index.tsx')],
    outfile: path.join(outDir, 'echarts-for-lowcode.umd.js'),
    format: 'iife',
    globalName: '_EChartsForLowCode',
    bundle: true,
    minify: false,
    external: ['react', 'react-dom', 'echarts'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    loader: { '.tsx': 'tsx', '.ts': 'ts' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    banner: {
      js: bannerCode,
    },
  });

  let raw = fs.readFileSync(path.join(outDir, 'echarts-for-lowcode.umd.js'), 'utf-8');

  raw = raw.replace(/var __require = /g, 'var __require = __globalRequire || ');

  const finalCode = `"use strict";
(function() {
${raw}

  function registerToRenderer() {
    if (typeof window === 'undefined') return false;

    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }

      var moduleObj = window.EChartsForLowCode;
      if (!moduleObj) return false;

      var components = ['EChartsPie', 'EChartsLine', 'EChartsBar', 'EChartsArea', 'EChartsScatter', 'EChartsRadar', 'EChartsGauge', 'EChartsFunnel', 'EChartsMap', 'EChartsForLowCode'];
      var registered = [];
      components.forEach(function(name) {
        if (moduleObj[name]) {
          win.SimulatorRenderer._components[name] = moduleObj[name];
          registered.push(name);
        }
      });

      if (registered.length > 0) {
        console.log('[EChartsForLowCode] Registered ' + registered.join(', ') + ' to SimulatorRenderer._components (' + source + ')');
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
        console.log('[EChartsForLowCode] Cannot access iframe:', e);
      }
    });

    return true;
  }

  if (typeof window !== 'undefined') {
    window.EChartsForLowCode = _EChartsForLowCode;
    console.log('[EChartsForLowCode] Registered components:', Object.keys(_EChartsForLowCode).filter(function(k) { return k.startsWith('ECharts'); }).join(', '));
    setTimeout(registerToRenderer, 0);
    setTimeout(registerToRenderer, 100);
    setTimeout(registerToRenderer, 500);
    setTimeout(registerToRenderer, 1000);
    setTimeout(registerToRenderer, 2000);
  }
})();
`;

  fs.writeFileSync(path.join(outDir, 'echarts-for-lowcode.umd.js'), finalCode);
  console.log('✓ Built echarts-for-lowcode.umd.js');
}

async function buildESM() {
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../src/index.tsx')],
    outfile: path.join(outDir, 'echarts-for-lowcode.esm.js'),
    format: 'esm',
    bundle: true,
    minify: false,
    external: ['react', 'react-dom', 'echarts'],
    define: { 'process.env.NODE_ENV': '"production"' },
    loader: { '.tsx': 'tsx', '.ts': 'ts' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  });
  console.log('✓ Built echarts-for-lowcode.esm.js');
}

function copyToPublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const src = path.join(outDir, 'echarts-for-lowcode.umd.js');
  const dest = path.join(publicDir, 'echarts-for-lowcode.umd.js');
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('✓ Copied to public/');
  }
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  console.log('Building @jenusdong/echarts-for-lowcode...');
  await buildUMD();
  await buildESM();
  copyToPublic();
  console.log('Done!');
}

main().catch(function(e) { console.error(e); process.exit(1); });
