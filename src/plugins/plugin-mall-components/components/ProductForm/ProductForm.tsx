import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Select, Button, Card, Space, message } from 'antd'
import './ProductForm.scss'

interface ProductFormProps {
  initialValues?: string
  showName?: boolean
  showProductSn?: boolean
  showBrandName?: boolean
  showCategory?: boolean
  showPrice?: boolean
  showStock?: boolean
  showDescription?: boolean
  onSubmit?: (values: any) => void
  onCancel?: () => void
  style?: React.CSSProperties
  className?: string
}

const ProductForm: React.FC<ProductFormProps> = ({
  showName = true,
  showProductSn = true,
  showBrandName = true,
  showCategory = true,
  showPrice = true,
  showStock = true,
  showDescription = true,
  onSubmit,
  onCancel,
  style,
  className,
}) => {
  const [form] = Form.useForm()

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      onSubmit?.(values)
      message.success('提交成功')
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  return (
    <div className={`mall-product-form ${className || ''}`} style={style}>
      <Card>
        <Form
          form={form}
          layout="vertical"
        >
          {showName && (
            <Form.Item name="name" label="商品名称" rules={[{ required: true }]}>
              <Input placeholder="请输入商品名称" />
            </Form.Item>
          )}

          {showProductSn && (
            <Form.Item name="productSn" label="商品货号" rules={[{ required: true }]}>
              <Input placeholder="请输入商品货号" />
            </Form.Item>
          )}

          {showBrandName && (
            <Form.Item name="brandName" label="品牌名称">
              <Input placeholder="请输入品牌名称" />
            </Form.Item>
          )}

          {showCategory && (
            <Form.Item name="productCategoryName" label="商品分类">
              <Select placeholder="请选择">
                <Select.Option value="手机">手机</Select.Option>
                <Select.Option value="笔记本">笔记本</Select.Option>
              </Select>
            </Form.Item>
          )}

          {showPrice && (
            <Form.Item name="price" label="价格" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} min={0} prefix="¥" />
            </Form.Item>
          )}

          {showStock && (
            <Form.Item name="stock" label="库存" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} min={0} />
            </Form.Item>
          )}

          {showDescription && (
            <Form.Item name="description" label="描述">
              <Input.TextArea rows={4} />
            </Form.Item>
          )}

          <Form.Item>
            <Space>
              <Button type="primary" onClick={handleSubmit}>提交</Button>
              <Button onClick={onCancel}>取消</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ProductForm
