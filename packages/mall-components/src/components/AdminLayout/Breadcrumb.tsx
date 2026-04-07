import React from 'react'
import { Breadcrumb } from 'antd'
import type { BreadcrumbItem } from './types'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  onNavigate: (key: string) => void
}

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
  return: '退货',
  reason: '原因',
  coupon: '优惠券',
  promotion: '促销',
  flash: '秒杀',
  new: '新品',
  hot: '人气',
  advertise: '广告',
  subject: '专题',
}

const BreadcrumbNav: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  const getLabel = (key: string): string => {
    const parts = key.split('/')
    return parts.map(part => labelMap[part] || part).join(' / ')
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Breadcrumb>
      {items.map((item) => (
        <Breadcrumb.Item key={item.key}>
          <a onClick={() => onNavigate(item.key)}>
            {item.label || getLabel(item.key)}
          </a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default BreadcrumbNav
