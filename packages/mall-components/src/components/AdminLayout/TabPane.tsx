import React from 'react'
import type { TabPaneProps } from './types'

const TabPane: React.FC<TabPaneProps> = ({
  tab,
  tabKey,
  activeTabKey,
  children,
  className,
  style,
}) => {
  const isActive = activeTabKey === tabKey

  return (
    <div 
      className={`tab-pane ${isActive ? 'tab-pane--active' : ''} ${className || ''}`}
      style={{
        ...style,
        display: isActive ? undefined : 'none',
      }}
      data-tab-key={tabKey}
      data-active={isActive ? 'true' : 'false'}
    >
      {children}
    </div>
  )
}

export default TabPane
