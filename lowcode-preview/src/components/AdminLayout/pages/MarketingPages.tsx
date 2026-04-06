import React from 'react'
import { Card, Table, Tag, Button, Space, Input, Select, Row, Col, Statistic, Tabs } from 'antd'
import type { ColumnsType } from 'antd'
import {
  GiftOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  FireOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  CopyOutlined,
} from '@ant-design/icons'

interface CouponItem {
  id: number
  name: string
  type: string
  amount: number
  minAmount: number
  totalCount: number
  receiveCount: number
  status: string
  startTime: string
  endTime: string
}

const CouponManagePage: React.FC = () => {
  const columns: ColumnsType<CouponItem> = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    { title: '优惠券名称', dataIndex: 'name', ellipsis: true },
    {
      title: '优惠券类型',
      dataIndex: 'type',
      width: 110,
      render: (type: string) => <Tag color={type === '满减券' ? 'red' : type === '折扣券' ? 'blue' : 'green'}>{type}</Tag>,
    },
    {
      title: '面额/折扣',
      dataIndex: 'amount',
      width: 100,
      render: (val: number, record) =>
        record.type === '满减券' ? `¥${val}` : `${(val / 10).toFixed(1)}折`,
    },
    {
      title: '使用门槛',
      dataIndex: 'minAmount',
      width: 100,
      render: (v: number) => `满¥${v}`,
    },
    { title: '发行总量', dataIndex: 'totalCount', width: 90 },
    { title: '已领取', dataIndex: 'receiveCount', width: 80 },
    {
      title: '状态',
      dataIndex: 'status',
      width: 85,
      render: (s: string) => <Tag color={s === '进行中' ? 'success' : s === '未开始' ? 'warning' : 'default'}>{s}</Tag>,
    },
    { title: '开始时间', dataIndex: 'startTime', width: 160 },
    { title: '结束时间', dataIndex: 'endTime', width: 160 },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: () => (
        <Space size="small">
          <Button type="link" size="small">领取记录</Button>
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" icon={<DeleteOutlined />} danger>删除</Button>
        </Space>
      ),
    },
  ]

  const data: CouponItem[] = [
    { id: 1, name: '新用户专享券', type: '满减券', amount: 50, minAmount: 299, totalCount: 1000, receiveCount: 356, status: '进行中', startTime: '2024-03-01 00:00:00', endTime: '2024-04-30 23:59:59' },
    { id: 2, name: '春季大促8折券', type: '折扣券', amount: 80, minAmount: 199, totalCount: 5000, receiveCount: 2100, status: '进行中', startTime: '2024-03-10 00:00:00', endTime: '2024-04-10 23:59:59' },
    { id: 3, name: '品牌日专属券', type: '满减券', amount: 200, minAmount: 999, totalCount: 300, receiveCount: 89, status: '进行中', startTime: '2024-03-15 00:00:00', endTime: '2024-03-25 23:59:59' },
    { id: 4, name: '会员生日券', type: '满减券', amount: 100, minAmount: 499, totalCount: 800, receiveCount: 450, status: '未开始', startTime: '2024-05-01 00:00:00', endTime: '2024-05-31 23:59:59' },
  ]

  return (
    <div className="coupon-page">
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable><Statistic title="优惠券总数" value={24} prefix={<GiftOutlined />} /></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable><Statistic title="进行中" value={18} valueStyle={{ color: '#52c41a' }} /></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable><Statistic title="未开始" value={4} valueStyle={{ color: '#faad14' }} /></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable><Statistic title="已结束" value={2} valueStyle={{ color: '#999' }} /></Card>
        </Col>
      </Row>

      <Card>
        <div className="table-toolbar">
          <Space wrap>
            <Input placeholder="搜索优惠券名称" prefix={<SearchOutlined />} allowClear style={{ width: 220 }} />
            <Select placeholder="类型" allowClear style={{ width: 120 }} options={[
              { label: '满减券', value: 'reduce' },
              { label: '折扣券', value: 'discount' },
            ]} />
            <Select placeholder="状态" allowClear style={{ width: 110 }} options={[
              { label: '进行中', value: 'active' },
              { label: '未开始', value: 'pending' },
              { label: '已结束', value: 'ended' },
            ]} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>添加优惠券</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" scroll={{ x: 1400 }}
          pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

interface PromotionItem {
  id: number
  name: string
  type: string
  discount: string
  status: string
  startTime: string
  endTime: string
}

const PromotionPage: React.FC = () => {
  const columns: ColumnsType<PromotionItem> = [
    { title: 'ID', dataIndex: 'id', width: 60 },
    { title: '活动名称', dataIndex: 'name' },
    {
      title: '活动类型',
      dataIndex: 'type',
      width: 120,
      render: (t: string) => <Tag color={t === '限时抢购' ? 'red' : t === '满减促销' ? 'blue' : 'green'}>{t}</Tag>,
    },
    { title: '优惠力度', dataIndex: 'discount', width: 120 },
    {
      title: '状态',
      dataIndex: 'status',
      width: 85,
      render: (s: string) => <Tag color={s === '进行中' ? 'success' : s === '未开始' ? 'warning' : 'default'}>{s}</Tag>,
    },
    { title: '开始时间', dataIndex: 'startTime', width: 160 },
    { title: '结束时间', dataIndex: 'endTime', width: 160 },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <Space size="small">
          <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
          <Button type="link" size="small" icon={<CopyOutlined />}>复制</Button>
          <Button type="link" size="small" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      ),
    },
  ]

  const data: PromotionItem[] = [
    { id: 1, name: '春季焕新季', type: '满减促销', discount: '满299减50', status: '进行中', startTime: '2024-03-01 00:00:00', endTime: '2024-03-31 23:59:59' },
    { id: 2, name: '品牌特卖会', type: '限时抢购', discount: '5折起', status: '进行中', startTime: '2024-03-15 10:00:00', endTime: '2024-03-16 22:00:00' },
    { id: 3, name: '会员专享日', type: '满减促销', discount: '满599减100', status: '未开始', startTime: '2024-04-01 00:00:00', endTime: '2024-04-02 23:59:59' },
  ]

  return (
    <div className="promotion-page">
      <Card>
        <div className="table-toolbar">
          <Space>
            <Input placeholder="搜索活动名称" prefix={<SearchOutlined />} allowClear style={{ width: 220 }} />
            <Select placeholder="活动类型" allowClear style={{ width: 140 }} options={[
              { label: '限时抢购', value: 'flash' },
              { label: '满减促销', value: 'full_reduce' },
              { label: '折扣促销', value: 'discount' },
            ]} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>创建活动</Button>
        </div>
        <Table columns={columns} dataSource={data} rowKey="id"
          pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `共 ${total} 条` }} />
      </Card>
    </div>
  )
}

const FlashSalePage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <ThunderboltOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>秒杀活动管理</h3>
      <p>配置和管理秒杀时段、商品及库存</p>
    </div>
  </Card>
)

const NewProductPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <FireOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>新品推荐管理</h3>
      <p>设置首页新品推荐展示内容</p>
    </div>
  </Card>
)

const HotProductPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <FireOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>人气推荐管理</h3>
      <p>根据销量和热度推荐热门商品</p>
    </div>
  </Card>
)

const AdvertisePage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <DollarOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>广告管理</h3>
      <p>管理系统各位置的广告位内容</p>
    </div>
  </Card>
)

const SubjectPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <GiftOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>专题管理</h3>
      <p>创建和管理营销专题页面</p>
    </div>
  </Card>
)

const BrandRecommendPage: React.FC = () => (
  <Card className="empty-state">
    <div className="empty-content">
      <DollarOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
      <h3>品牌推荐</h3>
      <p>设置首页品牌推荐位内容</p>
    </div>
  </Card>
)

export {
  CouponManagePage,
  PromotionPage,
  FlashSalePage,
  NewProductPage,
  HotProductPage,
  AdvertisePage,
  SubjectPage,
  BrandRecommendPage,
}
