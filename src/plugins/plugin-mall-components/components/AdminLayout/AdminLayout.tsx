import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
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

interface SlotChild {
  slot: string
  children: React.ReactNode
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

  // 解析子组件槽位
  const slotChildren = useMemo(() => {
    const slots: SlotChild[] = []
    
    if (!children) return slots

    // 如果是数组，解析每个子组件的 slot 属性
    if (Array.isArray(children)) {
      children.forEach((child: any) => {
        if (child && child.props && child.props.slot) {
          slots.push({
            slot: child.props.slot,
            children: child,
          })
        }
      })
    }
    
    // 如果是单个对象，检查是否有 slot属性
    if (!Array.isArray(children) && children && (children as any).props?.slot) {
      slots.push({
        slot: (children as any).props.slot,
        children: children,
      })
    }

    return slots
  }, [children])

  // 获取当前激活的子组件
  const activeChild = useMemo(() => {
    // 先查找精确匹配的槽位
    let matchedSlot = slotChildren.find(s => s.slot === selectedKey)
    
    // 如果没有精确匹配，尝试模糊匹配
    if (!matchedSlot && selectedKey.includes('/')) {
      const parentKey = selectedKey.split('/')[0]
      matchedSlot = slotChildren.find(s => s.slot === parentKey || s.slot.startsWith(selectedKey))
    }

    // 如果找到了匹配的槽位，返回它
    if (matchedSlot) {
      return matchedSlot.children
    }

    // 如果没有匹配到任何槽位，但有 children，直接显示所有 children
    if (children) {
      return children
    }

    return null
  }, [selectedKey, slotChildren, children])

  const handleToggleCollapse = useCallback(() => {
    if (collapsible) {
      setCollapsed((prev) => !prev)
    }
  }, [collapsible])

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
    }

    setActiveTabKey(key)
  }, [tabs, items, maxTabs])

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

  // 删除子组件的函数
  const removeChildBySlot = useCallback((slotKey: string) => {
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

      // 获取 AdminLayout 节点
      let adminLayoutNode = null
      if (componentId && typeof documentModel.getNodeById === 'function') {
        adminLayoutNode = documentModel.getNodeById(componentId)
      }

      if (!adminLayoutNode) {
        console.warn('[AdminLayout] AdminLayout node not found')
        return
      }

      // 遍历所有子节点并删除匹配 slot 的节点
      const nodesMap = documentModel.nodesMap || {}
      let removed = false

      // 方法1: 通过 nodesMap 查找
      Object.values(nodesMap).forEach((node: any) => {
        if (node && node.props && node.props.slot === slotKey) {
          try {
            if (typeof documentModel.removeNode === 'function') {
              documentModel.removeNode(node)
              removed = true
              console.log(`[AdminLayout] ✅ Removed child with slot: ${slotKey} via removeNode`)
            }
          } catch (err) {
            console.error('[AdminLayout] Error removing node:', err)
          }
        }
      })

      // 方法2: 如果方法1失败，尝试通过 children 遍历
      if (!removed) {
        const traverseAndRemove = (node: any): boolean => {
          if (!node) return false
          
          const childSlot = node.props?.slot || node.getPropValue?.('slot')
          if (childSlot === slotKey) {
            try {
              if (typeof documentModel.removeNode === 'function') {
                documentModel.removeNode(node)
                console.log(`[AdminLayout] ✅ Removed child with slot: ${slotKey} via traverse`)
                return true
              }
            } catch (err) {
              console.error('[AdminLayout] Error removing node:', err)
            }
          }
          
          if (node.children && Array.isArray(node.children)) {
            for (const child of node.children) {
              if (traverseAndRemove(child)) {
                return true
              }
            }
          }
          return false
        }
        
        if (adminLayoutNode) {
          traverseAndRemove(adminLayoutNode)
        }
      }
    } catch (error) {
      console.error('[AdminLayout] Failed to remove child:', error)
    }
  }, [componentId])

  const handleCloseTab = useCallback((key: string) => {
    if (key === 'dashboard') return

    // 删除对应的子组件
    removeChildBySlot(key)

    // 从 tabs 中移除
    setTabs(prev => prev.filter(tab => tab.key !== key))

    // 如果关闭的是当前激活的 tab，切换到相邻的 tab
    if (key === activeTabKey) {
      const remainingTabs = tabs.filter(tab => tab.key !== key)
      if (remainingTabs.length > 0) {
        const currentIndex = tabs.findIndex(tab => tab.key === key)
        const nextTab = remainingTabs[currentIndex] || remainingTabs[remainingTabs.length - 1]
        setSelectedKey(nextTab.key)
        setActiveTabKey(nextTab.key)
      }
    }
  }, [tabs, activeTabKey, removeChildBySlot])

  const handleCloseOther = useCallback((keepKey: string) => {
    // 删除所有其他 slot 的子组件
    tabs.forEach(tab => {
      if (tab.key !== keepKey && tab.key !== 'dashboard') {
        removeChildBySlot(tab.key)
      }
    })

    setTabs(prev => prev.filter(tab => tab.key === keepKey || tab.key === 'dashboard'))
    setSelectedKey(keepKey)
    setActiveTabKey(keepKey)
  }, [tabs, removeChildBySlot])

  const handleCloseAll = useCallback(() => {
    // 删除所有 slot 的子组件（除了 dashboard）
    tabs.forEach(tab => {
      if (tab.key !== 'dashboard') {
        removeChildBySlot(tab.key)
      }
    })

    const dashboardTab = tabs.find(tab => tab.key === 'dashboard')
    if (dashboardTab) {
      setTabs([dashboardTab])
      setSelectedKey('dashboard')
      setActiveTabKey('dashboard')
    }
  }, [tabs, removeChildBySlot])

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
        💡 提示：请在设计器中为此页面配置子组件，或拖拽组件到此区域
      </p>
      
      {/* 显示可用的槽位信息 */}
      <div style={{ marginTop: 16, padding: 12, background: '#f5f5f5', borderRadius: 4 }}>
        <strong>可用操作：</strong>
        <ul style={{ margin: '8px 0 0 20px' }}>
          <li>在左侧面板找到"电商业务组件"</li>
          <li>拖拽"商品列表"、"订单列表"等组件到此区域</li>
          <li>配置组件的 slot 属性为 "{selectedKey}"</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className={`admin-layout ${collapsed ? 'is-collapse' : ''} ${className || ''}`} style={style}>
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
          {activeChild || defaultContent}
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
