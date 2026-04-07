import React from 'react'

export interface AdminLayoutContextValue {
  activeTabKey: string
  selectedKey: string
  tabs: Array<{
    key: string
    label: string
    icon?: string
    closable?: boolean
    path?: string
  }>
  isTabActive: (tabKey: string) => boolean
}

export const AdminLayoutContext = React.createContext<AdminLayoutContextValue | undefined>({
  activeTabKey: '',
  selectedKey: '',
  tabs: [],
  isTabActive: () => false,
})
