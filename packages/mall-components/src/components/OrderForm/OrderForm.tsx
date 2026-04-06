import React, { useEffect, useState } from 'react'
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Card,
  Space,
  message,
  Divider,
  Row,
  Col,
  Tabs,
  Table,
  Descriptions,
  Tag,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type {
  OmsOrder,
  OmsOrderDetail,
  OmsOrderItem,
  OmsReceiverInfoParam,
  OmsMoneyInfoParam,
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
import './OrderForm.scss'

const { TextArea } = Input

interface OrderFormProps {
  initialValues?: string | Partial<OmsOrderDetail>
  mode?: 'create' | 'edit' | 'view'
  showBasicInfo?: boolean
  showReceiverInfo?: boolean
  showMoneyInfo?: boolean
  showOrderItems?: boolean
  showStatusInfo?: boolean
  onSubmit?: (values: OmsOrder) => void
  onCancel?: () => void
  style?: React.CSSProperties
  className?: string
}

const OrderForm: React.FC<OrderFormProps> = ({
  initialValues,
  mode = 'create',
  showBasicInfo = true,
  showReceiverInfo = true,
  showMoneyInfo = true,
  showOrderItems = true,
  showStatusInfo = true,
  onSubmit,
  onCancel,
  style,
  className,
}) => {
  const [form] = Form.useForm()
  const [activeTab, setActiveTab] = useState('basic')
  const [orderItems, setOrderItems] = useState<OmsOrderItem[]>([])

  useEffect(() => {
    if (initialValues) {
      let parsedValues = initialValues
      if (typeof initialValues === 'string') {
        try {
          parsedValues = JSON.parse(initialValues)
        } catch (e) {
          console.error('Failed to parse initialValues:', e)
          parsedValues = {}
        }
      }
      form.setFieldsValue(parsedValues as any)
      if ((parsedValues as OmsOrderDetail).orderItemList) {
        setOrderItems((parsedValues as OmsOrderDetail).orderItemList)
      }
    }
  }, [initialValues, form])

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      onSubmit?.(values as OmsOrder)
      message.success('提交成功')
    } catch (error) {
      console.error('Validation failed:', error)
      message.error('请检查表单填写是否正确')
    }
  }

  const handleCancel = () => {
    form.resetFields()
    onCancel?.()
  }

  const handleReset = () => {
    form.resetFields()
  }

  const getParsedInitialValues = () => {
    if (typeof initialValues === 'string') {
      try {
        return JSON.parse(initialValues)
      } catch (e) {
        return {}
      }
    }
    return initialValues || {}
  }

  const isViewMode = mode === 'view'

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

  const orderItemColumns: ColumnsType<OmsOrderItem> = [
    {
      title: '商品图片',
      dataIndex: 'productPic',
      key: 'productPic',
      width: 80,
      render: (pic: string) => (
        <img src={pic} alt="商品图片" style={{ width: 50, height: 50, objectFit: 'cover' }} />
      ),
    },
    {
      title: '商品名称',
      dataIndex: 'productName',
      key: 'productName',
      width: 200,
    },
    {
      title: '商品货号',
      dataIndex: 'productSn',
      key: 'productSn',
      width: 120,
    },
    {
      title: '商品品牌',
      dataIndex: 'productBrand',
      key: 'productBrand',
      width: 100,
    },
    {
      title: '销售价格',
      dataIndex: 'productPrice',
      key: 'productPrice',
      width: 100,
      render: (price: number) => `¥${price.toFixed(2)}`,
    },
    {
      title: '购买数量',
      dataIndex: 'productQuantity',
      key: 'productQuantity',
      width: 100,
    },
    {
      title: '小计',
      key: 'subtotal',
      width: 100,
      render: (_, record) => `¥${(record.productPrice * record.productQuantity).toFixed(2)}`,
    },
  ]

  const basicInfoItems = [
    <Row gutter={16} key="basic-row-1">
      <Col span={12}>
        <Form.Item
          name="orderSn"
          label="订单编号"
          rules={[{ required: true, message: '请输入订单编号' }]}
        >
          <Input placeholder="请输入订单编号" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="memberUsername"
          label="用户账号"
          rules={[{ required: true, message: '请输入用户账号' }]}
        >
          <Input placeholder="请输入用户账号" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="basic-row-2">
      <Col span={8}>
        <Form.Item name="payType" label="支付方式" rules={[{ required: true }]}>
          <Select placeholder="请选择支付方式" disabled={isViewMode}>
            {PAY_TYPE_OPTIONS.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="sourceType" label="订单来源" rules={[{ required: true }]}>
          <Select placeholder="请选择订单来源" disabled={isViewMode}>
            {SOURCE_TYPE_OPTIONS.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="orderType" label="订单类型" rules={[{ required: true }]}>
          <Select placeholder="请选择订单类型" disabled={isViewMode}>
            {ORDER_TYPE_OPTIONS.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="basic-row-3">
      <Col span={12}>
        <Form.Item name="createTime" label="下单时间">
          <Input placeholder="下单时间" disabled />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="paymentTime" label="支付时间">
          <Input placeholder="支付时间" disabled />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const receiverInfoItems = [
    <Row gutter={16} key="receiver-row-1">
      <Col span={12}>
        <Form.Item
          name="receiverName"
          label="收货人姓名"
          rules={[{ required: true, message: '请输入收货人姓名' }]}
        >
          <Input placeholder="请输入收货人姓名" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="receiverPhone"
          label="收货人电话"
          rules={[{ required: true, message: '请输入收货人电话' }]}
        >
          <Input placeholder="请输入收货人电话" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="receiver-row-2">
      <Col span={8}>
        <Form.Item name="receiverProvince" label="省份">
          <Input placeholder="省份" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="receiverCity" label="城市">
          <Input placeholder="城市" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="receiverRegion" label="区">
          <Input placeholder="区" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,

    <Form.Item key="receiverDetailAddress" name="receiverDetailAddress" label="详细地址">
      <TextArea rows={2} placeholder="请输入详细地址" disabled={isViewMode} />
    </Form.Item>,

    <Row gutter={16} key="receiver-row-3">
      <Col span={12}>
        <Form.Item name="deliveryCompany" label="物流公司">
          <Input placeholder="物流公司" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="deliverySn" label="物流单号">
          <Input placeholder="物流单号" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const moneyInfoItems = [
    <Row gutter={16} key="money-row-1">
      <Col span={8}>
        <Form.Item
          name="totalAmount"
          label="订单总金额"
          rules={[{ required: true, message: '请输入订单总金额' }]}
        >
          <InputNumber
            placeholder="订单总金额"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="payAmount"
          label="实付金额"
          rules={[{ required: true, message: '请输入实付金额' }]}
        >
          <InputNumber
            placeholder="实付金额"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="freightAmount" label="运费金额">
          <InputNumber
            placeholder="运费金额"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="money-row-2">
      <Col span={8}>
        <Form.Item name="discountAmount" label="折扣金额">
          <InputNumber
            placeholder="折扣金额"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="promotionAmount" label="促销优惠">
          <InputNumber
            placeholder="促销优惠"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="couponAmount" label="优惠券抵扣">
          <InputNumber
            placeholder="优惠券抵扣"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const statusInfoItems = [
    <Row gutter={16} key="status-row-1">
      <Col span={12}>
        <Form.Item name="status" label="订单状态" rules={[{ required: true }]}>
          <Select placeholder="请选择订单状态" disabled={isViewMode}>
            {ORDER_STATUS_OPTIONS.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="confirmStatus" label="确认收货状态">
          <Select placeholder="请选择确认收货状态" disabled={isViewMode}>
            <Select.Option value={0}>未确认</Select.Option>
            <Select.Option value={1}>已确认</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>,

    <Form.Item key="promotionInfo" name="promotionInfo" label="活动信息">
      <Input placeholder="活动信息" disabled={isViewMode} />
    </Form.Item>,

    <Form.Item key="note" name="note" label="订单备注">
      <TextArea rows={3} placeholder="请输入订单备注" disabled={isViewMode} />
    </Form.Item>,
  ]

  const tabItems = [
    {
      key: 'basic',
      label: '基本信息',
      children: showBasicInfo ? basicInfoItems : null,
    },
    {
      key: 'receiver',
      label: '收货信息',
      children: showReceiverInfo ? receiverInfoItems : null,
    },
    {
      key: 'money',
      label: '费用信息',
      children: showMoneyInfo ? moneyInfoItems : null,
    },
    {
      key: 'items',
      label: '商品信息',
      children: showOrderItems ? (
        <Table
          columns={orderItemColumns}
          dataSource={orderItems}
          rowKey="id"
          pagination={false}
          scroll={{ x: 900 }}
        />
      ) : null,
    },
    {
      key: 'status',
      label: '状态信息',
      children: showStatusInfo ? statusInfoItems : null,
    },
  ]

  return (
    <div className={`mall-order-form ${className || ''}`} style={style}>
      <Card>
        <Form
          form={form}
          layout="vertical"
          initialValues={getParsedInitialValues()}
          disabled={isViewMode}
        >
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

          <Divider />

          <Form.Item>
            <Space>
              {!isViewMode && (
                <>
                  <Button type="primary" onClick={handleSubmit}>
                    {mode === 'create' ? '创建' : '保存'}
                  </Button>
                  <Button onClick={handleReset}>重置</Button>
                </>
              )}
              <Button onClick={handleCancel}>{isViewMode ? '关闭' : '取消'}</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default OrderForm
