import React from 'react'
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { GiftOutlined } from '@ant-design/icons'

const couponCardMeta: IPublicTypeComponentMetadata = {
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
  icon: React.createElement(GiftOutlined),
  props: [
    {
      name: 'dataSource',
      propType: 'string',
      description: '数据源配置',
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
          name: 'showCreateButton',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showFilter',
          setter: {
            componentName: 'BoolSetter',
          },
        },
        {
          name: 'showStatistics',
          setter: {
            componentName: 'BoolSetter',
          },
        },
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
      rootSelector: '.mall-coupon-card',
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
      title: '优惠券管理',
      screenshot: '',
      schema: {
        componentName: 'CouponCard',
        props: {
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
          showCreateButton: false,
          showFilter: false,
          showStatistics: false,
        },
      },
    },
  ],
}

export default couponCardMeta
