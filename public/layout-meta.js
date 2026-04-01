(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LayoutMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  return {
    componentName: 'NextPage',
    title: '页面',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: {
      package: '@alifd/layout',
      version: '2.4.1',
      exportName: 'Page',
      main: 'build/lowcode/view.js',
      destructuring: true,
      subName: ''
    },
    props: [
      {
        name: 'headerDivider',
        propType: 'bool',
        description: '头部是否展示分割线'
      },
      {
        name: 'minHeight',
        propType: 'string',
        description: '最小高度'
      }
    ],
    configure: {
      component: {
        isContainer: true
      }
    }
  };
}));
