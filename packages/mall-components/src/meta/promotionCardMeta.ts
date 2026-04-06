import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { Icons } from './icons'

const defaultPromotionMockData = {
  code: 200,
  message: 'success',
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 4,
    list: [
      {
        id: 1,
        title: '双十一大促',
        startDate: '2024-11-01',
        endDate: '2024-11-11',
        status: 1,
        createTime: '2024-10-15 10:00:00',
      },
      {
        id: 2,
        title: '618年中大促',
        startDate: '2024-06-01',
        endDate: '2024-06-18',
        status: 1,
        createTime: '2024-05-20 09:00:00',
      },
      {
        id: 3,
        title: '新春季促销',
        startDate: '2024-01-20',
        endDate: '2024-02-10',
        status: 0,
        createTime: '2024-01-10 08:00:00',
      },
      {
        id: 4,
        title: '会员日特惠',
        startDate: '2024-03-15',
        endDate: '2024-03-17',
        status: 1,
        createTime: '2024-03-01 10:00:00',
      },
    ],
  },
}

const promotionCardMeta = {
  componentName: 'PromotionCard',
  title: '促销活动管理',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'PromotionCard',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  category: '电商业务',
  group: '营销管理',
  icon: Icons.star,
  props: [
    {
      name: 'dataSourceType',
      propType: 'string',
      description: '数据源类型',
      defaultValue: 'mock',
    },
    {
      name: 'api',
      propType: 'string',
      description: 'API 地址',
    },
    {
      name: 'method',
      propType: 'string',
      description: '请求方法',
      defaultValue: 'GET',
    },
    {
      name: 'mockData',
      propType: 'string',
      description: 'Mock 数据',
      defaultValue: JSON.stringify(defaultPromotionMockData),
    },
    {
      name: 'variableName',
      propType: 'string',
      description: '变量名称',
    },
    {
      name: 'showCreateButton',
      propType: 'bool',
      description: '是否显示创建按钮',
      defaultValue: true,
    },
    {
      name: 'showFilter',
      propType: 'bool',
      description: '是否显示筛选区域',
      defaultValue: true,
    },
    {
      name: 'showStatistics',
      propType: 'bool',
      description: '是否显示统计信息',
      defaultValue: true,
    },
    {
      name: 'showTimeline',
      propType: 'bool',
      description: '是否显示时间线',
      defaultValue: true,
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义样式',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
  ],
  configure: {
    supports: {
      style: true,
      className: true,
      events: [
        { name: 'onCreatePromotion', description: '创建促销活动' },
        { name: 'onEditPromotion', description: '编辑促销活动' },
        { name: 'onDeletePromotion', description: '删除促销活动' },
        { name: 'onToggleStatus', description: '切换状态' },
        { name: 'onSearch', description: '搜索' },
      ],
    },
    props: [
      {
        type: 'group',
        title: '数据源配置',
        display: 'accordion',
        items: [
          {
            name: 'dataSourceType',
            title: '数据源类型',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { label: 'REST API', value: 'rest' },
                  { label: 'Mock 数据', value: 'mock' },
                  { label: '变量绑定', value: 'variable' },
                ],
              },
            },
            extraProps: {
              display: 'block',
            },
          },
          {
            name: 'api',
            title: 'API 地址',
            setter: 'StringSetter',
            extraProps: {
              display: 'block',
              placeholder: '例如: /api/promotions',
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'rest'
            },
          },
          {
            name: 'method',
            title: '请求方法',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { label: 'GET', value: 'GET' },
                  { label: 'POST', value: 'POST' },
                ],
              },
            },
            extraProps: {
              display: 'inline',
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'rest'
            },
          },
          {
            name: 'mockData',
            title: 'Mock 数据 (JSON)',
            setter: {
              componentName: 'TextAreaSetter',
              props: {
                rows: 8,
                placeholder: '请输入 JSON 格式的 Mock 数据',
              },
            },
            extraProps: {
              display: 'block',
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'mock'
            },
          },
          {
            name: 'variableName',
            title: '变量名称',
            setter: 'StringSetter',
            extraProps: {
              display: 'block',
              placeholder: '例如: state.promotionList',
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'variable'
            },
          },
        ],
      },
      {
        type: 'group',
        title: '显示控制',
        display: 'accordion',
        items: [
          {
            name: 'showCreateButton',
            title: '显示创建按钮',
            setter: 'BoolSetter',
            extraProps: {
              display: 'block',
            },
          },
          {
            name: 'showFilter',
            title: '显示筛选区域',
            setter: 'BoolSetter',
            extraProps: {
              display: 'block',
            },
          },
          {
            name: 'showStatistics',
            title: '显示统计信息',
            setter: 'BoolSetter',
            extraProps: {
              display: 'block',
            },
          },
          {
            name: 'showTimeline',
            title: '显示时间线',
            setter: 'BoolSetter',
            extraProps: {
              display: 'block',
            },
          },
        ],
      },
    ],
  },
  snippets: [
    {
      title: '促销活动管理',
      screenshot: '',
      schema: {
        componentName: 'PromotionCard',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultPromotionMockData),
          showCreateButton: true,
          showFilter: true,
          showStatistics: true,
          showTimeline: true,
        },
      },
    },
    {
      title: '促销活动管理（简洁模式）',
      screenshot: '',
      schema: {
        componentName: 'PromotionCard',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultPromotionMockData),
          showCreateButton: false,
          showFilter: false,
          showStatistics: false,
          showTimeline: false,
        },
      },
    },
    {
      title: '促销活动管理（API模式）',
      screenshot: '',
      schema: {
        componentName: 'PromotionCard',
        props: {
          dataSourceType: 'rest',
          api: '/api/promotions',
          method: 'GET',
          showCreateButton: true,
          showFilter: true,
          showStatistics: true,
          showTimeline: true,
        },
      },
    },
  ],
}

export default promotionCardMeta
