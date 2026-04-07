import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { Icons } from './icons'

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
      propType: 'string',
      description: '表单初始值（JSON 格式）',
      defaultValue: '{}',
    },
    {
      name: 'mode',
      propType: 'string',
      description: '表单模式',
      defaultValue: 'create',
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: '创建模式', value: 'create' },
            { label: '编辑模式', value: 'edit' },
            { label: '查看模式', value: 'view' },
          ],
        },
      },
    },
    {
      name: 'showBasicInfo',
      propType: 'bool',
      description: '是否显示基本信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showPriceInfo',
      propType: 'bool',
      description: '是否显示价格信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showStockInfo',
      propType: 'bool',
      description: '是否显示库存信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showStatusInfo',
      propType: 'bool',
      description: '是否显示状态信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showDescription',
      propType: 'bool',
      description: '是否显示描述信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onSubmit', description: '提交' },
        { name: 'onCancel', description: '取消' },
      ],
    },
    props: [
      {
        type: 'group',
        title: '表单配置',
        display: 'accordion',
        items: [
          {
            name: 'mode',
            title: '表单模式',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { label: '创建模式', value: 'create' },
                  { label: '编辑模式', value: 'edit' },
                  { label: '查看模式', value: 'view' },
                ],
              },
            },
          },
          {
            name: 'initialValues',
            title: '表单初始值',
            setter: {
              componentName: 'TextAreaSetter',
              props: {
                rows: 10,
                placeholder: '请输入 JSON 格式的表单初始值',
              },
            },
            extraProps: {
              display: 'block',
            },
          },
        ],
      },
      {
        type: 'group',
        title: '标签页显示控制',
        display: 'accordion',
        items: [
          { name: 'showBasicInfo', title: '显示基本信息', setter: 'BoolSetter' },
          { name: 'showPriceInfo', title: '显示价格信息', setter: 'BoolSetter' },
          { name: 'showStockInfo', title: '显示库存信息', setter: 'BoolSetter' },
          { name: 'showStatusInfo', title: '显示状态信息', setter: 'BoolSetter' },
          { name: 'showDescription', title: '显示描述信息', setter: 'BoolSetter' },
        ],
      },
    ],
  },
  icon: Icons.form,
  category: '电商业务组件',
  group: '商品管理',
  snippets: [
    {
      title: '创建商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          mode: 'create',
          initialValues: '{}',
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: true,
          showStatusInfo: true,
          showDescription: true,
        },
      },
    },
    {
      title: '编辑商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          mode: 'edit',
          initialValues: JSON.stringify({
            id: 1,
            name: '时尚运动鞋',
            productSn: 'PRODUCT001',
            price: 269,
            stock: 100,
            brandName: '时尚运动',
            productCategoryName: '鞋子',
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 1,
          }, null, 2),
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: true,
          showStatusInfo: true,
          showDescription: true,
        },
      },
    },
    {
      title: '查看商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          mode: 'view',
          initialValues: JSON.stringify({
            id: 1,
            name: '时尚运动鞋',
            productSn: 'PRODUCT001',
            price: 269,
            stock: 100,
            brandName: '时尚运动',
            productCategoryName: '鞋子',
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 1,
            description: '这是一款时尚的运动鞋，适合日常穿着。',
          }, null, 2),
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: true,
          showStatusInfo: true,
          showDescription: true,
        },
      },
    },
    {
      title: '只读商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          mode: 'view',
          initialValues: JSON.stringify({
            id: 1,
            name: '时尚运动鞋',
            productSn: 'PRODUCT001',
            price: 269,
            stock: 100,
            sale: 120,
            brandName: '时尚运动',
            productCategoryName: '鞋子',
            pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 1,
            verifyStatus: 1,
            description: '这是一款时尚的运动鞋，适合日常穿着。',
            note: '热销商品',
          }, null, 2),
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: true,
          showStatusInfo: true,
          showDescription: true,
        },
      },
    },
    {
      title: '简洁商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {
          mode: 'create',
          initialValues: '{}',
          showBasicInfo: true,
          showPriceInfo: true,
          showStockInfo: false,
          showStatusInfo: false,
          showDescription: false,
        },
      },
    },
  ],
}

export default ProductFormMeta
