import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { Icons } from './icons'

const defaultCouponMockData = {
  code: 200,
  message: 'success',
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 3,
    list: [
      {
        id: 1,
        name: '新用户专享券',
        type: 0,
        platform: 0,
        count: 1000,
        amount: 50,
        perLimit: 1,
        minPoint: 200,
        startTime: '2024-01-01',
        endTime: '2024-12-31',
        useType: 0,
        note: '新用户首单满200减50',
        publishCount: 500,
        useCount: 320,
        receiveCount: 450,
        enableTime: '7',
        code: 'NEWUSER50',
        memberLevel: 0,
      },
      {
        id: 2,
        name: '限时折扣券',
        type: 1,
        platform: 3,
        count: 500,
        amount: 8,
        perLimit: 2,
        minPoint: 100,
        startTime: '2024-01-15',
        endTime: '2024-02-15',
        useType: 1,
        note: 'APP专享8折券',
        publishCount: 300,
        useCount: 180,
        receiveCount: 280,
        enableTime: '3',
        code: 'APPDISCOUNT',
        memberLevel: 1,
      },
      {
        id: 3,
        name: '会员专享券',
        type: 0,
        platform: 0,
        count: 200,
        amount: 100,
        perLimit: 1,
        minPoint: 500,
        startTime: '2024-01-01',
        endTime: '2024-06-30',
        useType: 2,
        note: '会员专享满500减100',
        publishCount: 150,
        useCount: 80,
        receiveCount: 120,
        enableTime: '15',
        code: 'VIP100',
        memberLevel: 2,
      },
    ],
  },
}

const couponCardMeta = {
  componentName: 'CouponCard',
  title: '优惠券管理',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'CouponCard',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  category: '电商业务',
  group: '营销管理',
  icon: Icons.gift,
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
      defaultValue: JSON.stringify(defaultCouponMockData),
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
        { name: 'onCreateCoupon', description: '创建优惠券' },
        { name: 'onEditCoupon', description: '编辑优惠券' },
        { name: 'onDeleteCoupon', description: '删除优惠券' },
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
              placeholder: '例如: /api/coupons',
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
              placeholder: '例如: state.couponList',
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
        ],
      },
    ],
  },
  snippets: [
    {
      title: '优惠券管理',
      screenshot: '',
      schema: {
        componentName: 'CouponCard',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultCouponMockData),
          showCreateButton: true,
          showFilter: true,
          showStatistics: true,
        },
      },
    },
    {
      title: '优惠券管理（简洁模式）',
      screenshot: '',
      schema: {
        componentName: 'CouponCard',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultCouponMockData),
          showCreateButton: false,
          showFilter: false,
          showStatistics: false,
        },
      },
    },
    {
      title: '优惠券管理（API模式）',
      screenshot: '',
      schema: {
        componentName: 'CouponCard',
        props: {
          dataSourceType: 'rest',
          api: '/api/coupons',
          method: 'GET',
          showCreateButton: true,
          showFilter: true,
          showStatistics: true,
        },
      },
    },
  ],
}

export default couponCardMeta
