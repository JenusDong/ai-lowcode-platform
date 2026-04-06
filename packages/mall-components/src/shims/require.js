var require = function(module) {
  if (module === 'react' || module === 'react/jsx-runtime') return window.React;
  if (module === 'react-dom' || module === 'react-dom/client') return window.ReactDOM;
  if (module === 'antd') return window.antd;
  if (module === '@ant-design/icons') return window.icons;
  if (module === 'moment') return window.moment;
  throw new Error('Unknown module: ' + module);
};
