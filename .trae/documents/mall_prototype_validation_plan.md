# 商品管理系统原型验证计划

## 一、验证目标

通过实现商品管理系统的核心功能，验证电商业务模块集成到低代码平台的技术可行性和业务价值。

### 核心验证点

1. **技术可行性**
   - 数据源适配层是否满足需求
   - 业务逻辑层是否可以正常工作
   - 物料组件是否可以正常注册和使用
   - 页面模板是否可以快速生成

2. **业务价值**
   - 是否能提高开发效率
   - 是否能降低开发门槛
   - 是否能满足实际业务需求

3. **用户体验**
   - 组件使用是否流畅
   - 配置是否简单直观
   - 生成的页面是否符合预期

---

## 二、当前低代码框架分析

### 框架架构

```
AI 低代码平台
├── 核心引擎
│   ├── @alilc/lowcode-engine (编辑器核心)
│   ├── @alilc/lowcode-types (类型定义)
│   └── @alilc/lowcode-react-renderer (渲染器)
│
├── 物料系统
│   ├── assets.json (物料配置)
│   ├── @alilc/antd-lowcode-materials (Ant Design 物料)
│   ├── @alifd/layout (布局组件)
│   ├── echarts-component (图表组件)
│   └── layout-components (自定义布局组件)
│
├── 插件系统
│   ├── plugin-editor-init (编辑器初始化)
│   ├── plugin-save-sample (保存插件)
│   ├── plugin-preview-sample (预览插件)
│   ├── plugin-echarts (ECharts 图表插件)
│   ├── plugin-lowcode-component (低代码组件)
│   ├── plugin-custom-setter-sample (自定义 Setter)
│   └── ... (其他插件)
│
├── Setter 系统
│   ├── 内置 Setter (StringSetter, NumberSetter, BoolSetter 等)
│   ├── JSONPathSetter (自定义 JSON 路径 Setter)
│   └── 自定义 Setter 扩展点
│
└── 数据源系统
    ├── @alilc/lowcode-datasource-fetch-handler
    └── 数据源面板插件
```

### 关键模块映射

| 原型验证任务 | 对应框架模块 | 可行性分析 |
|-------------|-------------|-----------|
| **搭建原型项目框架** | plugin-mall-components (新建) | ✅ **高度可行**<br>- 插件系统支持自定义插件<br>- 已有 plugin-echarts 等参考实现<br>- 插件注册机制成熟 |
| **实现数据源适配层** | DataSourceAdapter + Setter | ✅ **高度可行**<br>- 已有 @alilc/lowcode-datasource-fetch-handler<br>- Setter 系统支持自定义扩展<br>- 已有 JSONPathSetter 参考实现 |
| **实现商品列表组件** | Material + Component | ✅ **高度可行**<br>- 物料系统支持自定义物料<br>- 已有 @alilc/antd-lowcode-materials 参考<br>- Ant Design Table 组件成熟 |
| **实现商品表单组件** | Material + Component | ✅ **高度可行**<br>- Ant Design Form 组件成熟<br>- 已有表单验证最佳实践<br>- 可复用 mall-admin-web 的表单逻辑 |
| **创建页面模板** | Schema + Snippet | ✅ **高度可行**<br>- LowCodeEngine 支持页面 Schema<br>- Snippet 机制支持模板化<br>- 已有 defaultPageSchema.json 参考 |

---

## 三、原型验证任务分解

### 任务 1：搭建原型项目框架（1-2 天）

#### 目标
创建 `plugin-mall-components` 插件，搭建基础的物料注册框架。

#### 实施步骤

##### 1.1 创建插件目录结构

```
src/plugins/plugin-mall-components/
├── components/              # 组件实现
│   ├── ProductList/
│   │   ├── index.tsx
│   │   ├── ProductList.tsx
│   │   ├── types.ts
│   │   └── styles.scss
│   └── ProductForm/
│       ├── index.tsx
│       ├── ProductForm.tsx
│       ├── types.ts
│       └── styles.scss
├── adapters/                # 数据源适配器
│   ├── DataSourceAdapter.ts
│   ├── RestApiAdapter.ts
│   └── MockDataAdapter.ts
├── types/                   # 类型定义（复用 mall-admin-web）
│   ├── common.ts
│   └── product.ts
├── meta/                    # 物料元数据
│   ├── productListMeta.ts
│   └── productFormMeta.ts
├── setters/                 # 自定义 Setter
│   └── DataSourceSetter.tsx
├── index.tsx                # 插件入口
└── README.md
```

##### 1.2 创建类型定义文件

**文件**：`src/plugins/plugin-mall-components/types/common.ts`

```typescript
// 复用 mall-admin-web 的类型定义

export type CommonResult<T> = {
  code: number
  message: string
  data: T
}

export type CommonPage<T> = {
  pageNum: number
  pageSize: number
  totalPage: number
  total: number
  list: T[]
}

export type PageParam = {
  pageNum: number
  pageSize: number
  keyword?: string
}
```

**文件**：`src/plugins/plugin-mall-components/types/product.ts`

```typescript
import type { PageParam } from './common'

export type PmsProduct = {
  id?: number
  brandId?: number
  productCategoryId?: number
  name: string
  pic?: string
  productSn: string
  deleteStatus?: number
  publishStatus?: number
  newStatus?: number
  recommandStatus?: number
  verifyStatus?: number
  sort?: number
  sale?: number
  price?: number
  promotionPrice?: number
  subTitle?: string
  originalPrice?: number
  stock?: number
  lowStock?: number
  unit?: string
  weight?: number
  previewStatus?: number
  serviceIds?: string
  keywords?: string
  note?: string
  albumPics?: string
  detailTitle?: string
  promotionStartTime?: string
  promotionEndTime?: string
  promotionPerLimit?: number
  promotionType?: number
  brandName?: string
  productCategoryName?: string
  description?: string
  detailDesc?: string
  detailHtml?: string
  detailMobileHtml?: string
}

export type ProductQueryParam = PageParam & {
  publishStatus?: number
  verifyStatus?: number
  productSn?: string
  productCategoryId?: number
  brandId?: number
}
```

##### 1.3 创建插件入口文件

**文件**：`src/plugins/plugin-mall-components/index.tsx`

```typescript
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import ProductListMeta from './meta/productListMeta';
import ProductFormMeta from './meta/productFormMeta';

const MallComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'MallComponentsPlugin',
    async init() {
      const { material, setters } = ctx;
      
      // 注册自定义 Setter
      // setters.registerSetter('DataSourceSetter', DataSourceSetter);
      
      // 注册物料
      material.loadIncrementalAssets({
        version: '1.0.0',
        components: [
          ProductListMeta,
          ProductFormMeta,
        ],
      });
    },
  };
};

MallComponentsPlugin.pluginName = 'MallComponentsPlugin';

export default MallComponentsPlugin;
```

##### 1.4 在编辑器中注册插件

**文件**：`src/index.ts`

```typescript
// ... 现有代码

import MallComponentsPlugin from './plugins/plugin-mall-components';

// ... 现有代码

// 注册插件
plugins.register(MallComponentsPlugin);

// ... 现有代码
```

#### 对应框架模块
- **插件系统**：plugin-mall-components
- **类型系统**：TypeScript + 复用 mall-admin-web 类型
- **物料系统**：material.loadIncrementalAssets

#### 可行性分析
✅ **高度可行**
- LowCodeEngine 的插件系统非常成熟，支持自定义插件
- 已有多个插件参考实现（plugin-echarts、plugin-lowcode-component）
- 类型定义可以直接复用 mall-admin-web 的定义
- 插件注册流程简单清晰

#### 验证标准
- `programmatic` TR-1.1: 插件可以正常加载，无报错
- `human-judgement` TR-1.2: 编辑器可以正常启动

---

### 任务 2：实现数据源适配层（2-3 天）

#### 目标
实现数据源适配器，支持 REST API 和 Mock 数据。

#### 实施步骤

##### 2.1 创建数据源适配器接口

**文件**：`src/plugins/plugin-mall-components/adapters/DataSourceAdapter.ts`

```typescript
export interface DataSourceConfig {
  type: 'rest' | 'mock' | 'variable'
  api?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  mockData?: any
  variableName?: string
  transform?: (data: any) => any
}

export interface DataSourceAdapter {
  fetch(params?: any): Promise<any>
  submit(data: any): Promise<any>
  delete(id: string): Promise<any>
  update(id: string, data: any): Promise<any>
}

export class DataSourceAdapterFactory {
  static create(config: DataSourceConfig): DataSourceAdapter {
    switch (config.type) {
      case 'rest':
        return new RestApiAdapter(config)
      case 'mock':
        return new MockDataAdapter(config)
      case 'variable':
        return new VariableAdapter(config)
      default:
        throw new Error(`Unsupported data source type: ${config.type}`)
    }
  }
}
```

##### 2.2 实现 REST API 适配器

**文件**：`src/plugins/plugin-mall-components/adapters/RestApiAdapter.ts`

```typescript
import type { DataSourceAdapter, DataSourceConfig } from './DataSourceAdapter'

export class RestApiAdapter implements DataSourceAdapter {
  private config: DataSourceConfig

  constructor(config: DataSourceConfig) {
    this.config = config
  }

  async fetch(params?: any): Promise<any> {
    const response = await fetch(this.buildUrl(params), {
      method: this.config.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: this.config.method !== 'GET' ? JSON.stringify(params) : undefined,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    let data = await response.json()

    if (this.config.transform) {
      data = this.config.transform(data)
    }

    return data
  }

  async submit(data: any): Promise<any> {
    const response = await fetch(this.config.api!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: JSON.stringify(data),
    })

    return response.json()
  }

  async delete(id: string): Promise<any> {
    const response = await fetch(`${this.config.api}/${id}`, {
      method: 'DELETE',
      headers: this.config.headers,
    })

    return response.json()
  }

  async update(id: string, data: any): Promise<any> {
    const response = await fetch(`${this.config.api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: JSON.stringify(data),
    })

    return response.json()
  }

  private buildUrl(params?: any): string {
    if (!params || this.config.method !== 'GET') {
      return this.config.api!
    }

    const url = new URL(this.config.api!)
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key])
      }
    })

    return url.toString()
  }
}
```

##### 2.3 实现 Mock 数据适配器

**文件**：`src/plugins/plugin-mall-components/adapters/MockDataAdapter.ts`

```typescript
import type { DataSourceAdapter, DataSourceConfig } from './DataSourceAdapter'

export class MockDataAdapter implements DataSourceAdapter {
  private config: DataSourceConfig

  constructor(config: DataSourceConfig) {
    this.config = config
  }

  async fetch(params?: any): Promise<any> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let data = this.config.mockData

    if (this.config.transform) {
      data = this.config.transform(data)
    }

    // 支持分页
    if (params?.pageNum && params?.pageSize) {
      const start = (params.pageNum - 1) * params.pageSize
      const end = start + params.pageSize
      return {
        ...data,
        data: {
          ...data.data,
          list: data.data.list.slice(start, end),
        },
      }
    }

    return data
  }

  async submit(data: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success', data }
  }

  async delete(id: string): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success' }
  }

  async update(id: string, data: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success', data }
  }
}
```

##### 2.4 创建 Mock 数据

**文件**：`public/mock/products.json`

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "pageNum": 1,
    "pageSize": 10,
    "totalPage": 5,
    "total": 50,
    "list": [
      {
        "id": 1,
        "name": "iPhone 15 Pro",
        "productSn": "IPHONE15PRO001",
        "price": 8999,
        "stock": 100,
        "sale": 50,
        "brandName": "Apple",
        "productCategoryName": "手机",
        "pic": "https://via.placeholder.com/100",
        "publishStatus": 1,
        "newStatus": 1,
        "recommandStatus": 1,
        "verifyStatus": 1
      },
      {
        "id": 2,
        "name": "MacBook Pro 14",
        "productSn": "MACBOOKPRO14001",
        "price": 14999,
        "stock": 50,
        "sale": 30,
        "brandName": "Apple",
        "productCategoryName": "笔记本",
        "pic": "https://via.placeholder.com/100",
        "publishStatus": 1,
        "newStatus": 0,
        "recommandStatus": 1,
        "verifyStatus": 1
      }
    ]
  }
}
```

#### 对应框架模块
- **数据源系统**：DataSourceAdapter
- **Setter 系统**：自定义 DataSourceSetter
- **HTTP 请求**：Fetch API / Axios

#### 可行性分析
✅ **高度可行**
- LowCodeEngine 已有 @alilc/lowcode-datasource-fetch-handler
- Setter 系统支持自定义扩展
- 已有 JSONPathSetter 参考实现
- Fetch API 是浏览器原生支持，无需额外依赖

#### 验证标准
- `programmatic` TR-2.1: Mock 数据可以正常加载
- `programmatic` TR-2.2: API 请求可以正常发送（使用 Mock 数据）

---

### 任务 3：实现商品列表组件（3-4 天）

#### 目标
开发 ProductList 组件，支持列表展示、分页、搜索。

#### 实施步骤

##### 3.1 创建组件实现

**文件**：`src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx`

```typescript
import React, { useEffect, useState } from 'react'
import { Table, Input, Pagination, Card, Space, Button, Switch, Tag } from 'antd'
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons'
import { DataSourceAdapterFactory } from '../../adapters/DataSourceAdapter'
import type { PmsProduct, ProductQueryParam } from '../../types/product'
import type { DataSourceConfig } from '../../adapters/DataSourceAdapter'
import './styles.scss'

interface ProductListProps {
  dataSource: DataSourceConfig
  columns?: any[]
  showSearch?: boolean
  showPagination?: boolean
  onRowClick?: (record: PmsProduct) => void
  onSearch?: (keyword: string) => void
  onPageChange?: (page: number, pageSize: number) => void
  style?: React.CSSProperties
  className?: string
}

const ProductList: React.FC<ProductListProps> = ({
  dataSource,
  columns,
  showSearch = true,
  showPagination = true,
  onRowClick,
  onSearch,
  onPageChange,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<PmsProduct[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchText, setSearchText] = useState('')

  const adapter = DataSourceAdapterFactory.create(dataSource)

  useEffect(() => {
    fetchData()
  }, [currentPage, pageSize])

  const fetchData = async () => {
    setLoading(true)
    try {
      const params: ProductQueryParam = {
        pageNum: currentPage,
        pageSize: pageSize,
        keyword: searchText || undefined,
      }

      const response = await adapter.fetch(params)
      
      if (response.code === 200) {
        setData(response.data.list)
        setTotal(response.data.total)
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchData()
    onSearch?.(searchText)
  }

  const handlePageChange = (page: number, newPageSize: number) => {
    setCurrentPage(page)
    setPageSize(newPageSize)
    onPageChange?.(page, newPageSize)
  }

  const handleRefresh = () => {
    fetchData()
  }

  const defaultColumns = [
    {
      title: '商品图片',
      dataIndex: 'pic',
      key: 'pic',
      width: 100,
      render: (text: string) => <img src={text} alt="商品图片" style={{ width: 80, height: 80, objectFit: 'cover' }} />,
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: PmsProduct) => (
        <div>
          <div>{text}</div>
          <div style={{ color: '#999', fontSize: 12 }}>品牌：{record.brandName}</div>
        </div>
      ),
    },
    {
      title: '价格/货号',
      key: 'price',
      width: 150,
      render: (_: any, record: PmsProduct) => (
        <div>
          <div>价格：¥{record.price}</div>
          <div style={{ color: '#999', fontSize: 12 }}>货号：{record.productSn}</div>
        </div>
      ),
    },
    {
      title: '标签',
      key: 'tags',
      width: 200,
      render: (_: any, record: PmsProduct) => (
        <Space direction="vertical" size="small">
          <div>
            上架：
            <Switch
              checked={record.publishStatus === 1}
              size="small"
            />
          </div>
          <div>
            新品：
            <Switch
              checked={record.newStatus === 1}
              size="small"
            />
          </div>
          <div>
            推荐：
            <Switch
              checked={record.recommandStatus === 1}
              size="small"
            />
          </div>
        </Space>
      ),
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
  ]

  return (
    <div className={`product-list ${className}`} style={style}>
      {showSearch && (
        <Card style={{ marginBottom: 16 }}>
          <Space>
            <Input
              placeholder="搜索商品名称"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: 300 }}
              prefix={<SearchOutlined />}
            />
            <Button type="primary" onClick={handleSearch}>
              查询
            </Button>
            <Button onClick={() => setSearchText('')}>重置</Button>
            <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
              刷新
            </Button>
          </Space>
        </Card>
      )}

      <Card>
        <Table
          loading={loading}
          dataSource={data}
          columns={columns || defaultColumns}
          rowKey="id"
          pagination={false}
          onRow={(record) => ({
            onClick: () => onRowClick?.(record),
            style: { cursor: onRowClick ? 'pointer' : 'default' },
          })}
        />

        {showPagination && (
          <div style={{ marginTop: 16, textAlign: 'right' }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={total}
              onChange={handlePageChange}
              onShowSizeChange={handlePageChange}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `共 ${total} 条`}
            />
          </div>
        )}
      </Card>
    </div>
  )
}

export default ProductList
```

##### 3.2 创建物料元数据

**文件**：`src/plugins/plugin-mall-components/meta/productListMeta.ts`

```typescript
export default {
  componentName: 'ProductList',
  title: '商品列表',
  docUrl: '',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'ProductList',
    destructuring: true,
  },
  props: [
    {
      name: 'dataSource',
      propType: 'object',
      description: '数据源配置',
      defaultValue: {
        type: 'mock',
        mockData: {
          code: 200,
          message: 'success',
          data: {
            pageNum: 1,
            pageSize: 10,
            total: 50,
            list: [],
          },
        },
      },
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'type',
                description: '数据源类型',
                setter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { label: 'REST API', value: 'rest' },
                      { label: 'Mock 数据', value: 'mock' },
                    ],
                  },
                },
              },
              { name: 'api', description: 'API 地址', setter: 'StringSetter' },
              { name: 'method', description: '请求方法', setter: 'SelectSetter', props: { options: ['GET', 'POST'] } },
            ],
          },
        },
      },
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '是否显示搜索',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'showPagination',
      propType: 'bool',
      description: '是否显示分页',
      defaultValue: true,
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onRowClick', description: '行点击' },
        { name: 'onSearch', description: '搜索' },
        { name: 'onPageChange', description: '分页变化' },
      ],
    },
    props: [
      {
        type: 'group',
        title: '数据源配置',
        display: 'accordion',
        items: [{ name: 'dataSource' }],
      },
      {
        type: 'group',
        title: '功能配置',
        display: 'accordion',
        items: [{ name: 'showSearch' }, { name: 'showPagination' }],
      },
    ],
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务',
  group: '商品管理',
  snippets: [
    {
      title: '商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSource: {
            type: 'mock',
            mockData: {
              code: 200,
              message: 'success',
              data: {
                pageNum: 1,
                pageSize: 10,
                total: 50,
                list: [
                  {
                    id: 1,
                    name: '示例商品',
                    productSn: 'EXAMPLE001',
                    price: 99.99,
                    stock: 100,
                    sale: 50,
                    brandName: '示例品牌',
                    pic: 'https://via.placeholder.com/100',
                    publishStatus: 1,
                    newStatus: 1,
                    recommandStatus: 1,
                  },
                ],
              },
            },
          },
          showSearch: true,
          showPagination: true,
        },
      },
    },
  ],
}
```

#### 对应框架模块
- **物料系统**：material.loadIncrementalAssets
- **组件库**：Ant Design Table, Input, Pagination
- **Setter 系统**：ObjectSetter, BoolSetter, SelectSetter

#### 可行性分析
✅ **高度可行**
- Ant Design Table 组件非常成熟，功能完善
- 已有 @alilc/antd-lowcode-materials 参考
- 物料注册机制成熟
- 可复用 mall-admin-web 的业务逻辑模式

#### 验证标准
- `programmatic` TR-3.1: 组件可以正常渲染
- `programmatic` TR-3.2: 数据可以正常加载和展示
- `human-judgement` TR-3.3: UI 符合设计规范

---

### 任务 4：实现商品表单组件（2-3 天）

#### 目标
开发 ProductForm 组件，支持商品信息录入和表单验证。

#### 实施步骤

##### 4.1 创建组件实现

**文件**：`src/plugins/plugin-mall-components/components/ProductForm/ProductForm.tsx`

```typescript
import React from 'react'
import { Form, Input, InputNumber, Select, Button, Card, Space, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { PmsProduct } from '../../types/product'
import './styles.scss'

interface ProductFormProps {
  initialValues?: Partial<PmsProduct>
  onSubmit?: (values: PmsProduct) => void
  onCancel?: () => void
  style?: React.CSSProperties
  className?: string
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialValues,
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

  const handleCancel = () => {
    form.resetFields()
    onCancel?.()
  }

  return (
    <div className={`product-form ${className}`} style={style}>
      <Card>
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          <Form.Item
            name="name"
            label="商品名称"
            rules={[{ required: true, message: '请输入商品名称' }]}
          >
            <Input placeholder="请输入商品名称" />
          </Form.Item>

          <Form.Item
            name="productSn"
            label="商品货号"
            rules={[{ required: true, message: '请输入商品货号' }]}
          >
            <Input placeholder="请输入商品货号" />
          </Form.Item>

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
            />
          </Form.Item>

          <Form.Item
            name="stock"
            label="商品库存"
            rules={[{ required: true, message: '请输入商品库存' }]}
          >
            <InputNumber
              placeholder="请输入商品库存"
              style={{ width: '100%' }}
              min={0}
            />
          </Form.Item>

          <Form.Item name="subTitle" label="商品副标题">
            <Input placeholder="请输入商品副标题" />
          </Form.Item>

          <Form.Item name="brandName" label="品牌名称">
            <Input placeholder="请输入品牌名称" />
          </Form.Item>

          <Form.Item name="description" label="商品描述">
            <Input.TextArea rows={4} placeholder="请输入商品描述" />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" onClick={handleSubmit}>
                提交
              </Button>
              <Button onClick={handleCancel}>取消</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ProductForm
```

##### 4.2 创建物料元数据

**文件**：`src/plugins/plugin-mall-components/meta/productFormMeta.ts`

```typescript
export default {
  componentName: 'ProductForm',
  title: '商品表单',
  docUrl: '',
  screenshot: '',
  npm: {
    package: 'mall-components',
    version: '1.0.0',
    exportName: 'ProductForm',
    destructuring: true,
  },
  props: [
    {
      name: 'initialValues',
      propType: 'object',
      description: '初始值',
      setter: 'JSONSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onSubmit', description: '提交' },
        { name: 'onCancel', description: '取消' },
      ],
    },
    props: [
      {
        type: 'group',
        title: '表单配置',
        display: 'accordion',
        items: [{ name: 'initialValues' }],
      },
    ],
  },
  icon: 'https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png',
  category: '电商业务',
  group: '商品管理',
  snippets: [
    {
      title: '商品表单',
      schema: {
        componentName: 'ProductForm',
        props: {},
      },
    },
  ],
}
```

#### 对应框架模块
- **物料系统**：material.loadIncrementalAssets
- **组件库**：Ant Design Form, Input, InputNumber, Select
- **Setter 系统**：JSONSetter

#### 可行性分析
✅ **高度可行**
- Ant Design Form 组件功能强大，支持复杂验证
- 可复用 mall-admin-web 的表单逻辑
- 物料注册机制成熟

#### 验证标准
- `programmatic` TR-4.1: 表单验证规则生效
- `programmatic` TR-4.2: 表单提交成功

---

### 任务 5：创建商品管理页面模板（1-2 天）

#### 目标
创建商品列表页和商品编辑页模板。

#### 实施步骤

##### 5.1 创建商品列表页模板

**文件**：`src/plugins/plugin-mall-components/templates/productListPage.json`

```json
{
  "componentName": "Page",
  "props": {
    "title": "商品列表"
  },
  "children": [
    {
      "componentName": "ProductList",
      "props": {
        "dataSource": {
          "type": "mock",
          "mockData": {
            "code": 200,
            "message": "success",
            "data": {
              "pageNum": 1,
              "pageSize": 10,
              "total": 50,
              "list": []
            }
          }
        },
        "showSearch": true,
        "showPagination": true
      }
    }
  ]
}
```

##### 5.2 创建商品编辑页模板

**文件**：`src/plugins/plugin-mall-components/templates/productEditPage.json`

```json
{
  "componentName": "Page",
  "props": {
    "title": "商品编辑"
  },
  "children": [
    {
      "componentName": "ProductForm",
      "props": {}
    }
  ]
}
```

#### 对应框架模块
- **Schema 系统**：defaultPageSchema.json
- **Snippet 系统**：物料 snippets

#### 可行性分析
✅ **高度可行**
- LowCodeEngine 支持页面 Schema
- Snippet 机制支持模板化
- 已有 defaultPageSchema.json 参考

#### 验证标准
- `human-judgement` TR-5.1: 页面模板可以快速生成页面
- `programmatic` TR-5.2: 生成的页面功能正常

---

### 任务 6：原型验证总结（1 天）

#### 目标
总结原型验证的经验和问题，评估技术方案的可行性。

#### 实施步骤

##### 6.1 编写验证报告

**文件**：`.trae/documents/mall_prototype_validation_report.md`

内容包括：
1. 技术方案可行性评估
2. 遇到的问题和解决方案
3. 性能测试结果
4. 用户体验评估
5. 后续优化建议
6. 完整的实施计划调整

##### 6.2 调整后续计划

根据原型验证结果，调整后续实施计划：
- 技术方案的优化点
- 开发流程的改进
- 时间估算的调整

#### 验证标准
- `human-judgement` TR-6.1: 原型验证报告完整清晰

---

## 四、技术可行性总结

### 高度可行的模块

| 模块 | 可行性 | 依据 |
|------|--------|------|
| **插件系统** | ✅ 高度可行 | LowCodeEngine 插件系统成熟，已有多个参考实现 |
| **物料系统** | ✅ 高度可行 | 物料注册机制完善，已有 @alilc/antd-lowcode-materials 参考 |
| **数据源系统** | ✅ 高度可行 | 已有 @alilc/lowcode-datasource-fetch-handler，支持扩展 |
| **Setter 系统** | ✅ 高度可行 | Setter 扩展机制完善，已有 JSONPathSetter 参考 |
| **组件库** | ✅ 高度可行 | Ant Design 组件成熟，功能完善 |
| **Schema 系统** | ✅ 高度可行 | LowCodeEngine 支持页面 Schema，已有参考实现 |

### 技术风险

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| Vue 到 React 重构 | 中 | 复用业务逻辑，UI 层重新实现 |
| 性能问题 | 低 | 虚拟滚动、懒加载、缓存优化 |
| 数据源适配复杂度 | 低 | 设计灵活的适配器接口 |

### 结论

**技术方案高度可行**，可以按计划进行原型验证。

---

## 五、时间规划

| 任务 | 预计时间 | 优先级 |
|------|---------|--------|
| 任务 1：搭建原型项目框架 | 1-2 天 | P0 |
| 任务 2：实现数据源适配层 | 2-3 天 | P0 |
| 任务 3：实现商品列表组件 | 3-4 天 | P0 |
| 任务 4：实现商品表单组件 | 2-3 天 | P0 |
| 任务 5：创建页面模板 | 1-2 天 | P0 |
| 任务 6：原型验证总结 | 1 天 | P0 |
| **总计** | **10-15 天** | **P0** |

---

## 六、下一步行动

1. **立即开始任务 1**：搭建原型项目框架
2. **并行开发**：任务 2 和任务 3 可以并行进行
3. **持续验证**：每个任务完成后立即验证
4. **及时调整**：根据验证结果及时调整计划

---

## 附录：参考资料

### A. LowCodeEngine 官方文档

- [插件开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/plugin)
- [物料开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/material)
- [Setter 开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/setter)

### B. 参考实现

- [plugin-echarts](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-echarts)
- [plugin-lowcode-component](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-lowcode-component)
- [mall-admin-web 商品列表](file:///Users/ylgao/jenusWork/AI-learn/lowcode/mall-admin-web/mall-admin-web/src/views/pms/product/index.vue)

### C. 相关规划文档

- [电商业务模块集成规划](./mall_components_integration_plan.md)
- [低代码平台构建计划](./lowcode_platform_plan.md)
