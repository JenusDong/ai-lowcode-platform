(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LayoutComponentsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  var baseMeta = {
    props: [],
    configure: {
      component: {
        isContainer: true
      }
    }
  };

  function createComponentMeta(componentName, title, exportName) {
    return Object.assign({}, baseMeta, {
      componentName: componentName,
      title: title,
      npm: {
        package: '@alifd/layout',
        version: '2.4.1',
        exportName: exportName,
        main: 'build/lowcode/view.js',
        destructuring: true,
        subName: ''
      }
    });
  }

  return [
    createComponentMeta('NextPage', '页面', 'Page'),
    createComponentMeta('NextBlock', '区块', 'Block'),
    createComponentMeta('NextBlockCell', '单元格', 'Cell'),
    createComponentMeta('NextRowColContainer', '栅格容器', 'Grid'),
    createComponentMeta('NextRow', '行', 'Row'),
    createComponentMeta('NextCol', '列', 'Col'),
    createComponentMeta('NextP', '段落', 'P'),
    createComponentMeta('NextText', '文本', 'Text'),
    createComponentMeta('NextPageHeader', '页头', 'PageHeader'),
    createComponentMeta('NextPageFooter', '页脚', 'PageFooter'),
    createComponentMeta('NextPageNav', '导航', 'PageNav'),
    createComponentMeta('NextPageAside', '侧边栏', 'PageAside'),
    createComponentMeta('NextBreadcrumb', '面包屑', 'Breadcrumb'),
    createComponentMeta('NextShell', '壳子', 'Shell'),
    createComponentMeta('NextShellContent', '壳子内容', 'ShellContent')
  ];
}));
