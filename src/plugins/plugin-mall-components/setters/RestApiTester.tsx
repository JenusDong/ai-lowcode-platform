import React, { useState } from 'react'
import { Input, Button, Card, Select, Space } from 'antd'

const { TextArea } = Input

interface RestApiTesterProps {
  style?: React.CSSProperties
  className?: string
}

const RestApiTester: React.FC<RestApiTesterProps> = ({ style, className }) => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleExecute = async () => {
    if (!url) return
    setLoading(true)
    try {
      const res = await fetch(url, { method })
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (err) {
      setResponse(`Error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`rest-api-tester ${className || ''}`} style={style}>
      <Card title="REST API 测试">
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Input
            placeholder="API 地址"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Select
            value={method}
            onChange={setMethod}
            options={[
              { label: 'GET', value: 'GET' },
              { label: 'POST', value: 'POST' },
              { label: 'PUT', value: 'PUT' },
              { label: 'DELETE', value: 'DELETE' },
            ]}
            style={{ width: 120 }}
          />
          <Button type="primary" onClick={handleExecute} loading={loading}>
            执行
          </Button>
          <TextArea
            value={response}
            readOnly
            rows={10}
            placeholder="响应结果"
          />
        </Space>
      </Card>
    </div>
  )
}

export default RestApiTester
