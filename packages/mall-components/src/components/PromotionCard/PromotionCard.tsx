import React, { useState, useEffect, useMemo } from 'react'
import {
  Card,
  Button,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  message,
  Table,
  Tooltip,
  Badge,
  Divider,
  Timeline,
  Statistic,
  Row,
  Col,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import type {
  SmsFlashPromotion,
  PromotionQueryParam,
} from '../../types/marketing'
import { PROMOTION_STATUS, PROMOTION_STATUS_OPTIONS } from '../../types/marketing'
import { DataSourceAdapterFactory } from '../../adapters/DataSourceAdapter'
import type { DataSourceConfig } from '../../adapters/DataSourceAdapter'
import './PromotionCard.scss'

const { RangePicker } = DatePicker

interface PromotionCardProps {
  dataSourceType?: 'rest' | 'mock' | 'variable'
  api?: string
  method?: 'GET' | 'POST'
  mockData?: string
  variableName?: string
  showCreateButton?: boolean
  showFilter?: boolean
  showStatistics?: boolean
  showTimeline?: boolean
  onCreatePromotion?: (promotion: Partial<SmsFlashPromotion>) => void
  onEditPromotion?: (id: number, promotion: Partial<SmsFlashPromotion>) => void
  onDeletePromotion?: (id: number) => void
  onToggleStatus?: (id: number, status: number) => void
  style?: React.CSSProperties
  className?: string
}

const defaultMockData = {
  code: 200,
  message: 'success',
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 4,
    list: [
      {
        id: 1,
        title: '双十一大促',
        startDate: '2024-11-01',
        endDate: '2024-11-11',
        status: 1,
        createTime: '2024-10-15 10:00:00',
      },
      {
        id: 2,
        title: '618年中大促',
        startDate: '2024-06-01',
        endDate: '2024-06-18',
        status: 1,
        createTime: '2024-05-20 09:00:00',
      },
      {
        id: 3,
        title: '新春季促销',
        startDate: '2024-01-20',
        endDate: '2024-02-10',
        status: 0,
        createTime: '2024-01-10 08:00:00',
      },
      {
        id: 4,
        title: '会员日特惠',
        startDate: '2024-03-15',
        endDate: '2024-03-17',
        status: 1,
        createTime: '2024-03-01 10:00:00',
      },
    ],
  },
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  dataSourceType = 'mock',
  api,
  method = 'GET',
  mockData,
  variableName,
  showCreateButton = true,
  showFilter = true,
  showStatistics = true,
  showTimeline = true,
  onCreatePromotion,
  onEditPromotion,
  onDeletePromotion,
  onToggleStatus,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<SmsFlashPromotion[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filterTitle, setFilterTitle] = useState('')
  const [filterStatus, setFilterStatus] = useState<number>()
  const [modalVisible, setModalVisible] = useState(false)
  const [editingPromotion, setEditingPromotion] = useState<SmsFlashPromotion | null>(null)
  const [form] = Form.useForm()

  const internalMockData: SmsFlashPromotion[] = [
    {
      id: 1,
      title: '双十一大促',
      startDate: '2024-11-01',
      endDate: '2024-11-11',
      status: PROMOTION_STATUS.ENABLED,
      createTime: '2024-10-15 10:00:00',
    },
    {
      id: 2,
      title: '618年中大促',
      startDate: '2024-06-01',
      endDate: '2024-06-18',
      status: PROMOTION_STATUS.ENABLED,
      createTime: '2024-05-20 09:00:00',
    },
    {
      id: 3,
      title: '新春季促销',
      startDate: '2024-01-20',
      endDate: '2024-02-10',
      status: PROMOTION_STATUS.DISABLED,
      createTime: '2024-01-10 08:00:00',
    },
    {
      id: 4,
      title: '会员日特惠',
      startDate: '2024-03-15',
      endDate: '2024-03-17',
      status: PROMOTION_STATUS.ENABLED,
      createTime: '2024-03-01 10:00:00',
    },
  ]

  const dataSourceConfig: DataSourceConfig = useMemo(() => ({
    type: dataSourceType,
    api,
    method,
    mockData: mockData ? (() => {
      try {
        return typeof mockData === 'string' ? JSON.parse(mockData) : mockData
      } catch {
        return defaultMockData
      }
    })() : defaultMockData,
    variableName,
  }), [dataSourceType, api, method, mockData, variableName])

  const adapter = useMemo(() => {
    return DataSourceAdapterFactory.create(dataSourceConfig)
  }, [dataSourceConfig])

  useEffect(() => {
    fetchData()
  }, [currentPage, pageSize, adapter])

  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await adapter.fetch({
        pageNum: currentPage,
        pageSize,
        title: filterTitle,
        status: filterStatus,
      })
      
      let list: SmsFlashPromotion[] = []
      let totalCount = 0
      
      if (result?.data?.list) {
        list = result.data.list
        totalCount = result.data.total || list.length
      } else if (Array.isArray(result?.data)) {
        list = result.data
        totalCount = list.length
      } else if (Array.isArray(result)) {
        list = result
        totalCount = list.length
      }
      
      if (filterTitle || filterStatus !== undefined) {
        list = list.filter((item: SmsFlashPromotion) => {
          if (filterTitle && !item.title.toLowerCase().includes(filterTitle.toLowerCase())) {
            return false
          }
          if (filterStatus !== undefined && item.status !== filterStatus) {
            return false
          }
          return true
        })
        totalCount = list.length
      }
      
      setData(list)
      setTotal(totalCount)
    } catch (error) {
      console.error('Failed to fetch promotion list:', error)
      message.error('获取促销活动列表失败')
      setData(internalMockData)
      setTotal(internalMockData.length)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
  }

  const handleReset = () => {
    setFilterTitle('')
    setFilterStatus(undefined)
    setCurrentPage(1)
    fetchData()
  }

  const handleCreate = () => {
    setEditingPromotion(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (record: SmsFlashPromotion) => {
    setEditingPromotion(record)
    form.setFieldsValue({
      ...record,
      dateRange: [record.startDate, record.endDate],
    })
    setModalVisible(true)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该促销活动吗？',
      onOk: () => {
        onDeletePromotion?.(id)
        message.success('删除成功')
        fetchData()
      },
    })
  }

  const handleToggleStatus = (record: SmsFlashPromotion) => {
    const newStatus =
      record.status === PROMOTION_STATUS.ENABLED
        ? PROMOTION_STATUS.DISABLED
        : PROMOTION_STATUS.ENABLED
    onToggleStatus?.(record.id, newStatus)
    message.success(
      newStatus === PROMOTION_STATUS.ENABLED ? '已启用' : '已禁用'
    )
    fetchData()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      const promotionData = {
        ...values,
        startDate: values.dateRange?.[0],
        endDate: values.dateRange?.[1],
      }
      if (editingPromotion) {
        onEditPromotion?.(editingPromotion.id, promotionData)
        message.success('编辑成功')
      } else {
        onCreatePromotion?.(promotionData)
        message.success('创建成功')
      }
      setModalVisible(false)
      fetchData()
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  const getStatusTag = (status: number) => {
    const statusMap: Record<number, { color: string; text: string; icon: React.ReactNode }> = {
      [PROMOTION_STATUS.ENABLED]: {
        color: 'success',
        text: '已启用',
        icon: <CheckCircleOutlined />,
      },
      [PROMOTION_STATUS.DISABLED]: {
        color: 'default',
        text: '已禁用',
        icon: <CloseCircleOutlined />,
      },
    }
    const { color, text, icon } = statusMap[status] || {
      color: 'default',
      text: '未知',
      icon: null,
    }
    return (
      <Tag color={color} icon={icon}>
        {text}
      </Tag>
    )
  }

  const columns: ColumnsType<SmsFlashPromotion> = [
    {
      title: '活动名称',
      dataIndex: 'title',
      key: 'title',
      width: 200,
      render: (text: string) => (
        <Tooltip title={text}>
          <span className="promotion-title">
            <ThunderboltOutlined style={{ color: '#faad14', marginRight: 8 }} />
            {text}
          </span>
        </Tooltip>
      ),
    },
    {
      title: '活动时间',
      key: 'dateRange',
      width: 220,
      render: (_, record) => (
        <Space>
          <ClockCircleOutlined />
          <span>
            {record.startDate} ~ {record.endDate}
          </span>
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: number) => getStatusTag(status),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
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
          <Button
            type="link"
            size="small"
            onClick={() => handleToggleStatus(record)}
          >
            {record.status === PROMOTION_STATUS.ENABLED ? '禁用' : '启用'}
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
    totalPromotions: data.length,
    activePromotions: data.filter((p) => p.status === PROMOTION_STATUS.ENABLED).length,
    upcomingPromotions: data.filter((p) => {
      const today = new Date()
      const startDate = new Date(p.startDate)
      return startDate > today
    }).length,
  }

  const timelineData = data
    .filter((p) => p.status === PROMOTION_STATUS.ENABLED)
    .slice(0, 5)
    .map((p) => ({
      color: 'green',
      children: (
        <div>
          <div className="timeline-title">{p.title}</div>
          <div className="timeline-date">
            {p.startDate} ~ {p.endDate}
          </div>
        </div>
      ),
    }))

  return (
    <div className={`mall-promotion-card ${className || ''}`} style={style}>
      <Card>
        {showStatistics && (
          <div className="statistics-section">
            <Row gutter={16}>
              <Col span={8}>
                <Statistic
                  title="促销活动总数"
                  value={statistics.totalPromotions}
                  prefix={<ThunderboltOutlined />}
                />
              </Col>
              <Col span={8}>
                <Statistic
                  title="进行中的活动"
                  value={statistics.activePromotions}
                  valueStyle={{ color: '#3f8600' }}
                />
              </Col>
              <Col span={8}>
                <Statistic
                  title="即将开始"
                  value={statistics.upcomingPromotions}
                  valueStyle={{ color: '#faad14' }}
                />
              </Col>
            </Row>
          </div>
        )}

        {showFilter && (
          <div className="filter-section">
            <Space wrap>
              <Input
                placeholder="活动名称"
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
                style={{ width: 200 }}
              />
              <Select
                placeholder="活动状态"
                value={filterStatus}
                onChange={setFilterStatus}
                style={{ width: 120 }}
                allowClear
              >
                {PROMOTION_STATUS_OPTIONS.map((option) => (
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
              创建促销活动
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

          {showTimeline && timelineData.length > 0 && (
            <div className="timeline-section">
              <Card title="活动时间线" size="small">
                <Timeline items={timelineData} />
              </Card>
            </div>
          )}
        </div>
      </Card>

      <Modal
        title={editingPromotion ? '编辑促销活动' : '创建促销活动'}
        visible={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
        width={500}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="活动名称"
            rules={[{ required: true, message: '请输入活动名称' }]}
          >
            <Input placeholder="请输入活动名称" />
          </Form.Item>
          <Form.Item
            name="dateRange"
            label="活动时间"
            rules={[{ required: true, message: '请选择活动时间' }]}
          >
            <RangePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="status"
            label="活动状态"
            initialValue={PROMOTION_STATUS.ENABLED}
          >
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

export default PromotionCard
