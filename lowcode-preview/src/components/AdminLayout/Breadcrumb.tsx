import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import type { BreadcrumbItem } from './types'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  onNavigate?: (path: string) => void
}

const menuLabelMap: Record<string, string> = {
  dashboard: '工作台',
  permission: '权限管理',
  product: '商品管理',
  order: '订单管理',
  marketing: '营销管理',
  'permission/users': '用户管理',
  'permission/roles': '角色管理',
  'permission/resources': '资源管理',
  'permission/menus': '菜单管理',
  'product/list': '商品列表',
  'product/add': '添加商品',
  'product/category': '商品分类',
  'product/brand': '品牌管理',
  'product/attribute': '商品属性',
  'order/list': '订单列表',
  'order/setting': '订单设置',
  'order/return': '退货申请',
  'order/reason': '退货原因',
  'marketing/coupon': '优惠券管理',
  'marketing/promotion': '促销活动',
  'marketing/flash': '秒杀活动',
  'marketing/new': '新品推荐',
  'marketing/hot': '人气推荐',
  'marketing/advertise': '广告管理',
  'marketing/subject': '专题管理',
  'marketing/brand': '品牌推荐',
}

const BreadcrumbNav: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  const breadcrumbItems = [
    {
      key: 'home',
      title: (
        <span className="breadcrumb-home">
          <HomeOutlined />
          <span>首页</span>
        </span>
      ),
    },
    ...items.map((item) => ({
      key: item.key,
      title: item.label || menuLabelMap[item.key] || item.key,
    })),
  ]

  return (
    <AntBreadcrumb
      className="admin-breadcrumb"
      separator={<RightOutlined />}
      items={breadcrumbItems.map((item, index) => ({
        key: item.key,
        title:
          index === breadcrumbItems.length - 1 ? (
            <span className="breadcrumb-current">{item.title}</span>
          ) : (
            <a
              onClick={() =>
                index === 0 ? onNavigate?.('dashboard') : onNavigate?.(items[index - 1]?.path || items[index - 1]?.key)
              }
            >
              {item.title}
            </a>
          ),
      }))}
    />
  )
}

export default BreadcrumbNav
