import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const MarketingManagerMeta: IPublicTypeComponentMetadata = {
  componentName: 'MarketingManager',
  title: '营销活动管理',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'MarketingManager',
    destructuring: true,
  },
  props: [
    {
      name: 'type',
      propType: 'string',
      description: '营销类型',
      defaultValue: 'coupon',
    },
    {
      name: 'showStats',
      propType: 'bool',
      description: '显示统计数据',
      defaultValue: true,
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
        title: '营销配置',
        display: 'accordion',
        items: [
          {
            name: 'type',
            title: '营销类型',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { label: '优惠券管理', value: 'coupon' },
                  { label: '促销活动', value: 'promotion' },
                  { label: '秒杀活动', value: 'flash' },
                  { label: '新品推荐', value: 'new' },
                  { label: '人气推荐', value: 'hot' },
                ],
              },
            },
          },
          {
            name: 'showStats',
            title: '显示统计',
            setter: 'BoolSetter',
            extraProps: { display: 'block' }
          },
        ],
      },
    ],
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务组件',
  group: '营销管理',
  snippets: [
    {
      title: '营销活动管理',
      schema: {
        componentName: 'MarketingManager',
        props: {
          type: 'coupon',
          showStats: true,
        },
      },
    },
  ],
}

export default MarketingManagerMeta
