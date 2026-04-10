(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'echarts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root.React, root.echarts);
  } else {
    root.ReactECharts = factory(root.React, root.echarts);
  }
}(typeof self !== 'undefined' ? self : this, function(React, globalEcharts) {

  var originalCreateElement = React.createElement;

  function EChartsComponent(props) {
    this.props = props;
    this.echartsInstance = null;
    this.echartDom = null;
  }

  EChartsComponent.prototype.initChart = function() {
    var echartDom = this.echartDom;
    if (!echartDom) return;
    var echartsLib = this.props.echarts || globalEcharts || window.echarts;
    if (!echartsLib) return;
    try {
      this.echartsInstance = echartsLib.init(echartDom, this.props.theme || null);
      this.echartsInstance.setOption(this.props.option || {});
    } catch (err) {}
  };

  EChartsComponent.prototype.updateChart = function(prevProps) {
    if (this.echartsInstance && this.props.option !== prevProps.option) {
      try { this.echartsInstance.setOption(this.props.option); } catch (err) {}
    }
  };

  EChartsComponent.prototype.disposeChart = function() {
    if (this.echartsInstance) { this.echartsInstance.dispose(); this.echartsInstance = null; }
  };

  EChartsComponent.prototype.renderElement = function() {
    var self = this;
    var style = this.props.style || { height: '400px', width: '100%' };
    return originalCreateElement.call(React, 'div', {
      ref: function(el) { self.echartDom = el; }, style: style,
    });
  };

  var renderCount = 0;

  function CoreComponent(props) {
    React.Component.call(this, props);
    this._echartsComp = new EChartsComponent(props);
    this._wrapperRef = React.createRef();
    this._instanceId = ++renderCount;
  }

  CoreComponent.prototype = Object.create(React.Component.prototype);
  CoreComponent.prototype.constructor = CoreComponent;
  CoreComponent.displayName = 'EChartsCore';

  CoreComponent.prototype.componentDidMount = function() {
    this._echartsComp.props = this.props;
    this._echartsComp.initChart();

    var wrapperEl = this._wrapperRef.current;
    if (!wrapperEl) return;

    wrapperEl.setAttribute('data-leaf', 'true');

    registerAndSelect(this, wrapperEl);
  };

  function findNodeId(wrapperEl) {
    try {
      var fiberKey = Object.keys(wrapperEl).find(function(k) {
        return k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$');
      });
      if (fiberKey) {
        var fiber = wrapperEl[fiberKey];
        var maxDepth = 20;
        while (fiber && maxDepth-- > 0) {
          if (fiber.memoizedProps && fiber.memoizedProps.componentId) return fiber.memoizedProps.componentId;
          if (fiber.memoizedProps && fiber.memoizedProps.__id) return fiber.memoizedProps.__id;
          fiber = fiber.return;
        }
      }
    } catch(err) {}
    return null;
  }

  function registerAndSelect(componentInstance, wrapperEl) {
    var simHost = window.LCSimulatorHost;
    if (!simHost?.project || !simHost.instancesMap) return;

    var nodeId = findNodeId(wrapperEl);
    if (!nodeId) return;

    var docIds = Object.keys(simHost.instancesMap);
    for (var d = 0; d < docIds.length; d++) {
      var nodeMap = simHost.instancesMap[docIds[d]];
      if (!nodeMap) continue;

      if (!nodeMap[nodeId]) {
        if (typeof nodeMap.set === 'function') {
          nodeMap.set(nodeId, [componentInstance]);
        } else {
          nodeMap[nodeId] = [componentInstance];
        }
      }

      wrapperEl.setAttribute('componentid', nodeId);

      var doc = simHost.project.getDocument(docIds[d]);
      if (!doc) continue;

      try { doc.selection.select(nodeId); } catch(e1) {}

      var designer = simHost.project.designer;
      if (designer?.activeTracker) {
        try {
          var targetNode = typeof doc.getNode === 'function' ? doc.getNode(nodeId) : null;
          if (targetNode) {
            designer.activeTracker.track(targetNode);
            try { simHost.project.emitter.emit('selection:active', { node: targetNode, selected: [targetNode] }); } catch(e3) {}

            var sim = simHost.simulator || simHost.project._simulator;
            if (sim?._renderer && typeof sim._renderer.autoRepaintNode === 'function') {
              sim._renderer.autoRepaintNode(targetNode);
            }
          }
        } catch(e2) {}
      }
    }
  }

  CoreComponent.prototype.componentDidUpdate = function(prevProps) {
    this._echartsComp.props = this.props;
    this._echartsComp.updateChart(prevProps);

    var wrapperEl = this._wrapperRef.current;
    if (wrapperEl && !wrapperEl.getAttribute('componentid')) {
      registerAndSelect(this, wrapperEl);
    }
  };

  CoreComponent.prototype.render = function() {
    this._echartsComp.props = this.props;
    var style = this.props.style || { height: '400px', width: '100%' };
    return originalCreateElement.call(React, 'div', {
      ref: this._wrapperRef,
      className: 'echarts-wrapper',
      style: { position: 'relative', width: style.width || '100%', height: style.height || '400px' },
      children: [this._echartsComp.renderElement()]
    });
  };

  CoreComponent.defaultProps = {
    option: {},
    style: { height: '400px', width: '100%' },
  };

  return { default: CoreComponent, __esModule: true };
}));
