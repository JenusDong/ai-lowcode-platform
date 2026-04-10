// 极简版 mall-components - 仅用于测试 CDN 加载
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MallComponents = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  'use strict';
  
  // 极简 AdminLayout - 就是一个 div
  var AdminLayout = function(props) {
    return React.createElement('div', {
      style: { padding: '20px', border: '2px solid orange', background: '#fff3e0' }
    }, [
      React.createElement('h2', { key: 'title' }, 'Mall Admin @ CDN'),
      React.createElement('p', { key: 'desc' }, '这是 CDN 版本的极简组件'),
      props.children
    ]);
  };
  
  // 极?/ 极简版 mall-components - 仅用于测试 CDN 加载
(function(root, factory) {
  if (typeof define === dding: '10px', border: '1px solid #ccc' }
    if (typeof define === 