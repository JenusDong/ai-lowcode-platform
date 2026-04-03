import React from 'react'
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { FileTextOutlined } from '@ant-design/icons'

const orderListMeta: IPublicTypeComponentMetadata = {
  componentName: 'OrderList',
  title: '订单列表',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'OrderList',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  category: '电商业务',
  group: '订单管理',
  icon: React.createElement(FileTextOutlined),
  props: [
    {
      name: 'dataSource',
      propType: 'string',
      description: '数据源配置',
    },
    {
      name: 'showFilter',
      propType: 'bool',
      description: '是否显示筛选区域',
      defaultValue: true,
    },
    {
      name: 'showStatusFilter',
      propType: 'bool',
      description: '是否显示状态筛选',
      defaultValue: true,
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '是否显示搜索框',
      defaultValue: true,
    },
    {
      name: 'showDatePicker',
      propType: 'bool',
      description: '是否显示日期选择器',
      defaultValue: true,
    },
    {
      name: 'showActions',
      propType: 'bool',
      description: '是否显示操作按钮',
      defaultValue: true,
    },
    {
      name: 'showBatchOperations',
      propType: 'bool',
      description: '是否显示批量操作',
      defaultValue: true,
    },
    {
      name: 'showExport',
      propType: 'bool',
      description: '是否显示导出按钮',
      defaultValue: true,
    },
    {
      name: 'defaultPageSize',
      propType: 'number',
      description: '默认每页条数',
      defaultValue: 10,
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
    props: {
      isExtends: true,
      override: [
        {
          name: 'dataSource',
          setter: {
            componentName: 'StringSetter',
          },
        },
        {
          name: 'showFilter',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showStatusFilter',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showSearch',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showDatePicker',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showActions',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showBatchOperations',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showExport',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'defaultPageSize',
          setter: {
            componentName: 'NumberSetter',
          },
        },
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
      rootSelector: '.mall-order-list',
      nestingRule: {
        parentWhitelist: '',
        childWhitelist: '',
      },
    },
    supports: {
      style: true,
      className: true,
    },
  },
  snippets: [
    {
      title: '订单列表',
      screenshot: '',
      schema: {
        componentName: 'OrderList',
        props: {
          showFilter: true,
          showStatusFilter: true,
          showSearch: true,
          showDatePicker: true,
          showActions: true,
          showBatchOperations: true,
          showExport: true,
          defaultPageSize: 10,
        },
      },
    },
    {
      title: '订单列表（简洁模式）',
      screenshot: '',
      schema: {
        componentName: 'OrderList',
        props: {
          showFilter: false,
          showActions: false,
          showBatchOperations: false,
          showExport: false,
          defaultPageSize: 10,
        },
      },
    },
    {
      title: '订单列表（只读模式）',
      screenshot: '',
      schema: {
        componentName: 'OrderList',
        props: {
          showFilter: true,
          showStatusFilter: true,
          showSearch: true,
          showDatePicker: true,
          showActions: false,
          showBatchOperations: false,
          showExport: false,
          defaultPageSize: 10,
        },
      },
    },
  ],
}

export default orderListMeta
