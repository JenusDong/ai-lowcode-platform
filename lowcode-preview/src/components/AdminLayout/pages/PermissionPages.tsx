import React from 'react'
import { Card, Row, Col, Statistic, Table, Tag, Button, Space, Input, Select } from 'antd'
import type { ColumnsType } from 'antd'
import {
  UserOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

const DashboardPage: React.FC = () => {
  const statsData = [
    { title: '用户总数', value: 12680, icon: <UserOutlined />, color: '#409eff', prefix: '' },
    { title: '角色数量', value: 8, icon: <TeamOutlined />, color: '#67c23a', prefix: '' },
    { title: '活跃权限', value: 156, icon: <SafetyCertificateOutlined />, color: '#e6a23c', prefix: '' },
    { title: '系统资源', value: 42, icon: <SettingOutlined />, color: '#f56c6c', prefix: '' },
  ]

  return (
    <div className="dashboard-page">
      <Row gutter={[16, 16]}>
        {statsData.map((item) => (
          <Col xs={24} sm={12} lg={6} key={item.title}>
            <Card className="stat-card" hoverable>
              <Statistic
                title={<span className="stat-title">{item.title}</span>}
                value={item.value}
                prefix={<span className="stat-icon" style={{ backgroundColor: item.color }}>{item.icon}</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="quick-actions" title="快捷操作" style={{ marginTop: 20 }}>
        <Space wrap>
          <Button type="primary" icon={<PlusOutlined />}>添加用户</Button>
          <Button icon={<PlusOutlined />}>创建角色</Button>
          <Button icon={<SettingOutlined />}>配置权限</Button>
          <Button>查看日志</Button>
        </Space>
      </Card>

      <Card className="recent-activity" title="最近动态" style={{ marginTop: 20 }}>
        <p className="activity-placeholder">暂无最新动态</p>
      </Card>
    </div>
  )
}

interface UserItem {
  id: number
  username: string
  email: string
  role: string
  status: string
  createTime: string
}

const UsersPage: React.FC = () => {
  const columns: ColumnsType<UserItem> = [
    { title: 'ID', dataIndex: 'id', width: 70 },
    { title: '用户名', dataIndex: 'username' },
    { title: '邮箱', dataIndex: 'email' },
    {
      title: '角色',
      dataIndex: 'role',
      render: (role: string) => (
        <Tag color={role === '管理员' ? 'red' : role === '运营' ? 'blue' : 'green'}>{role}</Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag color={status === '启用' ? 'success' : 'default'}>{status}</Tag>
      ),
    },
    { title: '创建时间', dataIndex: 'createTime', width: 180 },
    {
      title: '操作',
      key: 'action',
      width: 160,
      render: () => (
        <Space size="small">
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      ),
    },
  ]

  const data: UserItem[] = [
    { id: 1, username: 'admin', email: 'admin@mall.com', role: '管理员', status: '启用', createTime: '2024-01-15 10:30:00' },
    { id: 2, username: 'operator1', email: 'operator1@mall.com', role: '运营', status: '启用', createTime: '2024-02-20 14:15:00' },
    { id: 3, username: 'editor1', email: 'editor1@mall.com', role: '编辑', status: '禁用', createTime: '2024-03-05 09:45:00' },
    { id: 4, username: 'viewer1', email: 'viewer1@mall.com', role: '访客', status: '启用', createTime: '2024-03-18 16:20:00' },
  ]

  return (
    <div className="users-page">
      <Card>
        <div className="table-toolbar">
          <Space>
            <Input placeholder="搜索用户名" prefix={<SearchOutlined />} allowClear style={{ width: 200 }} />
            <Select placeholder="选择角色" allowClear style={{ width: 140 }} options={[
              { label: '管理员', value: 'admin' },
              { label: '运营', value: 'operator' },
              { label: '编辑', value: 'editor' },
              { label: '访客', value: 'viewer' },
            ]} />
            <Select placeholder="状态" allowClear style={{ width: 120 }} options={[
              { label: '启用', value: 'enabled' },
              { label: '禁用', value: 'disabled' },
            ]} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>添加用户</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

interface RoleItem {
  id: number
  name: string
  code: string
  description: string
  userCount: number
  createTime: string
}

const RolesPage: React.FC = () => {
  const columns: ColumnsType<RoleItem> = [
    { title: 'ID', dataIndex: 'id', width: 70 },
    { title: '角色名称', dataIndex: 'name' },
    { title: '角色编码', dataIndex: 'code' },
    { title: '描述', dataIndex: 'description' },
    { title: '关联用户数', dataIndex: 'userCount', width: 110 },
    { title: '创建时间', dataIndex: 'createTime', width: 180 },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: () => (
        <Space size="small">
          <Button type="link" size="small">分配菜单</Button>
          <Button type="link" size="small">分配资源</Button>
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      ),
    },
  ]

  const data: RoleItem[] = [
    { id: 1, name: '超级管理员', code: 'SUPER_ADMIN', description: '拥有所有权限', userCount: 2, createTime: '2024-01-01 00:00:00' },
    { id: 2, name: '商品管理员', code: 'PRODUCT_ADMIN', description: '商品相关管理权限', userCount: 5, createTime: '2024-01-10 08:30:00' },
    { id: 3, name: '订单管理员', code: 'ORDER_ADMIN', description: '订单相关管理权限', userCount: 3, createTime: '2024-01-15 14:20:00' },
    { id: 4, name: '营销管理员', code: 'MARKETING_ADMIN', description: '营销活动管理权限', userCount: 4, createTime: '2024-02-01 09:00:00' },
  ]

  return (
    <div className="roles-page">
      <Card>
        <div className="table-toolbar">
          <Space>
            <Input placeholder="搜索角色名称" prefix={<SearchOutlined />} allowClear style={{ width: 200 }} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>添加角色</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

const ResourcesPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <SettingOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>资源管理</h3>
      <p>管理系统后端接口资源和分类</p>
    </div>
  </Card>
)

const MenusPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <SettingOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>菜单管理</h3>
      <p>管理系统前端菜单和路由配置</p>
    </div>
  </Card>
)

export { DashboardPage, UsersPage, RolesPage, ResourcesPage, MenusPage }
