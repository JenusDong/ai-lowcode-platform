import React from 'react'
import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { StarOutlined } from '@ant-design/icons'

const promotionCardMeta: IPublicTypeComponentMetadata = {
  componentName: 'PromotionCard',
  title: '促销活动管理',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'PromotionCard',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  category: '电商业务',
  group: '营销管理',
  icon: React.createElement(StarOutlined),
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
      name: 'showTimeline',
      propType: 'bool',
      description: '是否显示时间线',
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
        {
          name: 'showTimeline',
          setter: {
            componentName: 'BoolSetter',
          },
        },
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
      rootSelector: '.mall-promotion-card',
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
      title: '促销活动管理',
      screenshot: '',
      schema: {
        componentName: 'PromotionCard',
        props: {
          showCreateButton: true,
          showFilter: true,
          showStatistics: true,
          showTimeline: true,
        },
      },
    },
    {
      title: '促销活动管理（简洁模式）',
      screenshot: '',
      schema: {
        componentName: 'PromotionCard',
        props: {
          showCreateButton: false,
          showFilter: false,
          showStatistics: false,
          showTimeline: false,
        },
      },
    },
  ],
}

export default promotionCardMeta
