(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'echarts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('react'), require('echarts'));
  } else {
    var result = factory(root.React, root.echarts);
    root.EChartsComponent = result;
    root.EChartsComponent.ECharts = result.ECharts;
  }
}(typeof self !== 'undefined' ? self : this, function(React, echarts) {
  'use strict';
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    });
    if (superClass) {
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
  }
  
  function _getPrototypeOf(o) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(o) : o.__proto__;
  }
  
  var EChartsComponent = (function(_React$Component) {
    _inherits(EChartsComponent, _React$Component);
    
    function EChartsComponent(props) {
      var _this;
      
      _this = _React$Component.call(this, props) || this;
      _this.ele = null;
      _this.chart = null;
      
      return _this;
    }
    
    EChartsComponent.prototype.componentDidMount = function() {
      this.renderEchart();
    };
    
    EChartsComponent.prototype.componentDidUpdate = function(prevProps) {
      var configProps = [
        'titleText', 'titleSubtext', 'titleLeft', 'titleTop', 'titleTextColor', 'titleFontSize',
        'legendLeft', 'legendTop', 'legendOrient',
        'tooltipTrigger', 'tooltipTriggerOn',
        'xAxisType', 'xAxisName',
        'yAxisType', 'yAxisName', 'yAxisMin', 'yAxisMax',
        'seriesType', 'seriesName', 'seriesSmooth',
        'gridLeft', 'gridRight', 'gridTop', 'gridBottom',
        'colorPalette', 'colorBy'
      ];
      var configChanged = configProps.some(function(prop) {
        return this.props[prop] !== prevProps[prop];
      }.bind(this));
      
      if (this.props.optionJson !== prevProps.optionJson ||
          this.props.theme !== prevProps.theme ||
          this.props.notMerge !== prevProps.notMerge ||
          this.props.lazyUpdate !== prevProps.lazyUpdate ||
          configChanged) {
        this.renderEchart();
      }
    };
    
    EChartsComponent.prototype.componentWillUnmount = function() {
      if (this.chart) {
        this.chart.dispose();
      }
    };
    
    EChartsComponent.prototype.renderEchart = function() {
      if (!this.ele) return;
      
      if (!this.chart) {
        this.chart = echarts.init(this.ele, this.props.theme);
        this.bindEvents();
      }
      
      var props = this.props;
      var option = null;
      
      if (props.optionJson && props.optionJson.trim()) {
        try {
          option = JSON.parse(props.optionJson);
        } catch (e) {
          console.error('[EChartsComponent] Failed to parse optionJson:', e);
        }
      }
      
      if (!option) {
        option = this.buildOptionFromProps(props);
      }
      
      var notMerge = props.notMerge || false;
      var lazyUpdate = props.lazyUpdate || false;
      
      if (option) {
        this.chart.setOption(option, notMerge, lazyUpdate);
      }
    };
    
    EChartsComponent.prototype.buildOptionFromProps = function(props) {
      var option = {};
      var hasConfig = false;
      
      if (props.titleText !== undefined) {
        option.title = option.title || {};
        option.title.text = props.titleText;
        hasConfig = true;
      }
      if (props.titleSubtext !== undefined) {
        option.title = option.title || {};
        option.title.subtext = props.titleSubtext;
        hasConfig = true;
      }
      if (props.titleLeft !== undefined) {
        option.title = option.title || {};
        option.title.left = props.titleLeft;
        hasConfig = true;
      }
      if (props.titleTop !== undefined) {
        option.title = option.title || {};
        option.title.top = props.titleTop;
        hasConfig = true;
      }
      
      if (props.legendLeft !== undefined) {
        option.legend = option.legend || {};
        option.legend.left = props.legendLeft;
        hasConfig = true;
      }
      if (props.legendTop !== undefined) {
        option.legend = option.legend || {};
        option.legend.top = props.legendTop;
        hasConfig = true;
      }
      if (props.legendOrient !== undefined) {
        option.legend = option.legend || {};
        option.legend.orient = props.legendOrient;
        hasConfig = true;
      }
      
      if (props.tooltipTrigger !== undefined) {
        option.tooltip = option.tooltip || {};
        option.tooltip.trigger = props.tooltipTrigger;
        hasConfig = true;
      }
      if (props.tooltipTriggerOn !== undefined) {
        option.tooltip = option.tooltip || {};
        option.tooltip.triggerOn = props.tooltipTriggerOn;
        hasConfig = true;
      }
      
      if (props.xAxisType !== undefined) {
        option.xAxis = option.xAxis || [{}];
        if (!Array.isArray(option.xAxis)) option.xAxis = [option.xAxis];
        option.xAxis[0] = option.xAxis[0] || {};
        option.xAxis[0].type = props.xAxisType;
        hasConfig = true;
      }
      if (props.xAxisName !== undefined) {
        option.xAxis = option.xAxis || [{}];
        if (!Array.isArray(option.xAxis)) option.xAxis = [option.xAxis];
        option.xAxis[0] = option.xAxis[0] || {};
        option.xAxis[0].name = props.xAxisName;
        hasConfig = true;
      }
      
      if (props.yAxisType !== undefined) {
        option.yAxis = option.yAxis || [{}];
        if (!Array.isArray(option.yAxis)) option.yAxis = [option.yAxis];
        option.yAxis[0] = option.yAxis[0] || {};
        option.yAxis[0].type = props.yAxisType;
        hasConfig = true;
      }
      if (props.yAxisName !== undefined) {
        option.yAxis = option.yAxis || [{}];
        if (!Array.isArray(option.yAxis)) option.yAxis = [option.yAxis];
        option.yAxis[0] = option.yAxis[0] || {};
        option.yAxis[0].name = props.yAxisName;
        hasConfig = true;
      }
      if (props.yAxisMin !== undefined) {
        option.yAxis = option.yAxis || [{}];
        if (!Array.isArray(option.yAxis)) option.yAxis = [option.yAxis];
        option.yAxis[0] = option.yAxis[0] || {};
        option.yAxis[0].min = props.yAxisMin;
        hasConfig = true;
      }
      if (props.yAxisMax !== undefined) {
        option.yAxis = option.yAxis || [{}];
        if (!Array.isArray(option.yAxis)) option.yAxis = [option.yAxis];
        option.yAxis[0] = option.yAxis[0] || {};
        option.yAxis[0].max = props.yAxisMax;
        hasConfig = true;
      }
      
      if (props.seriesType !== undefined) {
        option.series = option.series || [{}];
        if (!Array.isArray(option.series)) option.series = [option.series];
        option.series[0] = option.series[0] || {};
        option.series[0].type = props.seriesType;
        hasConfig = true;
      }
      if (props.seriesName !== undefined) {
        option.series = option.series || [{}];
        if (!Array.isArray(option.series)) option.series = [option.series];
        option.series[0] = option.series[0] || {};
        option.series[0].name = props.seriesName;
        hasConfig = true;
      }
      if (props.seriesSmooth !== undefined) {
        option.series = option.series || [{}];
        if (!Array.isArray(option.series)) option.series = [option.series];
        option.series[0] = option.series[0] || {};
        option.series[0].smooth = props.seriesSmooth;
        hasConfig = true;
      }
      
      if (props.gridLeft !== undefined) {
        option.grid = option.grid || {};
        option.grid.left = props.gridLeft;
        hasConfig = true;
      }
      if (props.gridRight !== undefined) {
        option.grid = option.grid || {};
        option.grid.right = props.gridRight;
        hasConfig = true;
      }
      if (props.gridTop !== undefined) {
        option.grid = option.grid || {};
        option.grid.top = props.gridTop;
        hasConfig = true;
      }
      if (props.gridBottom !== undefined) {
        option.grid = option.grid || {};
        option.grid.bottom = props.gridBottom;
        hasConfig = true;
      }
      
      if (props.colorPalette !== undefined) {
        option.color = props.colorPalette.split(',').map(function(c) { return c.trim(); });
        hasConfig = true;
      }
      if (props.colorBy !== undefined) {
        option.colorBy = props.colorBy;
        hasConfig = true;
      }
      
      return hasConfig ? option : null;
    };
    
    EChartsComponent.prototype.bindEvents = function() {
      if (!this.chart) return;
      
      var onEvents = this.props.onEvents || {};
      var self = this;
      
      Object.keys(onEvents).forEach(function(eventName) {
        if (typeof onEvents[eventName] === 'function') {
          self.chart.on(eventName, function(params) {
            onEvents[eventName](params);
          });
        }
      });
    };
    
    EChartsComponent.prototype.render = function() {
      var self = this;
      var style = this.props.style || { width: '100%', height: '400px' };
      var className = this.props.className || '';
      
      return React.createElement('div', {
        ref: function(ele) { self.ele = ele; },
        style: style,
        className: className
      });
    };
    
    return EChartsComponent;
  })(React.Component);
  
  var result = {
    ECharts: EChartsComponent,
    'default': EChartsComponent
  };
  
  function registerToRenderer() {
    if (typeof window === 'undefined') return false;
    
    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }
      
      if (!win.SimulatorRenderer._components.ECharts) {
        win.SimulatorRenderer._components.ECharts = EChartsComponent;
        console.log('[EChartsComponent] Registered ECharts to ' + source);
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
        console.log('[EChartsComponent] Cannot access iframe:', e);
      }
    });
    
    return true;
  }
  
  if (typeof window !== 'undefined') {
    setTimeout(registerToRenderer, 0);
    setTimeout(registerToRenderer, 100);
    setTimeout(registerToRenderer, 500);
    setTimeout(registerToRenderer, 1000);
    setTimeout(registerToRenderer, 2000);
    setTimeout(registerToRenderer, 3000);
    
    if (window.addEventListener) {
      window.addEventListener('load', registerToRenderer);
    }
    
    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.tagName === 'IFRAME' || (node.querySelectorAll && node.querySelectorAll('iframe').length > 0)) {
              setTimeout(registerToRenderer, 100);
            }
          });
        });
      });
      
      observer.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
      });
    }
  }
  
  return result;
}));
