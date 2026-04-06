import React, { useEffect, useState, useMemo } from 'react'
import {
  Table,
  Card,
  Button,
  Input,
  Select,
  Space,
  Tag,
  DatePicker,
  Modal,
  Descriptions,
  message,
  Dropdown,
  Menu,
  Tooltip,
  Row,
  Col,
  Form,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  SearchOutlined,
  ReloadOutlined,
  ExportOutlined,
  EyeOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  MoreOutlined,
  CarOutlined,
} from '@ant-design/icons'
import type {
  OmsOrder,
  OmsOrderDetail,
  OrderQueryParam,
  OmsOrderDeliveryParam,
} from '../../types/order'
import {
  ORDER_STATUS_OPTIONS,
  PAY_TYPE_OPTIONS,
  SOURCE_TYPE_OPTIONS,
  ORDER_TYPE_OPTIONS,
  ORDER_STATUS,
  PAY_TYPE,
  SOURCE_TYPE,
  ORDER_TYPE,
} from '../../types/order'
import { DataSourceAdapterFactory, DataSourceConfig } from '../../adapters/DataSourceAdapter'
import './OrderList.scss'

const { RangePicker } = DatePicker

interface OrderListProps {
  dataSourceType?: 'rest' | 'mock' | 'variable'
  api?: string
  method?: 'GET' | 'POST'
  mockData?: string
  variableName?: string
  dataSource?: any
  showFilter?: boolean
  showStatusFilter?: boolean
  showSearch?: boolean
  showDatePicker?: boolean
  showActions?: boolean
  showBatchOperations?: boolean
  showExport?: boolean
  showPagination?: boolean
  defaultPageSize?: number
  onRowClick?: (record: OmsOrder) => void
  onSearch?: (params: OrderQueryParam) => void
  onPageChange?: (page: number, pageSize: number) => void
  onActionClick?: (action: string, record: OmsOrder) => void
  onBatchOperation?: (operation: string, orderIds: number[]) => void
  style?: React.CSSProperties
  className?: string
}

const defaultMockDataObj = {
  code: 200,
  message: 'success',
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 50,
    list: [
      {
        id: 1,
        orderSn: '202401010001',
        memberUsername: 'user001',
        totalAmount: 599.00,
        payAmount: 569.00,
        freightAmount: 0,
        discountAmount: 30.00,
        payType: PAY_TYPE.ALIPAY,
        sourceType: SOURCE_TYPE.PC,
        status: ORDER_STATUS.PENDING_DELIVERY,
        orderType: ORDER_TYPE.NORMAL,
        receiverName: '张三',
        receiverPhone: '13800138000',
        receiverProvince: '北京市',
        receiverCity: '北京市',
        receiverRegion: '朝阳区',
        receiverDetailAddress: '某某街道某某小区1号楼',
        createTime: '2024-01-01 10:00:00',
        paymentTime: '2024-01-01 10:05:00',
        deliveryTime: '',
        receiveTime: '',
        commentTime: '',
        promotionInfo: '满减优惠',
      },
      {
        id: 2,
        orderSn: '202401010002',
        memberUsername: 'user002',
        totalAmount: 1299.00,
        payAmount: 1299.00,
        freightAmount: 0,
        discountAmount: 0,
        payType: PAY_TYPE.WECHAT,
        sourceType: SOURCE_TYPE.APP,
        status: ORDER_STATUS.DELIVERED,
        orderType: ORDER_TYPE.NORMAL,
        receiverName: '李四',
        receiverPhone: '13900139000',
        receiverProvince: '上海市',
        receiverCity: '上海市',
        receiverRegion: '浦东新区',
        receiverDetailAddress: '某某路某某号',
        createTime: '2024-01-01 11:00:00',
        paymentTime: '2024-01-01 11:10:00',
        deliveryTime: '2024-01-02 09:00:00',
        receiveTime: '',
        commentTime: '',
        promotionInfo: '',
      },
      {
        id: 3,
        orderSn: '202401010003',
        memberUsername: 'user003',
        totalAmount: 299.00,
        payAmount: 299.00,
        freightAmount: 10.00,
        discountAmount: 0,
        payType: PAY_TYPE.ALIPAY,
        sourceType: SOURCE_TYPE.PC,
        status: ORDER_STATUS.COMPLETED,
        orderType: ORDER_TYPE.NORMAL,
        receiverName: '王五',
        receiverPhone: '13700137000',
        receiverProvince: '广东省',
        receiverCity: '深圳市',
        receiverRegion: '南山区',
        receiverDetailAddress: '某某大厦A座',
        createTime: '2024-01-01 12:00:00',
        paymentTime: '2024-01-01 12:05:00',
        deliveryTime: '2024-01-02 10:00:00',
        receiveTime: '2024-01-05 15:00:00',
        commentTime: '',
        promotionInfo: '',
      },
      {
        id: 4,
        orderSn: '202401010004',
        memberUsername: 'user004',
        totalAmount: 899.00,
        payAmount: 0,
        freightAmount: 0,
        discountAmount: 0,
        payType: PAY_TYPE.UNPAID,
        sourceType: SOURCE_TYPE.APP,
        status: ORDER_STATUS.PENDING_PAYMENT,
        orderType: ORDER_TYPE.SECKILL,
        receiverName: '赵六',
        receiverPhone: '13600136000',
        receiverProvince: '浙江省',
        receiverCity: '杭州市',
        receiverRegion: '西湖区',
        receiverDetailAddress: '某某花园小区',
        createTime: '2024-01-01 13:00:00',
        paymentTime: '',
        deliveryTime: '',
        receiveTime: '',
        commentTime: '',
        promotionInfo: '秒杀活动',
      },
      {
        id: 5,
        orderSn: '202401010005',
        memberUsername: 'user005',
        totalAmount: 4599.00,
        payAmount: 4599.00,
        freightAmount: 0,
        discountAmount: 0,
        payType: PAY_TYPE.WECHAT,
        sourceType: SOURCE_TYPE.PC,
        status: ORDER_STATUS.CLOSED,
        orderType: ORDER_TYPE.NORMAL,
        receiverName: '孙七',
        receiverPhone: '13500135000',
        receiverProvince: '江苏省',
        receiverCity: '南京市',
        receiverRegion: '鼓楼区',
        receiverDetailAddress: '某某广场B座',
        createTime: '2024-01-01 14:00:00',
        paymentTime: '2024-01-01 14:10:00',
        deliveryTime: '',
        receiveTime: '',
        commentTime: '',
        promotionInfo: '',
      },
    ],
  },
}

const OrderList: React.FC<OrderListProps> = ({
  dataSourceType = 'mock',
  api,
  method = 'GET',
  mockData,
  variableName,
  dataSource,
  showFilter = true,
  showStatusFilter = true,
  showSearch = true,
  showDatePicker = true,
  showActions = true,
  showBatchOperations = true,
  showExport = true,
  showPagination = true,
  defaultPageSize = 10,
  onRowClick,
  onSearch,
  onPageChange,
  onActionClick,
  onBatchOperation,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<OmsOrder[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [searchText, setSearchText] = useState('')
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [selectedRows, setSelectedRows] = useState<OmsOrder[]>([])
  const [batchOperation, setBatchOperation] = useState<string>()
  const [filterStatus, setFilterStatus] = useState<number>()
  const [filterOrderType, setFilterOrderType] = useState<number>()
  const [filterSourceType, setFilterSourceType] = useState<number>()
  const [dateRange, setDateRange] = useState<[any, any]>()
  const [detailVisible, setDetailVisible] = useState(false)
  const [currentOrder, setCurrentOrder] = useState<OmsOrderDetail>()
  const [deliveryVisible, setDeliveryVisible] = useState(false)
  const [deliveryOrder, setDeliveryOrder] = useState<OmsOrder>()
  const [deliveryCompany, setDeliveryCompany] = useState('')
  const [deliverySn, setDeliverySn] = useState('')

  const dataSourceConfig: DataSourceConfig = useMemo(() => ({
    type: dataSourceType,
    api,
    method,
    mockData: mockData ? (() => {
      try {
        return typeof mockData === 'string' ? JSON.parse(mockData) : mockData
      } catch {
        return defaultMockDataObj
      }
    })() : defaultMockDataObj,
    variableName,
    dataSource,
  }), [dataSourceType, api, method, mockData, variableName, dataSource])

  const adapter = useMemo(() => {
    return DataSourceAdapterFactory.create(dataSourceConfig)
  }, [dataSourceConfig])

  useEffect(() => {
    fetchData()
  }, [currentPage, pageSize, adapter])

  const fetchData = async () => {
    setLoading(true)
    try {
      const params: OrderQueryParam = {
        pageNum: currentPage,
        pageSize,
        orderSn: searchText || undefined,
        status: filterStatus,
        orderType: filterOrderType,
        sourceType: filterSourceType,
        createTime: dateRange
          ? `${dateRange[0]?.format('YYYY-MM-DD')},${dateRange[1]?.format('YYYY-MM-DD')}`
          : undefined,
      }

      const result = await adapter.fetch(params)

      let list: OmsOrder[] = []
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

      setData(list)
      setTotal(totalCount)
    } catch (error) {
      console.error('Failed to fetch order list:', error)
      message.error('获取订单列表失败')
      setData(defaultMockDataObj.data.list)
      setTotal(defaultMockDataObj.data.total)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
    onSearch?.({
      orderSn: searchText || undefined,
      status: filterStatus,
      orderType: filterOrderType,
      sourceType: filterSourceType,
      createTime: dateRange
        ? `${dateRange[0]?.format('YYYY-MM-DD')},${dateRange[1]?.format('YYYY-MM-DD')}`
        : undefined,
    })
  }

  const handleReset = () => {
    setSearchText('')
    setFilterStatus(undefined)
    setFilterOrderType(undefined)
    setFilterSourceType(undefined)
    setDateRange(undefined)
    setCurrentPage(1)
    fetchData()
  }

  const handleExport = () => {
    message.success('导出功能开发中...')
  }

  const handleRefresh = () => {
    fetchData()
  }

  const handleBatchOperation = () => {
    if (!batchOperation) {
      message.warning('请选择批量操作类型')
      return
    }
    if (selectedRowKeys.length === 0) {
      message.warning('请选择要操作的订单')
      return
    }
    onBatchOperation?.(batchOperation, selectedRowKeys as number[])
    message.success(`批量${batchOperation}成功`)
    setSelectedRowKeys([])
    setSelectedRows([])
    setBatchOperation(undefined)
    fetchData()
  }

  const handleViewDetail = (record: OmsOrder) => {
    setCurrentOrder(record as OmsOrderDetail)
    setDetailVisible(true)
    onActionClick?.('view', record)
  }

  const handleDeliver = (record: OmsOrder) => {
    setDeliveryOrder(record)
    setDeliveryVisible(true)
    onActionClick?.('deliver', record)
  }

  const handleCloseOrder = (record: OmsOrder) => {
    Modal.confirm({
      title: '确认关闭订单',
      content: `确定要关闭订单 ${record.orderSn} 吗？`,
      onOk: () => {
        onActionClick?.('close', record)
        message.success('订单已关闭')
        fetchData()
      },
    })
  }

  const handleDeleteOrder = (record: OmsOrder) => {
    Modal.confirm({
      title: '确认删除订单',
      content: `确定要删除订单 ${record.orderSn} 吗？`,
      onOk: () => {
        onActionClick?.('delete', record)
        message.success('订单已删除')
        fetchData()
      },
    })
  }

  const handleDeliverySubmit = () => {
    if (!deliveryCompany || !deliverySn) {
      message.warning('请填写物流公司和物流单号')
      return
    }
    const params: OmsOrderDeliveryParam = {
      orderId: deliveryOrder!.id,
      deliveryCompany,
      deliverySn,
    }
    onActionClick?.('deliverSubmit', deliveryOrder!)
    message.success('发货成功')
    setDeliveryVisible(false)
    setDeliveryCompany('')
    setDeliverySn('')
    fetchData()
  }

  const getStatusTag = (status: number) => {
    const statusMap: Record<number, { color: string; text: string }> = {
      [ORDER_STATUS.PENDING_PAYMENT]: { color: 'orange', text: '待付款' },
      [ORDER_STATUS.PENDING_DELIVERY]: { color: 'blue', text: '待发货' },
      [ORDER_STATUS.DELIVERED]: { color: 'cyan', text: '已发货' },
      [ORDER_STATUS.COMPLETED]: { color: 'green', text: '已完成' },
      [ORDER_STATUS.CLOSED]: { color: 'default', text: '已关闭' },
      [ORDER_STATUS.INVALID]: { color: 'red', text: '无效订单' },
    }
    const { color, text } = statusMap[status] || { color: 'default', text: '未知' }
    return <Tag color={color}>{text}</Tag>
  }

  const getPayTypeTag = (payType: number) => {
    const payTypeMap: Record<number, { color: string; text: string }> = {
      [PAY_TYPE.UNPAID]: { color: 'default', text: '未支付' },
      [PAY_TYPE.ALIPAY]: { color: 'blue', text: '支付宝' },
      [PAY_TYPE.WECHAT]: { color: 'green', text: '微信' },
    }
    const { color, text } = payTypeMap[payType] || { color: 'default', text: '未知' }
    return <Tag color={color}>{text}</Tag>
  }

  const getSourceTypeTag = (sourceType: number) => {
    return sourceType === SOURCE_TYPE.APP ? (
      <Tag color="purple">APP</Tag>
    ) : (
      <Tag color="geekblue">PC</Tag>
    )
  }

  const getOrderTypeTag = (orderType: number) => {
    return orderType === ORDER_TYPE.SECKILL ? (
      <Tag color="red">秒杀</Tag>
    ) : (
      <Tag>正常</Tag>
    )
  }

  const columns: ColumnsType<OmsOrder> = [
    {
      title: '订单编号',
      dataIndex: 'orderSn',
      key: 'orderSn',
      width: 180,
      fixed: 'left',
      render: (text: string) => (
        <Tooltip title={text}>
          <span className="order-sn">{text}</span>
        </Tooltip>
      ),
    },
    {
      title: '用户账号',
      dataIndex: 'memberUsername',
      key: 'memberUsername',
      width: 120,
    },
    {
      title: '订单金额',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      width: 120,
      render: (amount: number) => (
        <span className="order-amount">¥{amount.toFixed(2)}</span>
      ),
    },
    {
      title: '实付金额',
      dataIndex: 'payAmount',
      key: 'payAmount',
      width: 120,
      render: (amount: number) => (
        <span className="pay-amount">¥{amount.toFixed(2)}</span>
      ),
    },
    {
      title: '支付方式',
      dataIndex: 'payType',
      key: 'payType',
      width: 100,
      render: (payType: number) => getPayTypeTag(payType),
    },
    {
      title: '订单来源',
      dataIndex: 'sourceType',
      key: 'sourceType',
      width: 100,
      render: (sourceType: number) => getSourceTypeTag(sourceType),
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      key: 'orderType',
      width: 100,
      render: (orderType: number) => getOrderTypeTag(orderType),
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: number) => getStatusTag(status),
    },
    {
      title: '收货人',
      dataIndex: 'receiverName',
      key: 'receiverName',
      width: 100,
    },
    {
      title: '收货电话',
      dataIndex: 'receiverPhone',
      key: 'receiverPhone',
      width: 130,
    },
    {
      title: '下单时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180,
      sorter: true,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      fixed: 'right',
      render: (_, record) => {
        const menu = (
          <Menu>
            <Menu.Item
              key="view"
              icon={<EyeOutlined />}
              onClick={() => handleViewDetail(record)}
            >
              查看详情
            </Menu.Item>
            {record.status === ORDER_STATUS.PENDING_DELIVERY && (
              <Menu.Item
                key="deliver"
                icon={<CarOutlined />}
                onClick={() => handleDeliver(record)}
              >
                发货
              </Menu.Item>
            )}
            {record.status !== ORDER_STATUS.CLOSED && (
              <Menu.Item
                key="close"
                icon={<CloseCircleOutlined />}
                onClick={() => handleCloseOrder(record)}
              >
                关闭订单
              </Menu.Item>
            )}
            <Menu.Divider />
            <Menu.Item
              key="delete"
              icon={<DeleteOutlined />}
              danger
              onClick={() => handleDeleteOrder(record)}
            >
              删除订单
            </Menu.Item>
          </Menu>
        )

        return (
          <Space size="small">
            <Button
              type="link"
              size="small"
              onClick={() => handleViewDetail(record)}
            >
              详情
            </Button>
            {record.status === ORDER_STATUS.PENDING_DELIVERY && (
              <Button
                type="link"
                size="small"
                onClick={() => handleDeliver(record)}
              >
                发货
              </Button>
            )}
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="link" size="small" icon={<MoreOutlined />} />
            </Dropdown>
          </Space>
        )
      },
    },
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[], selectedRows: OmsOrder[]) => {
      setSelectedRowKeys(selectedKeys)
      setSelectedRows(selectedRows)
    },
  }

  return (
    <div className={`mall-order-list ${className || ''}`} style={style}>
      <Card>
        {showFilter && (
          <div className="filter-section">
            <Row gutter={[16, 16]}>
              {showSearch && (
                <Col span={6}>
                  <Input
                    placeholder="订单编号"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onPressEnter={handleSearch}
                    prefix={<SearchOutlined />}
                  />
                </Col>
              )}
              {showStatusFilter && (
                <Col span={4}>
                  <Select
                    placeholder="订单状态"
                    value={filterStatus}
                    onChange={setFilterStatus}
                    style={{ width: '100%' }}
                    allowClear
                  >
                    {ORDER_STATUS_OPTIONS.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              )}
              <Col span={4}>
                <Select
                  placeholder="订单类型"
                  value={filterOrderType}
                  onChange={setFilterOrderType}
                  style={{ width: '100%' }}
                  allowClear
                >
                  {ORDER_TYPE_OPTIONS.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={4}>
                <Select
                  placeholder="订单来源"
                  value={filterSourceType}
                  onChange={setFilterSourceType}
                  style={{ width: '100%' }}
                  allowClear
                >
                  {SOURCE_TYPE_OPTIONS.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              {showDatePicker && (
                <Col span={6}>
                  <RangePicker
                    value={dateRange}
                    onChange={setDateRange}
                    style={{ width: '100%' }}
                  />
                </Col>
              )}
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col>
                <Space>
                  <Button type="primary" onClick={handleSearch}>
                    查询
                  </Button>
                  <Button onClick={handleReset}>重置</Button>
                </Space>
              </Col>
            </Row>
          </div>
        )}

        {showBatchOperations && (
          <div className="batch-operation-section">
            <Space>
              <Select
                placeholder="批量操作"
                value={batchOperation}
                onChange={setBatchOperation}
                style={{ width: 150 }}
                allowClear
              >
                <Select.Option value="deliver">批量发货</Select.Option>
                <Select.Option value="close">关闭订单</Select.Option>
                <Select.Option value="delete">删除订单</Select.Option>
              </Select>
              <Button onClick={handleBatchOperation}>确定</Button>
            </Space>
            {selectedRowKeys.length > 0 && (
              <span className="selected-info">
                已选择 <strong>{selectedRowKeys.length}</strong> 项
              </span>
            )}
          </div>
        )}

        {showActions && (
          <div className="action-section">
            <Space>
              <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
                刷新
              </Button>
              {showExport && (
                <Button icon={<ExportOutlined />} onClick={handleExport}>
                  导出
                </Button>
              )}
            </Space>
          </div>
        )}

        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={loading}
          pagination={
            showPagination
              ? {
                  current: currentPage,
                  pageSize,
                  total,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total) => `共 ${total} 条`,
                  onChange: (page, pageSize) => {
                    setCurrentPage(page)
                    setPageSize(pageSize)
                    onPageChange?.(page, pageSize)
                  },
                }
              : false
          }
          rowSelection={rowSelection}
          scroll={{ x: 1500 }}
          onRow={(record) => ({
            onClick: () => onRowClick?.(record),
          })}
        />
      </Card>

      <Modal
        title="订单详情"
        visible={detailVisible}
        onCancel={() => setDetailVisible(false)}
        footer={null}
        width={800}
      >
        {currentOrder && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="订单编号">
              {currentOrder.orderSn}
            </Descriptions.Item>
            <Descriptions.Item label="用户账号">
              {currentOrder.memberUsername}
            </Descriptions.Item>
            <Descriptions.Item label="订单金额">
              ¥{currentOrder.totalAmount.toFixed(2)}
            </Descriptions.Item>
            <Descriptions.Item label="实付金额">
              ¥{currentOrder.payAmount.toFixed(2)}
            </Descriptions.Item>
            <Descriptions.Item label="运费">
              ¥{currentOrder.freightAmount.toFixed(2)}
            </Descriptions.Item>
            <Descriptions.Item label="优惠金额">
              ¥{currentOrder.discountAmount.toFixed(2)}
            </Descriptions.Item>
            <Descriptions.Item label="支付方式">
              {getPayTypeTag(currentOrder.payType)}
            </Descriptions.Item>
            <Descriptions.Item label="订单状态">
              {getStatusTag(currentOrder.status)}
            </Descriptions.Item>
            <Descriptions.Item label="收货人">
              {currentOrder.receiverName}
            </Descriptions.Item>
            <Descriptions.Item label="收货电话">
              {currentOrder.receiverPhone}
            </Descriptions.Item>
            <Descriptions.Item label="收货地址" span={2}>
              {currentOrder.receiverProvince}
              {currentOrder.receiverCity}
              {currentOrder.receiverRegion}
              {currentOrder.receiverDetailAddress}
            </Descriptions.Item>
            <Descriptions.Item label="下单时间">
              {currentOrder.createTime}
            </Descriptions.Item>
            <Descriptions.Item label="支付时间">
              {currentOrder.paymentTime || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="发货时间">
              {currentOrder.deliveryTime || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="完成时间">
              {currentOrder.receiveTime || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="订单备注" span={2}>
              {currentOrder.note || '-'}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>

      <Modal
        title="订单发货"
        visible={deliveryVisible}
        onOk={handleDeliverySubmit}
        onCancel={() => setDeliveryVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="物流公司" required>
            <Select
              value={deliveryCompany}
              onChange={setDeliveryCompany}
              placeholder="请选择物流公司"
            >
              <Select.Option value="顺丰速运">顺丰速运</Select.Option>
              <Select.Option value="圆通快递">圆通快递</Select.Option>
              <Select.Option value="中通快递">中通快递</Select.Option>
              <Select.Option value="韵达快递">韵达快递</Select.Option>
              <Select.Option value="申通快递">申通快递</Select.Option>
              <Select.Option value="邮政EMS">邮政EMS</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="物流单号" required>
            <Input
              value={deliverySn}
              onChange={(e) => setDeliverySn(e.target.value)}
              placeholder="请输入物流单号"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default OrderList
