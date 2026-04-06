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
