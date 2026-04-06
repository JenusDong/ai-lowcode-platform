import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const ProductListMeta: IPublicTypeComponentMetadata = {
  componentName: 'ProductList',
  title: '商品列表',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'ProductList',
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
      name: 'dataSource',
      propType: 'string',
      description: '数据源配置',
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
                  { label: '变量绑定', value: 'variable' },
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
  group: '商品管理',
  snippets: [
    {
      title: '商品列表',
      schema: {
        componentName: 'ProductList',
        props: {},
      },
    },
  ],
}

export default ProductListMeta
