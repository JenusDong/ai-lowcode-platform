import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { Icons } from './icons'

const defaultMockData = {
  code: 200,
  message: 'success',
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 50,
    list: [
      {
        id: 1,
        name: '时尚运动鞋',
        productSn: 'PRODUCT001',
        price: 299,
        stock: 100,
        sale: 120,
        brandName: '时尚运动',
        productCategoryName: '鞋子',
        pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
        publishStatus: 1,
        newStatus: 1,
        recommandStatus: 1,
        verifyStatus: 1,
      },
      {
        id: 2,
        name: '休闲T恤',
        productSn: 'PRODUCT002',
        price: 99,
        stock: 200,
        sale: 350,
        brandName: '休闲服饰',
        productCategoryName: '衣服',
        pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
        publishStatus: 1,
        newStatus: 1,
        recommandStatus: 0,
        verifyStatus: 1,
      },
      {
        id: 3,
        name: '双肩背包',
        productSn: 'PRODUCT003',
        price: 189,
        stock: 80,
        sale: 80,
        brandName: '旅行箱包',
        productCategoryName: '配饰',
        pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
        publishStatus: 1,
        newStatus: 0,
        recommandStatus: 1,
        verifyStatus: 1,
      },
      {
        id: 4,
        name: '运动手表',
        productSn: 'PRODUCT004',
        price: 499,
        stock: 50,
        sale: 60,
        brandName: '智能数码',
        productCategoryName: '数码',
        pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
        publishStatus: 1,
        newStatus: 1,
        recommandStatus: 1,
        verifyStatus: 1,
      },
      {
        id: 5,
        name: '牛仔裤',
        productSn: 'PRODUCT005',
        price: 199,
        stock: 150,
        sale: 280,
        brandName: '时尚牛仔',
        productCategoryName: '衣服',
        pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
        publishStatus: 1,
        newStatus: 0,
        recommandStatus: 0,
        verifyStatus: 1,
      },
    ],
  },
}

export default {
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
      defaultValue: JSON.stringify(defaultMockData),
    },
    {
      name: 'variableName',
      propType: 'string',
      description: '变量名称',
    },
    {
      name: 'showFilter',
      propType: 'bool',
      description: '是否显示筛选搜索区域',
      defaultValue: true,
    },
    {
      name: 'showAction',
      propType: 'bool',
      description: '是否显示操作区域',
      defaultValue: true,
    },
    {
      name: 'showSelection',
      propType: 'bool',
      description: '是否显示选择列',
      defaultValue: true,
    },
    {
      name: 'showOperation',
      propType: 'bool',
      description: '是否显示操作列',
      defaultValue: true,
    },
    {
      name: 'showStatus',
      propType: 'bool',
      description: '是否显示状态列',
      defaultValue: true,
    },
    {
      name: 'showPagination',
      propType: 'bool',
      description: '是否显示分页区域',
      defaultValue: true,
    },
    {
      name: 'actionButtons',
      propType: 'array',
      description: '操作按钮配置',
    },
    {
      name: 'batchOperations',
      propType: 'array',
      description: '批量操作配置',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onRowClick', description: '行点击' },
        { name: 'onSearch', description: '搜索' },
        { name: 'onPageChange', description: '分页变化' },
        { name: 'onActionClick', description: '操作按钮点击' },
        { name: 'onBatchOperation', description: '批量操作' },
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
            title: 'REST API 配置',
            setter: {
              componentName: 'RestApiTester',
              props: {},
            },
            extraProps: {
              display: 'block',
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'rest'
            },
          },
          {
            name: 'mockData',
            title: 'Mock 数据',
            setter: 'StringSetter',
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
            },
            condition: (target: any) => {
              return target.getProps().getPropValue('dataSourceType') === 'variable'
            },
          },
        ],
      },
      {
        type: 'group',
        title: '区域显示控制',
        display: 'accordion',
        items: [
          { name: 'showFilter', title: '显示筛选区域', setter: 'BoolSetter', extraProps: { display: 'block' } },
          { name: 'showAction', title: '显示操作区域', setter: 'BoolSetter', extraProps: { display: 'block' } },
          { name: 'showSelection', title: '显示选择列', setter: 'BoolSetter', extraProps: { display: 'block' } },
          { name: 'showOperation', title: '显示操作列', setter: 'BoolSetter', extraProps: { display: 'block' } },
          { name: 'showStatus', title: '显示状态列', setter: 'BoolSetter', extraProps: { display: 'block' } },
          { name: 'showPagination', title: '显示分页', setter: 'BoolSetter', extraProps: { display: 'block' } },
        ],
      },
      {
        type: 'group',
        title: '操作配置',
        display: 'accordion',
        items: [
          {
            name: 'actionButtons',
            title: '操作按钮',
            setter: {
              componentName: 'ArraySetter',
              props: {
                item: {
                  setters: [
                    {
                      componentName: 'ObjectSetter',
                      props: {
                        config: {
                          items: [
                            { name: 'text', description: '按钮文本', setter: 'StringSetter' },
                            {
                              name: 'icon',
                              description: '图标',
                              setter: {
                                componentName: 'SelectSetter',
                                props: {
                                  options: [
                                    { label: '加号', value: 'plus' },
                                    { label: '下载', value: 'download' },
                                    { label: '上传', value: 'upload' },
                                  ],
                                },
                              },
                            },
                            {
                              name: 'type',
                              description: '按钮类型',
                              setter: {
                                componentName: 'SelectSetter',
                                props: {
                                  options: [
                                    { label: '主要按钮', value: 'primary' },
                                    { label: '默认按钮', value: 'default' },
                                    { label: '虚线按钮', value: 'dashed' },
                                    { label: '链接按钮', value: 'link' },
                                    { label: '文本按钮', value: 'text' },
                                  ],
                                },
                              },
                            },
                            { name: 'onClick', description: '点击事件', setter: 'StringSetter' },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
            extraProps: {
              display: 'block',
            },
          },
          {
            name: 'batchOperations',
            title: '批量操作',
            setter: {
              componentName: 'ArraySetter',
              props: {
                item: {
                  setters: [
                    {
                      componentName: 'ObjectSetter',
                      props: {
                        config: {
                          items: [
                            { name: 'text', description: '操作名称', setter: 'StringSetter' },
                            { name: 'value', description: '操作值', setter: 'StringSetter' },
                            { name: 'action', description: '操作动作', setter: 'StringSetter' },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
            extraProps: {
              display: 'block',
            },
          },
        ],
      },
    ],
  },
  icon: Icons.list,
  category: '电商业务',
  group: '商品管理',
  snippets: [
    {
      title: '完整商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultMockData),
          showFilter: true,
          showAction: true,
          showSelection: true,
          showOperation: true,
          showStatus: true,
          showPagination: true,
          actionButtons: [
            { text: '添加商品', icon: 'plus', type: 'primary', onClick: 'addProduct' },
            { text: '导出', icon: 'download', type: 'default' },
          ],
          batchOperations: [
            { text: '批量上架', value: 'publishOn' },
            { text: '批量下架', value: 'publishOff' },
            { text: '批量删除', value: 'delete' },
          ],
        },
      },
    },
    {
      title: '简洁商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultMockData),
          showFilter: false,
          showAction: false,
          showSelection: false,
          showOperation: false,
          showStatus: false,
          showPagination: true,
        },
      },
    },
    {
      title: '只读商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSourceType: 'mock',
          mockData: JSON.stringify(defaultMockData),
          showFilter: true,
          showAction: false,
          showSelection: false,
          showOperation: false,
          showStatus: true,
          showPagination: true,
        },
      },
    },
  ],
}
