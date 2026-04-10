import React from 'react'
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { BarChartOutlined, LineChartOutlined, BarChartOutlined as BarIcon, DotChartOutlined, AreaChartOutlined } from '@ant-design/icons';
import JSONPathSetter from './setters/JSONPathSetter';
import DataEditorSetter from './setters/DataEditorSetter';

const defaultPieOption = {
  title: { text: '饼图示例', subtext: '', left: 'center', top: 'top' },
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
  legend: { orient: 'vertical', left: 'left', top: 'middle', textStyle: { fontSize: 12 } },
  color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '50%',
    center: ['50%', '50%'],
    data: [
      { value: 1048, name: '搜索引擎' }, { value: 735, name: '直接访问' },
      { value: 580, name: '邮件营销' }, { value: 484, name: '联盟广告' }, { value: 300, name: '视频广告' }
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.5)' } },
    label: { show: true, formatter: '{b}: {d}%', fontSize: 12, color: '#333' },
    labelLine: { show: true, length: 15, length2: 10 },
    itemStyle: { borderColor: '#fff', borderWidth: 2 },
    animationType: 'scale', animationEasing: 'elasticOut'
  }]
};

function makeSetter(jsonPath: string, setterType: string, extra?: Record<string, any>) {
  return { componentName: 'JSONPathSetter', props: { jsonPath, setterType, ...extra } };
}

function makeDataEditor(defaultData?: any) {
  return {
    componentName: 'DataEditorSetter',
    props: {
      placeholder: '编辑图表数据，格式：[{name:"分类名", value:数值}, ...]',
      defaultValue: defaultData ? JSON.stringify(defaultData, null, 2) : undefined,
    },
  };
}

const pieConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '位置', display: 'accordion', items: [
      { name: 'piePosition', title: '位置', setter: makeSetter('series.0.center', 'SelectSetter', {
        options: [
          { label: '居中', value: "['50%','50%']" }, { label: '上左', value: "['25%','30%']" },
          { label: '上中', value: "['50%','30%']" }, { label: '上右', value: "['75%','30%']" },
          { label: '左中', value: "['30%','50%']" }, { label: '右中', value: "['70%','50%']" },
        ], defaultValue: "['50%','50%']" }) },
    ]},
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'pieData', title: '图表数据', setter: makeDataEditor([
        { name: '搜索引擎', value: 1048 }, { name: '直接访问', value: 735 },
        { name: '邮件营销', value: 580 }, { name: '联盟广告', value: 484 }, { name: '视频广告', value: 300 }
      ]) },
      { name: 'seriesName', title: '系列名称', setter: makeSetter('series.0.name', 'StringSetter', { defaultValue: '访问来源' }) },
    ]},
    { type: 'group', title: '图形属性', display: 'accordion', items: [
      { type: 'group', title: '颜色', display: 'plain', items: [
        { name: 'c0', title: '颜色1', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#3BCBD1' }) },
        { name: 'c1', title: '颜色2', setter: makeSetter('color.1', 'StringSetter', { defaultValue: '#47A4FE' }) },
        { name: 'c2', title: '颜色3', setter: makeSetter('color.2', 'StringSetter', { defaultValue: '#EDBA42' }) },
        { name: 'c3', title: '颜色4', setter: makeSetter('color.3', 'StringSetter', { defaultValue: '#F4704E' }) },
        { name: 'c4', title: '颜色5', setter: makeSetter('color.4', 'StringSetter', { defaultValue: '#ED6899' }) },
        { name: 'c5', title: '颜色6', setter: makeSetter('color.5', 'StringSetter', { defaultValue: '#7F62C3' }) },
        { name: 'c6', title: '颜色7', setter: makeSetter('color.6', 'StringSetter', { defaultValue: '#6E7BC9' }) },
      ]},
      { name: 'radius', title: '半径', setter: makeSetter('series.0.radius', 'SelectSetter', {
        options: [
          { label: '实心 50%', value: '50%' }, { label: '实心 60%', value: '60%' },
          { label: '环形 小环 [40%,55%]', value: "['40%','55%']" },
          { label: '环形 中环 [40%,65%]', value: "['40%','65%']" },
          { label: '环形 大环 [35%,70%]', value: "['35%','70%']" },
        ], defaultValue: '50%' }) },
      { name: 'roseType', title: '玫瑰图模式', setter: makeSetter('series.0.roseType', 'SelectSetter', {
        options: [{ label: '关闭', value: undefined }, { label: '半径模式', value: 'radius' }, { label: '面积模式', value: 'area' }],
        defaultValue: undefined }) },
    ]},
    { type: 'group', title: '标签', display: 'accordion', items: [
      { name: 'labelShow', title: '显示标签', setter: makeSetter('series.0.label.show', 'BoolSetter', { defaultValue: true }) },
      { name: 'labelPos', title: '位置', setter: makeSetter('series.0.label.position', 'SelectSetter', {
        options: [{ label: '外部', value: 'outside' }, { label: '内部', value: 'inside' }, { label: '中心', value: 'center' }],
        defaultValue: 'outside' }) },
      { name: 'labelFmt', title: '格式', setter: makeSetter('series.0.label.formatter', 'SelectSetter', {
        options: [{ label: '{b}: {d}%', value: '{b}: {d}%' }, { label: '{b}: {c}', value: '{b}: {c}' }, { label: '{b}', value: '{b}' }],
        defaultValue: '{b}: {d}%' }) },
      { name: 'labelFontSize', title: '字号', setter: makeSetter('series.0.label.fontSize', 'NumberSetter', { defaultValue: 12 }) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '饼图示例' }) },
      { name: 'titleLeft', title: '水平位置', setter: makeSetter('title.left', 'SelectSetter', {
        options: [{ label: '居中', value: 'center' }, { label: '左', value: 'left' }, { label: '右', value: 'right' }],
        defaultValue: 'center' }) },
      { name: 'titleTop', title: '垂直位置', setter: makeSetter('title.top', 'SelectSetter', {
        options: [{ label: '顶部', value: 'top' }, { label: '中间', value: 'middle' }, { label: '底部', value: 'bottom' }],
        defaultValue: 'top' }) },
    ]},
    { type: 'group', title: '图例配置', display: 'accordion', items: [
      { name: 'legendShow', title: '显示图例', setter: makeSetter('legend.show', 'BoolSetter', { defaultValue: true }) },
      { name: 'legendOrient', title: '朝向', setter: makeSetter('legend.orient', 'SelectSetter', {
        options: [{ label: '横向', value: 'horizontal' }, { label: '纵向', value: 'vertical' }], defaultValue: 'vertical' }) },
      { name: 'legendLeft', title: '水平位置', setter: makeSetter('legend.left', 'SelectSetter', {
        options: [{ label: '左', value: 'left' }, { label: '居中', value: 'center' }, { label: '右', value: 'right' }],
        defaultValue: 'left' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '数据项', value: 'item' }, { label: '坐标轴', value: 'axis' }], defaultValue: 'item' }) },
      { name: 'ttFmt', title: '提示格式', setter: makeSetter('tooltip.formatter', 'SelectSetter', {
        options: [{ label: '{a}<br/>{b}:{c}({d}%)', value: '{a} <br/>{b}: {c} ({d}%)' }, { label: '{b}:{c}', value: '{b}: {c}' }],
        defaultValue: '{a} <br/>{b}: {c} ({d}%)' }) },
    ]},
    { type: 'group', title: '动画效果', display: 'accordion', items: [
      { name: 'animOn', title: '开启动画', setter: makeSetter('animation', 'BoolSetter', { defaultValue: true }) },
      { name: 'animDuration', title: '时长(ms)', setter: makeSetter('animationDuration', 'NumberSetter', { defaultValue: 1000 }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const lineDefaultOption = {
  title: { text: '折线图示例', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['销量'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [{ name: '销量', type: 'line', smooth: false, data: [150, 230, 224, 218, 135, 147, 260], areaStyle: undefined }]
};

const lineConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: 'Mon', value: 150 }, { name: 'Tue', value: 230 }, { name: 'Wed', value: 224 },
        { name: 'Thu', value: 218 }, { name: 'Fri', value: 135 }, { name: 'Sat', value: 147 }, { name: 'Sun', value: 260 }
      ]) },
      { name: 'seriesName', title: '系列名称', setter: makeSetter('series.0.name', 'StringSetter', { defaultValue: '销量' }) },
    ]},
    { type: 'group', title: '折线样式', display: 'accordion', items: [
      { name: 'smooth', title: '平滑曲线', setter: makeSetter('series.0.smooth', 'BoolSetter', { defaultValue: false }) },
      { name: 'showSymbol', title: '显示数据点', setter: makeSetter('series.0.showSymbol', 'BoolSetter', { defaultValue: true }) },
      { name: 'symbolSize', title: '点大小', setter: makeSetter('series.0.symbolSize', 'NumberSetter', { defaultValue: 6 }) },
      { name: 'lineWidth', title: '线条宽度', setter: makeSetter('series.0.lineStyle.width', 'NumberSetter', { defaultValue: 2 }) },
      { name: 'areaStyle', title: '面积填充', setter: makeSetter('series.0.areaStyle', 'SelectSetter', {
        options: [{ label: '无填充', value: undefined }, { label: '半透明填充', value: '{}' }, { label: '纯色填充', value: "{opacity:0.3}" }],
        defaultValue: undefined }) },
    ]},
    { type: 'group', title: '坐标轴', display: 'accordion', items: [
      { name: 'xBoundaryGap', title: 'X轴留白', setter: makeSetter('xAxis.boundaryGap', 'BoolSetter', { defaultValue: false }) },
      { name: 'yMin', title: 'Y轴最小值', setter: makeSetter('yAxis.min', 'NumberSetter') },
      { name: 'yMax', title: 'Y轴最大值', setter: makeSetter('yAxis.max', 'NumberSetter') },
    ]},
    { type: 'group', title: '颜色方案', display: 'accordion', items: [
      { name: 'color0', title: '系列颜色', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#1890ff' }) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '折线图示例' }) },
      { name: 'titleLeft', title: '水平位置', setter: makeSetter('title.left', 'SelectSetter', {
        options: [{ label: '居中', value: 'center' }, { label: '左', value: 'left' }, { label: '右', value: 'right' }], defaultValue: 'center' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '坐标轴触发', value: 'axis' }, { label: '数据项触发', value: 'item' }], defaultValue: 'axis' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const barDefaultOption = {
  title: { text: '柱状图示例', left: 'center' },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: ['销量'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [{ name: '销量', type: 'bar', barWidth: '60%', data: [120, 200, 150, 80, 70, 110, 130], itemStyle: {} }]
};

const barConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: 'Mon', value: 120 }, { name: 'Tue', value: 200 }, { name: 'Wed', value: 150 },
        { name: 'Thu', value: 80 }, { name: 'Fri', value: 70 }, { name: 'Sat', value: 110 }, { name: 'Sun', value: 130 }
      ]) },
      { name: 'seriesName', title: '系列名称', setter: makeSetter('series.0.name', 'StringSetter', { defaultValue: '销量' }) },
    ]},
    { type: 'group', title: '柱子样式', display: 'accordion', items: [
      { name: 'barWidth', title: '柱宽比例', setter: makeSetter('series.0.barWidth', 'StringSetter', { defaultValue: '60%' }) },
      { name: 'barBorderRadius', title: '圆角半径', setter: makeSetter('series.0.itemStyle.borderRadius', 'NumberSetter', { defaultValue: 0 }) },
      { name: 'showBackground', title: '显示背景条', setter: makeSetter('series.0.showBackground', 'BoolSetter', { defaultValue: false }) },
      { name: 'bgColor', title: '背景条颜色', setter: makeSetter('series.0.backgroundStyle.color', 'StringSetter', { defaultValue: 'rgba(180,180,180,0.2)' }) },
    ]},
    { type: 'group', title: '坐标轴', display: 'accordion', items: [
      { name: 'yMin', title: 'Y轴最小值', setter: makeSetter('yAxis.min', 'NumberSetter') },
      { name: 'yMax', title: 'Y轴最大值', setter: makeSetter('yAxis.max', 'NumberSetter') },
    ]},
    { type: 'group', title: '颜色方案', display: 'accordion', items: [
      { name: 'color0', title: '系列颜色', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#1890ff' }) },
      { name: 'barColorLinear', title: '渐变柱色', setter: makeSetter('series.0.itemStyle.color', 'SelectSetter', {
        options: [{ label: '纯色', value: undefined }, { label: '蓝色渐变', value: "{type:'linear',x:0,y:0,x2:0,y:1,colorStops:[{offset:0,color:'#83bff6'},{offset:1,color:'#1890ff'}]}" }],
        defaultValue: undefined }) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '柱状图示例' }) },
      { name: 'titleLeft', title: '水平位置', setter: makeSetter('title.left', 'SelectSetter', {
        options: [{ label: '居中', value: 'center' }, { label: '左', value: 'left' }, { label: '右', value: 'right' }], defaultValue: 'center' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '坐标轴触发', value: 'axis' }, { label: '数据项触发', value: 'item' }], defaultValue: 'axis' }) },
      { name: 'pointerType', title: '指示器类型', setter: makeSetter('tooltip.axisPointer.type', 'SelectSetter', {
        options: [{ label: '直线', value: 'shadow' }, { label: '十字准星', value: 'cross' }, { label: '无', value: undefined }],
        defaultValue: 'shadow' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const scatterDefaultOption = {
  title: { text: '散点图示例', left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { data: ['数据集'], bottom: 0 },
  grid: { left: '12%', right: '10%', top: '15%', bottom: '15%' },
  xAxis: { type: 'value', splitLine: { show: true } },
  yAxis: { type: 'value', splitLine: { show: true }, scale: true },
  series: [{ name: '数据集', type: 'scatter', symbolSize: 10, data: [[10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81], [11.0, 8.33], [14.0, 7.66]] }]
};

const scatterConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: 'P1', xValue: 10.0, yValue: 8.04 }, { name: 'P2', xValue: 8.07, yValue: 6.95 },
        { name: 'P3', xValue: 13.0, yValue: 7.58 }, { name: 'P4', xValue: 9.05, yValue: 8.81 },
        { name: 'P5', xValue: 11.0, yValue: 8.33 }, { name: 'P6', xValue: 14.0, yValue: 7.66 }
      ]) },
      { name: 'seriesName', title: '系列名称', setter: makeSetter('series.0.name', 'StringSetter', { defaultValue: '数据集' }) },
    ]},
    { type: 'group', title: '点样式', display: 'accordion', items: [
      { name: 'symbolSize', title: '点大小', setter: makeSetter('series.0.symbolSize', 'NumberSetter', { defaultValue: 10 }) },
      { name: 'symbol', title: '点的形状', setter: makeSetter('series.0.symbol', 'SelectSetter', {
        options: [{ label: '圆形', value: 'circle' }, { label: '方形', value: 'rect' }, { label: '三角形', value: 'triangle' }, { label: '菱形', value: 'diamond' }],
        defaultValue: 'circle' }) },
      { name: 'itemColor', title: '点颜色', setter: makeSetter('series.0.itemStyle.color', 'StringSetter', { defaultValue: '#1890ff' }) },
    ]},
    { type: 'group', title: '坐标轴', display: 'accordion', items: [
      { name: 'yScale', title: 'Y轴自适应缩放', setter: makeSetter('yAxis.scale', 'BoolSetter', { defaultValue: true }) },
      { name: 'xSplitLine', title: 'X轴分割线', setter: makeSetter('xAxis.splitLine.show', 'BoolSetter', { defaultValue: true }) },
      { name: 'ySplitLine', title: 'Y轴分割线', setter: makeSetter('yAxis.splitLine.show', 'BoolSetter', { defaultValue: true }) },
    ]},
    { type: 'group', title: '颜色方案', display: 'accordion', items: [
      { name: 'color0', title: '系列颜色', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#1890ff' }) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '散点图示例' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '数据项', value: 'item' }, { label: '坐标轴', value: 'axis' }], defaultValue: 'item' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const mixDefaultOption = {
  title: { text: '折线柱状混合图', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['销量', '利润率'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: [
    { type: 'value', name: '销量' },
    { type: 'value', name: '利润率', axisLabel: { formatter: '{value} %' } }
  ],
  series: [
    { name: '销量', type: 'bar', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润率', type: 'line', yAxisIndex: 1, data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3] }
  ]
};

const mixConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: 'Mon', value1: 120, value2: 2.0 }, { name: 'Tue', value1: 200, value2: 2.2 },
        { name: 'Wed', value1: 150, value2: 3.3 }, { name: 'Thu', value1: 80, value2: 4.5 },
        { name: 'Fri', value1: 70, value2: 6.3 }, { name: 'Sat', value1: 110, value2: 10.2 }, { name: 'Sun', value1: 130, value2: 20.3 }
      ]) },
    ]},
    { type: 'group', title: '系列配置', display: 'accordion', items: [
      { name: 'barName', title: '柱状图名称', setter: makeSetter('series.0.name', 'StringSetter', { defaultValue: '销量' }) },
      { name: 'lineName', title: '折线图名称', setter: makeSetter('series.1.name', 'StringSetter', { defaultValue: '利润率' }) },
      { name: 'lineSmooth', title: '折线平滑', setter: makeSetter('series.1.smooth', 'BoolSetter', { defaultValue: false }) },
      { name: 'lineYIndex', title: '折线Y轴索引', setter: makeSetter('series.1.yAxisIndex', 'NumberSetter', { defaultValue: 1 }) },
    ]},
    { type: 'group', title: '双Y轴设置', display: 'accordion', items: [
      { name: 'y0Name', title: '左Y轴名称', setter: makeSetter('yAxis.0.name', 'StringSetter', { defaultValue: '销量' }) },
      { name: 'y1Name', title: '右Y轴名称', setter: makeSetter('yAxis.1.name', 'StringSetter', { defaultValue: '利润率' }) },
      { name: 'y1Formatter', title: '右Y轴格式化', setter: makeSetter('yAxis.1.axisLabel.formatter', 'StringSetter', { defaultValue: '{value} %' }) },
    ]},
    { type: 'group', title: '柱子样式', display: 'accordion', items: [
      { name: 'barWidth', title: '柱宽比例', setter: makeSetter('series.0.barWidth', 'StringSetter', { defaultValue: '60%' }) },
      { name: 'barColor', title: '柱颜色', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#1890ff' }) },
      { name: 'lineColor', title: '折线颜色', setter: makeSetter('color.1', 'StringSetter', { defaultValue: '#52c41a' }) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '折线柱状混合图' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '坐标轴触发', value: 'axis' }, { label: '数据项触发', value: 'item' }], defaultValue: 'axis' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const areaDefaultOption = {
  title: { text: '面积图示例', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['邮件营销', '联盟广告', '视频广告'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [
    { name: '邮件营销', type: 'line', stack: 'Total', areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210] },
    { name: '联盟广告', type: 'line', stack: 'Total', areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310] },
    { name: '视频广告', type: 'line', stack: 'Total', areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410] }
  ]
};

const areaConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  component: {
    selectionSelector: '[_echarts_instance_], [_echarts_instance_] *',
  },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: 'Mon', value1: 120, value2: 220, value3: 150 },
        { name: 'Tue', value1: 132, value2: 182, value3: 232 },
        { name: 'Wed', value1: 101, value2: 191, value3: 201 },
        { name: 'Thu', value1: 134, value2: 234, value3: 154 },
        { name: 'Fri', value1: 90, value2: 290, value3: 190 },
        { name: 'Sat', value1: 230, value2: 330, value3: 330 },
        { name: 'Sun', value1: 210, value2: 310, value3: 410 }
      ]) },
    ]},
    { type: 'group', title: '堆叠与填充', display: 'accordion', items: [
      { name: 'stack', title: '堆叠分组名', setter: makeSetter('series.0.stack', 'StringSetter', { defaultValue: 'Total' }) },
      { name: 'boundaryGap', title: 'X轴留白', setter: makeSetter('xAxis.boundaryGap', 'BoolSetter', { defaultValue: false }) },
      { name: 'smooth', title: '平滑曲线', setter: makeSetter('series.0.smooth', 'BoolSetter', { defaultValue: false }) },
      { name: 'areaOpacity', title: '填充透明度', setter: makeSetter('series.0.areaStyle.opacity', 'NumberSetter', { defaultValue: 0.6 }) },
    ]},
    { type: 'group', title: '颜色方案', display: 'accordion', items: [
      { name: 'color0', title: '系列1颜色', setter: makeSetter('color.0', 'StringSetter', { defaultValue: '#1890ff' }) },
      { name: 'color1', title: '系列2颜色', setter: makeSetter('color.1', 'StringSetter', { defaultValue: '#52c41a' }) },
      { name: 'color2', title: '系列3颜色', setter: makeSetter('color.2', 'StringSetter', { defaultValue: '#faad14' }) },
    ]},
    { type: 'group', title: '坐标轴', display: 'accordion', items: [
      { name: 'yMin', title: 'Y轴最小值', setter: makeSetter('yAxis.min', 'NumberSetter') },
      { name: 'yMax', title: 'Y轴最大值', setter: makeSetter('yAxis.max', 'NumberSetter') },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '面积图示例' }) },
    ]},
    { type: 'group', title: '提示框', display: 'accordion', items: [
      { name: 'ttTrigger', title: '触发类型', setter: makeSetter('tooltip.trigger', 'SelectSetter', {
        options: [{ label: '坐标轴触发', value: 'axis' }, { label: '数据项触发', value: 'item' }], defaultValue: 'axis' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

function createComponentDef(name: string, title: string, icon: React.ReactNode, defaultOpt: any, configure: any, snippets: Array<{ title: string; schema: any }> = []) {
  return {
    componentName: name,
    title,
    docUrl: '',
    screenshot: '',
    npm: { package: 'echarts-for-react', version: '^3.0.2', exportName: 'default', destructuring: false },
    props: [
      { name: 'option', propType: 'object', description: `${title} 配置对象`, defaultValue: defaultOpt },
      { name: 'style', propType: 'object', description: '样式', defaultValue: { width: '100%', height: '400px' },
        setter: { componentName: 'ObjectSetter', props: { config: { items: [
          { name: 'width', description: '宽度', setter: 'StringSetter' },
          { name: 'height', description: '高度', setter: 'StringSetter' },
        ] } } } },
      { name: 'className', propType: 'string', description: '类名', setter: 'StringSetter' },
      { name: 'theme', propType: 'string', description: '主题', setter: 'StringSetter' },
      { name: '__designMode', propType: 'string', description: '设计模式' },
    ],
    configure,
    icon,
    category: '信息展示',
    group: '精选组件',
    snippets,
  };
}

const EChartsPlugin = (ctx: IPublicModelPluginContext) => ({
  name: 'EChartsPlugin',
  async init() {
    const { material, setters } = ctx;
    setters.registerSetter('JSONPathSetter', JSONPathSetter);
    setters.registerSetter('DataEditorSetter', DataEditorSetter);

    material.loadIncrementalAssets({
      version: '2.0.0',
      components: [
        createComponentDef('EChartsPie', 'ECharts 饼图', React.createElement(BarChartOutlined), defaultPieOption, pieConfigure, [
          { title: '基础饼图', schema: { componentName: 'EChartsPie', props: { option: defaultPieOption, style: { width: '100%', height: '400px' } } } },
          { title: '环形图', schema: { componentName: 'EChartsPie', props: { option: { ...defaultPieOption, title: { ...defaultPieOption.title, text: '环形图示例' }, series: [{ ...defaultPieOption.series[0], radius: ['40%', '70%'] }] }, style: { width: '100%', height: '400px' } } } },
          { title: '南丁格尔玫瑰图', schema: { componentName: 'EChartsPie', props: { option: { ...defaultPieOption, title: { ...defaultPieOption.title, text: '南丁格尔玫瑰图' }, series: [{ ...defaultPieOption.series[0], roseType: 'area', radius: ['20%', '75%'] }] }, style: { width: '100%', height: '400px' } } } },
        ]),
        createComponentDef('EChartsLine', 'ECharts 折线图', React.createElement(LineChartOutlined), lineDefaultOption, lineConfigure, [
          { title: '基础折线图', schema: { componentName: 'EChartsLine', props: { option: lineDefaultOption, style: { width: '100%', height: '400px' } } } },
          { title: '面积折线图', schema: { componentName: 'EChartsLine', props: { option: { ...lineDefaultOption, title: { ...lineDefaultOption.title, text: '面积折线图' }, series: [{ ...lineDefaultOption.series[0], areaStyle: {} }] }, style: { width: '100%', height: '400px' } } } },
          { title: '平滑折线图', schema: { componentName: 'EChartsLine', props: { option: { ...lineDefaultOption, title: { ...lineDefaultOption.title, text: '平滑折线图' }, series: [{ ...lineDefaultOption.series[0], smooth: true }] }, style: { width: '100%', height: '400px' } } } },
        ]),
        createComponentDef('EChartsBar', 'ECharts 柱状图', React.createElement(BarIcon), barDefaultOption, barConfigure, [
          { title: '基础柱状图', schema: { componentName: 'EChartsBar', props: { option: barDefaultOption, style: { width: '100%', height: '400px' } } } },
          { title: '圆角柱状图', schema: { componentName: 'EChartsBar', props: { option: { ...barDefaultOption, title: { ...barDefaultOption.title, text: '圆角柱状图' }, series: [{ ...barDefaultOption.series[0], itemStyle: { borderRadius: [4, 4, 0, 0] } }] }, style: { width: '100%', height: '400px' } } } },
        ]),
        createComponentDef('EChartsScatter', 'ECharts 散点图', React.createElement(DotChartOutlined), scatterDefaultOption, scatterConfigure, [
          { title: '基础散点图', schema: { componentName: 'EChartsScatter', props: { option: scatterDefaultOption, style: { width: '100%', height: '400px' } } } },
        ]),
        createComponentDef('EChartsMix', 'ECharts 混合图', React.createElement(AreaChartOutlined), mixDefaultOption, mixConfigure, [
          { title: '折线柱状混合图', schema: { componentName: 'EChartsMix', props: { option: mixDefaultOption, style: { width: '100%', height: '400px' } } } },
        ]),
        createComponentDef('EChartsArea', 'ECharts 面积图', React.createElement(AreaChartOutlined), areaDefaultOption, areaConfigure, [
          { title: '堆叠面积图', schema: { componentName: 'EChartsArea', props: { option: areaDefaultOption, style: { width: '100%', height: '400px' } } } },
        ]),
      ],
    });
  },
});

EChartsPlugin.pluginName = 'EChartsPlugin';
export default EChartsPlugin;
