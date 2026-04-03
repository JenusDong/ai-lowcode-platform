import React, { useState, useEffect } from 'react'
import {
  Card,
  Button,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Radio,
  message,
  Table,
  Tooltip,
  Badge,
  Divider,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  GiftOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import type {
  SmsCoupon,
  CouponQueryParam,
} from '../../types/marketing'
import {
  COUPON_TYPE,
  COUPON_PLATFORM,
  COUPON_USE_TYPE,
  COUPON_TYPE_OPTIONS,
  COUPON_PLATFORM_OPTIONS,
  COUPON_USE_TYPE_OPTIONS,
} from '../../types/marketing'
import './CouponCard.scss'

const { RangePicker } = DatePicker

interface CouponCardProps {
  dataSource?: string
  showCreateButton?: boolean
  showFilter?: boolean
  showStatistics?: boolean
  onCreateCoupon?: (coupon: Partial<SmsCoupon>) => void
  onEditCoupon?: (id: number, coupon: Partial<SmsCoupon>) => void
  onDeleteCoupon?: (id: number) => void
  style?: React.CSSProperties
  className?: string
}

const CouponCard: React.FC<CouponCardProps> = ({
  dataSource,
  showCreateButton = true,
  showFilter = true,
  showStatistics = true,
  onCreateCoupon,
  onEditCoupon,
  onDeleteCoupon,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<SmsCoupon[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filterName, setFilterName] = useState('')
  const [filterType, setFilterType] = useState<number>()
  const [filterPlatform, setFilterPlatform] = useState<number>()
  const [modalVisible, setModalVisible] = useState(false)
  const [editingCoupon, setEditingCoupon] = useState<SmsCoupon | null>(null)
  const [form] = Form.useForm()

  const mockData: SmsCoupon[] = [
    {
      id: 1,
      name: '新用户专享券',
      type: COUPON_TYPE.FULL_REDUCTION,
      platform: COUPON_PLATFORM.ALL,
      count: 1000,
      amount: 50,
      perLimit: 1,
      minPoint: 200,
      startTime: '2024-01-01',
      endTime: '2024-12-31',
      useType: COUPON_USE_TYPE.ALL,
      note: '新用户首单满200减50',
      publishCount: 500,
      useCount: 320,
      receiveCount: 450,
      enableTime: '7',
      code: 'NEWUSER50',
      memberLevel: 0,
    },
    {
      id: 2,
      name: '限时折扣券',
      type: COUPON_TYPE.DISCOUNT,
      platform: COUPON_PLATFORM.APP,
      count: 500,
      amount: 8,
      perLimit: 2,
      minPoint: 100,
      startTime: '2024-01-15',
      endTime: '2024-02-15',
      useType: COUPON_USE_TYPE.CATEGORY,
      note: 'APP专享8折券',
      publishCount: 300,
      useCount: 180,
      receiveCount: 280,
      enableTime: '3',
      code: 'APPDISCOUNT',
      memberLevel: 1,
    },
    {
      id: 3,
      name: '会员专享券',
      type: COUPON_TYPE.FULL_REDUCTION,
      platform: COUPON_PLATFORM.ALL,
      count: 200,
      amount: 100,
      perLimit: 1,
      minPoint: 500,
      startTime: '2024-01-01',
      endTime: '2024-06-30',
      useType: COUPON_USE_TYPE.PRODUCT,
      note: '会员专享满500减100',
      publishCount: 150,
      useCount: 80,
      receiveCount: 120,
      enableTime: '15',
      code: 'VIP100',
      memberLevel: 2,
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
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(filterName.toLowerCase())
        )
      }
      if (filterType !== undefined) {
        filtered = filtered.filter((item) => item.type === filterType)
      }
      if (filterPlatform !== undefined) {
        filtered = filtered.filter((item) => item.platform === filterPlatform)
      }
      setData(filtered)
      setTotal(filtered.length)
    } catch (error) {
      console.error('Failed to fetch coupon list:', error)
      message.error('获取优惠券列表失败')
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
    setFilterType(undefined)
    setFilterPlatform(undefined)
    setCurrentPage(1)
    fetchData()
  }

  const handleCreate = () => {
    setEditingCoupon(null)
    form.resetFields()
    setModalVisible(true)
  }

  const handleEdit = (record: SmsCoupon) => {
    setEditingCoupon(record)
    form.setFieldsValue({
      ...record,
      dateRange: [record.startTime, record.endTime],
    })
    setModalVisible(true)
  }

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除该优惠券吗？',
      onOk: () => {
        onDeleteCoupon?.(id)
        message.success('删除成功')
        fetchData()
      },
    })
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      const couponData = {
        ...values,
        startTime: values.dateRange?.[0],
        endTime: values.dateRange?.[1],
      }
      if (editingCoupon) {
        onEditCoupon?.(editingCoupon.id, couponData)
        message.success('编辑成功')
      } else {
        onCreateCoupon?.(couponData)
        message.success('创建成功')
      }
      setModalVisible(false)
      fetchData()
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  const getCouponTypeTag = (type: number) => {
    const typeMap: Record<number, { color: string; text: string }> = {
      [COUPON_TYPE.FULL_REDUCTION]: { color: 'red', text: '满减券' },
      [COUPON_TYPE.DISCOUNT]: { color: 'blue', text: '折扣券' },
    }
    const { color, text } = typeMap[type] || { color: 'default', text: '未知' }
    return <Tag color={color}>{text}</Tag>
  }

  const getPlatformTag = (platform: number) => {
    const platformMap: Record<number, { color: string; text: string }> = {
      [COUPON_PLATFORM.ALL]: { color: 'green', text: '全平台' },
      [COUPON_PLATFORM.MOBILE]: { color: 'purple', text: '移动端' },
      [COUPON_PLATFORM.PC]: { color: 'geekblue', text: 'PC端' },
      [COUPON_PLATFORM.APP]: { color: 'cyan', text: 'APP' },
    }
    const { color, text } = platformMap[platform] || {
      color: 'default',
      text: '未知',
    }
    return <Tag color={color}>{text}</Tag>
  }

  const columns: ColumnsType<SmsCoupon> = [
    {
      title: '优惠券名称',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (text: string) => (
        <Tooltip title={text}>
          <span className="coupon-name">{text}</span>
        </Tooltip>
      ),
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: 80,
      render: (type: number) => getCouponTypeTag(type),
    },
    {
      title: '优惠内容',
      key: 'content',
      width: 120,
      render: (_, record) => (
        <span>
          {record.type === COUPON_TYPE.FULL_REDUCTION
            ? `满${record.minPoint}减${record.amount}`
            : `${record.amount}折`}
        </span>
      ),
    },
    {
      title: '适用平台',
      dataIndex: 'platform',
      key: 'platform',
      width: 80,
      render: (platform: number) => getPlatformTag(platform),
    },
    {
      title: '发行量',
      dataIndex: 'count',
      key: 'count',
      width: 80,
      render: (count: number) => <Badge count={count} showZero color="blue" />,
    },
    {
      title: '已领取',
      dataIndex: 'receiveCount',
      key: 'receiveCount',
      width: 80,
    },
    {
      title: '已使用',
      dataIndex: 'useCount',
      key: 'useCount',
      width: 80,
    },
    {
      title: '有效期',
      key: 'validity',
      width: 180,
      render: (_, record) => (
        <Space>
          <ClockCircleOutlined />
          <span>
            {record.startTime} ~ {record.endTime}
          </span>
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
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
    totalCoupons: mockData.length,
    activeCoupons: mockData.filter((c) => c.useCount > 0).length,
    totalUsed: mockData.reduce((sum, c) => sum + c.useCount, 0),
    totalReceived: mockData.reduce((sum, c) => sum + c.receiveCount, 0),
  }

  return (
    <div className={`mall-coupon-card ${className || ''}`} style={style}>
      <Card>
        {showStatistics && (
          <div className="statistics-section">
            <Space size="large">
              <div className="stat-item">
                <div className="stat-value">{statistics.totalCoupons}</div>
                <div className="stat-label">优惠券总数</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value">{statistics.activeCoupons}</div>
                <div className="stat-label">活跃优惠券</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value">{statistics.totalReceived}</div>
                <div className="stat-label">已领取</div>
              </div>
              <Divider type="vertical" style={{ height: 40 }} />
              <div className="stat-item">
                <div className="stat-value">{statistics.totalUsed}</div>
                <div className="stat-label">已使用</div>
              </div>
            </Space>
          </div>
        )}

        {showFilter && (
          <div className="filter-section">
            <Space wrap>
              <Input
                placeholder="优惠券名称"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
                style={{ width: 200 }}
              />
              <Select
                placeholder="优惠券类型"
                value={filterType}
                onChange={setFilterType}
                style={{ width: 120 }}
                allowClear
              >
                {COUPON_TYPE_OPTIONS.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
              <Select
                placeholder="适用平台"
                value={filterPlatform}
                onChange={setFilterPlatform}
                style={{ width: 120 }}
                allowClear
              >
                {COUPON_PLATFORM_OPTIONS.map((option) => (
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
              创建优惠券
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
        title={editingCoupon ? '编辑优惠券' : '创建优惠券'}
        visible={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
        width={600}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="优惠券名称"
            rules={[{ required: true, message: '请输入优惠券名称' }]}
          >
            <Input placeholder="请输入优惠券名称" />
          </Form.Item>
          <Form.Item
            name="type"
            label="优惠券类型"
            rules={[{ required: true, message: '请选择优惠券类型' }]}
          >
            <Radio.Group>
              <Radio value={COUPON_TYPE.FULL_REDUCTION}>满减券</Radio>
              <Radio value={COUPON_TYPE.DISCOUNT}>折扣券</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="amount"
            label="优惠额度"
            rules={[{ required: true, message: '请输入优惠额度' }]}
          >
            <InputNumber
              placeholder="满减金额或折扣"
              min={0}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="minPoint"
            label="最低消费金额"
            rules={[{ required: true, message: '请输入最低消费金额' }]}
          >
            <InputNumber
              placeholder="最低消费金额"
              min={0}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="platform"
            label="适用平台"
            rules={[{ required: true, message: '请选择适用平台' }]}
          >
            <Select placeholder="请选择适用平台">
              {COUPON_PLATFORM_OPTIONS.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="count"
            label="发行数量"
            rules={[{ required: true, message: '请输入发行数量' }]}
          >
            <InputNumber
              placeholder="发行数量"
              min={1}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="perLimit"
            label="每人限领"
            rules={[{ required: true, message: '请输入每人限领数量' }]}
          >
            <InputNumber
              placeholder="每人限领数量"
              min={1}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="dateRange"
            label="有效期"
            rules={[{ required: true, message: '请选择有效期' }]}
          >
            <RangePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="note" label="备注">
            <Input.TextArea rows={3} placeholder="请输入备注" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CouponCard
