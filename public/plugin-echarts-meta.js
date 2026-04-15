(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.PluginEchartsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
"use strict";
var __META_RAW__ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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

  // external:react
  var require_react = __commonJS({
    "external:react"(exports, module) {
      module.exports = Object.assign(window.React, { jsx: window.React.createElement, jsxs: window.React.createElement, Fragment: window.React.Fragment });
    }
  });

  // src/meta.ts
  var meta_exports = {};
  __export(meta_exports, {
    components: () => components,
    default: () => meta_default
  });

  // src/meta/icons.ts
  var import_react = __toESM(require_react());
  var getIconComponent = (iconName) => {
    const icons = window.icons;
    if (!icons || !icons[iconName]) {
      console.warn(`[PluginEcharts] Icon "${iconName}" not found in window.icons`);
      return null;
    }
    return icons[iconName];
  };
  var Icons = {
    get pie() {
      const Icon = getIconComponent("PieChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get line() {
      const Icon = getIconComponent("LineChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get bar() {
      const Icon = getIconComponent("BarChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get area() {
      const Icon = getIconComponent("AreaChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get scatter() {
      const Icon = getIconComponent("DotChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get radar() {
      const Icon = getIconComponent("DotChartOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get gauge() {
      const Icon = getIconComponent("DashboardFilled");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get funnel() {
      const Icon = getIconComponent("FunnelPlotOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    }
  };

  // src/meta.ts
  var defaultPieOption = {
    title: { text: "\u997C\u56FE\u793A\u4F8B", subtext: "", left: "center", top: "top" },
    tooltip: { trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
    legend: { orient: "vertical", left: "left", top: "middle", textStyle: { fontSize: 12 } },
    color: ["#3BCBD1", "#47A4FE", "#EDBA42", "#F4704E", "#ED6899", "#7F62C3", "#6E7BC9"],
    series: [{
      name: "\u8BBF\u95EE\u6765\u6E90",
      type: "pie",
      radius: "50%",
      center: ["50%", "50%"],
      data: [
        { value: 1048, name: "\u641C\u7D22\u5F15\u64CE" },
        { value: 735, name: "\u76F4\u63A5\u8BBF\u95EE" },
        { value: 580, name: "\u90AE\u4EF6\u8425\u9500" },
        { value: 484, name: "\u8054\u76DF\u5E7F\u544A" },
        { value: 300, name: "\u89C6\u9891\u5E7F\u544A" }
      ],
      emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.5)" } },
      label: { show: true, formatter: "{b}: {d}%", fontSize: 12, color: "#333" },
      labelLine: { show: true, length: 15, length2: 10 },
      itemStyle: { borderColor: "#fff", borderWidth: 2 },
      animationType: "scale",
      animationEasing: "elasticOut"
    }]
  };
  var defaultLineOption = {
    title: { text: "\u6298\u7EBF\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "axis" },
    legend: { data: ["\u9500\u91CF"], bottom: 0 },
    grid: { left: "10%", right: "8%", top: "15%", bottom: "18%" },
    xAxis: { type: "category", boundaryGap: false, data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [{ name: "\u9500\u91CF", type: "line", smooth: false, data: [150, 230, 224, 218, 135, 147, 260], areaStyle: void 0 }]
  };
  var defaultBarOption = {
    title: { text: "\u67F1\u72B6\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    legend: { data: ["\u9500\u91CF"], bottom: 0 },
    grid: { left: "10%", right: "8%", top: "15%", bottom: "18%" },
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [{ name: "\u9500\u91CF", type: "bar", barWidth: "60%", data: [120, 200, 150, 80, 70, 110, 130], itemStyle: {} }]
  };
  var defaultScatterOption = {
    title: { text: "\u6563\u70B9\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "item" },
    legend: { data: ["\u6570\u636E\u96C6"], bottom: 0 },
    grid: { left: "12%", right: "10%", top: "15%", bottom: "15%" },
    xAxis: { type: "value", splitLine: { show: true } },
    yAxis: { type: "value", splitLine: { show: true }, scale: true },
    series: [{ name: "\u6570\u636E\u96C6", type: "scatter", symbolSize: 10, data: [[10, 8.04], [8.07, 6.95], [13, 7.58], [9.05, 8.81], [11, 8.33], [14, 7.66]] }]
  };
  var defaultAreaOption = {
    title: { text: "\u9762\u79EF\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "axis" },
    legend: { data: ["\u90AE\u4EF6\u8425\u9500", "\u8054\u76DF\u5E7F\u544A", "\u89C6\u9891\u5E7F\u544A"], bottom: 0 },
    grid: { left: "10%", right: "8%", top: "15%", bottom: "18%" },
    xAxis: { type: "category", boundaryGap: false, data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [
      { name: "\u90AE\u4EF6\u8425\u9500", type: "line", stack: "Total", areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210] },
      { name: "\u8054\u76DF\u5E7F\u544A", type: "line", stack: "Total", areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310] },
      { name: "\u89C6\u9891\u5E7F\u544A", type: "line", stack: "Total", areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410] }
    ]
  };
  var defaultRadarOption = {
    title: { text: "\u96F7\u8FBE\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "item" },
    legend: { data: ["\u9884\u7B97\u5206\u914D", "\u5B9E\u9645\u5F00\u9500"], bottom: 0 },
    radar: {
      indicator: [
        { name: "\u9500\u552E", max: 6500 },
        { name: "\u7BA1\u7406", max: 16e3 },
        { name: "\u4FE1\u606F\u6280\u672F", max: 3e4 },
        { name: "\u5BA2\u670D", max: 38e3 },
        { name: "\u7814\u53D1", max: 52e3 },
        { name: "\u5E02\u573A", max: 25e3 }
      ]
    },
    series: [{
      name: "\u9884\u7B97 vs \u5F00\u9500",
      type: "radar",
      data: [
        { value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3], name: "\u9884\u7B97\u5206\u914D" },
        { value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3], name: "\u5B9E\u9645\u5F00\u9500" }
      ]
    }]
  };
  var defaultGaugeOption = {
    title: { text: "\u4EEA\u8868\u76D8\u793A\u4F8B", left: "center" },
    series: [{
      name: "\u4E1A\u52A1\u6307\u6807",
      type: "gauge",
      detail: { formatter: "{value}%" },
      data: [{ value: 68, name: "\u5B8C\u6210\u7387" }]
    }]
  };
  var defaultFunnelOption = {
    title: { text: "\u6F0F\u6597\u56FE\u793A\u4F8B", left: "center" },
    tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c}%" },
    legend: { data: ["\u5C55\u73B0", "\u70B9\u51FB", "\u8BBF\u95EE", "\u54A8\u8BE2", "\u8BA2\u5355"], bottom: 0 },
    series: [{
      name: "\u6F0F\u6597\u56FE",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: { show: true, position: "inside" },
      labelLine: { length: 10, lineStyle: { width: 1, type: "solid" } },
      itemStyle: { borderColor: "#fff", borderWidth: 1 },
      emphasis: { label: { fontSize: 20 } },
      data: [
        { value: 100, name: "\u5C55\u73B0" },
        { value: 80, name: "\u70B9\u51FB" },
        { value: 60, name: "\u8BBF\u95EE" },
        { value: 40, name: "\u54A8\u8BE2" },
        { value: 20, name: "\u8BA2\u5355" }
      ]
    }]
  };
  function makeSetter(jsonPath, setterType, extra) {
    return { componentName: "JSONPathSetter", props: { jsonPath, setterType, ...extra } };
  }
  function makeDataEditor(defaultData) {
    return {
      componentName: "DataEditorSetter",
      props: {
        placeholder: "\u7F16\u8F91\u56FE\u8868\u6570\u636E",
        defaultValue: defaultData ? JSON.stringify(defaultData, null, 2) : void 0
      }
    };
  }
  var pieConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u4F4D\u7F6E", display: "accordion", items: [
        { name: "piePosition", title: "\u4F4D\u7F6E", setter: makeSetter("series.0.center", "SelectSetter", {
          options: [
            { label: "\u5C45\u4E2D", value: "['50%','50%']" },
            { label: "\u4E0A\u5DE6", value: "['25%','30%']" },
            { label: "\u4E0A\u4E2D", value: "['50%','30%']" },
            { label: "\u4E0A\u53F3", value: "['75%','30%']" },
            { label: "\u5DE6\u4E2D", value: "['30%','50%']" },
            { label: "\u53F3\u4E2D", value: "['70%','50%']" }
          ],
          defaultValue: "['50%','50%']"
        }) }
      ] },
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "pieData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "\u641C\u7D22\u5F15\u64CE", value: 1048 },
          { name: "\u76F4\u63A5\u8BBF\u95EE", value: 735 },
          { name: "\u90AE\u4EF6\u8425\u9500", value: 580 },
          { name: "\u8054\u76DF\u5E7F\u544A", value: 484 },
          { name: "\u89C6\u9891\u5E7F\u544A", value: 300 }
        ]) },
        { name: "seriesName", title: "\u7CFB\u5217\u540D\u79F0", setter: makeSetter("series.0.name", "StringSetter", { defaultValue: "\u8BBF\u95EE\u6765\u6E90" }) }
      ] },
      { type: "group", title: "\u56FE\u5F62\u5C5E\u6027", display: "accordion", items: [
        { type: "group", title: "\u989C\u8272", display: "plain", items: [
          { name: "c0", title: "\u989C\u82721", setter: makeSetter("color.0", "StringSetter", { defaultValue: "#3BCBD1" }) },
          { name: "c1", title: "\u989C\u82722", setter: makeSetter("color.1", "StringSetter", { defaultValue: "#47A4FE" }) },
          { name: "c2", title: "\u989C\u82723", setter: makeSetter("color.2", "StringSetter", { defaultValue: "#EDBA42" }) },
          { name: "c3", title: "\u989C\u82724", setter: makeSetter("color.3", "StringSetter", { defaultValue: "#F4704E" }) },
          { name: "c4", title: "\u989C\u82725", setter: makeSetter("color.4", "StringSetter", { defaultValue: "#ED6899" }) },
          { name: "c5", title: "\u989C\u82726", setter: makeSetter("color.5", "StringSetter", { defaultValue: "#7F62C3" }) },
          { name: "c6", title: "\u989C\u82727", setter: makeSetter("color.6", "StringSetter", { defaultValue: "#6E7BC9" }) }
        ] },
        { name: "radius", title: "\u534A\u5F84", setter: makeSetter("series.0.radius", "SelectSetter", {
          options: [
            { label: "\u5B9E\u5FC3 50%", value: "50%" },
            { label: "\u5B9E\u5FC3 60%", value: "60%" },
            { label: "\u73AF\u5F62 \u5C0F\u73AF [40%,55%]", value: "['40%','55%']" },
            { label: "\u73AF\u5F62 \u4E2D\u73AF [40%,65%]", value: "['40%','65%']" },
            { label: "\u73AF\u5F62 \u5927\u73AF [35%,70%]", value: "['35%','70%']" }
          ],
          defaultValue: "50%"
        }) },
        { name: "roseType", title: "\u73AB\u7470\u56FE\u6A21\u5F0F", setter: makeSetter("series.0.roseType", "SelectSetter", {
          options: [{ label: "\u5173\u95ED", value: void 0 }, { label: "\u534A\u5F84\u6A21\u5F0F", value: "radius" }, { label: "\u9762\u79EF\u6A21\u5F0F", value: "area" }],
          defaultValue: void 0
        }) }
      ] },
      { type: "group", title: "\u6807\u7B7E", display: "accordion", items: [
        { name: "labelShow", title: "\u663E\u793A\u6807\u7B7E", setter: makeSetter("series.0.label.show", "BoolSetter", { defaultValue: true }) },
        { name: "labelPos", title: "\u4F4D\u7F6E", setter: makeSetter("series.0.label.position", "SelectSetter", {
          options: [{ label: "\u5916\u90E8", value: "outside" }, { label: "\u5185\u90E8", value: "inside" }, { label: "\u4E2D\u5FC3", value: "center" }],
          defaultValue: "outside"
        }) },
        { name: "labelFmt", title: "\u683C\u5F0F", setter: makeSetter("series.0.label.formatter", "SelectSetter", {
          options: [{ label: "{b}: {d}%", value: "{b}: {d}%" }, { label: "{b}: {c}", value: "{b}: {c}" }, { label: "{b}", value: "{b}" }],
          defaultValue: "{b}: {d}%"
        }) },
        { name: "labelFontSize", title: "\u5B57\u53F7", setter: makeSetter("series.0.label.fontSize", "NumberSetter", { defaultValue: 12 }) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u997C\u56FE\u793A\u4F8B" }) },
        { name: "titleLeft", title: "\u6C34\u5E73\u4F4D\u7F6E", setter: makeSetter("title.left", "SelectSetter", {
          options: [{ label: "\u5C45\u4E2D", value: "center" }, { label: "\u5DE6", value: "left" }, { label: "\u53F3", value: "right" }],
          defaultValue: "center"
        }) },
        { name: "titleTop", title: "\u5782\u76F4\u4F4D\u7F6E", setter: makeSetter("title.top", "SelectSetter", {
          options: [{ label: "\u9876\u90E8", value: "top" }, { label: "\u4E2D\u95F4", value: "middle" }, { label: "\u5E95\u90E8", value: "bottom" }],
          defaultValue: "top"
        }) }
      ] },
      { type: "group", title: "\u56FE\u4F8B\u914D\u7F6E", display: "accordion", items: [
        { name: "legendShow", title: "\u663E\u793A\u56FE\u4F8B", setter: makeSetter("legend.show", "BoolSetter", { defaultValue: true }) },
        { name: "legendOrient", title: "\u671D\u5411", setter: makeSetter("legend.orient", "SelectSetter", {
          options: [{ label: "\u6A2A\u5411", value: "horizontal" }, { label: "\u7EB5\u5411", value: "vertical" }],
          defaultValue: "vertical"
        }) },
        { name: "legendLeft", title: "\u6C34\u5E73\u4F4D\u7F6E", setter: makeSetter("legend.left", "SelectSetter", {
          options: [{ label: "\u5DE6", value: "left" }, { label: "\u5C45\u4E2D", value: "center" }, { label: "\u53F3", value: "right" }],
          defaultValue: "left"
        }) }
      ] },
      { type: "group", title: "\u63D0\u793A\u6846", display: "accordion", items: [
        { name: "ttTrigger", title: "\u89E6\u53D1\u7C7B\u578B", setter: makeSetter("tooltip.trigger", "SelectSetter", {
          options: [{ label: "\u6570\u636E\u9879", value: "item" }, { label: "\u5750\u6807\u8F74", value: "axis" }],
          defaultValue: "item"
        }) },
        { name: "ttFmt", title: "\u63D0\u793A\u683C\u5F0F", setter: makeSetter("tooltip.formatter", "SelectSetter", {
          options: [{ label: "{a}<br/>{b}:{c}({d}%)", value: "{a} <br/>{b}: {c} ({d}%)" }, { label: "{b}:{c}", value: "{b}: {c}" }],
          defaultValue: "{a} <br/>{b}: {c} ({d}%)"
        }) }
      ] },
      { type: "group", title: "\u52A8\u753B\u6548\u679C", display: "accordion", items: [
        { name: "animOn", title: "\u5F00\u542F\u52A8\u753B", setter: makeSetter("animation", "BoolSetter", { defaultValue: true }) },
        { name: "animDuration", title: "\u65F6\u957F(ms)", setter: makeSetter("animationDuration", "NumberSetter", { defaultValue: 1e3 }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var lineConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "Mon", value: 150 },
          { name: "Tue", value: 230 },
          { name: "Wed", value: 224 },
          { name: "Thu", value: 218 },
          { name: "Fri", value: 135 },
          { name: "Sat", value: 147 },
          { name: "Sun", value: 260 }
        ]) },
        { name: "seriesName", title: "\u7CFB\u5217\u540D\u79F0", setter: makeSetter("series.0.name", "StringSetter", { defaultValue: "\u9500\u91CF" }) }
      ] },
      { type: "group", title: "\u6298\u7EBF\u6837\u5F0F", display: "accordion", items: [
        { name: "smooth", title: "\u5E73\u6ED1\u66F2\u7EBF", setter: makeSetter("series.0.smooth", "BoolSetter", { defaultValue: false }) },
        { name: "showSymbol", title: "\u663E\u793A\u6570\u636E\u70B9", setter: makeSetter("series.0.showSymbol", "BoolSetter", { defaultValue: true }) },
        { name: "symbolSize", title: "\u70B9\u5927\u5C0F", setter: makeSetter("series.0.symbolSize", "NumberSetter", { defaultValue: 6 }) },
        { name: "lineWidth", title: "\u7EBF\u6761\u5BBD\u5EA6", setter: makeSetter("series.0.lineStyle.width", "NumberSetter", { defaultValue: 2 }) },
        { name: "areaStyle", title: "\u9762\u79EF\u586B\u5145", setter: makeSetter("series.0.areaStyle", "SelectSetter", {
          options: [{ label: "\u65E0\u586B\u5145", value: void 0 }, { label: "\u534A\u900F\u660E\u586B\u5145", value: "{}" }, { label: "\u7EAF\u8272\u586B\u5145", value: "{opacity:0.3}" }],
          defaultValue: void 0
        }) }
      ] },
      { type: "group", title: "\u5750\u6807\u8F74", display: "accordion", items: [
        { name: "xBoundaryGap", title: "X\u8F74\u7559\u767D", setter: makeSetter("xAxis.boundaryGap", "BoolSetter", { defaultValue: false }) },
        { name: "yMin", title: "Y\u8F74\u6700\u5C0F\u503C", setter: makeSetter("yAxis.min", "NumberSetter") },
        { name: "yMax", title: "Y\u8F74\u6700\u5927\u503C", setter: makeSetter("yAxis.max", "NumberSetter") }
      ] },
      { type: "group", title: "\u989C\u8272\u65B9\u6848", display: "accordion", items: [
        { name: "color0", title: "\u7CFB\u5217\u989C\u8272", setter: makeSetter("color.0", "StringSetter", { defaultValue: "#1890ff" }) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u6298\u7EBF\u56FE\u793A\u4F8B" }) },
        { name: "titleLeft", title: "\u6C34\u5E73\u4F4D\u7F6E", setter: makeSetter("title.left", "SelectSetter", {
          options: [{ label: "\u5C45\u4E2D", value: "center" }, { label: "\u5DE6", value: "left" }, { label: "\u53F3", value: "right" }],
          defaultValue: "center"
        }) }
      ] },
      { type: "group", title: "\u63D0\u793A\u6846", display: "accordion", items: [
        { name: "ttTrigger", title: "\u89E6\u53D1\u7C7B\u578B", setter: makeSetter("tooltip.trigger", "SelectSetter", {
          options: [{ label: "\u5750\u6807\u8F74\u89E6\u53D1", value: "axis" }, { label: "\u6570\u636E\u9879\u89E6\u53D1", value: "item" }],
          defaultValue: "axis"
        }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var barConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "Mon", value: 120 },
          { name: "Tue", value: 200 },
          { name: "Wed", value: 150 },
          { name: "Thu", value: 80 },
          { name: "Fri", value: 70 },
          { name: "Sat", value: 110 },
          { name: "Sun", value: 130 }
        ]) },
        { name: "seriesName", title: "\u7CFB\u5217\u540D\u79F0", setter: makeSetter("series.0.name", "StringSetter", { defaultValue: "\u9500\u91CF" }) }
      ] },
      { type: "group", title: "\u67F1\u5B50\u6837\u5F0F", display: "accordion", items: [
        { name: "barWidth", title: "\u67F1\u5BBD\u6BD4\u4F8B", setter: makeSetter("series.0.barWidth", "StringSetter", { defaultValue: "60%" }) },
        { name: "barBorderRadius", title: "\u5706\u89D2\u534A\u5F84", setter: makeSetter("series.0.itemStyle.borderRadius", "NumberSetter", { defaultValue: 0 }) },
        { name: "showBackground", title: "\u663E\u793A\u80CC\u666F\u6761", setter: makeSetter("series.0.showBackground", "BoolSetter", { defaultValue: false }) },
        { name: "bgColor", title: "\u80CC\u666F\u6761\u989C\u8272", setter: makeSetter("series.0.backgroundStyle.color", "StringSetter", { defaultValue: "rgba(180,180,180,0.2)" }) }
      ] },
      { type: "group", title: "\u5750\u6807\u8F74", display: "accordion", items: [
        { name: "yMin", title: "Y\u8F74\u6700\u5C0F\u503C", setter: makeSetter("yAxis.min", "NumberSetter") },
        { name: "yMax", title: "Y\u8F74\u6700\u5927\u503C", setter: makeSetter("yAxis.max", "NumberSetter") }
      ] },
      { type: "group", title: "\u989C\u8272\u65B9\u6848", display: "accordion", items: [
        { name: "color0", title: "\u7CFB\u5217\u989C\u8272", setter: makeSetter("color.0", "StringSetter", { defaultValue: "#1890ff" }) },
        { name: "barColorLinear", title: "\u6E10\u53D8\u67F1\u8272", setter: makeSetter("series.0.itemStyle.color", "SelectSetter", {
          options: [{ label: "\u7EAF\u8272", value: void 0 }, { label: "\u84DD\u8272\u6E10\u53D8", value: "{type:'linear',x:0,y:0,x2:0,y:1,colorStops:[{offset:0,color:'#83bff6'},{offset:1,color:'#1890ff'}]}" }],
          defaultValue: void 0
        }) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u67F1\u72B6\u56FE\u793A\u4F8B" }) },
        { name: "titleLeft", title: "\u6C34\u5E73\u4F4D\u7F6E", setter: makeSetter("title.left", "SelectSetter", {
          options: [{ label: "\u5C45\u4E2D", value: "center" }, { label: "\u5DE6", value: "left" }, { label: "\u53F3", value: "right" }],
          defaultValue: "center"
        }) }
      ] },
      { type: "group", title: "\u63D0\u793A\u6846", display: "accordion", items: [
        { name: "ttTrigger", title: "\u89E6\u53D1\u7C7B\u578B", setter: makeSetter("tooltip.trigger", "SelectSetter", {
          options: [{ label: "\u5750\u6807\u8F74\u89E6\u53D1", value: "axis" }, { label: "\u6570\u636E\u9879\u89E6\u53D1", value: "item" }],
          defaultValue: "axis"
        }) },
        { name: "pointerType", title: "\u6307\u793A\u5668\u7C7B\u578B", setter: makeSetter("tooltip.axisPointer.type", "SelectSetter", {
          options: [{ label: "\u76F4\u7EBF", value: "shadow" }, { label: "\u5341\u5B57\u51C6\u661F", value: "cross" }, { label: "\u65E0", value: void 0 }],
          defaultValue: "shadow"
        }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var scatterConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "P1", xValue: 10, yValue: 8.04 },
          { name: "P2", xValue: 8.07, yValue: 6.95 },
          { name: "P3", xValue: 13, yValue: 7.58 },
          { name: "P4", xValue: 9.05, yValue: 8.81 },
          { name: "P5", xValue: 11, yValue: 8.33 },
          { name: "P6", xValue: 14, yValue: 7.66 }
        ]) },
        { name: "seriesName", title: "\u7CFB\u5217\u540D\u79F0", setter: makeSetter("series.0.name", "StringSetter", { defaultValue: "\u6570\u636E\u96C6" }) }
      ] },
      { type: "group", title: "\u70B9\u6837\u5F0F", display: "accordion", items: [
        { name: "symbolSize", title: "\u70B9\u5927\u5C0F", setter: makeSetter("series.0.symbolSize", "NumberSetter", { defaultValue: 10 }) },
        { name: "symbol", title: "\u70B9\u7684\u5F62\u72B6", setter: makeSetter("series.0.symbol", "SelectSetter", {
          options: [{ label: "\u5706\u5F62", value: "circle" }, { label: "\u65B9\u5F62", value: "rect" }, { label: "\u4E09\u89D2\u5F62", value: "triangle" }, { label: "\u83F1\u5F62", value: "diamond" }],
          defaultValue: "circle"
        }) },
        { name: "itemColor", title: "\u70B9\u989C\u8272", setter: makeSetter("series.0.itemStyle.color", "StringSetter", { defaultValue: "#1890ff" }) }
      ] },
      { type: "group", title: "\u5750\u6807\u8F74", display: "accordion", items: [
        { name: "yScale", title: "Y\u8F74\u81EA\u9002\u5E94\u7F29\u653E", setter: makeSetter("yAxis.scale", "BoolSetter", { defaultValue: true }) },
        { name: "xSplitLine", title: "X\u8F74\u5206\u5272\u7EBF", setter: makeSetter("xAxis.splitLine.show", "BoolSetter", { defaultValue: true }) },
        { name: "ySplitLine", title: "Y\u8F74\u5206\u5272\u7EBF", setter: makeSetter("yAxis.splitLine.show", "BoolSetter", { defaultValue: true }) }
      ] },
      { type: "group", title: "\u989C\u8272\u65B9\u6848", display: "accordion", items: [
        { name: "color0", title: "\u7CFB\u5217\u989C\u8272", setter: makeSetter("color.0", "StringSetter", { defaultValue: "#1890ff" }) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u6563\u70B9\u56FE\u793A\u4F8B" }) }
      ] },
      { type: "group", title: "\u63D0\u793A\u6846", display: "accordion", items: [
        { name: "ttTrigger", title: "\u89E6\u53D1\u7C7B\u578B", setter: makeSetter("tooltip.trigger", "SelectSetter", {
          options: [{ label: "\u6570\u636E\u9879", value: "item" }, { label: "\u5750\u6807\u8F74", value: "axis" }],
          defaultValue: "item"
        }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var areaConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "Mon", value1: 120, value2: 220, value3: 150 },
          { name: "Tue", value1: 132, value2: 182, value3: 232 },
          { name: "Wed", value1: 101, value2: 191, value3: 201 },
          { name: "Thu", value1: 134, value2: 234, value3: 154 },
          { name: "Fri", value1: 90, value2: 290, value3: 190 },
          { name: "Sat", value1: 230, value2: 330, value3: 330 },
          { name: "Sun", value1: 210, value2: 310, value3: 410 }
        ]) }
      ] },
      { type: "group", title: "\u5806\u53E0\u4E0E\u586B\u5145", display: "accordion", items: [
        { name: "stack", title: "\u5806\u53E0\u5206\u7EC4\u540D", setter: makeSetter("series.0.stack", "StringSetter", { defaultValue: "Total" }) },
        { name: "boundaryGap", title: "X\u8F74\u7559\u767D", setter: makeSetter("xAxis.boundaryGap", "BoolSetter", { defaultValue: false }) },
        { name: "smooth", title: "\u5E73\u6ED1\u66F2\u7EBF", setter: makeSetter("series.0.smooth", "BoolSetter", { defaultValue: false }) },
        { name: "areaOpacity", title: "\u586B\u5145\u900F\u660E\u5EA6", setter: makeSetter("series.0.areaStyle.opacity", "NumberSetter", { defaultValue: 0.6 }) }
      ] },
      { type: "group", title: "\u989C\u8272\u65B9\u6848", display: "accordion", items: [
        { name: "color0", title: "\u7CFB\u52171\u989C\u8272", setter: makeSetter("color.0", "StringSetter", { defaultValue: "#1890ff" }) },
        { name: "color1", title: "\u7CFB\u52172\u989C\u8272", setter: makeSetter("color.1", "StringSetter", { defaultValue: "#52c41a" }) },
        { name: "color2", title: "\u7CFB\u52173\u989C\u8272", setter: makeSetter("color.2", "StringSetter", { defaultValue: "#faad14" }) }
      ] },
      { type: "group", title: "\u5750\u6807\u8F74", display: "accordion", items: [
        { name: "yMin", title: "Y\u8F74\u6700\u5C0F\u503C", setter: makeSetter("yAxis.min", "NumberSetter") },
        { name: "yMax", title: "Y\u8F74\u6700\u5927\u503C", setter: makeSetter("yAxis.max", "NumberSetter") }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u9762\u79EF\u56FE\u793A\u4F8B" }) }
      ] },
      { type: "group", title: "\u63D0\u793A\u6846", display: "accordion", items: [
        { name: "ttTrigger", title: "\u89E6\u53D1\u7C7B\u578B", setter: makeSetter("tooltip.trigger", "SelectSetter", {
          options: [{ label: "\u5750\u6807\u8F74\u89E6\u53D1", value: "axis" }, { label: "\u6570\u636E\u9879\u89E6\u53D1", value: "item" }],
          defaultValue: "axis"
        }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var radarConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { name: "\u9884\u7B97\u5206\u914D", value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3] },
          { name: "\u5B9E\u9645\u5F00\u9500", value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3] }
        ]) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u96F7\u8FBE\u56FE\u793A\u4F8B" }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var gaugeConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { value: 68, name: "\u5B8C\u6210\u7387" }
        ]) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u4EEA\u8868\u76D8\u793A\u4F8B" }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var funnelConfigure = {
    supports: { style: true, events: [{ name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6" }] },
    props: [
      { type: "group", title: "\u6570\u636E", display: "accordion", items: [
        { name: "chartData", title: "\u56FE\u8868\u6570\u636E", setter: makeDataEditor([
          { value: 100, name: "\u5C55\u73B0" },
          { value: 80, name: "\u70B9\u51FB" },
          { value: 60, name: "\u8BBF\u95EE" },
          { value: 40, name: "\u54A8\u8BE2" },
          { value: 20, name: "\u8BA2\u5355" }
        ]) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u6F0F\u6597\u56FE\u793A\u4F8B" }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var defaultMapOption = {
    backgroundColor: "#0a1a3a",
    title: { text: "\u4E2D\u56FD\u5730\u56FE\u6570\u636E\u5C55\u793A", left: "center", textStyle: { color: "#ffffff", fontSize: 18 } },
    tooltip: { trigger: "item" },
    visualMap: {
      min: 0,
      max: 2e3,
      left: "left",
      top: "bottom",
      text: ["\u9AD8", "\u4F4E"],
      calculable: true,
      inRange: { color: ["#50a3ba", "#eac736", "#d94e5d"] },
      textStyle: { color: "#ffffff" }
    },
    geo: {
      map: "china",
      roam: true,
      zoom: 1.2,
      center: [104, 35],
      label: { show: true, color: "#ffffff", fontSize: 10 },
      itemStyle: {
        areaColor: "#1a5276",
        borderColor: "#1a90ff",
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          areaColor: "#2980b9",
          borderColor: "#ffcc00",
          borderWidth: 2
        }
      }
    },
    series: [{
      name: "\u6570\u636E\u91CF",
      type: "map",
      geoIndex: 0,
      data: [
        { name: "\u5317\u4EAC", value: 1e3 },
        { name: "\u4E0A\u6D77", value: 1300 },
        { name: "\u5E7F\u4E1C", value: 1500 },
        { name: "\u6D59\u6C5F", value: 1250 },
        { name: "\u6C5F\u82CF", value: 1400 },
        { name: "\u5C71\u4E1C", value: 1350 },
        { name: "\u6CB3\u5357", value: 1150 },
        { name: "\u56DB\u5DDD", value: 1180 },
        { name: "\u6E56\u5317", value: 1080 }
      ]
    }],
    animationDuration: 1e3
  };
  var mapConfigure = {
    supports: { style: true, events: [
      { name: "onRegionClick", description: "\u533A\u57DF\u70B9\u51FB\u4E8B\u4EF6" },
      { name: "onRegionHover", description: "\u533A\u57DF\u60AC\u505C\u4E8B\u4EF6" },
      { name: "onMapReady", description: "\u5730\u56FE\u5C31\u7EEA\u4E8B\u4EF6" }
    ] },
    props: [
      { type: "group", title: "\u5730\u56FE\u57FA\u7840", display: "accordion", items: [
        { name: "mapType", title: "\u5730\u56FE\u7C7B\u578B", setter: makeSetter("mapType", "SelectSetter", {
          options: [
            { label: "\u4E2D\u56FD\u5730\u56FE", value: "china" },
            { label: "\u4E16\u754C\u5730\u56FE", value: "world" },
            { label: "\u7701\u4EFD\u5730\u56FE", value: "province" }
          ],
          defaultValue: "china"
        }) },
        { name: "visualType", title: "\u53EF\u89C6\u5316\u7C7B\u578B", setter: makeSetter("visualType", "SelectSetter", {
          options: [
            { label: "\u5206\u7701\u586B\u8272", value: "fillColor" },
            { label: "\u6563\u70B9\u56FE", value: "scatter" },
            { label: "\u70ED\u529B\u56FE", value: "heatMap" },
            { label: "\u52A8\u6001\u6563\u70B9", value: "effectScatter" },
            { label: "\u6D41\u5411\u7EBF", value: "lines" }
          ],
          defaultValue: "fillColor"
        }) },
        { name: "roam", title: "\u7F29\u653E\u5E73\u79FB", setter: makeSetter("roam", "BoolSetter", { defaultValue: true }) },
        { name: "zoom", title: "\u7F29\u653E\u6BD4\u4F8B", setter: makeSetter("zoom", "NumberSetter", { defaultValue: 1.2 }) }
      ] },
      { type: "group", title: "\u6570\u636E\u914D\u7F6E", display: "accordion", items: [
        { name: "mapData", title: "\u5730\u56FE\u6570\u636E", setter: makeDataEditor([
          { name: "\u5317\u4EAC", value: 1e3 },
          { name: "\u4E0A\u6D77", value: 1300 },
          { name: "\u5E7F\u4E1C", value: 1500 },
          { name: "\u6D59\u6C5F", value: 1250 },
          { name: "\u6C5F\u82CF", value: 1400 },
          { name: "\u5C71\u4E1C", value: 1350 },
          { name: "\u6CB3\u5357", value: 1150 },
          { name: "\u56DB\u5DDD", value: 1180 }
        ]) },
        { name: "enableDrillDown", title: "\u542F\u7528\u94BB\u53D6", setter: makeSetter("enableDrillDown", "BoolSetter", { defaultValue: false }) }
      ] },
      { type: "group", title: "\u6837\u5F0F\u4E3B\u9898", display: "accordion", items: [
        { name: "theme", title: "\u4E3B\u9898\u98CE\u683C", setter: makeSetter("theme", "SelectSetter", {
          options: [
            { label: "\u6697\u8272(\u5927\u5C4F)", value: "dark" },
            { label: "\u4EAE\u8272", value: "light" },
            { label: "\u81EA\u5B9A\u4E49", value: "custom" }
          ],
          defaultValue: "dark"
        }) },
        { name: "backgroundColor", title: "\u80CC\u666F\u989C\u8272", setter: makeSetter("backgroundColor", "StringSetter", { defaultValue: "#0a1a3a" }) },
        { name: "colorScheme", title: "\u914D\u8272\u65B9\u6848", setter: makeSetter("colorScheme", "SelectSetter", {
          options: [
            { label: "\u84DD\u8272\u7CFB", value: "blue" },
            { label: "\u7EA2\u8272\u7CFB", value: "red" },
            { label: "\u7EFF\u8272\u7CFB", value: "green" },
            { label: "\u5F69\u8679\u6E10\u53D8", value: "rainbow" }
          ],
          defaultValue: "blue"
        }) }
      ] },
      { type: "group", title: "\u6807\u9898\u8BBE\u7F6E", display: "accordion", items: [
        { name: "titleText", title: "\u4E3B\u6807\u9898", setter: makeSetter("title.text", "StringSetter", { defaultValue: "\u4E2D\u56FD\u5730\u56FE\u6570\u636E\u5C55\u793A" }) },
        { name: "titleColor", title: "\u6807\u9898\u989C\u8272", setter: makeSetter("title.textStyle.color", "StringSetter", { defaultValue: "#ffffff" }) },
        { name: "titleFontSize", title: "\u6807\u9898\u5B57\u53F7", setter: makeSetter("title.textStyle.fontSize", "NumberSetter", { defaultValue: 18 }) }
      ] },
      { type: "group", title: "\u4EA4\u4E92\u8BBE\u7F6E", display: "accordion", items: [
        { name: "showTooltip", title: "\u663E\u793A\u63D0\u793A\u6846", setter: makeSetter("showTooltip", "BoolSetter", { defaultValue: true }) },
        { name: "showLegend", title: "\u663E\u793A\u56FE\u4F8B", setter: makeSetter("showLegend", "BoolSetter", { defaultValue: true }) },
        { name: "animationDuration", title: "\u52A8\u753B\u65F6\u957F(ms)", setter: makeSetter("animationDuration", "NumberSetter", { defaultValue: 1e3 }) }
      ] },
      { type: "group", title: "\u5B8C\u6574\u914D\u7F6E", display: "accordion", items: [
        { name: "option", title: "\u914D\u7F6E\u5BF9\u8C61", setter: { componentName: "JsonSetter", props: { placeholder: "ECharts \u5730\u56FE\u914D\u7F6E\u5BF9\u8C61" } } }
      ] }
    ]
  };
  var baseProps = [
    { name: "option", propType: "object", description: "ECharts \u914D\u7F6E\u5BF9\u8C61" },
    { name: "style", propType: "object", description: "\u6837\u5F0F", defaultValue: { width: "100%", height: "400px" } },
    { name: "className", propType: "string", description: "\u7C7B\u540D" },
    { name: "theme", propType: "string", description: "\u4E3B\u9898" },
    { name: "notMerge", propType: "bool", description: "\u662F\u5426\u4E0D\u5408\u5E76\u914D\u7F6E", defaultValue: false },
    { name: "lazyUpdate", propType: "bool", description: "\u662F\u5426\u61D2\u66F4\u65B0", defaultValue: true }
  ];
  var dataCardConfigure = {
    supports: { style: true },
    props: [
      { type: "group", title: "\u57FA\u7840\u914D\u7F6E", display: "accordion", items: [
        { name: "title", title: "\u6807\u9898", setter: "StringSetter", defaultValue: "\u6570\u636E\u5361\u7247" },
        { name: "value", title: "\u6570\u503C", setter: "StringSetter", defaultValue: "0" },
        { name: "unit", title: "\u5355\u4F4D", setter: "StringSetter", defaultValue: "" },
        { name: "color", title: "\u4E3B\u9898\u8272", setter: "StringSetter", defaultValue: "#1a90ff" }
      ] },
      { type: "group", title: "\u8D8B\u52BF\u914D\u7F6E", display: "accordion", items: [
        { name: "trendValue", title: "\u8D8B\u52BF\u503C", setter: "StringSetter" },
        { name: "trendType", title: "\u8D8B\u52BF\u7C7B\u578B", setter: { componentName: "SelectSetter", props: {
          options: [
            { label: "\u4E0A\u5347", value: "up" },
            { label: "\u4E0B\u964D", value: "down" },
            { label: "\u6301\u5E73", value: "stable" }
          ],
          defaultValue: "up"
        } } }
      ] }
    ]
  };
  var dashboardLayoutConfigure = {
    supports: { style: true },
    props: [
      { type: "group", title: "\u6807\u9898\u914D\u7F6E", display: "accordion", items: [
        { name: "title", title: "\u4E3B\u6807\u9898", setter: "StringSetter", defaultValue: "\u6570\u636E\u53EF\u89C6\u5316\u5927\u5C4F" },
        { name: "subtitle", title: "\u526F\u6807\u9898", setter: "StringSetter" }
      ] },
      { type: "group", title: "\u6837\u5F0F\u914D\u7F6E", display: "accordion", items: [
        { name: "backgroundColor", title: "\u80CC\u666F\u989C\u8272", setter: "StringSetter", defaultValue: "#0a1a3a" }
      ] }
    ]
  };
  var chartPanelConfigure = {
    supports: { style: true },
    props: [
      { type: "group", title: "\u9762\u677F\u914D\u7F6E", display: "accordion", items: [
        { name: "title", title: "\u9762\u677F\u6807\u9898", setter: "StringSetter", defaultValue: "\u56FE\u8868\u9762\u677F" }
      ] }
    ]
  };
  var mapPanelConfigure = {
    supports: { style: true },
    props: [
      { type: "group", title: "\u9762\u677F\u914D\u7F6E", display: "accordion", items: [
        { name: "title", title: "\u9762\u677F\u6807\u9898", setter: "StringSetter", defaultValue: "\u5730\u56FE\u9762\u677F" },
        { name: "mapType", title: "\u5730\u56FE\u7C7B\u578B", setter: { componentName: "SelectSetter", props: {
          options: [
            { label: "\u5206\u7701\u586B\u8272", value: "fillColor" },
            { label: "\u6563\u70B9\u56FE", value: "scatter" },
            { label: "\u52A8\u6001\u6563\u70B9", value: "effectScatter" },
            { label: "\u70ED\u529B\u56FE", value: "heatMap" },
            { label: "\u6D41\u5411\u7EBF", value: "lines" }
          ],
          defaultValue: "fillColor"
        } } },
        { name: "height", title: "\u9AD8\u5EA6", setter: "StringSetter", defaultValue: "500px" }
      ] },
      { type: "group", title: "\u6570\u636E\u914D\u7F6E", display: "accordion", items: [
        { name: "mapData", title: "\u5730\u56FE\u6570\u636E", setter: { componentName: "JsonSetter", props: { placeholder: "\u5730\u56FE\u6570\u636E" } } }
      ] }
    ]
  };
  var components = [
    {
      componentName: "EChartsPie",
      title: "ECharts \u997C\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsPie", destructuring: true },
      props: baseProps,
      configure: pieConfigure,
      icon: Icons.pie,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u997C\u56FE", schema: { componentName: "EChartsPie", props: { option: defaultPieOption, style: { width: "100%", height: "400px" } } } },
        { title: "\u73AF\u5F62\u56FE", schema: { componentName: "EChartsPie", props: { option: { ...defaultPieOption, title: { ...defaultPieOption.title, text: "\u73AF\u5F62\u56FE\u793A\u4F8B" }, series: [{ ...defaultPieOption.series[0], radius: ["40%", "70%"] }] }, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsLine",
      title: "ECharts \u6298\u7EBF\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsLine", destructuring: true },
      props: baseProps,
      configure: lineConfigure,
      icon: Icons.line,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u6298\u7EBF\u56FE", schema: { componentName: "EChartsLine", props: { option: defaultLineOption, style: { width: "100%", height: "400px" } } } },
        { title: "\u5E73\u6ED1\u6298\u7EBF\u56FE", schema: { componentName: "EChartsLine", props: { option: { ...defaultLineOption, title: { ...defaultLineOption.title, text: "\u5E73\u6ED1\u6298\u7EBF\u56FE" }, series: [{ ...defaultLineOption.series[0], smooth: true }] }, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsBar",
      title: "ECharts \u67F1\u72B6\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsBar", destructuring: true },
      props: baseProps,
      configure: barConfigure,
      icon: Icons.bar,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u67F1\u72B6\u56FE", schema: { componentName: "EChartsBar", props: { option: defaultBarOption, style: { width: "100%", height: "400px" } } } },
        { title: "\u5706\u89D2\u67F1\u72B6\u56FE", schema: { componentName: "EChartsBar", props: { option: { ...defaultBarOption, title: { ...defaultBarOption.title, text: "\u5706\u89D2\u67F1\u72B6\u56FE" }, series: [{ ...defaultBarOption.series[0], itemStyle: { borderRadius: [4, 4, 0, 0] } }] }, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsScatter",
      title: "ECharts \u6563\u70B9\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsScatter", destructuring: true },
      props: baseProps,
      configure: scatterConfigure,
      icon: Icons.scatter,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u6563\u70B9\u56FE", schema: { componentName: "EChartsScatter", props: { option: defaultScatterOption, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsArea",
      title: "ECharts \u9762\u79EF\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsArea", destructuring: true },
      props: baseProps,
      configure: areaConfigure,
      icon: Icons.area,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u5806\u53E0\u9762\u79EF\u56FE", schema: { componentName: "EChartsArea", props: { option: defaultAreaOption, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsRadar",
      title: "ECharts \u96F7\u8FBE\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsRadar", destructuring: true },
      props: baseProps,
      configure: radarConfigure,
      icon: Icons.radar,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u96F7\u8FBE\u56FE", schema: { componentName: "EChartsRadar", props: { option: defaultRadarOption, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsGauge",
      title: "ECharts \u4EEA\u8868\u76D8",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsGauge", destructuring: true },
      props: baseProps,
      configure: gaugeConfigure,
      icon: Icons.gauge,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u4EEA\u8868\u76D8", schema: { componentName: "EChartsGauge", props: { option: defaultGaugeOption, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsFunnel",
      title: "ECharts \u6F0F\u6597\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsFunnel", destructuring: true },
      props: baseProps,
      configure: funnelConfigure,
      icon: Icons.funnel,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u57FA\u7840\u6F0F\u6597\u56FE", schema: { componentName: "EChartsFunnel", props: { option: defaultFunnelOption, style: { width: "100%", height: "400px" } } } }
      ]
    },
    {
      componentName: "EChartsMap",
      title: "ECharts \u5730\u56FE",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "EChartsMap", destructuring: true },
      props: baseProps,
      configure: mapConfigure,
      icon: Icons.pie,
      category: "\u56FE\u8868\u7EC4\u4EF6",
      group: "ECharts\u56FE\u8868",
      snippets: [
        { title: "\u5206\u7701\u586B\u8272\u5730\u56FE", schema: { componentName: "EChartsMap", props: { option: defaultMapOption, style: { width: "100%", height: "500px" }, mapType: "china", visualType: "fillColor" } } },
        { title: "\u6563\u70B9\u5730\u56FE", schema: { componentName: "EChartsMap", props: { option: defaultMapOption, style: { width: "100%", height: "500px" }, mapType: "china", visualType: "scatter" } } },
        { title: "\u52A8\u6001\u6563\u70B9\u5730\u56FE", schema: { componentName: "EChartsMap", props: { option: defaultMapOption, style: { width: "100%", height: "500px" }, mapType: "china", visualType: "effectScatter" } } },
        { title: "\u70ED\u529B\u56FE\u5730\u56FE", schema: { componentName: "EChartsMap", props: { option: defaultMapOption, style: { width: "100%", height: "500px" }, mapType: "china", visualType: "heatMap" } } },
        { title: "\u6D41\u5411\u7EBF\u5730\u56FE", schema: { componentName: "EChartsMap", props: { option: defaultMapOption, style: { width: "100%", height: "500px" }, mapType: "china", visualType: "lines" } } }
      ]
    },
    {
      componentName: "DataCard",
      title: "\u6570\u636E\u5361\u7247",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "DataCard", destructuring: true },
      props: [
        { name: "title", propType: "string", description: "\u6807\u9898", defaultValue: "\u6570\u636E\u5361\u7247" },
        { name: "value", propType: "string", description: "\u6570\u503C", defaultValue: "0" },
        { name: "unit", propType: "string", description: "\u5355\u4F4D" },
        { name: "color", propType: "string", description: "\u4E3B\u9898\u8272", defaultValue: "#1a90ff" },
        { name: "style", propType: "object", description: "\u6837\u5F0F" }
      ],
      configure: dataCardConfigure,
      icon: Icons.pie,
      category: "\u590D\u5408\u7EC4\u4EF6",
      group: "\u5927\u5C4F\u7EC4\u4EF6",
      snippets: [
        { title: "\u6570\u636E\u5361\u7247", schema: { componentName: "DataCard", props: { title: "\u603B\u9500\u552E\u989D", value: "1,234,567", unit: "\u5143", color: "#1a90ff" } } },
        { title: "\u8D8B\u52BF\u5361\u7247", schema: { componentName: "DataCard", props: { title: "\u6708\u589E\u957F", value: "+15.8%", color: "#52c41a", trend: { value: "\u8F83\u4E0A\u6708", type: "up" } } } }
      ]
    },
    {
      componentName: "DashboardLayout",
      title: "\u5927\u5C4F\u5E03\u5C40",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "DashboardLayout", destructuring: true },
      props: [
        { name: "title", propType: "string", description: "\u4E3B\u6807\u9898", defaultValue: "\u6570\u636E\u53EF\u89C6\u5316\u5927\u5C4F" },
        { name: "subtitle", propType: "string", description: "\u526F\u6807\u9898" },
        { name: "backgroundColor", propType: "string", description: "\u80CC\u666F\u989C\u8272", defaultValue: "#0a1a3a" },
        { name: "style", propType: "object", description: "\u6837\u5F0F" }
      ],
      configure: dashboardLayoutConfigure,
      icon: Icons.pie,
      category: "\u590D\u5408\u7EC4\u4EF6",
      group: "\u5927\u5C4F\u7EC4\u4EF6",
      snippets: [
        { title: "\u5927\u5C4F\u5E03\u5C40", schema: { componentName: "DashboardLayout", props: { title: "\u6570\u636E\u53EF\u89C6\u5316\u5927\u5C4F", backgroundColor: "#0a1a3a" } } }
      ]
    },
    {
      componentName: "ChartPanel",
      title: "\u56FE\u8868\u9762\u677F",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "ChartPanel", destructuring: true },
      props: [
        { name: "title", propType: "string", description: "\u9762\u677F\u6807\u9898", defaultValue: "\u56FE\u8868\u9762\u677F" },
        { name: "style", propType: "object", description: "\u6837\u5F0F" }
      ],
      configure: chartPanelConfigure,
      icon: Icons.pie,
      category: "\u590D\u5408\u7EC4\u4EF6",
      group: "\u5927\u5C4F\u7EC4\u4EF6",
      snippets: [
        { title: "\u56FE\u8868\u9762\u677F", schema: { componentName: "ChartPanel", props: { title: "\u9500\u552E\u8D8B\u52BF" } } }
      ]
    },
    {
      componentName: "MapPanel",
      title: "\u5730\u56FE\u9762\u677F",
      docUrl: "",
      screenshot: "",
      devMode: "proCode",
      npm: { package: "@jenusdong/echarts-for-lowcode", version: "1.2.1", exportName: "MapPanel", destructuring: true },
      props: [
        { name: "title", propType: "string", description: "\u9762\u677F\u6807\u9898", defaultValue: "\u5730\u56FE\u9762\u677F" },
        { name: "mapType", propType: "string", description: "\u5730\u56FE\u7C7B\u578B", defaultValue: "fillColor" },
        { name: "height", propType: "string", description: "\u9AD8\u5EA6", defaultValue: "500px" },
        { name: "style", propType: "object", description: "\u6837\u5F0F" }
      ],
      configure: mapPanelConfigure,
      icon: Icons.pie,
      category: "\u590D\u5408\u7EC4\u4EF6",
      group: "\u5927\u5C4F\u7EC4\u4EF6",
      snippets: [
        { title: "\u5730\u56FE\u9762\u677F", schema: { componentName: "MapPanel", props: { title: "\u5168\u56FD\u9500\u552E\u5206\u5E03", mapType: "fillColor", height: "500px" } } }
      ]
    }
  ];
  var meta_default = {
    components
  };
  return __toCommonJS(meta_exports);
})();

  var result = __META_RAW__;
  if (result && result.default) result = result.default;
  if (result && result.components) return result;
  return { components: [] };
}));
