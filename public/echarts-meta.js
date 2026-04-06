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
    components: [
      {
        componentName: 'ECharts',
        title: 'ECharts 图表',
        docUrl: '',
        screenshot: '',
        devMode: 'proCode',
        npm: {
          package: 'echarts-for-react',
          version: '^3.0.2',
          exportName: 'default',
          destructuring: false,
        },
        props: [
          {
            name: 'option',
            propType: 'object',
            description: 'ECharts 配置对象',
            defaultValue: defaultOption,
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
              title: '完整配置',
              display: 'accordion',
              items: [
                {
                  name: 'option',
                  title: '配置对象',
                  setter: {
                    componentName: 'JsonSetter',
                    props: {
                      placeholder: 'ECharts 配置对象',
                    }
                  },
                  defaultValue: defaultOption
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
                option: {
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
                },
                style: { width: '100%', height: '400px' },
              },
            },
          },
          {
            title: '柱状图',
            schema: {
              componentName: 'ECharts',
              props: {
                option: {
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
                },
                style: { width: '100%', height: '400px' },
              },
            },
          },
          {
            title: '饼图',
            schema: {
              componentName: 'ECharts',
              props: {
                option: {
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
                },
                style: { width: '100%', height: '400px' },
              },
            },
          },
        ],
      }
    ]
  };
}));
