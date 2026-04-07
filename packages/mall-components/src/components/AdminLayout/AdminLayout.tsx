import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'
import type { AdminLayoutProps, TabItem, BreadcrumbItem, MenuItem } from './types'
import { defaultMenuItems } from './Sidebar'
import './AdminLayout.scss'

const findMenuItem = (items: MenuItem[], key: string): MenuItem | undefined => {
  for (const item of items) {
    if (item.key === key) return item
    if (item.children) {
      const found = findMenuItem(item.children, key)
      if (found) return found
    }
  }
  return undefined
}

const getLabelFromKey = (key: string): string => {
  const parts = key.split('/')
  const labelMap: Record<string, string> = {
    dashboard: '工作台',
    permission: '权限管理',
    product: '商品管理',
    order: '订单管理',
    marketing: '营销管理',
    users: '用户管理',
    roles: '角色管理',
    resources: '资源管理',
    menus: '菜单管理',
    list: '列表',
    add: '添加',
    category: '分类',
    brand: '品牌',
    attribute: '属性',
    setting: '设置',
    return: '退货申请',
    reason: '退货原因',
    coupon: '优惠券管理',
    promotion: '促销活动',
    flash: '秒杀活动',
    new: '新品推荐',
    hot: '人气推荐',
    advertise: '广告管理',
    subject: '专题管理',
  }
  return labelMap[parts[parts.length - 1]] || parts[parts.length - 1]
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  defaultSelectedKey = 'dashboard',
  defaultOpenKeys,
  collapsible = true,
  enableTabs = true,
  maxTabs = 10,
  closableTabs = true,
  logoText = 'Mall Admin',
  menuItems: customMenuItems,
  style,
  className,
  children,
  __designMode,
  componentId,
}) => {
  const items = customMenuItems || defaultMenuItems

  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey)
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys || [])

  const [tabs, setTabs] = useState<TabItem[]>(() => {
    const initialItem = findMenuItem(items, defaultSelectedKey)
    return [{
      key: defaultSelectedKey,
      label: initialItem?.label || getLabelFromKey(defaultSelectedKey),
      icon: initialItem?.icon,
      closable: false,
      path: initialItem?.path || `/${defaultSelectedKey}`,
    }]
  })
  const [activeTabKey, setActiveTabKey] = useState(defaultSelectedKey)

  // 将 activeTabKey 传递给子级 TabPane 组件（用于控制显隐）
  const activeTabKeyRef = useRef(activeTabKey)
  activeTabKeyRef.current = activeTabKey

  // 当 activeTabKey 变化时，通知所有 TabPane 子节点更新
  useEffect(() => {
    if (__designMode !== 'design' || !componentId) return
    
    try {
      const engine = (window as any).AliLowCodeEngine
      if (!engine?.project?.currentDocument) return
      
      const documentModel = engine.project.currentDocument
      const adminLayoutNode = documentModel.getNodeById(componentId)
      
      if (adminLayoutNode?.children) {
        const childrenArr = Array.isArray(adminLayoutNode.children)
          ? adminLayoutNode.children
          : (adminLayoutNode.children.toArray ? adminLayoutNode.children.toArray() : [])
        
        childrenArr.forEach((child: any) => {
          if (child.componentName === 'TabPane') {
            child.setPropValue('activeTabKey', activeTabKey)
          }
        })
      }
    } catch (e) {
      // silent fail in preview mode
    }
  }, [activeTabKey, componentId, __designMode])

  const handleToggleCollapse = useCallback(() => {
    if (collapsible) {
      setCollapsed((prev) => !prev)
    }
  }, [collapsible])

  const createTabPane = useCallback((tabKey: string, tabLabel: string) => {
    if (typeof window === 'undefined') return false

    try {
      const engine = (window as any).AliLowCodeEngine
      if (!engine || !engine.project) {
        console.warn('[AdminLayout] LowCode engine not found')
        return false
      }

      const documentModel = engine.project.currentDocument
      if (!documentModel) {
        console.warn('[AdminLayout] Document model not found')
        return false
      }

      const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null
      if (!adminLayoutNode) {
        console.warn('[AdminLayout] AdminLayout node not found, componentId:', componentId)
        return false
      }

      // 检查是否已存在相同 tabKey 的 TabPane
      if (adminLayoutNode.children) {
        const childrenArr = Array.isArray(adminLayoutNode.children)
          ? adminLayoutNode.children
          : (adminLayoutNode.children.toArray ? adminLayoutNode.children.toArray() : [])
        
        const existing = childrenArr.find((child: any) => {
          const ck = child.props?.tabKey || child.getPropValue?.('tabKey')
          return child.componentName === 'TabPane' && ck === tabKey
        })
        if (existing) {
          console.log(`[AdminLayout] ℹ️ TabPane with key="${tabKey}" already exists`)
          existing.setPropValue('activeTabKey', activeTabKeyRef.current)
          return true
        }
      }

      console.log('[AdminLayout] 🔍 Creating TabPane for:', tabKey)

      const tabPaneNode = documentModel.createNode({
        componentName: 'TabPane',
        props: {
          tab: tabLabel,
          tabKey: tabKey,
          activeTabKey: activeTabKeyRef.current,
        },
      })

      if (!tabPaneNode) {
        console.error('[AdminLayout] Failed to create TabPane node')
        return false
      }

      try {
        if (typeof documentModel.insertNode === 'function') {
          documentModel.insertNode(adminLayoutNode, tabPaneNode)
          console.log(`[AdminLayout] ✅ Created TabPane with key="${tabKey}" via insertNode()`)
          return true
        } else {
          console.error('[AdminLayout] No valid insertion method found')
          return false
        }
      } catch (insertError) {
        console.error('[AdminLayout] ❌ Insertion error:', insertError)
        return false
      }
    } catch (error) {
      console.error('[AdminLayout] ❌ Failed to create TabPane:', error)
      return false
    }
  }, [componentId])

  const handleMenuClick = useCallback((key: string) => {
    setSelectedKey(key)

    const existingTab = tabs.find(tab => tab.key === key)
    if (!existingTab) {
      const menuItem = findMenuItem(items, key)
      const newTab: TabItem = {
        key,
        label: menuItem?.label || getLabelFromKey(key),
        icon: menuItem?.icon,
        closable: key !== 'dashboard',
        path: menuItem?.path || `/${key}`,
      }

      setTabs(prev => {
        if (prev.length >= maxTabs) {
          const filtered = prev.filter(tab => tab.closable)
          if (filtered.length > 0) {
            const toRemove = filtered[0].key
            return [...prev.filter(tab => tab.key !== toRemove), newTab]
          }
        }
        return [...prev, newTab]
      })

      if (__designMode === 'design') {
        setTimeout(() => {
          createTabPane(key, menuItem?.label || getLabelFromKey(key))
        }, 0)
      }
    }

    setActiveTabKey(key)
  }, [tabs, items, maxTabs, __designMode, createTabPane])

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys)
  }, [])

  const handleNavigate = useCallback((key: string) => {
    setSelectedKey(key)
    setActiveTabKey(key)
  }, [])

  const handleTabClick = useCallback((key: string) => {
    setSelectedKey(key)
    setActiveTabKey(key)
  }, [])

  // 删除 TabPane 子节点的函数
  const removeChildByTabKey = useCallback((tabKey: string) => {
    if (typeof window === 'undefined') return

    try {
      const engine = (window as any).AliLowCodeEngine
      if (!engine || !engine.project) {
        console.warn('[AdminLayout] LowCode engine not found')
        return
      }

      const documentModel = engine.project.currentDocument
      if (!documentModel) {
        console.warn('[AdminLayout] Document model not found')
        return
      }

      const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null
      if (!adminLayoutNode) {
        console.warn('[AdminLayout] AdminLayout node not found')
        return
      }

      if (adminLayoutNode.children) {
        const childrenArr = Array.isArray(adminLayoutNode.children)
          ? adminLayoutNode.children
          : (adminLayoutNode.children.toArray ? adminLayoutNode.children.toArray() : [])
        
        for (const child of childrenArr) {
          const childTabKey = child.props?.tabKey || child.getPropValue?.('tabKey')
          if (child.componentName === 'TabPane' && childTabKey === tabKey) {
            try {
              documentModel.removeNode(child)
              console.log(`[AdminLayout] ✅ Removed TabPane with tabKey: ${tabKey}`)
            } catch (err) {
              console.error('[AdminLayout] Error removing TabPane:', err)
            }
            break
          }
        }
      }
    } catch (error) {
      console.error('[AdminLayout] Failed to remove TabPane:', error)
    }
  }, [componentId])

  const handleCloseTab = useCallback((key: string) => {
    if (key === 'dashboard') return

    removeChildByTabKey(key)

    setTabs(prev => prev.filter(tab => tab.key !== key))

    if (key === activeTabKey) {
      const remainingTabs = tabs.filter(tab => tab.key !== key)
      if (remainingTabs.length > 0) {
        const currentIndex = tabs.findIndex(tab => tab.key === key)
        const nextTab = remainingTabs[currentIndex] || remainingTabs[remainingTabs.length - 1]
        setSelectedKey(nextTab.key)
        setActiveTabKey(nextTab.key)
      }
    }
  }, [tabs, activeTabKey, removeChildByTabKey])

  const handleCloseOther = useCallback((keepKey: string) => {
    tabs.forEach(tab => {
      if (tab.key !== keepKey && tab.key !== 'dashboard') {
        removeChildByTabKey(tab.key)
      }
    })

    setTabs(prev => prev.filter(tab => tab.key === keepKey || tab.key === 'dashboard'))
    setSelectedKey(keepKey)
    setActiveTabKey(keepKey)
  }, [tabs, removeChildByTabKey])

  const handleCloseAll = useCallback(() => {
    tabs.forEach(tab => {
      if (tab.key !== 'dashboard') {
        removeChildByTabKey(tab.key)
      }
    })

    const dashboardTab = tabs.find(tab => tab.key === 'dashboard')
    if (dashboardTab) {
      setTabs([dashboardTab])
      setSelectedKey('dashboard')
      setActiveTabKey('dashboard')
    }
  }, [tabs, removeChildByTabKey])

  const breadcrumbItems = useMemo((): BreadcrumbItem[] => {
    if (selectedKey === 'dashboard') return []
    const parts = selectedKey.split('/')
    if (parts.length === 1) {
      return [{ key: selectedKey, label: '', path: selectedKey }]
    }
    return [{ key: selectedKey, label: '', path: selectedKey }]
  }, [selectedKey])

  // 默认内容（当没有配置子组件时显示）
  const defaultContent = (
    <div style={{ padding: 24 }}>
      <h2>{findMenuItem(items, selectedKey)?.label || getLabelFromKey(selectedKey)}</h2>
      <p>当前页面：{selectedKey}</p>
      <p style={{ color: '#999', marginTop: 16 }}>
        💡 提示：点击侧边栏菜单会自动创建 TabPane，然后可拖拽组件到对应的面板中
      </p>
    </div>
  )

  // 在设计模式下，children 由引擎渲染（包含 TabPane），我们只包裹布局
  // 在预览模式下，使用 defaultContent 或 children
  const content = __designMode === 'design' 
    ? (children || defaultContent)
    : (children || defaultContent)

  return (
    <div className={`admin-layout ${collapsed ? 'is-collapse' : ''} ${className || ''}`} style={style} data-active-tab={activeTabKey}>
      <Sidebar
        collapsed={collapsed}
        selectedKey={selectedKey}
        openKeys={openKeys}
        onMenuClick={handleMenuClick}
        onOpenChange={handleOpenChange}
        menuItems={items}
      />
      <div className="layout-right">
        <Navbar
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
          breadcrumbItems={breadcrumbItems}
          onNavigate={handleNavigate}
        />
        <MainContent
          pageKey={selectedKey}
          tabs={tabs}
          activeTabKey={activeTabKey}
          onTabClick={handleTabClick}
          onCloseTab={handleCloseTab}
          onCloseOther={handleCloseOther}
          onCloseAll={handleCloseAll}
          enableTabs={enableTabs}
          closableTabs={closableTabs}
          className={collapsed ? 'collapsed' : ''}
        >
          {content}
        </MainContent>
      </div>

      {collapsible && (
        <div
          className={`mobile-overlay ${!collapsed ? 'visible' : ''}`}
          onClick={handleToggleCollapse}
        />
      )}
    </div>
  )
}

export default AdminLayout