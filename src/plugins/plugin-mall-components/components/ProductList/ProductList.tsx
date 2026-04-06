import React from 'react'
import { Table, Tag, Space, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './ProductList.scss'

interface ProductListProps {
  dataSourceType?: string
  dataSource?: string
  style?: React.CSSProperties
  className?: string
}

const ProductList: React.FC<ProductListProps> = ({
  style,
  className,
}) => {
  const columns: ColumnsType = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '商品货号',
      dataIndex: 'productSn',
      key: 'productSn',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `¥${price}`,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => (
        <Tag color={status === 1 ? 'green' : 'red'}>
          {status === 1 ? '上架' : '下架'}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ]

  const data = [
    { key: '1', name: '示例商品1', productSn: 'SN001', price: 99.99, stock: 100, status: 1 },
    { key: '2', name: '示例商品2', productSn: 'SN002', price: 199.99, stock: 50, status: 1 },
    { key: '3', name: '示例商品3', productSn: 'SN003', price: 299.99, stock: 0, status: 0 },
  ]

  return (
    <div className={`mall-product-list ${className || ''}`} style={style}>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ProductList
