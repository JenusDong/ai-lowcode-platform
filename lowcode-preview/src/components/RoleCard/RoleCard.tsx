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
  Divider,
  Switch,
  Tree,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import type { UmsRole } from '../../types/permission'
import { ROLE_STATUS, ROLE_STATUS_OPTIONS } from '../../types/permission'
import './RoleCard.scss'

interface RoleCardProps {
  dataSource?: string
  showCreateButton?: boolean
  showFilter?: boolean
  showStatistics?: boolean
  showPermissionTree?: boolean
  onCreateRole?: (role: Partial<UmsRole>) => void
  onEditRole?: (id: number, role: Partial<UmsRole>) => void
  onDeleteRole?: (id: number) => void
  onToggleStatus?: (id: number, status: number) => void
  style?: React.CSSProperties
  className?: string
}

const RoleCard: React.FC<RoleCardProps> = ({
  dataSource,
  showCreateButton = true,
  showFilter = true,
  showStatistics = true,
  showPermissionTree = true,
  onCreateRole,
  onEditRole,
  onDeleteRole,
  onToggleStatus,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<UmsRole[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filterName, setFilterName] = useState('')
  const [filterStatus, setFilterStatus] = useState<number>()
  const [modalVisible, setModalVisible] = useState(false)
  const [editingRole, setEditingRole] = useState<UmsRole | null>(null)
  const [form] = Form.useForm()

  const mockData: UmsRole[] = [
    {
      id: 1,
      name: '超级管理员',
      description: '拥有所有权限',
      adminCount: 2,
      status: ROLE_STATUS.ENABLED,
      sort: 0,
      createTime: '2024-01-01 10:00:00',
    },
    {
      id: 2,
      name: '运营',
      description: '负责商品和订单管理',
      adminCount: 5,
      status: ROLE_STATUS.ENABLED,
      sort: 1,
      createTime: '2024-01-15 14:00:00',
    },
    {
      id: 3,
      name: '客服',
      description: '负责订单处理和客户服务',
      adminCount: 3,
      status: ROLE_STATUS.ENABLED,
      sort: 2,
      createTime: '2024-02-01 09:00:00',
    },
    {
      id: 4,
      name: '访客',
      description: '只读权限',
      adminCount: 10,
      status: ROLE_STATUS.DISABLED,
      sort: 3,
      createTime: '2024-02-15 11:00:00',
    },
  ]

  const permissionTreeData = [
    {
      title: '商品管理',
      key: 'product',
      children: [
        { title: '商品列表', key: 'product:list' },
        { title: '添加商品', key: 'product:create' },
        { title: '编辑商品', key: 'product:edit' },
        { title: '删除商品', key: 'product:delete' },
      ],
    },
    {
      title: '订单管理',
      key: 'order',
      children: [
        { title: '订单列表', key: 'order:list' },
        { title: '订单详情', key: 'order:detail' },
        { title: '发货', key: 'order:deliver' },
        { title: '关闭订单', key: 'order:close' },
      ],
    },
    {
      title: '营销管理',
      key: 'marketing',
      children: [
        { title: '优惠券管理', key: 'marketing:coupon' },
        { title: '促销活动', key: 'marketing:promotion' },
      ],
    },
    {
      title: '权限管理',
      key: 'permission',
      children: [
        { title: '用户管理', key: 'permission:user' },
        { title: '角色管理', key: 'permission:role' },
      ],
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
      if (filterName) {
        filtered = filtered.filter(
          (item) =>
            item.name.toLowerCase().includes(filterName.toLowerCase()) ||
            item.description?.toLowerCase().includes(filterName.toLowerCase())
        )
      }
      if (filterStatus !== undefined) {
        filtered = filtered.filter((item) => item.status === filterStatus)
      }
      setData(filtered)
      setTotal(filtered.length)
    } catch (error) {
      console.error('Failed to fetch role list:', error)
      message.error('获取角色列表失败')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
  }

  const handleReset = () => {
    setFilterName('')
    setFilterStatus(undefined)
    setCurrentPage(1)
    fetchData()
  }

  const handleCreate = () => {
    setEditingRole(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (record: UmsRole) => {
    setEditingRole(record)
    form.setFieldsValue(record)
    setModalVisible(true)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该角色吗？',
      onOk: () => {
        onDeleteRole?.(id)
        message.success('删除成功')
        fetchData()
      },
    })
  }

  const handleToggleStatus = (record: UmsRole) => {
    const newStatus =
      record.status === ROLE_STATUS.ENABLED ? ROLE_STATUS.DISABLED : ROLE_STATUS.ENABLED
    onToggleStatus?.(record.id, newStatus)
    message.success(newStatus === ROLE_STATUS.ENABLED ? '已启用' : '已禁用')
    fetchData()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      if (editingRole) {
        onEditRole?.(editingRole.id, values)
        message.success('编辑成功')
      } else {
        onCreateRole?.(values)
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
      [ROLE_STATUS.ENABLED]: { color: 'success', text: '已启用' },
      [ROLE_STATUS.DISABLED]: { color: 'default', text: '已禁用' },
    }
    const { color, text } = statusMap[status] || { color: 'default', text: '未知' }
    return <Tag color={color}>{text}</Tag>
  }

  const columns: ColumnsType<UmsRole> = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (text: string) => (
        <Space>
          <TeamOutlined style={{ color: '#1890ff' }} />
          <span className="role-name">{text}</span>
        </Space>
      ),
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      width: 200,
    },
    {
      title: '用户数',
      dataIndex: 'adminCount',
      key: 'adminCount',
      width: 80,
      render: (count: number) => (
        <Tag color="blue">{count} 人</Tag>
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
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      width: 60,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
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
            {record.status === ROLE_STATUS.ENABLED ? '禁用' : '启用'}
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
    totalRoles: mockData.length,
    activeRoles: mockData.filter((r) => r.status === ROLE_STATUS.ENABLED).length,
    totalAdmins: mockData.reduce((sum, r) => sum + r.adminCount, 0),
  }

  return (
    <div className={`mall-role-card ${className || ''}`} style={style}>
      <Card>
        {showStatistics && (
          <div className="statistics-section">
            <Space size="large">
              <div className="stat-item">
                <div className="stat-value">{statistics.totalRoles}</div>
                <div className="stat-label">角色总数</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#52c41a' }}>
                  {statistics.activeRoles}
                </div>
                <div className="stat-label">启用角色</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#1890ff' }}>
                  {statistics.totalAdmins}
                </div>
                <div className="stat-label">用户总数</div>
              </div>
            </Space>
          </div>
        )}

        {showFilter && (
          <div className="filter-section">
            <Space wrap>
              <Input
                placeholder="角色名称/描述"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
                style={{ width: 200 }}
              />
              <Select
                placeholder="角色状态"
                value={filterStatus}
                onChange={setFilterStatus}
                style={{ width: 120 }}
                allowClear
              >
                {ROLE_STATUS_OPTIONS.map((option) => (
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
              创建角色
            </Button>
          </div>
        )}

        <div className="content-section">
          <div className="table-section">
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
          </div>

          {showPermissionTree && (
            <div className="permission-section">
              <Card title="权限树" size="small">
                <Tree
                  checkable
                  defaultExpandedKeys={['product', 'order']}
                  treeData={permissionTreeData}
                />
              </Card>
            </div>
          )}
        </div>
      </Card>

      <Modal
        title={editingRole ? '编辑角色' : '创建角色'}
        visible={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
        width={500}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="角色名称"
            rules={[{ required: true, message: '请输入角色名称' }]}
          >
            <Input placeholder="请输入角色名称" />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input.TextArea rows={3} placeholder="请输入角色描述" />
          </Form.Item>
          <Form.Item name="sort" label="排序" initialValue={0}>
            <Input type="number" placeholder="排序值" />
          </Form.Item>
          <Form.Item name="status" label="状态" initialValue={ROLE_STATUS.ENABLED}>
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

export default RoleCard
