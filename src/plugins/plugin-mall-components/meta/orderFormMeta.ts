import React from 'react'
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { FormOutlined } from '@ant-design/icons'

const orderFormMeta: IPublicTypeComponentMetadata = {
  componentName: 'OrderForm',
  title: '订单表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'OrderForm',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  category: '电商业务',
  group: '订单管理',
  icon: React.createElement(FormOutlined),
  props: [
    {
      name: 'initialValues',
      propType: 'string',
      description: '初始值（JSON字符串）',
    },
    {
      name: 'mode',
      propType: 'string',
      description: '表单模式',
      defaultValue: 'create',
    },
    {
      name: 'onSubmit',
      propType: 'func',
      description: '提交回调',
    },
    {
      name: 'onCancel',
      propType: 'func',
      description: '取消回调',
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
    props: [
      {
        name: 'mode',
        title: '表单模式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '创建', value: 'create' },
              { title: '编辑', value: 'edit' },
              { title: '查看', value: 'view' },
            ],
          },
        },
      },
    ],
    component: {
      isContainer: false,
      isModal: false,
      rootSelector: '.mall-order-form',
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
      title: '订单表单',
      screenshot: '',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'create',
        },
      },
    },
    {
      title: '订单表单（查看模式）',
      screenshot: '',
      schema: {
        componentName: 'OrderForm',
        props: {
          mode: 'view',
        },
      },
    },
  ],
}

export default orderFormMeta
