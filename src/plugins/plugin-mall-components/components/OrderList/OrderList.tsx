import React from 'react'
import { Table, Tag, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface OrderListProps {
  dataSourceType?: string
  status?: string
}

interface OrderItem {
  key: string
  orderNo: string
  customer: string
  amount: number
  status: string
  createTime: string
}

const mockData: OrderItem[] = [
  {
    key: '1',
    orderNo: 'ORD-20240101-001',
    customer: '张三',
    amount: 299.00,
    status: 'paid',
    createTime: '2024-01-01 10:30:00',
  },
  {
    key: '2',
    orderNo: 'ORD-20240101-002',
    customer: '李四',
    amount: 599.00,
    status: 'shipped',
    createTime: '2024-01-01 11:20:00',
  },
  {
    key: '3',
    orderNo: 'ORD-20240101-003',
    customer: '王五',
    amount: 129.00,
    status: 'pending',
    createTime: '2024-01-01 14:15:00',
  },
]

const columns: ColumnsType<OrderItem> = [
  {
    title: '订单号',
    dataIndex: 'orderNo',
    key: 'orderNo',
    width: 180,
  },
  {
    title: '客户',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: '金额 (¥)',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => <span style={{ color: '#f5222d', fontWeight: 500 }}>{amount.toFixed(2)}</span>,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const colorMap: Record<string, string> = {
        pending: 'orange',
        paid: 'blue',
        shipped: 'green',
        completed: 'default',
        cancelled: 'red',
      }
      const labelMap: Record<string, string> = {
        pending: '待付款',
        paid: '已付款',
        shipped: '已发货',
        completed: '已完成',
        cancelled: '已取消',
      }
      return <Tag color={colorMap[status]}>{labelMap[status]}</Tag>
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
]

const OrderList: React.FC<OrderListProps> = ({ status }) => {
  const filteredData = status ? mockData.filter(item => item.status === status) : mockData

  return (
    <div className="order-list">
      <h3 style={{ marginBottom: 16 }}>订单列表</h3>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 10 }}
        size="middle"
      />
    </div>
  )
}

export default OrderList
