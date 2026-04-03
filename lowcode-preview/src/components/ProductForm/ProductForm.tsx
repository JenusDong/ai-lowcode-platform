import React, { useEffect, useState } from 'react'
import { Form, Input, InputNumber, Select, Button, Card, Space, message, Switch, Divider, Row, Col, Tabs } from 'antd'
import type { PmsProduct } from '../../types/product'
import './ProductForm.scss'

interface ProductFormProps {
  initialValues?: string | Partial<PmsProduct>
  mode?: 'create' | 'edit' | 'view'
  showBasicInfo?: boolean
  showPriceInfo?: boolean
  showStockInfo?: boolean
  showStatusInfo?: boolean
  showDescription?: boolean
  onSubmit?: (values: PmsProduct) => void
  onCancel?: () => void
  style?: React.CSSProperties
  className?: string
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialValues,
  mode = 'create',
  showBasicInfo = true,
  showPriceInfo = true,
  showStockInfo = true,
  showStatusInfo = true,
  showDescription = true,
  onSubmit,
  onCancel,
  style,
  className,
}) => {
  const [form] = Form.useForm()
  const [activeTab, setActiveTab] = useState('basic')

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
    }
  }, [initialValues, form])

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      onSubmit?.(values as PmsProduct)
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

  const basicInfoItems = [
    <Row gutter={16} key="basic-row-1">
      <Col span={12}>
        <Form.Item
          name="name"
          label="商品名称"
          rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input placeholder="请输入商品名称" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="productSn"
          label="商品货号"
          rules={[{ required: true, message: '请输入商品货号' }]}
        >
          <Input placeholder="请输入商品货号" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,
    
    <Row gutter={16} key="basic-row-2">
      <Col span={12}>
        <Form.Item
          name="brandName"
          label="品牌名称"
        >
          <Input placeholder="请输入品牌名称" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="productCategoryName"
          label="商品分类"
        >
          <Select placeholder="请选择商品分类" disabled={isViewMode}>
            <Select.Option value="手机">手机</Select.Option>
            <Select.Option value="笔记本">笔记本</Select.Option>
            <Select.Option value="平板">平板</Select.Option>
            <Select.Option value="耳机">耳机</Select.Option>
            <Select.Option value="手表">手表</Select.Option>
            <Select.Option value="衣服">衣服</Select.Option>
            <Select.Option value="鞋子">鞋子</Select.Option>
            <Select.Option value="配饰">配饰</Select.Option>
            <Select.Option value="数码">数码</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>,

    <Form.Item
      key="pic"
      name="pic"
      label="商品图片"
    >
      <Input placeholder="请输入商品图片 URL" disabled={isViewMode} />
    </Form.Item>,

    <Row gutter={16} key="basic-row-3">
      <Col span={12}>
        <Form.Item
          name="subTitle"
          label="商品副标题"
        >
          <Input placeholder="请输入商品副标题" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="keywords"
          label="商品关键词"
        >
          <Input placeholder="多个关键词用逗号分隔" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const priceInfoItems = [
    <Row gutter={16} key="price-row-1">
      <Col span={12}>
        <Form.Item
          name="price"
          label="商品价格"
          rules={[{ required: true, message: '请输入商品价格' }]}
        >
          <InputNumber
            placeholder="请输入商品价格"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="originalPrice"
          label="原价"
        >
          <InputNumber
            placeholder="请输入原价"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="price-row-2">
      <Col span={12}>
        <Form.Item
          name="promotionPrice"
          label="促销价"
        >
          <InputNumber
            placeholder="请输入促销价"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            prefix="¥"
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="unit"
          label="商品单位"
        >
          <Select placeholder="请选择商品单位" disabled={isViewMode}>
            <Select.Option value="件">件</Select.Option>
            <Select.Option value="台">台</Select.Option>
            <Select.Option value="部">部</Select.Option>
            <Select.Option value="块">块</Select.Option>
            <Select.Option value="副">副</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>,
  ]

  const stockInfoItems = [
    <Row gutter={16} key="stock-row-1">
      <Col span={12}>
        <Form.Item
          name="stock"
          label="商品库存"
          rules={[{ required: true, message: '请输入商品库存' }]}
        >
          <InputNumber
            placeholder="请输入商品库存"
            style={{ width: '100%' }}
            min={0}
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="lowStock"
          label="库存预警值"
        >
          <InputNumber
            placeholder="请输入库存预警值"
            style={{ width: '100%' }}
            min={0}
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="stock-row-2">
      <Col span={12}>
        <Form.Item
          name="weight"
          label="商品重量(kg)"
        >
          <InputNumber
            placeholder="请输入商品重量"
            style={{ width: '100%' }}
            min={0}
            precision={2}
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="sort"
          label="排序"
        >
          <InputNumber
            placeholder="请输入排序"
            style={{ width: '100%' }}
            min={0}
            disabled={isViewMode}
          />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const statusInfoItems = [
    <Row gutter={16} key="status-row-1">
      <Col span={8}>
        <Form.Item
          name="publishStatus"
          label="上架状态"
          valuePropName="checked"
          getValueFromEvent={(checked: boolean) => checked ? 1 : 0}
          getValueProps={(value: number) => ({ checked: value === 1 })}
        >
          <Switch checkedChildren="上架" unCheckedChildren="下架" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="newStatus"
          label="新品状态"
          valuePropName="checked"
          getValueFromEvent={(checked: boolean) => checked ? 1 : 0}
          getValueProps={(value: number) => ({ checked: value === 1 })}
        >
          <Switch checkedChildren="是" unCheckedChildren="否" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="recommandStatus"
          label="推荐状态"
          valuePropName="checked"
          getValueFromEvent={(checked: boolean) => checked ? 1 : 0}
          getValueProps={(value: number) => ({ checked: value === 1 })}
        >
          <Switch checkedChildren="是" unCheckedChildren="否" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,

    <Row gutter={16} key="status-row-2">
      <Col span={12}>
        <Form.Item
          name="verifyStatus"
          label="审核状态"
          valuePropName="checked"
          getValueFromEvent={(checked: boolean) => checked ? 1 : 0}
          getValueProps={(value: number) => ({ checked: value === 1 })}
        >
          <Switch checkedChildren="已审核" unCheckedChildren="未审核" disabled={isViewMode} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="deleteStatus"
          label="删除状态"
          valuePropName="checked"
          getValueFromEvent={(checked: boolean) => checked ? 1 : 0}
          getValueProps={(value: number) => ({ checked: value === 1 })}
        >
          <Switch checkedChildren="已删除" unCheckedChildren="正常" disabled={isViewMode} />
        </Form.Item>
      </Col>
    </Row>,
  ]

  const descriptionItems = [
    <Form.Item
      key="description"
      name="description"
      label="商品描述"
    >
      <Input.TextArea rows={4} placeholder="请输入商品描述" disabled={isViewMode} />
    </Form.Item>,

    <Form.Item
      key="note"
      name="note"
      label="备注"
    >
      <Input.TextArea rows={2} placeholder="请输入备注" disabled={isViewMode} />
    </Form.Item>,
  ]

  const tabItems = [
    {
      key: 'basic',
      label: '基本信息',
      children: showBasicInfo ? basicInfoItems : null,
    },
    {
      key: 'price',
      label: '价格信息',
      children: showPriceInfo ? priceInfoItems : null,
    },
    {
      key: 'stock',
      label: '库存信息',
      children: showStockInfo ? stockInfoItems : null,
    },
    {
      key: 'status',
      label: '状态信息',
      children: showStatusInfo ? statusInfoItems : null,
    },
    {
      key: 'description',
      label: '描述信息',
      children: showDescription ? descriptionItems : null,
    },
  ]

  return (
    <div className={`mall-product-form ${className || ''}`} style={style}>
      <Card>
        <Form
          form={form}
          layout="vertical"
          initialValues={getParsedInitialValues()}
          disabled={isViewMode}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
          />

          <Divider />

          <Form.Item>
            <Space>
              {!isViewMode && (
                <>
                  <Button type="primary" onClick={handleSubmit}>
                    {mode === 'create' ? '创建' : '保存'}
                  </Button>
                  <Button onClick={handleReset}>
                    重置
                  </Button>
                </>
              )}
              <Button onClick={handleCancel}>
                {isViewMode ? '关闭' : '取消'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ProductForm
