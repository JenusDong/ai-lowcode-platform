import React from 'react'
import { Card, Table, Tag, Button, Space, Input, Select, Image, Descriptions, Modal, Form, InputNumber, message, Row, Col } from 'antd'
import type { ColumnsType } from 'antd'
import {
  ShoppingOutlined,
  InboxOutlined,
  TagsOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'

interface ProductItem {
  id: number
  name: string
  category: string
  brand: string
  price: number
  stock: number
  status: string
  image: string
  createTime: string
}

const ProductListPage: React.FC = () => {
  const columns: ColumnsType<ProductItem> = [
    {
      title: '商品图片',
      dataIndex: 'image',
      width: 90,
      render: (url: string) => <Image src={url} width={60} height={60} style={{ borderRadius: 6 }} fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23bbb' font-size='14'%3E商品图%3C/text%3E%3C/svg%3E" />,
    },
    { title: '商品名称', dataIndex: 'name', ellipsis: true },
    { title: '商品分类', dataIndex: 'category', width: 110 },
    { title: '品牌', dataIndex: 'brand', width: 100 },
    {
      title: '价格',
      dataIndex: 'price',
      width: 100,
      render: (price: number) => <span style={{ color: '#f5222d', fontWeight: 600 }}>¥{price.toFixed(2)}</span>,
    },
    { title: '库存', dataIndex: 'stock', width: 80 },
    {
      title: '上架状态',
      dataIndex: 'status',
      width: 95,
      render: (status: string) => (
        <Tag color={status === '上架' ? 'success' : status === '下架' ? 'default' : 'warning'}>
          {status}
        </Tag>
      ),
    },
    { title: '创建时间', dataIndex: 'createTime', width: 170 },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: () => (
        <Space size="small">
          <Button type="link" size="small" icon={<EyeOutlined />}>查看</Button>
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      ),
    },
  ]

  const data: ProductItem[] = [
    { id: 1, name: 'Apple iPhone 16 Pro Max 256GB 原色钛金属', category: '手机数码', brand: 'Apple', price: 9999.00, stock: 150, status: '上架', image: '', createTime: '2024-03-01 10:00:00' },
    { id: 2, name: 'MacBook Pro 14英寸 M3 Pro芯片 18GB内存', category: '电脑办公', brand: 'Apple', price: 14999.00, stock: 80, status: '上架', image: '', createTime: '2024-03-02 11:30:00' },
    { id: 3, name: 'Sony WH-1000XM5 无线降噪头戴式耳机 黑色', category: '影音电器', brand: 'Sony', price: 2499.00, stock: 200, status: '上架', image: '', createTime: '2024-03-05 09:15:00' },
    { id: 4, name: 'Nike Air Max 270 运动跑鞋 白黑配色', category: '运动户外', brand: 'Nike', price: 899.00, stock: 300, status: '下架', image: '', createTime: '2024-03-10 14:20:00' },
    { id: 5, name: '戴森 V15 Detect 无绳吸尘器', category: '家用电器', brand: 'Dyson', price: 4990.00, stock: 45, status: '上架', image: '', createTime: '2024-03-15 16:45:00' },
  ]

  return (
    <div className="product-list-page">
      <Card>
        <div className="table-toolbar">
          <Space wrap>
            <Input placeholder="搜索商品名称" prefix={<SearchOutlined />} allowClear style={{ width: 220 }} />
            <Select placeholder="选择分类" allowClear style={{ width: 140 }} options={[
              { label: '手机数码', value: 'phone' },
              { label: '电脑办公', value: 'computer' },
              { label: '影音电器', value: 'audio' },
              { label: '运动户外', value: 'sports' },
              { label: '家用电器', value: 'appliance' },
            ]} />
            <Select placeholder="选择品牌" allowClear style={{ width: 140 }} options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Sony', value: 'sony' },
              { label: 'Nike', value: 'nike' },
              { label: 'Dyson', value: 'dyson' },
            ]} />
            <Select placeholder="状态" allowClear style={{ width: 120 }} options={[
              { label: '上架', value: 'up' },
              { label: '下架', value: 'down' },
            ]} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
            <Button>重置</Button>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>添加商品</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" scroll={{ x: 1200 }}
          pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

const AddProductPage: React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmit = async () => {
    try {
      await form.validateFields()
      message.success('商品添加成功')
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  return (
    <div className="add-product-page">
      <Card title="添加新商品">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="商品名称" name="name" rules={[{ required: true, message: '请输入商品名称' }]}>
            <Input placeholder="请输入商品名称" maxLength={100} showCount />
          </Form.Item>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="商品分类" name="category" rules={[{ required: true, message: '请选择商品分类' }]}>
                <Select placeholder="请选择商品分类" options={[
                  { label: '手机数码', value: 'phone' },
                  { label: '电脑办公', value: 'computer' },
                  { label: '影音电器', value: 'audio' },
                  { label: '运动户外', value: 'sports' },
                  { label: '家用电器', value: 'appliance' },
                ]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="品牌" name="brand" rules={[{ required: true, message: '请选择品牌' }]}>
                <Select placeholder="请选择品牌" options={[
                  { label: 'Apple', value: 'apple' },
                  { label: 'Sony', value: 'sony' },
                  { label: 'Nike', value: 'nike' },
                  { label: 'Dyson', value: 'dyson' },
                ]} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="销售价格（元）" name="price" rules={[{ required: true, message: '请输入价格' }]}>
                <InputNumber min={0} precision={2} placeholder="0.00" style={{ width: '100%' }} addonBefore="¥" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="库存数量" name="stock" rules={[{ required: true, message: '请输入库存' }]}>
                <InputNumber min={0} placeholder="0" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="商品描述" name="description">
            <Input.TextArea rows={4} placeholder="请输入商品详细描述" maxLength={500} showCount />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">提交</Button>
              <Button>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

const CategoryPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <TagsOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>商品分类</h3>
      <p>管理商品的分类信息，支持多级分类</p>
    </div>
  </Card>
)

const BrandPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <ShoppingOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>品牌管理</h3>
      <p>管理商品的品牌信息</p>
    </div>
  </Card>
)

const AttributePage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <InboxOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>商品属性</h3>
      <p>管理商品的规格属性和参数</p>
    </div>
  </Card>
)

export { ProductListPage, AddProductPage, CategoryPage, BrandPage, AttributePage }
