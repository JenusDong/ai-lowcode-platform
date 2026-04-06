import React from 'react'
import { Card, Table, Tag, Button, Space, Input, Select, Descriptions, Steps, Timeline, Modal } from 'antd'
import type { ColumnsType } from 'antd'
import {
  FileTextOutlined,
  SettingOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  EyeOutlined,
  ExportOutlined,
} from '@ant-design/icons'

interface OrderItem {
  id: number
  orderSn: string
  memberName: string
  totalAmount: number
  payType: string
  status: string
  createTime: string
}

const OrderListPage: React.FC = () => {
  const columns: ColumnsType<OrderItem> = [
    { title: '订单ID', dataIndex: 'id', width: 80 },
    { title: '订单编号', dataIndex: 'orderSn', ellipsis: true },
    { title: '收货人', dataIndex: 'memberName', width: 100 },
    {
      title: '订单金额',
      dataIndex: 'totalAmount',
      width: 120,
      render: (amount: number) => <span style={{ color: '#f5222d', fontWeight: 600 }}>¥{amount.toFixed(2)}</span>,
    },
    {
      title: '支付方式',
      dataIndex: 'payType',
      width: 100,
      render: (type: string) => <Tag>{type}</Tag>,
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      width: 100,
      render: (status: string) => {
        const colorMap: Record<string, string> = {
          '待付款': 'orange',
          '待发货': 'blue',
          '已发货': 'cyan',
          '已完成': 'green',
          '已取消': 'default',
          '退款中': 'red',
        }
        return <Tag color={colorMap[status] || 'default'}>{status}</Tag>
      },
    },
    { title: '创建时间', dataIndex: 'createTime', width: 170 },
    {
      title: '操作',
      key: 'action',
      width: 180,
      render: () => (
        <Space size="small">
          <Button type="link" size="small" icon={<EyeOutlined />}>查看</Button>
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" icon={<ExportOutlined />}>发货</Button>
        </Space>
      ),
    },
  ]

  const data: OrderItem[] = [
    { id: 1001, orderSn: '2024031512345678901', memberName: '张三', totalAmount: 9999.00, payType: '支付宝', status: '待付款', createTime: '2024-03-15 10:30:00' },
    { id: 1002, orderSn: '2024031523456789012', memberName: '李四', totalAmount: 2499.00, payType: '微信支付', status: '待发货', createTime: '2024-03-15 14:20:00' },
    { id: 1003, orderSn: '2024031611122233445', memberName: '王五', totalAmount: 899.00, payType: '支付宝', status: '已发货', createTime: '2024-03-16 09:10:00' },
    { id: 1004, orderSn: '2024031644556677889', memberName: '赵六', totalAmount: 14999.00, payType: '微信支付', status: '已完成', createTime: '2024-03-17 11:00:00' },
    { id: 1005, orderSn: '2024031788990011223', memberName: '钱七', totalAmount: 4990.00, payType: '支付宝', status: '退款中', createTime: '2024-03-18 16:30:00' },
  ]

  return (
    <div className="order-list-page">
      <Card>
        <div className="table-toolbar">
          <Space wrap>
            <Input placeholder="搜索订单编号" prefix={<SearchOutlined />} allowClear style={{ width: 220 }} />
            <Input placeholder="搜索收货人" allowClear style={{ width: 160 }} />
            <Select placeholder="订单状态" allowClear style={{ width: 130 }} options={[
              { label: '待付款', value: 'pending' },
              { label: '待发货', value: 'to_deliver' },
              { label: '已发货', value: 'delivered' },
              { label: '已完成', value: 'completed' },
              { label: '已取消', value: 'cancelled' },
              { label: '退款中', value: 'refunding' },
            ]} />
            <Select placeholder="支付方式" allowClear style={{ width: 120 }} options={[
              { label: '支付宝', value: 'alipay' },
              { label: '微信支付', value: 'wechat' },
            ]} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
            <Button>重置</Button>
          </Space>
          <Button icon={<ExportOutlined />}>导出</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" scroll={{ x: 1100 }}
          pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

const OrderSettingPage: React.FC = () => (
  <Card className="setting-page">
    <h3 style={{ marginBottom: 24 }}>订单设置</h3>
    <Descriptions bordered column={1} labelStyle={{ width: 160 }}>
      <Descriptions.Item label="未付款自动取消时间">
        <span style={{ marginRight: 12 }}>30 分钟</span>
        <Button type="link" size="small">修改</Button>
      </Descriptions.Item>
      <Descriptions.Item label="确认收货后自动完成">
        <span style={{ marginRight: 12 }}>7 天</span>
        <Button type="link" size="small">修改</Button>
      </Descriptions.Item>
      <Descriptions.Item label="售后申请时限">
        <span style={{ marginRight: 12 }}>15 天</span>
        <Button type="link" size="small">修改</Button>
      </Descriptions.Item>
      <Descriptions.Item label="订单备注提示">
        <span style={{ marginRight: 12 }}>请在下单后尽快完成支付</span>
        <Button type="link" size="small">编辑</Button>
      </Descriptions.Item>
    </Descriptions>
  </Card>
)

const ReturnApplyPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <FileTextOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>退货申请</h3>
      <p>处理用户的退货和退款申请</p>
    </div>
  </Card>
)

const ReturnReasonPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <SettingOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>退货原因</h3>
      <p>管理退货原因选项配置</p>
    </div>
  </Card>
)

export { OrderListPage, OrderSettingPage, ReturnApplyPage, ReturnReasonPage }
