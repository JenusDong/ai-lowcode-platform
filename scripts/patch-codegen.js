const fs = require('fs');
const path = require('path');

const libFile = path.join(__dirname, '..', 'node_modules/@alilc/lowcode-plugin-code-generator/lib/components/CodeGenPreview/fixPreviewCode.js');
const esFile = path.join(__dirname, '..', 'node_modules/@alilc/lowcode-plugin-code-generator/es/components/CodeGenPreview/fixPreviewCode.js');

const oldDeps = `'react-dom': '^16.8.3'\n      }, (_JSON$parse`;
const newDeps = `'react-dom': '^16.8.3',\n        '@alifd/next': '^1.26.0',\n        '@alifd/pro-layout': '^1.0.1',\n        '@alifd/layout': '^2.4.1',\n        '@alilc/antd-lowcode-materials': '^1.1.1',\n        '@alifd/fusion-ui': '^2.0.2',\n        'prop-types': '^15.7.2',\n        'echarts': '^5.4.3',\n        'echarts-for-react': '^3.0.2',\n        'mall-components': '^1.0.0',\n        'plugin-echarts': '^1.0.0',\n        'layout-components': '^1.0.0'\n      }, (_JSON$parse`;

function patchFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('layout-components')) {
      console.log(`[patch-codegen] Already patched: ${filePath}`);
      return true;
    }
    if (content.includes(oldDeps)) {
      content = content.replace(oldDeps, newDeps);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`[patch-codegen] Patched: ${filePath}`);
      return true;
    }
    console.log(`[patch-codegen] Pattern not found in: ${filePath}`);
    return false;
  } catch (err) {
    console.error(`[patch-codegen] Error patching ${filePath}:`, err.message);
    return false;
  }
}

console.log('[patch-codegen] Applying patches to code-generator plugin...');
patchFile(libFile);
patchFile(esFile);
console.log('[patch-codegen] Done.');
