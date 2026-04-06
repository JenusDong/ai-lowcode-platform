import React from 'react'
import { Table, Input, Pagination, Card, Space, Button, Switch, Select } from 'antd'
import { SearchOutlined, ReloadOutlined, PlusOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { DataSourceAdapterFactory } from '../../adapters/DataSourceAdapter'
import type { PmsProduct, ProductQueryParam } from '../../types/product'
import type { DataSourceConfig } from '../../adapters/DataSourceAdapter'
import './ProductList.scss'

interface ProductListProps {
  dataSourceType?: 'rest' | 'mock' | 'variable'
  api?: string
  method?: 'GET' | 'POST'
  mockData?: string | any
  variableName?: string
  
  showFilter?: boolean
  showAction?: boolean
  showSelection?: boolean
  showOperation?: boolean
  showStatus?: boolean
  showPagination?: boolean
  
  filterFields?: Array<{
    name: string
    label: string
    type: 'input' | 'select' | 'date'
    options?: Array<{ label: string; value: any }>
  }>
  actionButtons?: Array<{
    text: string
    icon?: string
    type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'
    onClick?: string
  }>
  columns?: any[]
  batchOperations?: Array<{
    text: string
    value: string
    action?: string
  }>
  
  onRowClick?: (record: PmsProduct) => void
  onSearch?: (keyword: string) => void
  onPageChange?: (page: number, pageSize: number) => void
  onActionClick?: (action: string) => void
  onBatchOperation?: (operation: string, selectedRows: PmsProduct[]) => void
  
  style?: React.CSSProperties
  className?: string
}

const ProductList: React.FC<ProductListProps> = ({
  dataSourceType = 'mock',
  api,
  method = 'GET',
  mockData,
  variableName,
  showFilter = true,
  showAction = true,
  showSelection = true,
  showOperation = true,
  showStatus = true,
  showPagination = true,
  filterFields = [],
  actionButtons = [],
  columns,
  batchOperations = [],
  onRowClick,
  onSearch,
  onPageChange,
  onActionClick,
  onBatchOperation,
  style,
  className,
}) => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<PmsProduct[]>([])
  const [total, setTotal] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [searchText, setSearchText] = React.useState('')
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([])
  const [selectedRows, setSelectedRows] = React.useState<PmsProduct[]>([])
  const [batchOperation, setBatchOperation] = React.useState<string>()

  const defaultMockDataObj = {
    code: 200,
    message: 'success',
    data: {
      pageNum: 1,
      pageSize: 10,
      total: 50,
      list: [
        {
          id: 1,
          name: '时尚运动鞋',
          productSn: 'PRODUCT001',
          price: 269,
          stock: 100,
          sale: 120,
          brandName: '时尚运动',
          productCategoryName: '鞋子',
          pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 1,
          verifyStatus: 1,
        },
        {
          id: 2,
          name: '休闲T恤',
          productSn: 'PRODUCT002',
          price: 99,
          stock: 200,
          sale: 350,
          brandName: '休闲服饰',
          productCategoryName: '衣服',
          pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
          publishStatus: 1,
          newStatus: 0,
          recommandStatus: 1,
          verifyStatus: 1,
        },
        {
          id: 3,
          name: '双肩背包',
          productSn: 'PRODUCT003',
          price: 189,
          stock: 80,
          sale: 80,
          brandName: '旅行箱包',
          productCategoryName: '配饰',
          pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 0,
          verifyStatus: 1,
        },
        {
          id: 4,
          name: '运动手表',
          productSn: 'PRODUCT004',
          price: 499,
          stock: 50,
          sale: 60,
          brandName: '智能数码',
          productCategoryName: '数码',
          pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 1,
          verifyStatus: 1,
        },
        {
          id: 5,
          name: '牛仔裤',
          productSn: 'PRODUCT005',
          price: 199,
          stock: 150,
          sale: 280,
          brandName: '时尚牛仔',
          productCategoryName: '衣服',
          pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
          publishStatus: 1,
          newStatus: 0,
          recommandStatus: 0,
          verifyStatus: 1,
        },
      ],
    },
  }

  const defaultMockData = JSON.stringify(defaultMockDataObj)

  let actualMockData = mockData
  if (!actualMockData) {
    actualMockData = defaultMockData
  }

  console.log('[ProductList] 处理后的 mockData:', actualMockData)

  const dataSource: DataSourceConfig = {
    type: dataSourceType,
    api: api || '',
    method: method,
    mockData: actualMockData,
    variableName: variableName || '',
  }

  console.log('[ProductList] 组件渲染，props:', { 
    dataSourceType, api, method, mockData, variableName,
    showFilter, showAction, showSelection 
  })
  
  const adapter = DataSourceAdapterFactory.create(dataSource)
  console.log('[ProductList] DataSourceAdapter 创建完成:', adapter)

  React.useEffect(() => {
    console.log('[ProductList] useEffect 触发，开始获取数据')
    fetchData()
  }, [currentPage, pageSize, dataSourceType, api, method, mockData, variableName])

  const fetchData = async () => {
    console.log('[ProductList] fetchData 开始，参数:', { currentPage, pageSize, searchText })
    setLoading(true)
    try {
      const params: ProductQueryParam = {
        pageNum: currentPage,
        pageSize: pageSize,
        keyword: searchText || undefined,
      }

      console.log('[ProductList] 调用 adapter.fetch，参数:', params)
      const response = await adapter.fetch(params)
      console.log('[ProductList] adapter.fetch 返回结果:', response)
      
      if (response.code === 200) {
        setData(response.data.list)
        setTotal(response.data.total)
        console.log('[ProductList] 数据更新成功，总数:', response.data.total)
      }
    } catch (error) {
      console.error('[ProductList] 获取数据失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
    onSearch?.(searchText)
  }

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page)
    setPageSize(size)
    onPageChange?.(page, size)
  }

  const handleBatchOperation = () => {
    if (batchOperation && selectedRows.length > 0) {
      onBatchOperation?.(batchOperation, selectedRows)
    }
  }

  const defaultColumns = [
    {
      title: '商品图片',
      dataIndex: 'pic',
      key: 'pic',
      width: 100,
      render: (text: string) => <img src={text} alt="商品图片" style={{ width: 60, height: 60, objectFit: 'cover' }} />,
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '商品编号',
      dataIndex: 'productSn',
      key: 'productSn',
      width: 150,
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      render: (price: number) => `¥${price.toFixed(2)}`,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
      width: 80,
    },
    {
      title: '销量',
      dataIndex: 'sale',
      key: 'sale',
      width: 80,
    },
    {
      title: '品牌',
      dataIndex: 'brandName',
      key: 'brandName',
      width: 100,
    },
    {
      title: '分类',
      dataIndex: 'productCategoryName',
      key: 'productCategoryName',
      width: 100,
    },
    ...(showStatus
      ? [
          {
            title: '状态',
            dataIndex: 'publishStatus',
            key: 'publishStatus',
            width: 100,
            render: (status: number) => (
              <Switch checked={status === 1} checkedChildren="上架" unCheckedChildren="下架" />
            ),
          },
        ]
      : []),
    ...(showOperation
      ? [
          {
            title: '操作',
            key: 'operation',
            width: 150,
            render: (_: any, record: PmsProduct) => (
              <Space size="small">
                <Button type="link" size="small" onClick={() => onRowClick?.(record)}>
                  查看
                </Button>
                <Button type="link" size="small">
                  编辑
                </Button>
                <Button type="link" size="small" danger>
                  删除
                </Button>
              </Space>
            ),
          },
        ]
      : []),
  ]

  const rowSelection = showSelection
    ? {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[], newSelectedRows: PmsProduct[]) => {
          setSelectedRowKeys(newSelectedRowKeys)
          setSelectedRows(newSelectedRows)
        },
      }
    : undefined

  const getIcon = (iconName?: string): React.ReactNode => {
    switch (iconName) {
      case 'plus':
        return <PlusOutlined />
      case 'download':
        return <DownloadOutlined />
      case 'upload':
        return <UploadOutlined />
      default:
        return null
    }
  }

  return (
    <div className={`mall-product-list ${className || ''}`} style={style}>
      {showFilter && (
        <Card className="mall-product-list-filter" size="small">
          <Space>
            <Input
              placeholder="请输入商品名称或编号"
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 300 }}
            />
            <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
              搜索
            </Button>
            <Button icon={<ReloadOutlined />} onClick={() => fetchData()}>
              刷新
            </Button>
          </Space>
        </Card>
      )}

      {showAction && (
        <Card className="mall-product-list-action" size="small">
          <Space>
            {actionButtons.map((btn, index) => (
              <Button key={index} type={btn.type || 'default'} icon={getIcon(btn.icon)} onClick={() => onActionClick?.(btn.onClick || '')}>
                {btn.text}
              </Button>
            ))}
            {showSelection && batchOperations.length > 0 && (
              <>
                <Select
                  placeholder="批量操作"
                  value={batchOperation}
                  onChange={setBatchOperation}
                  style={{ width: 150 }}
                >
                  {batchOperations.map((op, index) => (
                    <Select.Option key={index} value={op.value}>
                      {op.text}
                    </Select.Option>
                  ))}
                </Select>
                <Button onClick={handleBatchOperation}>执行</Button>
              </>
            )}
          </Space>
        </Card>
      )}

      <div className="mall-product-list-table">
        <Table
          rowKey="id"
          columns={columns || defaultColumns}
          dataSource={data}
          loading={loading}
          rowSelection={rowSelection}
          pagination={false}
          scroll={{ x: 1200 }}
        />
      </div>

      {showPagination && (
        <div className="pagination-wrapper">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={total}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条`}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default ProductList
