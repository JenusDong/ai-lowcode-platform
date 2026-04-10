import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const TabPaneMeta: IPublicTypeComponentMetadata = {
  componentName: 'TabPane',
  title: '选项卡面板',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.9',
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
      // 只禁用 TabPane 本身的删除，不影响内部组件
      disableBehaviors: ['remove'],
      // 确保内部组件可以被选中
      // 当点击 TabPane 内部时，不阻止事件传播，让内部组件可以被选中
      callbacks: {
        onClickHook: (e: any, node: any) => {
          console.log('[TabPane Meta] 🎯 onClickHook triggered:', {
            event: e,
            node: node?.componentName,
            target: e?.target,
            targetClassName: e?.target?.className,
          })
          // 返回 false 表示不阻止事件传播，让内部组件可以被选中
          return false
        },
        // 添加 onSelect 回调，调试选择行为
        onSelect: (node: any) => {
          console.log('[TabPane Meta] ✅ onSelect triggered:', {
            node: node?.componentName,
            nodeId: node?.id,
          })
        },
      },
      // 选择器配置，确保可以选中内部组件
      selectionSelector: '.tab-pane > *',
    },
  },
  icon: '',
  category: '隐藏组件',
  group: '布局容器',
  snippets: [],
}

export default TabPaneMeta
