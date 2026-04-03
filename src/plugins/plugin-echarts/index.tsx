import React from 'react'
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { BarChartOutlined } from '@ant-design/icons';
import JSONPathSetter from './setters/JSONPathSetter';

const defaultOption = {
  title: {
    text: '图表标题',
    subtext: '',
    left: 'center',
    top: 'top'
  },
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove'
  },
  legend: {
    data: ['系列1'],
    left: 'center',
    top: 'top',
    orient: 'horizontal'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '系列1',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: false
    }
  ],
  grid: {
    left: '10%',
    right: '10%',
    top: '60',
    bottom: '60'
  }
};

const EChartsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'EChartsPlugin',
    async init() {
      const { material, setters } = ctx;

      setters.registerSetter('JSONPathSetter', JSONPathSetter);

      material.loadIncrementalAssets({
        version: '1.0.0',
        components: [
          {
            componentName: 'ECharts',
            title: 'ECharts 图表',
            docUrl: '',
            screenshot: '',
            npm: {
              package: 'echarts-component',
              version: '1.0.0',
              exportName: 'EChartsComponent',
              destructuring: true,
            },
            props: [
              {
                name: 'optionJson',
                propType: 'string',
                description: 'ECharts 配置 JSON（可直接粘贴官网示例）',
                defaultValue: JSON.stringify(defaultOption, null, 2),
                setter: {
                  componentName: 'TextAreaSetter',
                  props: {
                    placeholder: '粘贴 ECharts 官网示例的 JSON 配置',
                    autoSize: { minRows: 10, maxRows: 30 },
                  },
                },
              },
              {
                name: 'style',
                propType: 'object',
                description: '样式',
                defaultValue: { width: '100%', height: '400px' },
                setter: {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: [
                        { name: 'width', description: '宽度', setter: 'StringSetter' },
                        { name: 'height', description: '高度', setter: 'StringSetter' },
                      ],
                    },
                  },
                },
              },
              { name: 'className', propType: 'string', description: '类名', setter: 'StringSetter' },
              { name: 'theme', propType: 'string', description: '主题', setter: 'StringSetter' },
              { name: 'notMerge', propType: 'bool', description: '是否不合并配置', defaultValue: false, setter: 'BoolSetter' },
              { name: 'lazyUpdate', propType: 'bool', description: '是否懒更新', defaultValue: false, setter: 'BoolSetter' },
            ],
            configure: {
              supports: {
                style: true,
                events: [
                  { name: 'onClick', description: '点击事件' },
                  { name: 'onMouseover', description: '鼠标悬停事件' },
                  { name: 'onMouseout', description: '鼠标移出事件' },
                ],
              },
              props: [
                {
                  type: 'group',
                  title: '标题配置',
                  display: 'accordion',
                  items: [
                    { name: 'titleText', title: '主标题', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'title.text', setterType: 'StringSetter', defaultValue: '图表标题' } } },
                    { name: 'titleSubtext', title: '副标题', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'title.subtext', setterType: 'StringSetter', defaultValue: '' } } },
                    { name: 'titleLeft', title: '水平位置', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'title.left', setterType: 'SelectSetter', options: [{ label: '自动', value: 'auto' }, { label: '左对齐', value: 'left' }, { label: '居中', value: 'center' }, { label: '右对齐', value: 'right' }], defaultValue: 'center' } } },
                    { name: 'titleTop', title: '垂直位置', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'title.top', setterType: 'SelectSetter', options: [{ label: '自动', value: 'auto' }, { label: '顶部', value: 'top' }, { label: '中间', value: 'middle' }, { label: '底部', value: 'bottom' }], defaultValue: 'top' } } },
                  ],
                },
                {
                  type: 'group',
                  title: '图例配置',
                  display: 'accordion',
                  items: [
                    { name: 'legendLeft', title: '水平位置', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'legend.left', setterType: 'SelectSetter', options: [{ label: '自动', value: 'auto' }, { label: '左对齐', value: 'left' }, { label: '居中', value: 'center' }, { label: '右对齐', value: 'right' }], defaultValue: 'center' } } },
                    { name: 'legendTop', title: '垂直位置', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'legend.top', setterType: 'SelectSetter', options: [{ label: '自动', value: 'auto' }, { label: '顶部', value: 'top' }, { label: '中间', value: 'middle' }, { label: '底部', value: 'bottom' }], defaultValue: 'top' } } },
                    { name: 'legendOrient', title: '布局朝向', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'legend.orient', setterType: 'SelectSetter', options: [{ label: '横向', value: 'horizontal' }, { label: '纵向', value: 'vertical' }], defaultValue: 'horizontal' } } },
                  ],
                },
                {
                  type: 'group',
                  title: '提示框配置',
                  display: 'accordion',
                  items: [
                    { name: 'tooltipTrigger', title: '触发类型', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'tooltip.trigger', setterType: 'SelectSetter', options: [{ label: '数据项图形触发', value: 'item' }, { label: '坐标轴触发', value: 'axis' }, { label: '不触发', value: 'none' }], defaultValue: 'axis' } } },
                    { name: 'tooltipTriggerOn', title: '触发条件', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'tooltip.triggerOn', setterType: 'SelectSetter', options: [{ label: '鼠标移动时', value: 'mousemove' }, { label: '点击时', value: 'click' }, { label: '同时移动和点击', value: 'mousemove|click' }], defaultValue: 'mousemove' } } },
                  ],
                },
                {
                  type: 'group',
                  title: 'X轴配置',
                  display: 'accordion',
                  items: [
                    { name: 'xAxisType', title: '坐标轴类型', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'xAxis.type', setterType: 'SelectSetter', options: [{ label: '类目轴', value: 'category' }, { label: '数值轴', value: 'value' }, { label: '时间轴', value: 'time' }, { label: '对数轴', value: 'log' }], defaultValue: 'category' } } },
                    { name: 'xAxisName', title: '坐标轴名称', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'xAxis.name', setterType: 'StringSetter' } } },
                  ],
                },
                {
                  type: 'group',
                  title: 'Y轴配置',
                  display: 'accordion',
                  items: [
                    { name: 'yAxisType', title: '坐标轴类型', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'yAxis.type', setterType: 'SelectSetter', options: [{ label: '数值轴', value: 'value' }, { label: '类目轴', value: 'category' }, { label: '时间轴', value: 'time' }, { label: '对数轴', value: 'log' }], defaultValue: 'value' } } },
                    { name: 'yAxisName', title: '坐标轴名称', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'yAxis.name', setterType: 'StringSetter' } } },
                    { name: 'yAxisMin', title: '最小值', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'yAxis.min', setterType: 'NumberSetter' } } },
                    { name: 'yAxisMax', title: '最大值', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'yAxis.max', setterType: 'NumberSetter' } } },
                  ],
                },
                {
                  type: 'group',
                  title: '系列配置',
                  display: 'accordion',
                  items: [
                    { name: 'seriesType', title: '图表类型', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'series.0.type', setterType: 'SelectSetter', options: [{ label: '折线图', value: 'line' }, { label: '柱状图', value: 'bar' }, { label: '饼图', value: 'pie' }, { label: '散点图', value: 'scatter' }, { label: '雷达图', value: 'radar' }, { label: '仪表盘', value: 'gauge' }], defaultValue: 'line' } } },
                    { name: 'seriesName', title: '系列名称', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'series.0.name', setterType: 'StringSetter', defaultValue: '系列1' } } },
                    { name: 'seriesSmooth', title: '平滑曲线', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'series.0.smooth', setterType: 'BoolSetter', defaultValue: false } } },
                  ],
                },
                {
                  type: 'group',
                  title: '网格配置',
                  display: 'accordion',
                  items: [
                    { name: 'gridLeft', title: '左边距', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'grid.left', setterType: 'StringSetter', defaultValue: '10%' } } },
                    { name: 'gridRight', title: '右边距', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'grid.right', setterType: 'StringSetter', defaultValue: '10%' } } },
                    { name: 'gridTop', title: '上边距', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'grid.top', setterType: 'StringSetter', defaultValue: '60' } } },
                    { name: 'gridBottom', title: '下边距', setter: { componentName: 'JSONPathSetter', props: { jsonPath: 'grid.bottom', setterType: 'StringSetter', defaultValue: '60' } } },
                  ],
                },

                {
                  type: 'group',
                  title: '完整配置',
                  display: 'accordion',
                  items: [
                    {
                      name: 'optionJson',
                      title: 'JSON 配置',
                      setter: {
                        componentName: 'TextAreaSetter',
                        props: {
                          placeholder: '粘贴 ECharts 官网示例的 JSON 配置',
                          autoSize: { minRows: 15, maxRows: 40 },
                        },
                      },
                    },
                  ],
                },
              ],
            },
            icon: React.createElement(BarChartOutlined),
            category: '信息展示',
            group: '精选组件',
            snippets: [
              {
                title: '折线图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify(defaultOption, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '柱状图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '柱状图示例' },
                      tooltip: { trigger: 'axis' },
                      xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                      },
                      yAxis: { type: 'value' },
                      series: [
                        {
                          name: '销量',
                          data: [120, 200, 150, 80, 70, 110, 130],
                          type: 'bar',
                        },
                      ],
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '饼图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '饼图示例', left: 'center' },
                      tooltip: { trigger: 'item' },
                      legend: { orient: 'vertical', left: 'left' },
                      series: [
                        {
                          name: '访问来源',
                          type: 'pie',
                          radius: '50%',
                          data: [
                            { value: 1048, name: '搜索引擎' },
                            { value: 735, name: '直接访问' },
                            { value: 580, name: '邮件营销' },
                            { value: 484, name: '联盟广告' },
                            { value: 300, name: '视频广告' },
                          ],
                        },
                      ],
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '散点图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '散点图示例' },
                      tooltip: { trigger: 'item' },
                      xAxis: {},
                      yAxis: {},
                      series: [
                        {
                          symbolSize: 20,
                          data: [
                            [10.0, 8.04],
                            [8.07, 6.95],
                            [13.0, 7.58],
                            [9.05, 8.81],
                            [11.0, 8.33],
                            [14.0, 7.66],
                            [13.4, 6.81],
                            [10.0, 6.33],
                            [14.0, 8.96],
                            [12.5, 6.82],
                            [9.15, 7.20],
                            [11.5, 7.20],
                            [3.03, 4.23],
                            [12.2, 7.83],
                            [2.02, 4.47],
                            [1.05, 3.33],
                            [4.05, 4.96],
                            [6.03, 7.24],
                            [12.0, 6.26],
                            [12.0, 8.84],
                            [7.08, 5.82],
                            [5.02, 5.68]
                          ],
                          type: 'scatter'
                        }
                      ]
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '环形图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '环形图示例', left: 'center' },
                      tooltip: { trigger: 'item' },
                      legend: { orient: 'vertical', left: 'left' },
                      series: [
                        {
                          name: '访问来源',
                          type: 'pie',
                          radius: ['40%', '70%'],
                          data: [
                            { value: 1048, name: '搜索引擎' },
                            { value: 735, name: '直接访问' },
                            { value: 580, name: '邮件营销' },
                            { value: 484, name: '联盟广告' },
                            { value: 300, name: '视频广告' },
                          ],
                        },
                      ],
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '折线柱状混合图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '折线柱状混合图' },
                      tooltip: { trigger: 'axis' },
                      legend: { data: ['销量', '利润率'] },
                      xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                      },
                      yAxis: [
                        { type: 'value', name: '销量' },
                        { type: 'value', name: '利润率', axisLabel: { formatter: '{value} %' } }
                      ],
                      series: [
                        {
                          name: '销量',
                          type: 'bar',
                          data: [120, 200, 150, 80, 70, 110, 130]
                        },
                        {
                          name: '利润率',
                          type: 'line',
                          yAxisIndex: 1,
                          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
                        }
                      ]
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
              {
                title: '面积图',
                schema: {
                  componentName: 'ECharts',
                  props: {
                    optionJson: JSON.stringify({
                      title: { text: '面积图示例' },
                      tooltip: { trigger: 'axis' },
                      xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                      },
                      yAxis: { type: 'value' },
                      series: [
                        {
                          name: '邮件营销',
                          type: 'line',
                          stack: 'Total',
                          areaStyle: {},
                          data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                          name: '联盟广告',
                          type: 'line',
                          stack: 'Total',
                          areaStyle: {},
                          data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                          name: '视频广告',
                          type: 'line',
                          stack: 'Total',
                          areaStyle: {},
                          data: [150, 232, 201, 154, 190, 330, 410]
                        }
                      ]
                    }, null, 2),
                    style: { width: '100%', height: '400px' },
                  },
                },
              },
            ],
          },
        ],
      });
    },
  };
};

EChartsPlugin.pluginName = 'EChartsPlugin';

export default EChartsPlugin;
