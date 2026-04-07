import React from 'react'
import { Dropdown, Avatar, Space, Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import BreadcrumbNav from './Breadcrumb'
import type { BreadcrumbItem } from './types'

interface NavbarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  breadcrumbItems: BreadcrumbItem[]
  onNavigate: (key: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ collapsed, onToggleCollapse, breadcrumbItems, onNavigate }) => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ]

  const handleUserMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      console.log('User logged out')
    }
  }

  const menu = (
    <Menu items={userMenuItems} onClick={handleUserMenuClick} />
  )

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={onToggleCollapse}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <BreadcrumbNav items={breadcrumbItems} onNavigate={onNavigate} />
      </div>
      <div className="navbar-right">
        <Dropdown overlay={menu} placement="bottomRight">
          <div className="user-info">
            <Avatar size={32} icon={<UserOutlined />} className="user-avatar" />
            <Space size={4} className="username">
              <span>管理员</span>
            </Space>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbar
