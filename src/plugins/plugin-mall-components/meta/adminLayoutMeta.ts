import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const AdminLayoutMeta: IPublicTypeComponentMetadata = {
  componentName: 'AdminLayout',
  title: '管理后台布局',
  docUrl: 'https://github.com/alibaba/lowcode-engine',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'AdminLayout',
    destructuring: true,
  },
  props: [
    {
      name: 'defaultSelectedKey',
      propType: 'string',
      description: '默认选中的菜单项',
      defaultValue: 'dashboard',
    },
    {
      name: 'collapsible',
      propType: 'bool',
      description: '允许折叠侧边栏',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'enableTabs',
      propType: 'bool',
      description: '启用多标签页功能',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'maxTabs',
      propType: 'number',
      description: '最大标签页数量',
      defaultValue: 10,
      setter: 'NumberSetter'
    },
    {
      name: 'closableTabs',
      propType: 'bool',
      description: '标签页可关闭',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'logoText',
      propType: 'string',
      description: 'Logo 文字',
      defaultValue: 'Mall Admin',
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
        title: '布局配置',
        display: 'accordion',
        items: [
          { 
            name: 'defaultSelectedKey', 
            title: '默认选中菜单', 
            setter: 'InputSetter', 
            extraProps: { display: 'block', placeholder: '例如：dashboard' }
          },
          { 
            name: 'collapsible', 
            title: '允许折叠侧边栏', 
            setter: 'BoolSetter', 
            extraProps: { display: 'block' }
          },
          { 
            name: 'logoText', 
            title: 'Logo 文字', 
            setter: 'InputSetter', 
            extraProps: { display: 'block' }
          },
        ],
      },
      {
        type: 'group',
        title: '标签页配置',
        display: 'accordion',
        items: [
          { 
            name: 'enableTabs', 
            title: '启用多标签页', 
            setter: 'BoolSetter', 
            extraProps: { display: 'block' }
          },
          { 
            name: 'maxTabs', 
            title: '最大标签数', 
            setter: 'NumberSetter', 
            extraProps: { display: 'block', min: 1, max: 20, step: 1 }
          },
          { 
            name: 'closableTabs', 
            title: '标签可关闭', 
            setter: 'BoolSetter', 
            extraProps: { display: 'block' }
          },
        ],
      },
    ],
    component: {
      isContainer: true,
    },
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务组件',
  group: '布局容器',
  snippets: [
    {
      title: '管理后台布局（带 Tab）',
      schema: {
        componentName: 'AdminLayout',
        props: {
          defaultSelectedKey: 'dashboard',
          collapsible: true,
          enableTabs: true,
          maxTabs: 10,
          closableTabs: true,
          logoText: 'Mall Admin',
        },
      },
    },
    {
      title: '管理后台布局（无 Tab）',
      schema: {
        componentName: 'AdminLayout',
        props: {
          defaultSelectedKey: 'dashboard',
          collapsible: true,
          enableTabs: false,
          logoText: 'Mall Admin',
        },
      },
    },
  ],
}

export default AdminLayoutMeta
