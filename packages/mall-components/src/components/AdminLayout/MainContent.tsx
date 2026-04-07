import React, { ReactNode } from 'react'
import TabBar from './TabBar'
import type { TabItem } from './types'

interface MainContentProps {
  children: ReactNode
  pageKey: string
  tabs: TabItem[]
  activeTabKey: string
  onTabClick: (key: string) => void
  onCloseTab: (key: string) => void
  onCloseOther: (keepKey: string) => void
  onCloseAll: () => void
  enableTabs?: boolean
  closableTabs?: boolean
  className?: string
}

const MainContent: React.FC<MainContentProps> = ({
  children,
  pageKey,
  tabs,
  activeTabKey,
  onTabClick,
  onCloseTab,
  onCloseOther,
  onCloseAll,
  enableTabs = true,
  closableTabs = true,
  className = '',
}) => {
  return (
    <main className={`main-content ${className}`}>
      {enableTabs && tabs.length > 0 && (
        <TabBar
          tabs={tabs}
          activeTabKey={activeTabKey}
          onTabClick={onTabClick}
          onCloseTab={onCloseTab}
          onCloseOther={onCloseOther}
          onCloseAll={onCloseAll}
          closableTabs={closableTabs}
        />
      )}
      <div className="content-wrapper">
        <div className="page-container" key={pageKey}>
          {children}
        </div>
      </div>
    </main>
  )
}

export default MainContent
