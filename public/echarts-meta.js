(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.EChartsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  var defaultOption = {
    title: {
      text: '图表标题',
      subtext: '副标题',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['系列1'],
      top: 'bottom'
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
        type: 'line'
      }
    ]
  };

  return {
    componentName: 'ECharts',
    title: 'ECharts 图表',
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
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
        description: 'ECharts 配置 JSON',
        defaultValue: JSON.stringify(defaultOption, null, 2),
      },
      {
        name: 'style',
        propType: 'object',
        description: '样式',
        defaultValue: {
          width: '100%',
          height: '400px',
        },
      },
      {
        name: 'className',
        propType: 'string',
        description: '类名',
      },
      {
        name: 'theme',
        propType: 'string',
        description: '主题',
      },
      {
        name: 'notMerge',
        propType: 'bool',
        description: '是否不合并配置',
        defaultValue: false,
      },
      {
        name: 'lazyUpdate',
        propType: 'bool',
        description: '是否懒更新',
        defaultValue: false,
      },
    ],
    configure: {
      supports: {
        style: true,
        events: [
          {
            name: 'onClick',
            description: '点击事件',
          },
          {
            name: 'onMouseover',
            description: '鼠标悬停事件',
          },
          {
            name: 'onMouseout',
            description: '鼠标移出事件',
          },
        ],
      },
      props: [
        {
          type: 'group',
          title: '标题配置',
          display: 'accordion',
          items: [
            {
              name: 'titleShow',
              title: '显示标题',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'titleText',
              title: '主标题',
              setter: 'StringSetter',
              defaultValue: '图表标题'
            },
            {
              name: 'titleSubtext',
              title: '副标题',
              setter: 'StringSetter',
              defaultValue: ''
            },
            {
              name: 'titleLink',
              title: '标题链接',
              setter: 'StringSetter',
              defaultValue: ''
            },
            {
              name: 'titleLeft',
              title: '水平位置',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '自动', value: 'auto' },
                    { label: '左对齐', value: 'left' },
                    { label: '居中', value: 'center' },
                    { label: '右对齐', value: 'right' }
                  ]
                }
              },
              defaultValue: 'center'
            },
            {
              name: 'titleTop',
              title: '垂直位置',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '自动', value: 'auto' },
                    { label: '顶部', value: 'top' },
                    { label: '中间', value: 'middle' },
                    { label: '底部', value: 'bottom' }
                  ]
                }
              },
              defaultValue: 'top'
            },
            {
              name: 'titleTextColor',
              title: '文字颜色',
              setter: 'StringSetter',
              defaultValue: '#333'
            },
            {
              name: 'titleFontSize',
              title: '字体大小',
              setter: 'NumberSetter',
              defaultValue: 18
            }
          ]
        },
        {
          type: 'group',
          title: '图例配置',
          display: 'accordion',
          items: [
            {
              name: 'legendShow',
              title: '显示图例',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'legendLeft',
              title: '水平位置',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '自动', value: 'auto' },
                    { label: '左对齐', value: 'left' },
                    { label: '居中', value: 'center' },
                    { label: '右对齐', value: 'right' }
                  ]
                }
              },
              defaultValue: 'center'
            },
            {
              name: 'legendTop',
              title: '垂直位置',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '自动', value: 'auto' },
                    { label: '顶部', value: 'top' },
                    { label: '中间', value: 'middle' },
                    { label: '底部', value: 'bottom' }
                  ]
                }
              },
              defaultValue: 'top'
            },
            {
              name: 'legendOrient',
              title: '布局朝向',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '横向', value: 'horizontal' },
                    { label: '纵向', value: 'vertical' }
                  ]
                }
              },
              defaultValue: 'horizontal'
            }
          ]
        },
        {
          type: 'group',
          title: '提示框配置',
          display: 'accordion',
          items: [
            {
              name: 'tooltipShow',
              title: '显示提示框',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'tooltipTrigger',
              title: '触发类型',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '数据项图形触发', value: 'item' },
                    { label: '坐标轴触发', value: 'axis' },
                    { label: '不触发', value: 'none' }
                  ]
                }
              },
              defaultValue: 'axis'
            },
            {
              name: 'tooltipTriggerOn',
              title: '触发条件',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '鼠标移动时', value: 'mousemove' },
                    { label: '点击时', value: 'click' },
                    { label: '同时移动和点击', value: 'mousemove|click' }
                  ]
                }
              },
              defaultValue: 'mousemove'
            },
            {
              name: 'tooltipConfine',
              title: '限制在图表区域内',
              setter: 'BoolSetter',
              defaultValue: false
            }
          ]
        },
        {
          type: 'group',
          title: 'X轴配置',
          display: 'accordion',
          items: [
            {
              name: 'xAxisShow',
              title: '显示X轴',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'xAxisType',
              title: '坐标轴类型',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '类目轴', value: 'category' },
                    { label: '数值轴', value: 'value' },
                    { label: '时间轴', value: 'time' },
                    { label: '对数轴', value: 'log' }
                  ]
                }
              },
              defaultValue: 'category'
            },
            {
              name: 'xAxisName',
              title: '坐标轴名称',
              setter: 'StringSetter'
            },
            {
              name: 'xAxisInverse',
              title: '反向坐标轴',
              setter: 'BoolSetter',
              defaultValue: false
            }
          ]
        },
        {
          type: 'group',
          title: 'Y轴配置',
          display: 'accordion',
          items: [
            {
              name: 'yAxisShow',
              title: '显示Y轴',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'yAxisType',
              title: '坐标轴类型',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '数值轴', value: 'value' },
                    { label: '类目轴', value: 'category' },
                    { label: '时间轴', value: 'time' },
                    { label: '对数轴', value: 'log' }
                  ]
                }
              },
              defaultValue: 'value'
            },
            {
              name: 'yAxisName',
              title: '坐标轴名称',
              setter: 'StringSetter'
            },
            {
              name: 'yAxisMin',
              title: '最小值',
              setter: 'NumberSetter'
            },
            {
              name: 'yAxisMax',
              title: '最大值',
              setter: 'NumberSetter'
            }
          ]
        },
        {
          type: 'group',
          title: '系列配置',
          display: 'accordion',
          items: [
            {
              name: 'seriesType',
              title: '图表类型',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '折线图', value: 'line' },
                    { label: '柱状图', value: 'bar' },
                    { label: '饼图', value: 'pie' },
                    { label: '散点图', value: 'scatter' },
                    { label: '雷达图', value: 'radar' },
                    { label: '仪表盘', value: 'gauge' }
                  ]
                }
              },
              defaultValue: 'line'
            },
            {
              name: 'seriesName',
              title: '系列名称',
              setter: 'StringSetter'
            },
            {
              name: 'seriesSmooth',
              title: '平滑曲线',
              setter: 'BoolSetter',
              defaultValue: false
            },
            {
              name: 'seriesColor',
              title: '系列颜色',
              setter: 'StringSetter'
            }
          ]
        },
        {
          type: 'group',
          title: '网格配置',
          display: 'accordion',
          items: [
            {
              name: 'gridShow',
              title: '显示网格',
              setter: 'BoolSetter',
              defaultValue: false
            },
            {
              name: 'gridLeft',
              title: '左边距',
              setter: 'StringSetter',
              defaultValue: '10%'
            },
            {
              name: 'gridRight',
              title: '右边距',
              setter: 'StringSetter',
              defaultValue: '10%'
            },
            {
              name: 'gridTop',
              title: '上边距',
              setter: 'StringSetter',
              defaultValue: '60'
            },
            {
              name: 'gridBottom',
              title: '下边距',
              setter: 'StringSetter',
              defaultValue: '60'
            }
          ]
        },
        {
          type: 'group',
          title: '调色盘配置',
          display: 'accordion',
          items: [
            {
              name: 'colorShow',
              title: '启用调色盘',
              setter: 'BoolSetter',
              defaultValue: true
            },
            {
              name: 'colorPalette',
              title: '调色盘颜色',
              setter: {
                componentName: 'TextAreaSetter',
                props: {
                  placeholder: '输入颜色值，如: #5470c6, #91cc75, #fac858',
                  autoSize: { minRows: 3, maxRows: 6 },
                }
              },
              defaultValue: '#5470c6, #91cc75, #fac858, #ee6666, #73c0de, #3ba272, #fc8452, #9a60b4, #ea7ccc'
            },
            {
              name: 'colorAlpha',
              title: '透明度',
              setter: {
                componentName: 'NumberSetter',
                props: {
                  min: 0,
                  max: 1,
                  step: 0.1
                }
              },
              defaultValue: 1
            },
            {
              name: 'colorBy',
              title: '颜色分配方式',
              setter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    { label: '按系列', value: 'series' },
                    { label: '按数据', value: 'data' }
                  ]
                }
              },
              defaultValue: 'series'
            }
          ]
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
                  placeholder: '粘贴 ECharts 官网示例的 JSON 配置，此配置优先级最高',
                  autoSize: { minRows: 15, maxRows: 40 },
                }
              },
              defaultValue: JSON.stringify(defaultOption, null, 2)
            }
          ]
        }
      ]
    },
    icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
    category: '信息展示',
    group: '精选组件',
    snippets: [
      {
        title: '折线图',
        schema: {
          componentName: 'ECharts',
          props: {
            optionJson: JSON.stringify({
              title: {
                text: '折线图示例',
                left: 'center'
              },
              tooltip: {
                trigger: 'axis'
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
                  name: '销量',
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line'
                }
              ]
            }, null, 2),
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
              title: { text: '柱状图示例', left: 'center' },
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
    ],
  };
}));
