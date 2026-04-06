(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'echarts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root.React, root.echarts);
  } else {
    root.ReactECharts = factory(root.React, root.echarts);
  }
}(typeof self !== 'undefined' ? self : this, function(React, globalEcharts) {

  console.log('[ReactECharts] Adapter loaded, React:', typeof React, 'echarts:', typeof globalEcharts);

  function EChartsComponent(props) {
    this.props = props;
    this.echartsInstance = null;
    this.echartDom = null;
  }

  EChartsComponent.prototype.initChart = function() {
    console.log('[ReactECharts] initChart called');
    var echartDom = this.echartDom;
    if (!echartDom) {
      console.warn('[ReactECharts] DOM not ready');
      return;
    }

    var echartsLib = this.props.echarts || globalEcharts || window.echarts;
    if (!echartsLib) {
      console.error('[ReactECharts] echarts is not available');
      return;
    }

    console.log('[ReactECharts] Initializing with echarts:', typeof echartsLib, Object.keys(echartsLib).slice(0, 5));
    console.log('[ReactECharts] Option:', JSON.stringify(this.props.option).substring(0, 200));

    try {
      this.echartsInstance = echartsLib.init(echartDom, this.props.theme || null, {
        renderer: this.props.renderer || 'canvas',
        devicePixelRatio: this.props.devicePixelRatio,
        width: this.props.width,
        height: this.props.height,
        locale: this.props.locale
      });

      var option = this.props.option || {};
      this.echartsInstance.setOption(option, this.props.notMerge || false, this.props.lazyUpdate || true);

      if (this.props.onEvents) {
        var self = this;
        Object.keys(this.props.onEvents).forEach(function(event) {
          self.echartsInstance.on(event, self.props.onEvents[event]);
        });
      }

      if (this.props.onChartReady) {
        this.props.onChartReady(this.echartsInstance);
      }
    } catch (err) {
      console.error('[ReactECharts] Init error:', err);
    }
  };

  EChartsComponent.prototype.updateChart = function(prevProps) {
    if (this.echartsInstance && this.props.option !== prevProps.option) {
      try {
        this.echartsInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || true);
      } catch (err) {
        console.error('[ReactECharts] Update error:', err);
      }
    }
  };

  EChartsComponent.prototype.disposeChart = function() {
    if (this.echartsInstance) {
      this.echartsInstance.dispose();
      this.echartsInstance = null;
    }
  };

  EChartsComponent.prototype.renderElement = function() {
    var self = this;
    var style = this.props.style || { height: '400px', width: '100%' };
    var className = this.props.className || '';
    return React.createElement('div', {
      ref: function(el) { self.echartDom = el; },
      style: style,
      className: className
    });
  };

  function CoreComponent(props) {
    console.log('[ReactECharts] CoreComponent constructor called');
    React.Component.call(this, props);
    this._echartsComp = new EChartsComponent(props);
    this._echartsComp.echartDom = null;
  }

  CoreComponent.prototype = Object.create(React.Component.prototype);
  CoreComponent.prototype.constructor = CoreComponent;

  CoreComponent.prototype.componentDidMount = function() {
    console.log('[ReactECharts] componentDidMount called');
    this._echartsComp.props = this.props;
    this._echartsComp.initChart();
  };

  CoreComponent.prototype.componentDidUpdate = function(prevProps) {
    this._echartsComp.props = this.props;
    this._echartsComp.updateChart(prevProps);
  };

  CoreComponent.prototype.componentWillUnmount = function() {
    this._echartsComp.disposeChart();
  };

  CoreComponent.prototype.render = function() {
    console.log('[ReactECharts] render called');
    this._echartsComp.props = this.props;
    return this._echartsComp.renderElement();
  };

  CoreComponent.defaultProps = {
    option: {},
    style: { height: '400px', width: '100%' },
    notMerge: false,
    lazyUpdate: true,
    showLoading: false,
    theme: null
  };

  console.log('[ReactECharts] Returning module with __esModule');

  return { default: CoreComponent, __esModule: true };
}));
