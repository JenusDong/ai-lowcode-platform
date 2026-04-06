import React, { useState, useCallback, useMemo } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'
import type { BreadcrumbItem } from './types'

import { DashboardPage, UsersPage, RolesPage, ResourcesPage, MenusPage } from './pages/PermissionPages'
import { ProductListPage, AddProductPage, CategoryPage, BrandPage, AttributePage } from './pages/ProductPages'
import { OrderListPage, OrderSettingPage, ReturnApplyPage, ReturnReasonPage } from './pages/OrderPages'
import {
  CouponManagePage,
  PromotionPage,
  FlashSalePage,
  NewProductPage,
  HotProductPage,
  AdvertisePage,
  SubjectPage,
  BrandRecommendPage,
} from './pages/MarketingPages'
import './AdminLayout.scss'

const pageComponents: Record<string, React.FC> = {
  dashboard: DashboardPage,

  'permission/users': UsersPage,
  'permission/roles': RolesPage,
  'permission/resources': ResourcesPage,
  'permission/menus': MenusPage,

  'product/list': ProductListPage,
  'product/add': AddProductPage,
  'product/category': CategoryPage,
  'product/brand': BrandPage,
  'product/attribute': AttributePage,

  'order/list': OrderListPage,
  'order/setting': OrderSettingPage,
  'order/return': ReturnApplyPage,
  'order/reason': ReturnReasonPage,

  'marketing/coupon': CouponManagePage,
  'marketing/promotion': PromotionPage,
  'marketing/flash': FlashSalePage,
  'marketing/new': NewProductPage,
  'marketing/hot': HotProductPage,
  'marketing/advertise': AdvertisePage,
  'marketing/subject': SubjectPage,
  'marketing/brand': BrandRecommendPage,
}

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('dashboard')
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const handleToggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  const handleMenuClick = useCallback((key: string) => {
    setSelectedKey(key)
  }, [])

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys)
  }, [])

  const handleNavigate = useCallback((key: string) => {
    setSelectedKey(key)
  }, [])

  const breadcrumbItems = useMemo((): BreadcrumbItem[] => {
    if (selectedKey === 'dashboard') return []
    const parts = selectedKey.split('/')
    if (parts.length === 1) {
      return [{ key: selectedKey, label: '', path: selectedKey }]
    }
    return [{ key: selectedKey, label: '', path: selectedKey }]
  }, [selectedKey])

  const CurrentPage = pageComponents[selectedKey] || DashboardPage

  return (
    <div className={`admin-layout ${collapsed ? 'is-collapse' : ''}`}>
      <Sidebar
        collapsed={collapsed}
        selectedKey={selectedKey}
        openKeys={openKeys}
        onMenuClick={handleMenuClick}
        onOpenChange={handleOpenChange}
      />
      <div className="layout-right">
        <Navbar
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
          breadcrumbItems={breadcrumbItems}
          onNavigate={handleNavigate}
        />
        <MainContent pageKey={selectedKey} className={collapsed ? 'collapsed' : ''}>
          <CurrentPage />
        </MainContent>
      </div>

      <div
        className={`mobile-overlay ${!collapsed ? 'visible' : ''}`}
        onClick={handleToggleCollapse}
      />
    </div>
  )
}

export default AdminLayout
