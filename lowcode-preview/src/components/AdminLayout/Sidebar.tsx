import React, { useState } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
  UserOutlined,
  SafetyCertificateOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  TeamOutlined,
  SettingOutlined,
  TagsOutlined,
  InboxOutlined,
  DollarOutlined,
  GiftOutlined,
  ThunderboltOutlined,
  FireOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
import type { MenuItem } from './types'

const { SubMenu } = Menu

interface SidebarProps {
  collapsed: boolean
  selectedKey: string
  openKeys: string[]
  onMenuClick: (key: string) => void
  onOpenChange: (keys: string[]) => void
}

const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    label: '工作台',
    icon: <DashboardOutlined />,
    path: '/dashboard',
  },
  {
    key: 'permission',
    label: '权限管理',
    icon: <SafetyCertificateOutlined />,
    children: [
      {
        key: 'permission/users',
        label: '用户管理',
        icon: <UserOutlined />,
        path: '/permission/users',
      },
      {
        key: 'permission/roles',
        label: '角色管理',
        icon: <TeamOutlined />,
        path: '/permission/roles',
      },
      {
        key: 'permission/resources',
        label: '资源管理',
        icon: <SettingOutlined />,
        path: '/permission/resources',
      },
      {
        key: 'permission/menus',
        label: '菜单管理',
        icon: <FileTextOutlined />,
        path: '/permission/menus',
      },
    ],
  },
  {
    key: 'product',
    label: '商品管理',
    icon: <ShoppingOutlined />,
    children: [
      {
        key: 'product/list',
        label: '商品列表',
        icon: <InboxOutlined />,
        path: '/product/list',
      },
      {
        key: 'product/add',
        label: '添加商品',
        icon: <ShoppingOutlined />,
        path: '/product/add',
      },
      {
        key: 'product/category',
        label: '商品分类',
        icon: <TagsOutlined />,
        path: '/product/category',
      },
      {
        key: 'product/brand',
        label: '品牌管理',
        path: '/product/brand',
      },
      {
        key: 'product/attribute',
        label: '商品属性',
        path: '/product/attribute',
      },
    ],
  },
  {
    key: 'order',
    label: '订单管理',
    icon: <FileTextOutlined />,
    children: [
      {
        key: 'order/list',
        label: '订单列表',
        icon: <FileTextOutlined />,
        path: '/order/list',
      },
      {
        key: 'order/setting',
        label: '订单设置',
        icon: <SettingOutlined />,
        path: '/order/setting',
      },
      {
        key: 'order/return',
        label: '退货申请',
        path: '/order/return',
      },
      {
        key: 'order/reason',
        label: '退货原因',
        path: '/order/reason',
      },
    ],
  },
  {
    key: 'marketing',
    label: '营销管理',
    icon: <GiftOutlined />,
    children: [
      {
        key: 'marketing/coupon',
        label: '优惠券管理',
        icon: <GiftOutlined />,
        path: '/marketing/coupon',
      },
      {
        key: 'marketing/promotion',
        label: '促销活动',
        icon: <DollarOutlined />,
        path: '/marketing/promotion',
      },
      {
        key: 'marketing/flash',
        label: '秒杀活动',
        icon: <ThunderboltOutlined />,
        path: '/marketing/flash',
      },
      {
        key: 'marketing/new',
        label: '新品推荐',
        icon: <FireOutlined />,
        path: '/marketing/new',
      },
      {
        key: 'marketing/hot',
        label: '人气推荐',
        icon: <FireOutlined />,
        path: '/marketing/hot',
      },
      {
        key: 'marketing/advertise',
        label: '广告管理',
        path: '/marketing/advertise',
      },
      {
        key: 'marketing/subject',
        label: '专题管理',
        path: '/marketing/subject',
      },
      {
        key: 'marketing/brand',
        label: '品牌推荐',
        path: '/marketing/brand',
      },
    ],
  },
]

function renderMenuItems(items: MenuItem[]): React.ReactNode {
  return items.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    )
  })
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  selectedKey,
  openKeys,
  onMenuClick,
  onOpenChange,
}) => {
  const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(['permission', 'product', 'order', 'marketing'])

  const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestKey = keys[keys.length - 1]
    if (latestKey && menuItems.some((item) => item.key === latestKey)) {
      setInternalOpenKeys(keys)
      onOpenChange(keys)
    } else {
      setInternalOpenKeys(latestKey ? [latestKey] : [])
      onOpenChange(latestKey ? [latestKey] : [])
    }
  }

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    onMenuClick(key)
  }

  return (
    <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        {!collapsed && <span className="logo-text">Mall Admin</span>}
        {collapsed && <span className="logo-icon">M</span>}
      </div>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={internalOpenKeys}
        openKeys={openKeys.length > 0 ? openKeys : internalOpenKeys}
        onClick={handleClick}
        onOpenChange={handleOpenChange}
        items={menuItems.map((item) => {
          if (item.children && item.children.length > 0) {
            return {
              key: item.key,
              icon: item.icon,
              label: item.label,
              children: item.children.map((child) => ({
                key: child.key,
                icon: child.icon,
                label: child.label,
              })),
            }
          }
          return {
            key: item.key,
            icon: item.icon,
            label: item.label,
          }
        })}
      />
    </div>
  )
}

export default Sidebar
export { menuItems }
