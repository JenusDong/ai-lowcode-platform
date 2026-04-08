const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, '../public');

async function buildFull() {
  console.log('Building MallComponents (using alias + shims)...');

  try {
    await esbuild.build({
      entryPoints: [path.resolve(__dirname, '../src/plugins/plugin-mall-components/entry-components.ts')],
      bundle: true,
      outfile: path.resolve(outDir, 'mall-components.umd.js'),
      format: 'iife',
      globalName: 'MallComponents',
      charset: 'utf8',
      platform: 'browser',

      alias: {
        'react': path.resolve(__dirname, '../src/shims/react.js'),
        'react-dom': path.resolve(__dirname, '../src/shims/react-dom.js'),
        'react/jsx-runtime': path.resolve(__dirname, '../src/shims/react.js'),
        'antd': path.resolve(__dirname, '../src/shims/antd.js'),
        '@ant-design/icons': path.resolve(__dirname, '../src/shims/icons.js'),
        'classnames': path.resolve(__dirname, '../node_modules/classnames/index.js'),
        'react-transition-group': path.resolve(__dirname, '../src/shims/react-transition-group.js'),
      },

      define: {
        'process.env.NODE_ENV': '"production"'
      },
      minify: false,
      loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
        '.scss': 'text',
      },
      banner: {
        js: `
// MallComponents - Uses Global React via shims (same instance as LowCode Engine)
// Prevents "Invalid hook call" error from multiple React copies
`
      },
      footer: {
        js: `
var _MC = typeof MallComponents !== 'undefined' ? (MallComponents.default || MallComponents) : {};

if (_MC.AdminLayout && _MC.TabPane) {
  if (typeof window !== 'undefined') {
    window.MallComponents = _MC;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.MallComponents = _MC;
  }
  console.log('[MallComponents] ✅ Registered:', Object.keys(_MC));
  console.log('[MallComponents] ✅ AdminLayout:', typeof _MC.AdminLayout);
} else {
  console.error('[MallComponents] ❌ Build incomplete!');
}
`
      }
    });

    const stats = fs.statSync(path.resolve(outDir, 'mall-components.umd.js'));
    console.log(`✅ Build completed! Size: ${(stats.size / 1024).toFixed(2)}KB`);
  } catch (err) {
    console.error('❌ Build failed:', err.message);
    process.exit(1);
  }
}

buildFull().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});