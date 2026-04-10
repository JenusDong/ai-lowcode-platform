export interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  path?: string
  children?: MenuItem[]
}

export interface BreadcrumbItem {
  key: string
  label: string
  path?: string
}

export interface TabItem {
  key: string
  label: string
  icon?: React.ReactNode
  closable: boolean
  path: string
}

export interface AdminLayoutProps {
  defaultSelectedKey?: string
  defaultOpenKeys?: string[]
  collapsible?: boolean
  enableTabs?: boolean
  maxTabs?: number
  closableTabs?: boolean
  logoText?: string
  menuItems?: MenuItem[]
  style?: React.CSSProperties
  className?: string
  __designMode?: 'design' | 'preview'
  componentId?: string
  children?: React.ReactNode
}

export interface TabPaneProps {
  tab?: string
  tabKey?: string
  activeTabKey?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  __designMode?: 'design' | 'preview'
}
