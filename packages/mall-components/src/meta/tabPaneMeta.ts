import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const TabPaneMeta: IPublicTypeComponentMetadata = {
  componentName: 'TabPane',
  title: '选项卡面板',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'TabPane',
    destructuring: true,
  },
  props: [
    {
      name: 'tab',
      propType: 'string',
      description: '选项卡标题',
      defaultValue: '新选项卡',
    },
    {
      name: 'tabKey',
      propType: 'string',
      description: '选项卡唯一标识',
      defaultValue: 'tab1',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [],
      loop: false,
    },
    props: [
      {
        type: 'group',
        title: '基础配置',
        display: 'accordion',
        items: [
          { 
            name: 'tab', 
            title: '选项卡标题', 
            setter: 'InputSetter', 
            extraProps: { display: 'block', placeholder: '例如：商品列表' }
          },
          { 
            name: 'tabKey', 
            title: '选项卡标识', 
            setter: 'InputSetter', 
            extraProps: { display: 'block', placeholder: '例如：product' }
          },
        ],
      },
    ],
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['AdminLayout'],
      },
      disableBehaviors: ['remove'],
    },
  },
  icon: '',
  category: '隐藏组件',
  group: '布局容器',
  snippets: [],
}

export default TabPaneMeta
