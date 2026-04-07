import React, { useState, useCallback, useMemo, useEffect, useRef, Children, isValidElement } from 'react'
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
  const activeTabKeyRef = useRef(activeTabKey)
  activeTabKeyRef.current = activeTabKey
  const initializedRef = useRef(false)

  // 初始化：从 schema 恢复 tabs state，并为工作台创建默认 TabPane
  useEffect(() => {
    if (__designMode !== 'design' || !componentId || initializedRef.current) return
    
    const timer = setTimeout(() => {
      try {
        const engine = (window as any).AliLowCodeEngine
        if (!engine?.project?.currentDocument) return
        
        const documentModel = engine.project.currentDocument
        const adminLayoutNode = documentModel.getNodeById(componentId)
        
        if (!adminLayoutNode) return
        
        // 获取所有现有的 TabPane 子节点
        const childrenArr = Array.isArray(adminLayoutNode.children)
          ? adminLayoutNode.children
          : (adminLayoutNode.children?.toArray ? adminLayoutNode.children.toArray() : [])
        
        const existingTabPanes = childrenArr.filter((child: any) => child.componentName === 'TabPane')
        
        console.log('[AdminLayout] 🔍 Found existing TabPanes:', existingTabPanes.length)
        
        // 从 schema 恢复 tabs state
        if (existingTabPanes.length > 0) {
          const restoredTabs: TabItem[] = existingTabPanes.map((tp: any) => {
            const tabKey = tp.props?.tabKey || tp.getPropValue?.('tabKey') || 'unknown'
            const tabLabel = tp.props?.tab || tp.getPropValue?.('tab') || getLabelFromKey(tabKey)
            const menuItem = findMenuItem(items, tabKey)
            
            return {
              key: tabKey,
              label: tabLabel,
              icon: menuItem?.icon,
              closable: tabKey !== 'dashboard',
              path: menuItem?.path || `/${tabKey}`,
            }
          })
          
          console.log('[AdminLayout] 📋 Restored tabs from schema:', restoredTabs.map(t => t.key))
          setTabs(restoredTabs)
          
          // 设置当前激活的 tab
          const currentActiveTab = restoredTabs[restoredTabs.length - 1]
          if (currentActiveTab) {
            setActiveTabKey(currentActiveTab.key)
            setSelectedKey(currentActiveTab.key)
          }
        } else {
          // 没有 TabPane，为工作台创建默认 TabPane
          const tabPaneNode = documentModel.createNode({
            componentName: 'TabPane',
            props: {
              tab: '工作台',
              tabKey: 'dashboard',
              activeTabKey: 'dashboard',
            },
          })
          
          if (tabPaneNode) {
            documentModel.insertNode(adminLayoutNode, tabPaneNode)
            console.log('[AdminLayout] ✅ Created default TabPane for dashboard')
          }
        }
        
        initializedRef.current = true
      } catch (e) {
        console.error('[AdminLayout] Init TabPane error:', e)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [componentId, __designMode, items])

  // 同步 activeTabKey 到所有 TabPane
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
      // silent fail
    }
  }, [activeTabKey, componentId, __designMode])

  const handleToggleCollapse = useCallback(() => {
    if (collapsible) setCollapsed(prev => !prev)
  }, [collapsible])

  const createTabPane = useCallback((tabKey: string, tabLabel: string) => {
    if (typeof window === 'undefined') return false

    try {
      const engine = (window as any).AliLowCodeEngine
      if (!engine?.project?.currentDocument) return false

      const documentModel = engine.project.currentDocument
      const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null
      if (!adminLayoutNode) return false

      // 收集所有现有的 TabPane 节点信息用于调试
      const allChildren = Array.isArray(adminLayoutNode.children)
        ? adminLayoutNode.children
        : (adminLayoutNode.children?.toArray ? adminLayoutNode.children.toArray() : [])
      
      console.log('[AdminLayout] 🔍 All children before create:', 
        allChildren.map((c: any) => ({ id: c.id, name: c.componentName, tabKey: c.props?.tabKey })))

      // 强制查找并删除已存在的同 key TabPane（防止残留）
      for (const child of allChildren) {
        const ck = child.props?.tabKey || child.getPropValue?.('tabKey')
        if (child.componentName === 'TabPane' && ck === tabKey) {
          console.log('[AdminLayout] ⚠️ Found existing TabPane, removing first:', child.id)
          
          // 先清空子节点
          if (child.children) {
            const grandChildren = Array.isArray(child.children)
              ? [...child.children]
              : (child.children.toArray ? [...child.children.toArray()] : [])
            
            console.log('[AdminLayout] 🗑️ Removing', grandChildren.length, 'children from existing TabPane')
            for (const gc of grandChildren) {
              try { documentModel.removeNode(gc) } catch(e) {}
            }
          }
          
          // 删除旧 TabPane
          documentModel.removeNode(child)
          break
        }
      }

      // 创建新 TabPane
      const tabPaneNode = documentModel.createNode({
        componentName: 'TabPane',
        props: {
          tab: tabLabel,
          tabKey: tabKey,
          activeTabKey: activeTabKeyRef.current,
        },
      })

      if (!tabPaneNode) return false

      documentModel.insertNode(adminLayoutNode, tabPaneNode)
      console.log('[AdminLayout] ✅ Created new TabPane:', tabKey, 'nodeId:', tabPaneNode.id)
      return true
    } catch (error) {
      console.error('[AdminLayout] createTabPane error:', error)
      return false
    }
  }, [componentId])

  const removeTabPane = useCallback((tabKey: string): boolean => {
    if (typeof window === 'undefined') return false

    let removed = false
    
    try {
      const engine = (window as any).AliLowCodeEngine
      if (!engine?.project?.currentDocument) return false

      const documentModel = engine.project.currentDocument
      const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null
      
      console.log('[AdminLayout] 🗑️ removeTabPane called:', tabKey)
      console.log('[AdminLayout] componentId:', componentId)
      console.log('[AdminLayout] adminLayoutNode:', adminLayoutNode ? 'found' : 'NOT FOUND')
      console.log('[AdminLayout] adminLayoutNode.id:', adminLayoutNode?.id)
      console.log('[AdminLayout] adminLayoutNode.componentName:', adminLayoutNode?.componentName)
      
      if (!adminLayoutNode) return false

      // 尝试多种方式获取 children
      let childrenArr: any[] = []
      
      // 方式1: 直接访问 children
      if (adminLayoutNode.children) {
        if (Array.isArray(adminLayoutNode.children)) {
          childrenArr = adminLayoutNode.children
        } else if (typeof adminLayoutNode.children.toArray === 'function') {
          childrenArr = adminLayoutNode.children.toArray()
        } else if (typeof adminLayoutNode.children.map === 'function') {
          childrenArr = adminLayoutNode.children.map((c: any) => c)
        }
      }
      
      // 方式2: 通过 schema 获取 children
      if (childrenArr.length === 0 && adminLayoutNode.schema?.children) {
        console.log('[AdminLayout] Trying schema.children...')
        const schemaChildren = adminLayoutNode.schema.children
        if (Array.isArray(schemaChildren)) {
          childrenArr = schemaChildren.map((childSchema: any) => {
            return documentModel.getNodeById(childSchema.id)
          }).filter(Boolean)
        }
      }
      
      // 方式3: 通过 documentModel 获取
      if (childrenArr.length === 0) {
        console.log('[AdminLayout] Trying documentModel.getRoot()...')
        const root = documentModel.getRoot()
        console.log('[AdminLayout] Root node:', root?.componentName)
        
        // 递归查找 AdminLayout 节点
        const findNode = (node: any, targetId: string | undefined): any => {
          if (!targetId) return null
          if (node.id === targetId) return node
          if (node.children) {
            const arr = Array.isArray(node.children) ? node.children : 
              (node.children.toArray ? node.children.toArray() : [])
            for (const child of arr) {
              const found = findNode(child, targetId)
              if (found) return found
            }
          }
          return null
        }
        
        const foundNode = findNode(root, componentId)
        if (foundNode && foundNode.children) {
          childrenArr = Array.isArray(foundNode.children) ? foundNode.children :
            (foundNode.children.toArray ? foundNode.children.toArray() : [])
        }
      }
      
      console.log('[AdminLayout] Final children count:', childrenArr.length)
      console.log('[AdminLayout] Children details:', 
        childrenArr.map((c: any) => ({ 
          id: c?.id, 
          name: c?.componentName, 
          tabKey: c?.props?.tabKey || c?.getPropValue?.('tabKey'),
          childrenCount: c?.children ? 
            (Array.isArray(c.children) ? c.children.length : 
              (c.children.toArray ? c.children.toArray().length : 0)) : 0
        })))
      
      // 打印每个子节点的详细信息
      childrenArr.forEach((c: any, idx: number) => {
        console.log(`[AdminLayout] Child[${idx}] ${c?.componentName}:`, {
          id: c?.id,
          tabKey: c?.props?.tabKey || c?.getPropValue?.('tabKey'),
          hasChildren: !!c?.children,
          childrenType: c?.children ? 
            (Array.isArray(c.children) ? 'array' : 
              (typeof c.children.toArray === 'function' ? 'array-like' : typeof c.children)) : 'none'
        })
        
        // 如果是 TabPane，打印其子节点
        if (c?.componentName === 'TabPane' && c?.children) {
          const tpChildren = Array.isArray(c.children) ? c.children : 
            (c.children.toArray ? c.children.toArray() : [])
          console.log(`[AdminLayout]   TabPane children:`, 
            tpChildren.map((gc: any) => ({ id: gc?.id, name: gc?.componentName })))
          
          // 尝试其他方式获取 children
          if (tpChildren.length === 0) {
            console.log(`[AdminLayout]   Trying alternative methods...`)
            
            // 方法1: schema.children
            if (c.schema?.children) {
              console.log(`[AdminLayout]   schema.children:`, c.schema.children)
            }
            
            // 方法2: getChildren
            if (typeof c.getChildren === 'function') {
              const gChildren = c.getChildren()
              console.log(`[AdminLayout]   getChildren():`, gChildren)
            }
            
            // 方法3: slots
            if (c.slots) {
              console.log(`[AdminLayout]   slots:`, c.slots)
            }
          }
        }
        
        // 如果不是 TabPane，说明是拖入的组件
        if (c?.componentName !== 'TabPane') {
          console.log(`[AdminLayout] ⚠️ Found non-TabPane child! This might be a dragged component.`)
        }
      })
      
      for (const child of childrenArr) {
        if (!child) continue
        
        const childTabKey = child.props?.tabKey || child.getPropValue?.('tabKey')
        
        if (child.componentName === 'TabPane' && childTabKey === tabKey) {
          console.log('[AdminLayout] ✅ Found TabPane to remove:', child.id)
          
          // 第一步：获取并删除所有子节点
          // 使用 schema.children 来获取子节点（因为 children.toArray() 可能返回空）
          const schemaChildren = child.schema?.children
          if (schemaChildren && Array.isArray(schemaChildren) && schemaChildren.length > 0) {
            console.log('[AdminLayout] Removing', schemaChildren.length, 'grandchildren from schema.children')
            
            // 倒序删除避免索引问题
            for (let i = schemaChildren.length - 1; i >= 0; i--) {
              const childSchema = schemaChildren[i]
              const grandChildNode = documentModel.getNodeById(childSchema.id)
              if (grandChildNode) {
                try {
                  documentModel.removeNode(grandChildNode)
                  console.log('[AdminLayout]   ✓ Removed grandchild:', grandChildNode.id, grandChildNode.componentName)
                } catch (e) {
                  console.warn('[AdminLayout]   ✗ Failed to remove grandchild:', e)
                }
              }
            }
          } else {
            console.log('[AdminLayout] No grandchildren to remove')
          }
          
          // 第二步：删除 TabPane 本身
          try {
            documentModel.removeNode(child)
            removed = true
            console.log('[AdminLayout] ✅ Removed TabPane node:', tabKey)
          } catch (e) {
            console.error('[AdminLayout] Failed to remove TabPane:', e)
          }
          
          break
        }
      }
      
      if (!removed) {
        console.warn('[AdminLayout] ⚠️ TabPane not found for key:', tabKey)
      }
      
      return removed
    } catch (error) {
      console.error('[AdminLayout] removeTabPane error:', error)
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
          const filtered = prev.filter(t => t.closable)
          if (filtered.length > 0) {
            return [...prev.filter(t => t.key !== filtered[0].key), newTab]
          }
        }
        return [...prev, newTab]
      })

      if (__designMode === 'design') {
        setTimeout(() => createTabPane(key, menuItem?.label || getLabelFromKey(key)), 0)
      }
    }

    setActiveTabKey(key)
  }, [tabs, items, maxTabs, __designMode, createTabPane])

  const handleOpenChange = useCallback((keys: string[]) => setOpenKeys(keys), [])
  const handleNavigate = useCallback((key: string) => {
    setSelectedKey(key)
    setActiveTabKey(key)
  }, [])
  const handleTabClick = useCallback((key: string) => {
    setSelectedKey(key)
    setActiveTabKey(key)
  }, [])

  const handleCloseTab = useCallback((key: string) => {
    if (key === 'dashboard') return

    // 先删除 TabPane 节点
    removeTabPane(key)

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
  }, [tabs, activeTabKey, removeTabPane])

  const handleCloseOther = useCallback((keepKey: string) => {
    tabs.forEach(tab => {
      if (tab.key !== keepKey && tab.key !== 'dashboard') {
        removeTabPane(tab.key)
      }
    })

    setTabs(prev => prev.filter(tab => tab.key === keepKey || tab.key === 'dashboard'))
    setSelectedKey(keepKey)
    setActiveTabKey(keepKey)
  }, [tabs, removeTabPane])

  const handleCloseAll = useCallback(() => {
    tabs.forEach(tab => {
      if (tab.key !== 'dashboard') {
        removeTabPane(tab.key)
      }
    })

    const dashboardTab = tabs.find(tab => tab.key === 'dashboard')
    if (dashboardTab) {
      setTabs([dashboardTab])
      setSelectedKey('dashboard')
      setActiveTabKey('dashboard')
    }
  }, [tabs, removeTabPane])

  const breadcrumbItems = useMemo((): BreadcrumbItem[] => {
    if (selectedKey === 'dashboard') return []
    const parts = selectedKey.split('/')
    if (parts.length === 1) return [{ key: selectedKey, label: '', path: selectedKey }]
    return [{ key: selectedKey, label: '', path: selectedKey }]
  }, [selectedKey])

  // 条件渲染：只渲染 activeTabKey 对应的 TabPane
  const filteredChildren = useMemo(() => {
    if (!children) return null
    
    // 在设计模式下，过滤 children 只渲染当前 activeTabKey 的 TabPane
    if (__designMode === 'design') {
      const childArray = Children.toArray(children)
      const activeTabPane = childArray.find((child) => {
        if (isValidElement(child)) {
          const childProps = child.props as any
          return childProps?.tabKey === activeTabKey
        }
        return false
      })
      return activeTabPane || null
    }
    
    // 预览模式下，渲染所有 children（TabPane 内部会处理显隐）
    return children
  }, [children, activeTabKey, __designMode])

  const defaultContent = (
    <div style={{ padding: 24, color: '#999' }}>
      点击侧边栏菜单创建选项卡，然后拖拽组件到对应面板
    </div>
  )

  const content = filteredChildren || defaultContent

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
