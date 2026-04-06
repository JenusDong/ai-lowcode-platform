import React, { useState } from 'react'
import { Button, Input, Select, Card, Spin, Alert, Typography, Space } from 'antd'
import { PlayCircleOutlined, LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Text } = Typography

interface RestApiTesterProps {
  value?: {
    api: string
    method: 'GET' | 'POST'
  }
  onChange?: (value: any) => void
  multi?: boolean
}

const RestApiTester: React.FC<RestApiTesterProps> = ({ value, onChange, multi }) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const api = value?.api || ''
  const method = value?.method || 'GET'

  const handleTestApi = async () => {
    if (!api.trim()) {
      setError('请输入 API 地址')
      setStatus('error')
      return
    }

    setLoading(true)
    setError('')
    setResponse('')
    setStatus('idle')

    try {
      let url = api
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `http://${url}`
      }

      console.log('[RestApiTester] 开始测试 API:', { url, method })

      const fetchOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      if (method === 'POST') {
        fetchOptions.body = JSON.stringify({
          pageNum: 1,
          pageSize: 10,
        })
      }

      const res = await fetch(url, fetchOptions)
      const data = await res.json()

      console.log('[RestApiTester] API 响应:', data)

      if (res.ok) {
        setResponse(JSON.stringify(data, null, 2))
        setStatus('success')
        
        if (data.code === 200 && data.data && data.data.list) {
          console.log(`[RestApiTester] 成功获取 ${data.data.list.length} 条数据`)
        }
      } else {
        setError(`HTTP ${res.status}: ${res.statusText}`)
        setStatus('error')
        setResponse(JSON.stringify(data, null, 2))
      }
    } catch (err: any) {
      console.error('[RestApiTester] API 测试失败:', err)
      setError(err.message || '请求失败')
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const handleApiChange = (newApi: string) => {
    onChange?.({
      ...value,
      api: newApi,
    })
  }

  const handleMethodChange = (newMethod: 'GET' | 'POST') => {
    onChange?.({
      ...value,
      method: newMethod,
    })
  }

  return (
    <div style={{ width: '100%', padding: '8px 0' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {/* API 配置区域 */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ fontSize: 14 }}>API 配置</Text>
          </div>
          
          <Space.Compact style={{ width: '100%' }}>
            <Select
              value={method}
              onChange={handleMethodChange}
              style={{ width: 120 }}
              options={[
                { label: 'GET', value: 'GET' },
                { label: 'POST', value: 'POST' },
              ]}
            />
            <Input
              placeholder="请输入 API 地址，如 http://localhost:3000/lowcode/products"
              value={api}
              onChange={(e) => handleApiChange(e.target.value)}
              onPressEnter={handleTestApi}
              style={{ flex: 1 }}
              allowClear
            />
            <Button
              type="primary"
              icon={loading ? <LoadingOutlined /> : <PlayCircleOutlined />}
              onClick={handleTestApi}
              loading={loading}
              disabled={!api.trim()}
            >
              执行
            </Button>
          </Space.Compact>
        </div>

        {/* 状态提示 */}
        {status === 'success' && (
          <Alert
            message="API 请求成功"
            type="success"
            showIcon
            icon={<CheckCircleOutlined />}
            closable
            onClose={() => setStatus('idle')}
          />
        )}

        {status === 'error' && (
          <Alert
            message={`请求失败：${error}`}
            type="error"
            showIcon
            icon={<CloseCircleOutlined />}
            closable
            onClose={() => {
              setError('')
              setStatus('idle')
            }}
          />
        )}

        {/* 响应显示区域 */}
        {(response || status === 'error') && (
          <Card 
            size="small" 
            title={
              <span>
                Response 
                {status === 'success' && <Text type="success" style={{ marginLeft: 8 }}>✓</Text>}
                {status === 'error' && <Text type="danger" style={{ marginLeft: 8 }}>✗</Text>}
              </span>
            }
            style={{ 
              backgroundColor: '#f5f5f5',
              maxHeight: 400,
              overflow: 'auto'
            }}
          >
            <Spin spinning={loading}>
              <TextArea
                value={response || `Error: ${error}`}
                autoSize={{ minRows: 6, maxRows: 15 }}
                readOnly
                style={{
                  backgroundColor: status === 'error' ? '#fff2f0' : '#fafafa',
                  fontFamily: 'Monaco, Menlo, Consolas, "Courier New", monospace',
                  fontSize: 12,
                  color: status === 'error' ? '#ff4d4f' : '#262626',
                  resize: 'none',
                }}
              />
            </Spin>
            
            {status === 'success' && response && (() => {
              try {
                const jsonData = JSON.parse(response)
                if (jsonData.code === 200 && jsonData.data && Array.isArray(jsonData.data.list)) {
                  return (
                    <div style={{ marginTop: 12, padding: '8px 12px', backgroundColor: '#f6ffed', borderRadius: 4, border: '1px solid #b7eb8f' }}>
                      <Text type="success" strong>
                        ✓ 数据验证通过：共获取 {jsonData.data.total} 条数据，当前页显示 {jsonData.data.list.length} 条
                      </Text>
                    </div>
                  )
                }
              } catch (e) {}
              return null
            })()}
          </Card>
        )}
      </Space>
    </div>
  )
}

export default RestApiTester