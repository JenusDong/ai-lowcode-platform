import React, { useState, useEffect } from 'react'
import {
  Card,
  Button,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  Select,
  message,
  Table,
  Avatar,
  Divider,
  Switch,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { UmsAdmin } from '../../types/permission'
import { USER_STATUS, USER_STATUS_OPTIONS } from '../../types/permission'
import './UserCard.scss'

interface UserCardProps {
  dataSource?: string
  showCreateButton?: boolean
  showFilter?: boolean
  showStatistics?: boolean
  onCreateUser?: (user: Partial<UmsAdmin>) => void
  onEditUser?: (id: number, user: Partial<UmsAdmin>) => void
  onDeleteUser?: (id: number) => void
  onToggleStatus?: (id: number, status: number) => void
  style?: React.CSSProperties
  className?: string
}

const UserCard: React.FC<UserCardProps> = ({
  dataSource,
  showCreateButton = true,
  showFilter = true,
  showStatistics = true,
  onCreateUser,
  onEditUser,
  onDeleteUser,
  onToggleStatus,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<UmsAdmin[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filterUsername, setFilterUsername] = useState('')
  const [filterStatus, setFilterStatus] = useState<number>()
  const [modalVisible, setModalVisible] = useState(false)
  const [editingUser, setEditingUser] = useState<UmsAdmin | null>(null)
  const [form] = Form.useForm()

  const mockData: UmsAdmin[] = [
    {
      id: 1,
      username: 'admin',
      nickName: '超级管理员',
      email: 'admin@example.com',
      phone: '13800138000',
      status: USER_STATUS.ENABLED,
      createTime: '2024-01-01 10:00:00',
      loginTime: '2024-04-02 09:30:00',
      roleIds: [1],
      roleNames: ['超级管理员'],
    },
    {
      id: 2,
      username: 'operator',
      nickName: '运营人员',
      email: 'operator@example.com',
      phone: '13900139000',
      status: USER_STATUS.ENABLED,
      createTime: '2024-01-15 14:00:00',
      loginTime: '2024-04-01 16:20:00',
      roleIds: [2],
      roleNames: ['运营'],
    },
    {
      id: 3,
      username: 'viewer',
      nickName: '访客用户',
      email: 'viewer@example.com',
      phone: '13700137000',
      status: USER_STATUS.DISABLED,
      createTime: '2024-02-01 09:00:00',
      loginTime: '2024-03-15 10:00:00',
      roleIds: [3],
      roleNames: ['访客'],
    },
  ]

  useEffect(() => {
    fetchData()
  }, [currentPage, pageSize])

  const fetchData = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      let filtered = [...mockData]
      if (filterUsername) {
        filtered = filtered.filter(
          (item) =>
            item.username.toLowerCase().includes(filterUsername.toLowerCase()) ||
            item.nickName?.toLowerCase().includes(filterUsername.toLowerCase())
        )
      }
      if (filterStatus !== undefined) {
        filtered = filtered.filter((item) => item.status === filterStatus)
      }
      setData(filtered)
      setTotal(filtered.length)
    } catch (error) {
      console.error('Failed to fetch user list:', error)
      message.error('获取用户列表失败')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
  }

  const handleReset = () => {
    setFilterUsername('')
    setFilterStatus(undefined)
    setCurrentPage(1)
    fetchData()
  }

  const handleCreate = () => {
    setEditingUser(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (record: UmsAdmin) => {
    setEditingUser(record)
    form.setFieldsValue(record)
    setModalVisible(true)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该用户吗？',
      onOk: () => {
        onDeleteUser?.(id)
        message.success('删除成功')
        fetchData()
      },
    })
  }

  const handleToggleStatus = (record: UmsAdmin) => {
    const newStatus =
      record.status === USER_STATUS.ENABLED ? USER_STATUS.DISABLED : USER_STATUS.ENABLED
    onToggleStatus?.(record.id, newStatus)
    message.success(newStatus === USER_STATUS.ENABLED ? '已启用' : '已禁用')
    fetchData()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      if (editingUser) {
        onEditUser?.(editingUser.id, values)
        message.success('编辑成功')
      } else {
        onCreateUser?.(values)
        message.success('创建成功')
      }
      setModalVisible(false)
      fetchData()
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  const getStatusTag = (status: number) => {
    const statusMap: Record<number, { color: string; text: string }> = {
      [USER_STATUS.ENABLED]: { color: 'success', text: '已启用' },
      [USER_STATUS.DISABLED]: { color: 'default', text: '已禁用' },
    }
    const { color, text } = statusMap[status] || { color: 'default', text: '未知' }
    return <Tag color={color}>{text}</Tag>
  }

  const columns: ColumnsType<UmsAdmin> = [
    {
      title: '用户信息',
      key: 'userInfo',
      width: 200,
      render: (_, record) => (
        <Space>
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }} />
          <div>
            <div className="user-name">{record.nickName || record.username}</div>
            <div className="user-username">@{record.username}</div>
          </div>
        </Space>
      ),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 180,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      width: 130,
    },
    {
      title: '角色',
      dataIndex: 'roleNames',
      key: 'roleNames',
      width: 150,
      render: (roleNames: string[]) => (
        <Space wrap>
          {roleNames?.map((name, index) => (
            <Tag key={index} color="blue">
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (status: number) => getStatusTag(status),
    },
    {
      title: '最后登录',
      dataIndex: 'loginTime',
      key: 'loginTime',
      width: 160,
    },
    {
      title: '操作',
      key: 'action',
      width: 180,
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button type="link" size="small" onClick={() => handleToggleStatus(record)}>
            {record.status === USER_STATUS.ENABLED ? '禁用' : '启用'}
          </Button>
          <Button
            type="link"
            size="small"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const statistics = {
    totalUsers: mockData.length,
    activeUsers: mockData.filter((u) => u.status === USER_STATUS.ENABLED).length,
    disabledUsers: mockData.filter((u) => u.status === USER_STATUS.DISABLED).length,
  }

  return (
    <div className={`mall-user-card ${className || ''}`} style={style}>
      <Card>
        {showStatistics && (
          <div className="statistics-section">
            <Space size="large">
              <div className="stat-item">
                <div className="stat-value">{statistics.totalUsers}</div>
                <div className="stat-label">用户总数</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#52c41a' }}>
                  {statistics.activeUsers}
                </div>
                <div className="stat-label">活跃用户</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#8c8c8c' }}>
                  {statistics.disabledUsers}
                </div>
                <div className="stat-label">已禁用</div>
              </div>
            </Space>
          </div>
        )}

        {showFilter && (
          <div className="filter-section">
            <Space wrap>
              <Input
                placeholder="用户名/昵称"
                value={filterUsername}
                onChange={(e) => setFilterUsername(e.target.value)}
                style={{ width: 200 }}
              />
              <Select
                placeholder="用户状态"
                value={filterStatus}
                onChange={setFilterStatus}
                style={{ width: 120 }}
                allowClear
              >
                {USER_STATUS_OPTIONS.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
              <Button type="primary" onClick={handleSearch}>
                查询
              </Button>
              <Button onClick={handleReset}>重置</Button>
            </Space>
          </div>
        )}

        {showCreateButton && (
          <div className="action-section">
            <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>
              创建用户
            </Button>
          </div>
        )}

        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={loading}
          pagination={{
            current: currentPage,
            pageSize,
            total,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
            onChange: (page, pageSize) => {
              setCurrentPage(page)
              setPageSize(pageSize)
            },
          }}
        />
      </Card>

      <Modal
        title={editingUser ? '编辑用户' : '创建用户'}
        visible={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
        width={500}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" disabled={!!editingUser} />
          </Form.Item>
          <Form.Item
            name="nickName"
            label="昵称"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="status" label="状态" initialValue={USER_STATUS.ENABLED}>
            <Switch
              checkedChildren="启用"
              unCheckedChildren="禁用"
              defaultChecked
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default UserCard
