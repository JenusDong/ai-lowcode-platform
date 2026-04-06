import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const ProductFormMeta: IPublicTypeComponentMetadata = {
  componentName: 'ProductForm',
  title: '商品表单',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'ProductForm',
    destructuring: true,
  },
  props: [
    {
      name: 'initialValues',
      propType: 'object',
      description: '表单初始值',
      defaultValue: '{}',
    },
    {
      name: 'showBasicInfo',
      propType: 'bool',
      description: '显示基本信息字段',
      defaultValue: true,
    },
    {
      name: 'showPriceInfo',
      propType: 'bool',
      description: '显示价格信息字段',
      defaultValue: true,
    },
    {
      name: 'showStockInfo',
      propType: 'bool',
      description: '显示库存信息字段',
      defaultValue: true,
    },
    {
      name: 'showDescription',
      propType: 'bool',
      description: '显示描述字段',
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
        title: '表单配置',
        display: 'accordion',
        items: [
          {
            name: 'initialValues',
            title: '初始值 (JSON)',
            setter: 'TextAreaSetter',
            extraProps: { display: 'block', placeholder: '{"name": "", "price": 0}' }
          },
        ],
      },
      {
        type: 'group',
        title: '字段显示控制',
        display: 'accordion',
        items: [
          {
            name: 'showBasicInfo',
            title: '基本信息',
            setter: 'BoolSetter',
            extraProps: { display: 'block' }
          },
          {
            name: 'showPriceInfo',
            title: '价格信息',
            setter: 'BoolSetter',
            extraProps: { display: 'block' }
          },
          {
            name: 'showStockInfo',
            title: '库存信息',
            setter: 'BoolSetter',
            extraProps: { display: 'block' }
          },
          {
            name: 'showDescription',
            title: '描述信息',
            setter: 'BoolSetter',
            extraProps: { display: 'block' }
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
      title: '商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: true,
          showDescription: true,
        },
      },
    },
  ],
}

export default ProductFormMeta
