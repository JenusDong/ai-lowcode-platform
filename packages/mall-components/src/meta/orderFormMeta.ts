import { Icons } from './icons'

const defaultInitialValues = {
  id: 1,
  orderSn: '202401010001',
  memberUsername: 'user001',
  totalAmount: 599.00,
  payAmount: 569.00,
  freightAmount: 0,
  discountAmount: 30.00,
  payType: 1,
  sourceType: 0,
  status: 1,
  orderType: 0,
  receiverName: '张三',
  receiverPhone: '13800138000',
  receiverProvince: '北京市',
  receiverCity: '北京市',
  receiverRegion: '朝阳区',
  receiverDetailAddress: '某某街道某某小区1号楼',
  note: '请尽快发货',
}

const orderFormMeta = {
  componentName: 'OrderForm',
  title: '订单表单',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'OrderForm',
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
      name: 'showReceiverInfo',
      propType: 'bool',
      description: '是否显示收货信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showMoneyInfo',
      propType: 'bool',
      description: '是否显示费用信息',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showOrderItems',
      propType: 'bool',
      description: '是否显示商品信息',
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
          { name: 'showReceiverInfo', title: '显示收货信息', setter: 'BoolSetter' },
          { name: 'showMoneyInfo', title: '显示费用信息', setter: 'BoolSetter' },
          { name: 'showOrderItems', title: '显示商品信息', setter: 'BoolSetter' },
          { name: 'showStatusInfo', title: '显示状态信息', setter: 'BoolSetter' },
        ],
      },
    ],
  },
  icon: Icons.form,
  category: '电商业务',
  group: '订单管理',
  snippets: [
    {
      title: '创建订单表单',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'create',
          initialValues: '{}',
          showBasicInfo: true,
          showReceiverInfo: true,
          showMoneyInfo: true,
          showOrderItems: true,
          showStatusInfo: true,
        },
      },
    },
    {
      title: '编辑订单表单',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'edit',
          initialValues: JSON.stringify(defaultInitialValues, null, 2),
          showBasicInfo: true,
          showReceiverInfo: true,
          showMoneyInfo: true,
          showOrderItems: true,
          showStatusInfo: true,
        },
      },
    },
    {
      title: '查看订单表单',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'view',
          initialValues: JSON.stringify(
            {
              ...defaultInitialValues,
              orderItemList: [
                {
                  id: 1,
                  productName: '时尚运动鞋',
                  productSn: 'PRODUCT001',
                  productBrand: '时尚运动',
                  productPrice: 299,
                  productQuantity: 2,
                  productPic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                },
              ],
            },
            null,
            2
          ),
          showBasicInfo: true,
          showReceiverInfo: true,
          showMoneyInfo: true,
          showOrderItems: true,
          showStatusInfo: true,
        },
      },
    },
    {
      title: '只读订单表单',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'view',
          initialValues: JSON.stringify(
            {
              ...defaultInitialValues,
              status: 2,
              deliveryTime: '2024-01-02 09:00:00',
              orderItemList: [
                {
                  id: 1,
                  productName: '时尚运动鞋',
                  productSn: 'PRODUCT001',
                  productBrand: '时尚运动',
                  productPrice: 299,
                  productQuantity: 2,
                  productPic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                },
                {
                  id: 2,
                  productName: '休闲T恤',
                  productSn: 'PRODUCT002',
                  productBrand: '休闲服饰',
                  productPrice: 99,
                  productQuantity: 1,
                  productPic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                },
              ],
            },
            null,
            2
          ),
          showBasicInfo: true,
          showReceiverInfo: true,
          showMoneyInfo: true,
          showOrderItems: true,
          showStatusInfo: true,
        },
      },
    },
    {
      title: '简洁订单表单',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'create',
          initialValues: '{}',
          showBasicInfo: true,
          showReceiverInfo: true,
          showMoneyInfo: false,
          showOrderItems: false,
          showStatusInfo: false,
        },
      },
    },
  ],
}

export default orderFormMeta
