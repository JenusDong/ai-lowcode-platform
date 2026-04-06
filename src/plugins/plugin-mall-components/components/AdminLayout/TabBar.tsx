import React, { useState, useRef, useEffect } from 'react'
import { Dropdown, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { CloseOutlined, ReloadOutlined, CloseCircleOutlined } from '@ant-design/icons'
import type { TabItem } from './types'

interface TabBarProps {
  tabs: TabItem[]
  activeTabKey: string
  onTabClick: (key: string) => void
  onCloseTab: (key: string) => void
  onCloseOther: (keepKey: string) => void
  onCloseAll: () => void
  closableTabs?: boolean
}

const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTabKey,
  onTabClick,
  onCloseTab,
  onCloseOther,
  onCloseAll,
  closableTabs = true,
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const [contextMenuVisible, setContextMenuVisible] = useState(false)
  const [contextMenuKey, setContextMenuKey] = useState<string>('')
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollContainerRef.current && activeTabKey) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-tab-key="${activeTabKey}"]`)
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [activeTabKey])

  useEffect(() => {
    const handleClick = () => setContextMenuVisible(false)
    if (contextMenuVisible) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [contextMenuVisible])

  const handleContextMenu = (e: React.MouseEvent, tabKey: string) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenuKey(tabKey)
    setMenuPosition({ x: e.clientX, y: e.clientY })
    setContextMenuVisible(true)
  }

  const handleMenuClick = (key: string) => {
    setContextMenuVisible(false)
    switch (key) {
      case 'close':
        onCloseTab(contextMenuKey)
        break
      case 'closeOther':
        onCloseOther(contextMenuKey)
        break
      case 'closeAll':
        onCloseAll()
        break
      case 'refresh':
        window.location.reload()
        break
    }
  }

  if (!tabs || tabs.length === 0) {
    return null
  }

  const contextMenuItems: MenuProps['items'] = [
    {
      key: 'refresh',
      icon: <ReloadOutlined />,
      label: '刷新当前页',
    },
    {
      key: 'close',
      icon: <CloseOutlined />,
      label: '关闭当前',
      disabled: !closableTabs || tabs.find(t => t.key === contextMenuKey)?.closable === false,
    },
    {
      type: 'divider',
    },
    {
      key: 'closeOther',
      icon: <CloseCircleOutlined />,
      label: '关闭其他',
      disabled: tabs.length <= 1,
    },
    {
      key: 'closeAll',
      icon: <CloseCircleOutlined />,
      label: '关闭所有',
    },
  ]

  const menu = (
    <Menu items={contextMenuItems} onClick={({ key }) => handleMenuClick(key)} />
  )

  return (
    <>
      <div className="tab-bar-container">
        <div className="tab-bar-scroll" ref={scrollContainerRef}>
          {tabs.map((tab) => (
            <div
              key={tab.key}
              data-tab-key={tab.key}
              className={`tab-item ${activeTabKey === tab.key ? 'active' : ''} ${hoveredKey === tab.key ? 'hovered' : ''}`}
              onClick={() => onTabClick(tab.key)}
              onMouseEnter={() => setHoveredKey(tab.key)}
              onMouseLeave={() => setHoveredKey(null)}
              onContextMenu={(e) => handleContextMenu(e, tab.key)}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              <span className="tab-label">{tab.label}</span>
              {closableTabs && tab.closable && (
                <span
                  className={`tab-close-btn ${hoveredKey === tab.key || activeTabKey === tab.key ? 'visible' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onCloseTab(tab.key)
                  }}
                >
                  <CloseOutlined style={{ fontSize: 10 }} />
                </span>
              )}
            </div>
          ))}
        </div>
        {closableTabs && tabs.length > 1 && (
          <div className="tab-actions">
            <button
              className="close-all-btn"
              onClick={onCloseAll}
              title="关闭全部标签"
            >
              <CloseCircleOutlined />
            </button>
          </div>
        )}
      </div>

      {contextMenuVisible && (
        <div
          style={{
            position: 'fixed',
            left: menuPosition.x,
            top: menuPosition.y,
            zIndex: 1000,
          }}
        >
          <Dropdown
            overlay={menu}
            visible={contextMenuVisible}
            onVisibleChange={setContextMenuVisible}
            trigger={['click']}
          >
            <div style={{ width: 0, height: 0 }} />
          </Dropdown>
        </div>
      )}
    </>
  )
}

export default TabBar
