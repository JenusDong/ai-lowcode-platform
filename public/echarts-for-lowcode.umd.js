"use strict";
(function() {
var __globalRequire = (function() {
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

"use strict";
var _EChartsForLowCode = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = __globalRequire || /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.tsx
  var src_exports = {};
  __export(src_exports, {
    EChartsArea: () => EChartsArea,
    EChartsBar: () => EChartsBar,
    EChartsForLowCode: () => EChartsForLowCode,
    EChartsFunnel: () => EChartsFunnel,
    EChartsGauge: () => EChartsGauge,
    EChartsLine: () => EChartsLine,
    EChartsPie: () => EChartsPie,
    EChartsRadar: () => EChartsRadar,
    EChartsScatter: () => EChartsScatter,
    default: () => src_default
  });
  var import_react = __toESM(__require("react"));
  var echartsModule = __toESM(__require("echarts"));
  var getEChartsInstance = () => {
    if (typeof window !== "undefined" && window.echarts) {
      return window.echarts;
    }
    return echartsModule;
  };
  var EChartsForLowCode = class extends import_react.default.Component {
    constructor() {
      super(...arguments);
      this.chartDom = null;
      this.chartInstance = null;
    }
    static {
      this.displayName = "EChartsForLowCode";
    }
    static {
      this.defaultProps = {
        option: {},
        style: { height: "400px", width: "100%" },
        notMerge: false,
        lazyUpdate: true
      };
    }
    componentDidMount() {
      this.initChart();
    }
    componentDidUpdate(prevProps) {
      if (this.props.option !== prevProps.option && this.chartInstance) {
        this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
      }
    }
    componentWillUnmount() {
      if (this.chartInstance) {
        this.chartInstance.dispose();
        this.chartInstance = null;
      }
    }
    initChart() {
      const echarts = getEChartsInstance();
      if (!echarts) {
        console.warn("[EChartsForLowCode] echarts not found");
        return;
      }
      if (!this.chartDom) {
        console.warn("[EChartsForLowCode] chart DOM not ready");
        return;
      }
      try {
        this.chartInstance = echarts.init(this.chartDom, this.props.theme);
        if (this.props.option) {
          this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
        }
        console.log("[EChartsForLowCode] Chart initialized successfully");
      } catch (e) {
        console.error("[EChartsForLowCode] Failed to init chart:", e);
      }
    }
    render() {
      const style = {
        height: "400px",
        width: "100%",
        ...this.props.style
      };
      return import_react.default.createElement("div", {
        ref: (el) => {
          this.chartDom = el;
        },
        style,
        className: this.props.className,
        "data-leaf": true
      });
    }
  };
  var EChartsPie = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsPie";
    }
  };
  var EChartsLine = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsLine";
    }
  };
  var EChartsBar = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsBar";
    }
  };
  var EChartsScatter = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsScatter";
    }
  };
  var EChartsArea = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsArea";
    }
  };
  var EChartsRadar = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsRadar";
    }
  };
  var EChartsGauge = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsGauge";
    }
  };
  var EChartsFunnel = class extends EChartsForLowCode {
    static {
      this.displayName = "EChartsFunnel";
    }
  };
  var src_default = EChartsForLowCode;
  return __toCommonJS(src_exports);
})();


  function registerToRenderer() {
    if (typeof window === 'undefined') return false;

    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }

      var moduleObj = window.EChartsForLowCode;
      if (!moduleObj) return false;

      var components = ['EChartsPie', 'EChartsLine', 'EChartsBar', 'EChartsArea', 'EChartsScatter', 'EChartsRadar', 'EChartsGauge', 'EChartsFunnel', 'EChartsForLowCode'];
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
