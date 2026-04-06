import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const OrderListMeta: IPublicTypeComponentMetadata = {
  componentName: 'OrderList',
  title: '订单列表',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'OrderList',
    destructuring: true,
  },
  props: [
    {
      name: 'dataSourceType',
      propType: 'string',
      description: '数据源类型',
      defaultValue: 'mock',
    },
    {
      name: 'status',
      propType: 'string',
      description: '订单状态筛选',
      defaultValue: '',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [],
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
                  { label: 'Mock 数据', value: 'mock' },
                  { label: 'REST API', value: 'rest' },
                ],
              },
            },
          },
          {
            name: 'status',
            title: '状态筛选',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { label: '全部', value: '' },
                  { label: '待付款', value: 'pending' },
                  { label: '已付款', value: 'paid' },
                  { label: '已发货', value: 'shipped' },
                  { label: '已完成', value: 'completed' },
                  { label: '已取消', value: 'cancelled' },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务组件',
  group: '订单管理',
  snippets: [
    {
      title: '订单列表',
      schema: {
        componentName: 'OrderList',
        props: {},
      },
    },
  ],
}

export default OrderListMeta
