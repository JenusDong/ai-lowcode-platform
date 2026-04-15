import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Icons } from './meta/icons';
import { ChartOption } from './types/chart';

const defaultPieOption: ChartOption = {
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

const defaultLineOption: ChartOption = {
  title: { text: '折线图示例', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['销量'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [{ name: '销量', type: 'line', smooth: false, data: [150, 230, 224, 218, 135, 147, 260], areaStyle: undefined }]
};

const defaultBarOption: ChartOption = {
  title: { text: '柱状图示例', left: 'center' },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: ['销量'], bottom: 0 },
  grid: { left: '10%', right: '8%', top: '15%', bottom: '18%' },
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  yAxis: { type: 'value' },
  series: [{ name: '销量', type: 'bar', barWidth: '60%', data: [120, 200, 150, 80, 70, 110, 130], itemStyle: {} }]
};

const defaultScatterOption: ChartOption = {
  title: { text: '散点图示例', left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { data: ['数据集'], bottom: 0 },
  grid: { left: '12%', right: '10%', top: '15%', bottom: '15%' },
  xAxis: { type: 'value', splitLine: { show: true } },
  yAxis: { type: 'value', splitLine: { show: true }, scale: true },
  series: [{ name: '数据集', type: 'scatter', symbolSize: 10, data: [[10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81], [11.0, 8.33], [14.0, 7.66]] }]
};

const defaultAreaOption: ChartOption = {
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

const defaultRadarOption: ChartOption = {
  title: { text: '雷达图示例', left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { data: ['预算分配', '实际开销'], bottom: 0 },
  radar: {
    indicator: [
      { name: '销售', max: 6500 }, { name: '管理', max: 16000 }, { name: '信息技术', max: 30000 },
      { name: '客服', max: 38000 }, { name: '研发', max: 52000 }, { name: '市场', max: 25000 }
    ]
  },
  series: [{
    name: '预算 vs 开销',
    type: 'radar',
    data: [
      { value: [4200, 3000, 20000, 35000, 50000, 18000], name: '预算分配' },
      { value: [5000, 14000, 28000, 26000, 42000, 21000], name: '实际开销' }
    ]
  }]
};

const defaultGaugeOption: ChartOption = {
  title: { text: '仪表盘示例', left: 'center' },
  series: [{
    name: '业务指标',
    type: 'gauge',
    detail: { formatter: '{value}%' },
    data: [{ value: 68, name: '完成率' }]
  }]
};

const defaultFunnelOption: ChartOption = {
  title: { text: '漏斗图示例', left: 'center' },
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
  legend: { data: ['展现', '点击', '访问', '咨询', '订单'], bottom: 0 },
  series: [{
    name: '漏斗图',
    type: 'funnel',
    left: '10%',
    top: 60,
    bottom: 60,
    width: '80%',
    min: 0,
    max: 100,
    minSize: '0%',
    maxSize: '100%',
    sort: 'descending',
    gap: 2,
    label: { show: true, position: 'inside' },
    labelLine: { length: 10, lineStyle: { width: 1, type: 'solid' } },
    itemStyle: { borderColor: '#fff', borderWidth: 1 },
    emphasis: { label: { fontSize: 20 } },
    data: [
      { value: 100, name: '展现' },
      { value: 80, name: '点击' },
      { value: 60, name: '访问' },
      { value: 40, name: '咨询' },
      { value: 20, name: '订单' }
    ]
  }]
};

function makeSetter(jsonPath: string, setterType: string, extra?: Record<string, any>) {
  return { componentName: 'JSONPathSetter', props: { jsonPath, setterType, ...extra } };
}

function makeDataEditor(defaultData?: any) {
  return {
    componentName: 'DataEditorSetter',
    props: {
      placeholder: '编辑图表数据',
      defaultValue: defaultData ? JSON.stringify(defaultData, null, 2) : undefined,
    },
  };
}

const pieConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
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

const lineConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
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

const barConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
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

const scatterConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
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

const areaConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
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

const radarConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { name: '预算分配', value: [4200, 3000, 20000, 35000, 50000, 18000] },
        { name: '实际开销', value: [5000, 14000, 28000, 26000, 42000, 21000] }
      ]) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '雷达图示例' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const gaugeConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { value: 68, name: '完成率' }
      ]) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '仪表盘示例' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const funnelConfigure = {
  supports: { style: true, events: [{ name: 'onClick', description: '点击事件' }] },
  props: [
    { type: 'group', title: '数据', display: 'accordion', items: [
      { name: 'chartData', title: '图表数据', setter: makeDataEditor([
        { value: 100, name: '展现' },
        { value: 80, name: '点击' },
        { value: 60, name: '访问' },
        { value: 40, name: '咨询' },
        { value: 20, name: '订单' }
      ]) },
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '漏斗图示例' }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 配置对象' } } },
    ]},
  ],
};

const defaultMapOption: ChartOption = {
  backgroundColor: '#0a1a3a',
  title: { text: '中国地图数据展示', left: 'center', textStyle: { color: '#ffffff', fontSize: 18 } },
  tooltip: { trigger: 'item' },
  visualMap: {
    min: 0,
    max: 2000,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    calculable: true,
    inRange: { color: ['#50a3ba', '#eac736', '#d94e5d'] },
    textStyle: { color: '#ffffff' }
  },
  geo: {
    map: 'china',
    roam: true,
    zoom: 1.2,
    center: [104, 35],
    label: { show: true, color: '#ffffff', fontSize: 10 },
    itemStyle: {
      areaColor: '#1a5276',
      borderColor: '#1a90ff',
      borderWidth: 1
    },
    emphasis: {
      itemStyle: {
        areaColor: '#2980b9',
        borderColor: '#ffcc00',
        borderWidth: 2
      }
    }
  },
  series: [{
    name: '数据量',
    type: 'map',
    geoIndex: 0,
    data: [
      { name: '北京', value: 1000 }, { name: '上海', value: 1300 }, { name: '广东', value: 1500 },
      { name: '浙江', value: 1250 }, { name: '江苏', value: 1400 }, { name: '山东', value: 1350 },
      { name: '河南', value: 1150 }, { name: '四川', value: 1180 }, { name: '湖北', value: 1080 }
    ]
  }],
  animationDuration: 1000
};

const mapConfigure = {
  supports: { style: true, events: [
    { name: 'onRegionClick', description: '区域点击事件' },
    { name: 'onRegionHover', description: '区域悬停事件' },
    { name: 'onMapReady', description: '地图就绪事件' }
  ]},
  props: [
    { type: 'group', title: '地图基础', display: 'accordion', items: [
      { name: 'mapType', title: '地图类型', setter: makeSetter('mapType', 'SelectSetter', {
        options: [
          { label: '中国地图', value: 'china' },
          { label: '世界地图', value: 'world' },
          { label: '省份地图', value: 'province' }
        ],
        defaultValue: 'china'
      })},
      { name: 'visualType', title: '可视化类型', setter: makeSetter('visualType', 'SelectSetter', {
        options: [
          { label: '分省填色', value: 'fillColor' },
          { label: '散点图', value: 'scatter' },
          { label: '热力图', value: 'heatMap' },
          { label: '动态散点', value: 'effectScatter' },
          { label: '流向线', value: 'lines' }
        ],
        defaultValue: 'fillColor'
      })},
      { name: 'roam', title: '缩放平移', setter: makeSetter('roam', 'BoolSetter', { defaultValue: true }) },
      { name: 'zoom', title: '缩放比例', setter: makeSetter('zoom', 'NumberSetter', { defaultValue: 1.2 }) },
    ]},
    { type: 'group', title: '数据配置', display: 'accordion', items: [
      { name: 'mapData', title: '地图数据', setter: makeDataEditor([
        { name: '北京', value: 1000 }, { name: '上海', value: 1300 }, { name: '广东', value: 1500 },
        { name: '浙江', value: 1250 }, { name: '江苏', value: 1400 }, { name: '山东', value: 1350 },
        { name: '河南', value: 1150 }, { name: '四川', value: 1180 }
      ])},
      { name: 'enableDrillDown', title: '启用钻取', setter: makeSetter('enableDrillDown', 'BoolSetter', { defaultValue: false }) },
    ]},
    { type: 'group', title: '样式主题', display: 'accordion', items: [
      { name: 'theme', title: '主题风格', setter: makeSetter('theme', 'SelectSetter', {
        options: [
          { label: '暗色(大屏)', value: 'dark' },
          { label: '亮色', value: 'light' },
          { label: '自定义', value: 'custom' }
        ],
        defaultValue: 'dark'
      })},
      { name: 'backgroundColor', title: '背景颜色', setter: makeSetter('backgroundColor', 'StringSetter', { defaultValue: '#0a1a3a' }) },
      { name: 'colorScheme', title: '配色方案', setter: makeSetter('colorScheme', 'SelectSetter', {
        options: [
          { label: '蓝色系', value: 'blue' },
          { label: '红色系', value: 'red' },
          { label: '绿色系', value: 'green' },
          { label: '彩虹渐变', value: 'rainbow' }
        ],
        defaultValue: 'blue'
      })},
    ]},
    { type: 'group', title: '标题设置', display: 'accordion', items: [
      { name: 'titleText', title: '主标题', setter: makeSetter('title.text', 'StringSetter', { defaultValue: '中国地图数据展示' }) },
      { name: 'titleColor', title: '标题颜色', setter: makeSetter('title.textStyle.color', 'StringSetter', { defaultValue: '#ffffff' }) },
      { name: 'titleFontSize', title: '标题字号', setter: makeSetter('title.textStyle.fontSize', 'NumberSetter', { defaultValue: 18 }) },
    ]},
    { type: 'group', title: '交互设置', display: 'accordion', items: [
      { name: 'showTooltip', title: '显示提示框', setter: makeSetter('showTooltip', 'BoolSetter', { defaultValue: true }) },
      { name: 'showLegend', title: '显示图例', setter: makeSetter('showLegend', 'BoolSetter', { defaultValue: true }) },
      { name: 'animationDuration', title: '动画时长(ms)', setter: makeSetter('animationDuration', 'NumberSetter', { defaultValue: 1000 }) },
    ]},
    { type: 'group', title: '完整配置', display: 'accordion', items: [
      { name: 'option', title: '配置对象', setter: { componentName: 'JsonSetter', props: { placeholder: 'ECharts 地图配置对象' } } },
    ]},
  ],
};

const baseProps = [
  { name: 'option', propType: 'object', description: 'ECharts 配置对象' },
  { name: 'style', propType: 'object', description: '样式', defaultValue: { width: '100%', height: '400px' } },
  { name: 'className', propType: 'string', description: '类名' },
  { name: 'theme', propType: 'string', description: '主题' },
  { name: 'notMerge', propType: 'bool', description: '是否不合并配置', defaultValue: false },
  { name: 'lazyUpdate', propType: 'bool', description: '是否懒更新', defaultValue: true },
];

const dataCardConfigure = {
  supports: { style: true },
  props: [
    { type: 'group', title: '基础配置', display: 'accordion', items: [
      { name: 'title', title: '标题', setter: 'StringSetter', defaultValue: '数据卡片' },
      { name: 'value', title: '数值', setter: 'StringSetter', defaultValue: '0' },
      { name: 'unit', title: '单位', setter: 'StringSetter', defaultValue: '' },
      { name: 'color', title: '主题色', setter: 'StringSetter', defaultValue: '#1a90ff' },
    ]},
    { type: 'group', title: '趋势配置', display: 'accordion', items: [
      { name: 'trendValue', title: '趋势值', setter: 'StringSetter' },
      { name: 'trendType', title: '趋势类型', setter: { componentName: 'SelectSetter', props: {
        options: [
          { label: '上升', value: 'up' },
          { label: '下降', value: 'down' },
          { label: '持平', value: 'stable' },
        ],
        defaultValue: 'up'
      }}},
    ]},
  ],
};

const dashboardLayoutConfigure = {
  supports: { style: true },
  props: [
    { type: 'group', title: '标题配置', display: 'accordion', items: [
      { name: 'title', title: '主标题', setter: 'StringSetter', defaultValue: '数据可视化大屏' },
      { name: 'subtitle', title: '副标题', setter: 'StringSetter' },
    ]},
    { type: 'group', title: '样式配置', display: 'accordion', items: [
      { name: 'backgroundColor', title: '背景颜色', setter: 'StringSetter', defaultValue: '#0a1a3a' },
    ]},
  ],
};

const chartPanelConfigure = {
  supports: { style: true },
  props: [
    { type: 'group', title: '面板配置', display: 'accordion', items: [
      { name: 'title', title: '面板标题', setter: 'StringSetter', defaultValue: '图表面板' },
    ]},
  ],
};

const mapPanelConfigure = {
  supports: { style: true },
  props: [
    { type: 'group', title: '面板配置', display: 'accordion', items: [
      { name: 'title', title: '面板标题', setter: 'StringSetter', defaultValue: '地图面板' },
      { name: 'mapType', title: '地图类型', setter: { componentName: 'SelectSetter', props: {
        options: [
          { label: '分省填色', value: 'fillColor' },
          { label: '散点图', value: 'scatter' },
          { label: '动态散点', value: 'effectScatter' },
          { label: '热力图', value: 'heatMap' },
          { label: '流向线', value: 'lines' },
        ],
        defaultValue: 'fillColor'
      }}},
      { name: 'height', title: '高度', setter: 'StringSetter', defaultValue: '500px' },
    ]},
    { type: 'group', title: '数据配置', display: 'accordion', items: [
      { name: 'mapData', title: '地图数据', setter: { componentName: 'JsonSetter', props: { placeholder: '地图数据' } } },
    ]},
  ],
};

export const components = [
  {
    componentName: 'EChartsPie',
    title: 'ECharts 饼图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsPie', destructuring: true },
    props: baseProps,
    configure: pieConfigure,
    icon: Icons.pie,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础饼图', schema: { componentName: 'EChartsPie', props: { option: defaultPieOption, style: { width: '100%', height: '400px' } } } },
      { title: '环形图', schema: { componentName: 'EChartsPie', props: { option: { ...defaultPieOption, title: { ...defaultPieOption.title, text: '环形图示例' }, series: [{ ...defaultPieOption.series[0], radius: ['40%', '70%'] }] }, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsLine',
    title: 'ECharts 折线图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsLine', destructuring: true },
    props: baseProps,
    configure: lineConfigure,
    icon: Icons.line,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础折线图', schema: { componentName: 'EChartsLine', props: { option: defaultLineOption, style: { width: '100%', height: '400px' } } } },
      { title: '平滑折线图', schema: { componentName: 'EChartsLine', props: { option: { ...defaultLineOption, title: { ...defaultLineOption.title, text: '平滑折线图' }, series: [{ ...defaultLineOption.series[0], smooth: true }] }, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsBar',
    title: 'ECharts 柱状图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsBar', destructuring: true },
    props: baseProps,
    configure: barConfigure,
    icon: Icons.bar,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础柱状图', schema: { componentName: 'EChartsBar', props: { option: defaultBarOption, style: { width: '100%', height: '400px' } } } },
      { title: '圆角柱状图', schema: { componentName: 'EChartsBar', props: { option: { ...defaultBarOption, title: { ...defaultBarOption.title, text: '圆角柱状图' }, series: [{ ...defaultBarOption.series[0], itemStyle: { borderRadius: [4, 4, 0, 0] } }] }, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsScatter',
    title: 'ECharts 散点图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsScatter', destructuring: true },
    props: baseProps,
    configure: scatterConfigure,
    icon: Icons.scatter,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础散点图', schema: { componentName: 'EChartsScatter', props: { option: defaultScatterOption, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsArea',
    title: 'ECharts 面积图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsArea', destructuring: true },
    props: baseProps,
    configure: areaConfigure,
    icon: Icons.area,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '堆叠面积图', schema: { componentName: 'EChartsArea', props: { option: defaultAreaOption, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsRadar',
    title: 'ECharts 雷达图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsRadar', destructuring: true },
    props: baseProps,
    configure: radarConfigure,
    icon: Icons.radar,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础雷达图', schema: { componentName: 'EChartsRadar', props: { option: defaultRadarOption, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsGauge',
    title: 'ECharts 仪表盘',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsGauge', destructuring: true },
    props: baseProps,
    configure: gaugeConfigure,
    icon: Icons.gauge,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础仪表盘', schema: { componentName: 'EChartsGauge', props: { option: defaultGaugeOption, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsFunnel',
    title: 'ECharts 漏斗图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsFunnel', destructuring: true },
    props: baseProps,
    configure: funnelConfigure,
    icon: Icons.funnel,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '基础漏斗图', schema: { componentName: 'EChartsFunnel', props: { option: defaultFunnelOption, style: { width: '100%', height: '400px' } } } },
    ],
  },
  {
    componentName: 'EChartsMap',
    title: 'ECharts 地图',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'EChartsMap', destructuring: true },
    props: baseProps,
    configure: mapConfigure,
    icon: Icons.pie,
    category: '图表组件',
    group: 'ECharts图表',
    snippets: [
      { title: '分省填色地图', schema: { componentName: 'EChartsMap', props: { option: defaultMapOption, style: { width: '100%', height: '500px' }, mapType: 'china', visualType: 'fillColor' } } },
      { title: '散点地图', schema: { componentName: 'EChartsMap', props: { option: defaultMapOption, style: { width: '100%', height: '500px' }, mapType: 'china', visualType: 'scatter' } } },
      { title: '动态散点地图', schema: { componentName: 'EChartsMap', props: { option: defaultMapOption, style: { width: '100%', height: '500px' }, mapType: 'china', visualType: 'effectScatter' } } },
      { title: '热力图地图', schema: { componentName: 'EChartsMap', props: { option: defaultMapOption, style: { width: '100%', height: '500px' }, mapType: 'china', visualType: 'heatMap' } } },
      { title: '流向线地图', schema: { componentName: 'EChartsMap', props: { option: defaultMapOption, style: { width: '100%', height: '500px' }, mapType: 'china', visualType: 'lines' } } },
    ],
  },
  {
    componentName: 'DataCard',
    title: '数据卡片',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'DataCard', destructuring: true },
    props: [
      { name: 'title', propType: 'string', description: '标题', defaultValue: '数据卡片' },
      { name: 'value', propType: 'string', description: '数值', defaultValue: '0' },
      { name: 'unit', propType: 'string', description: '单位' },
      { name: 'color', propType: 'string', description: '主题色', defaultValue: '#1a90ff' },
      { name: 'style', propType: 'object', description: '样式' },
    ],
    configure: dataCardConfigure,
    icon: Icons.pie,
    category: '复合组件',
    group: '大屏组件',
    snippets: [
      { title: '数据卡片', schema: { componentName: 'DataCard', props: { title: '总销售额', value: '1,234,567', unit: '元', color: '#1a90ff' } } },
      { title: '趋势卡片', schema: { componentName: 'DataCard', props: { title: '月增长', value: '+15.8%', color: '#52c41a', trend: { value: '较上月', type: 'up' } } } },
    ],
  },
  {
    componentName: 'DashboardLayout',
    title: '大屏布局',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'DashboardLayout', destructuring: true },
    props: [
      { name: 'title', propType: 'string', description: '主标题', defaultValue: '数据可视化大屏' },
      { name: 'subtitle', propType: 'string', description: '副标题' },
      { name: 'backgroundColor', propType: 'string', description: '背景颜色', defaultValue: '#0a1a3a' },
      { name: 'style', propType: 'object', description: '样式' },
    ],
    configure: dashboardLayoutConfigure,
    icon: Icons.pie,
    category: '复合组件',
    group: '大屏组件',
    snippets: [
      { title: '大屏布局', schema: { componentName: 'DashboardLayout', props: { title: '数据可视化大屏', backgroundColor: '#0a1a3a' } } },
    ],
  },
  {
    componentName: 'ChartPanel',
    title: '图表面板',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'ChartPanel', destructuring: true },
    props: [
      { name: 'title', propType: 'string', description: '面板标题', defaultValue: '图表面板' },
      { name: 'style', propType: 'object', description: '样式' },
    ],
    configure: chartPanelConfigure,
    icon: Icons.pie,
    category: '复合组件',
    group: '大屏组件',
    snippets: [
      { title: '图表面板', schema: { componentName: 'ChartPanel', props: { title: '销售趋势' } } },
    ],
  },
  {
    componentName: 'MapPanel',
    title: '地图面板',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: { package: '@jenusdong/echarts-for-lowcode', version: '1.2.1', exportName: 'MapPanel', destructuring: true },
    props: [
      { name: 'title', propType: 'string', description: '面板标题', defaultValue: '地图面板' },
      { name: 'mapType', propType: 'string', description: '地图类型', defaultValue: 'fillColor' },
      { name: 'height', propType: 'string', description: '高度', defaultValue: '500px' },
      { name: 'style', propType: 'object', description: '样式' },
    ],
    configure: mapPanelConfigure,
    icon: Icons.pie,
    category: '复合组件',
    group: '大屏组件',
    snippets: [
      { title: '地图面板', schema: { componentName: 'MapPanel', props: { title: '全国销售分布', mapType: 'fillColor', height: '500px' } } },
    ],
  },
];

export default {
  components,
};
