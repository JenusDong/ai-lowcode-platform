const fs = require('fs');
const path = require('path');

const libFile = path.join(__dirname, '..', 'node_modules/@alilc/lowcode-plugin-code-generator/lib/components/CodeGenPreview/fixPreviewCode.js');
const esFile = path.join(__dirname, '..', 'node_modules/@alilc/lowcode-plugin-code-generator/es/components/CodeGenPreview/fixPreviewCode.js');

const oldDeps = `'prop-types': '^15.7.2'\n      }, JSON.parse`;
const newDeps = `'prop-types': '^15.7.2',\n        'rc-util': '^5.24.8',\n        'rc-align': '^4.0.12',\n        'rc-trigger': '^5.3.4',\n        'rc-resize-observer': '^1.3.1',\n        '@jenusdong/echarts-for-lowcode': '^1.0.0'\n      }, JSON.parse`;

function patchFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('rc-util')) {
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
