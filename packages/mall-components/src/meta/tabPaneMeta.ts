import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const TabPaneMeta: IPublicTypeComponentMetadata = {
  componentName: 'TabPane',
  title: '标签页面板',
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
      description: '标签页标题',
      defaultValue: '标签页',
    },
    {
      name: 'tabKey',
      propType: 'string',
      description: '标签页唯一标识',
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
        name: 'tab',
        title: '标签标题',
        setter: 'InputSetter',
        extraProps: { display: 'block' },
      },
      {
        name: 'tabKey',
        title: '标签标识',
        setter: 'InputSetter',
        extraProps: { display: 'block' },
      },
    ],
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['AdminLayout'],
      },
    },
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务组件',
  group: '布局容器',
  snippets: [
    {
      title: '标签页面板',
      schema: {
        componentName: 'TabPane',
        props: {
          tab: '新标签页',
          tabKey: 'new-tab',
        },
      },
    },
  ],
}

export default TabPaneMeta
