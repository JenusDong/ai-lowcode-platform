import React from 'react'
import { Card, Row, Col, Statistic, Button, Space, Tag } from 'antd'

interface MarketingManagerProps {
  type?: string
  showStats?: boolean
}

const MarketingManager: React.FC<MarketingManagerProps> = ({ type = 'coupon', showStats = true }) => {
  const typeLabels: Record<string, string> = {
    coupon: '优惠券管理',
    promotion: '促销活动',
    flash: '秒杀活动',
    new: '新品推荐',
    hot: '人气推荐',
  }

  return (
    <div className="marketing-manager">
      <h3 style={{ marginBottom: 16 }}>{typeLabels[type] || type}</h3>
      
      {showStats && (
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={6}>
            <Card size="small">
              <Statistic title="活动总数" value={12} />
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small">
              <Statistic title="进行中" value={5} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small">
              <Statistic title="已结束" value={7} />
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small">
              <Statistic title="参与人数" value={1234} suffix="人" />
            </Card>
          </Col>
        </Row>
      )}

      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {[
          { id: 1, name: '新年优惠券', status: 'active', discount: 20, count: 500 },
          { id: 2, name: '会员专享', status: 'active', discount: 15, count: 1000 },
          { id: 3, name: '满减优惠', status: 'expired', discount: 30, count: 200 },
          { id: 4, name: '新人礼包', status: 'pending', discount: 50, count: 800 },
        ].map(item => (
          <Card key={item.id} size="small" hoverable>
            <Row justify="space-between" align="middle">
              <Col>
                <strong>{item.name}</strong>
                <Tag color={
                  item.status === 'active' ? 'green' :
                  item.status === 'expired' ? 'red' : 'orange'
                } style={{ marginLeft: 8 }}>
                  {item.status === 'active' ? '进行中' :
                   item.status === 'expired' ? '已过期' : '未开始'}
                </Tag>
              </Col>
              <Col>
                <span style={{ marginRight: 16 }}>折扣：{item.discount}%</span>
                <span>剩余：{item.count} 张</span>
              </Col>
              <Col>
                <Button type="link" size="small">编辑</Button>
                <Button type="link" size="small">查看</Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>

      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button type="primary">+ 创建新{typeLabels[type]}</Button>
      </div>
    </div>
  )
}

export default MarketingManager
