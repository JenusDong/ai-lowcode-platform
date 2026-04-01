# 电商业务模块集成规划

## 一、项目背景与目标

### 参考项目分析

#### 1. mall-admin-web（电商后台管理系统）
- **技术栈**：Vue 3 + TypeScript + Element Plus + Pinia
- **业务模块**：
  - **PMS（商品管理系统）**：商品列表、商品分类、商品属性、品牌管理
  - **OMS（订单管理系统）**：订单列表、订单详情、发货管理、退货处理
  - **SMS（营销管理系统）**：秒杀活动、优惠券、广告管理、商品推荐
  - **UMS（权限管理系统）**：用户管理、角色管理、菜单管理、资源管理

#### 2. vue-element-admin（通用后台模板）
- **技术栈**：Vue 2 + Element UI + Vuex
- **特点**：丰富的组件示例、权限管理、布局组件

### 可复用的核心经验 ⭐

#### A. 类型系统设计（可直接复用）

```typescript
// 通用返回格式
export type CommonResult<T> = {
  code: number
  message: string
  data: T
}

// 通用分页格式
export type CommonPage<T> = {
  pageNum: number
  pageSize: number
  totalPage: number
  total: number
  list: T[]
}

// 通用分页参数
export type PageParam = {
  pageNum: number
  pageSize: number
  keyword?: string
}
```

**复用价值**：
- ✅ 统一的 API 响应格式，便于前端统一处理
- ✅ 标准化的分页结构，减少重复定义
- ✅ TypeScript 类型安全，减少运行时错误

#### B. API 设计模式（可复用设计思路）

```typescript
// mall-admin-web 的 API 设计模式
export function getProductListAPI(params: ProductQueryParam) {
  return http<CommonPage<PmsProduct>>({
    url: '/product/list',
    method: 'get',
    params: params,
  })
}

export function productUpdatePublishStatusAPI(params: { ids: string; publishStatus: number }) {
  return http({
    url: '/product/update/publishStatus',
    method: 'post',
    params: params,
  })
}
```

**复用价值**：
- ✅ 函数式 API 封装，清晰的语义化命名
- ✅ 统一的参数类型定义
- ✅ 支持泛型，类型安全

#### C. HTTP 拦截器模式（可复用逻辑）

```typescript
// 请求拦截器
http.interceptors.request.use(config => {
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

// 响应拦截器
http.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    // 统一错误处理
    ElMessage({ message: res.message, type: 'error' })
    // 登录状态检查
    if (res.code === 401) {
      // 跳转登录
    }
    return Promise.reject('error')
  }
  return response.data
})
```

**复用价值**：
- ✅ 统一的请求/响应处理
- ✅ 自动添加认证 token
- ✅ 统一的错误提示
- ✅ 登录状态自动检查

#### D. 业务逻辑模式（可复用模式）

**列表查询模式**：
```typescript
// 1. 定义查询参数
const listQuery = ref<ProductQueryParam>({
  pageNum: 1,
  pageSize: 10
})

// 2. 定义列表数据和状态
const list = ref<PmsProduct[]>([])
const total = ref(0)
const listLoading = ref(true)

// 3. 获取列表数据
const getList = async () => {
  listLoading.value = true
  try {
    const response = await getProductListAPI(listQuery.value)
    list.value = response.data.list
    total.value = response.data.total
  } finally {
    listLoading.value = false
  }
}
```

**批量操作模式**：
```typescript
// 1. 定义批量操作类型
const operates = ref([
  { label: "商品上架", value: "publishOn" },
  { label: "商品下架", value: "publishOff" },
  // ...
])

// 2. 执行批量操作
const handleBatchOperate = async () => {
  const ids = multipleSelection.value.map(item => item.id!)
  switch (operateType.value) {
    case 'publishOn':
      await updatePublishStatus(1, ids)
      break
    // ...
  }
  getList() // 刷新列表
}
```

**状态切换模式**：
```typescript
// 单个商品状态切换
const handlePublishStatusChange = async (index: number, row: PmsProduct) => {
  await updatePublishStatus(row.publishStatus!, [row.id!])
}
```

**复用价值**：
- ✅ 标准化的列表查询流程
- ✅ 统一的批量操作处理
- ✅ 状态切换的通用模式
- ✅ 错误处理和加载状态管理

#### E. UI 组件模式（可复用布局）

**页面布局模式**：
```
┌─────────────────────────────────────┐
│  筛选搜索区域（Filter Container）     │
│  - 搜索框、筛选条件、查询/重置按钮     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  操作区域（Operate Container）        │
│  - 添加按钮、批量操作                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  数据列表（Table Container）          │
│  - 表格、选择列、操作列               │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  分页区域（Pagination Container）     │
│  - 分页器、页码跳转                   │
└─────────────────────────────────────┘
```

**复用价值**：
- ✅ 统一的页面布局结构
- ✅ 清晰的功能区域划分
- ✅ 符合用户心智模型

#### F. 数据类型定义（可直接复用）

**商品类型**：
- PmsProduct：商品基本信息
- ProductQueryParam：商品查询参数
- PmsProductParam：商品创建/修改参数

**订单类型**：
- OmsOrder：订单基本信息
- OmsOrderDetail：订单详情
- OrderQueryParam：订单查询参数

**复用价值**：
- ✅ 完整的业务类型定义
- ✅ 经过实际业务验证
- ✅ 可直接用于 TypeScript 项目

### 集成目标

将电商业务模块作为**低代码物料组件**集成到当前的低代码平台中，实现：
1. **组件化封装**：将业务功能封装为可拖拽的物料组件
2. **数据源绑定**：支持 API 数据源配置和绑定
3. **配置化使用**：通过属性面板配置业务逻辑
4. **模板化复用**：提供完整的页面模板快速搭建
5. **经验复用**：复用 mall-admin-web 的成熟模式和类型定义

---

## 二、技术方案选型

### 核心挑战

| 挑战 | 说明 | 解决方案 |
|------|------|---------|
| **技术栈差异** | 参考项目是 Vue，当前平台是 React | 重构为 React 组件，保留业务逻辑 |
| **UI 框架差异** | Element UI/Plus vs Ant Design | 使用 Ant Design 组件重新实现 |
| **业务逻辑复用** | 如何保留业务逻辑 | 提取业务逻辑为独立模块，UI 层重新实现 |
| **数据源管理** | 如何对接低代码平台的数据源系统 | 设计统一的数据源适配器 |

### 技术架构

```
┌─────────────────────────────────────────────────────────┐
│                   低代码编辑器                            │
│  ┌──────────────────────────────────────────────────┐  │
│  │            电商业务物料组件库                      │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │ PMS 组件  │  │ OMS 组件  │  │ SMS 组件  │       │  │
│  │  └──────────┘  └──────────┘  └──────────┘       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │ UMS 组件  │  │ 页面模板  │  │ 业务组件  │       │  │
│  │  └──────────┘  └──────────┘  └──────────┘       │  │
│  └──────────────────────────────────────────────────┘  │
│                          ↓                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │              数据源适配层                          │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │ REST API │  │ Mock 数据 │  │ 变量绑定  │       │  │
│  │  └──────────┘  └──────────┘  └──────────┘       │  │
│  └──────────────────────────────────────────────────┘  │
│                          ↓                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │              业务逻辑层                            │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │  │
│  │  │ 商品逻辑  │  │ 订单逻辑  │  │ 营销逻辑  │       │  │
│  │  └──────────┘  └──────────┘  └──────────┘       │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 三、物料组件设计

### 3.1 组件分类体系

```
电商业务物料库
├── 基础业务组件（Basic Components）
│   ├── 商品卡片（ProductCard）
│   ├── 商品列表（ProductList）
│   ├── 订单卡片（OrderCard）
│   ├── 订单列表（OrderList）
│   ├── 优惠券卡片（CouponCard）
│   └── 用户卡片（UserCard）
│
├── 表单组件（Form Components）
│   ├── 商品表单（ProductForm）
│   ├── 订单表单（OrderForm）
│   ├── 优惠券表单（CouponForm）
│   └── 用户表单（UserForm）
│
├── 数据展示组件（Data Display Components）
│   ├── 商品表格（ProductTable）
│   ├── 订单表格（OrderTable）
│   ├── 销售图表（SalesChart）
│   └── 数据统计卡片（StatCard）
│
├── 复合业务组件（Composite Components）
│   ├── 商品选择器（ProductSelector）
│   ├── 订单详情面板（OrderDetailPanel）
│   ├── 营销活动卡片（PromotionCard）
│   └── 权限树（PermissionTree）
│
└── 页面模板（Page Templates）
    ├── 商品管理页（ProductManagementPage）
    ├── 订单管理页（OrderManagementPage）
    ├── 营销活动页（PromotionPage）
    └── 用户权限页（UserPermissionPage）
```

### 3.2 核心组件设计示例

#### 示例 1：商品列表组件（ProductList）

```typescript
{
  componentName: 'ProductList',
  title: '商品列表',
  category: '电商业务',
  group: '商品管理',
  
  // 组件属性定义
  props: [
    {
      name: 'dataSource',
      propType: 'object',
      description: '数据源配置',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              { name: 'api', description: 'API 地址', setter: 'StringSetter' },
              { name: 'method', description: '请求方法', setter: 'SelectSetter', props: { options: ['GET', 'POST'] } },
              { name: 'params', description: '请求参数', setter: 'JSONSetter' },
            ]
          }
        }
      }
    },
    {
      name: 'columns',
      propType: 'array',
      description: '列配置',
      setter: {
        componentName: 'ArraySetter',
        props: {
          item: {
            setters: [
              { componentName: 'StringSetter', props: { placeholder: '列名' } },
              { componentName: 'StringSetter', props: { placeholder: '字段名' } },
            ]
          }
        }
      }
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '是否显示搜索',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'showPagination',
      propType: 'bool',
      description: '是否显示分页',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'onRowClick',
      propType: 'func',
      description: '行点击事件',
      setter: 'FunctionSetter'
    }
  ],
  
  // 组件能力配置
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onRowClick', description: '行点击' },
        { name: 'onSearch', description: '搜索' },
        { name: 'onPageChange', description: '分页变化' },
      ]
    },
    
    // 属性面板分组
    props: [
      {
        type: 'group',
        title: '数据源配置',
        display: 'accordion',
        items: [
          { name: 'dataSource' }
        ]
      },
      {
        type: 'group',
        title: '列配置',
        display: 'accordion',
        items: [
          { name: 'columns' }
        ]
      },
      {
        type: 'group',
        title: '功能配置',
        display: 'accordion',
        items: [
          { name: 'showSearch' },
          { name: 'showPagination' },
        ]
      }
    ]
  },
  
  // 组件片段（拖拽模板）
  snippets: [
    {
      title: '基础商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSource: {
            api: '/api/products',
            method: 'GET'
          },
          columns: [
            { title: '商品名称', dataIndex: 'name' },
            { title: '价格', dataIndex: 'price' },
            { title: '库存', dataIndex: 'stock' },
          ],
          showSearch: true,
          showPagination: true
        }
      }
    },
    {
      title: '带图片的商品列表',
      schema: {
        componentName: 'ProductList',
        props: {
          dataSource: {
            api: '/api/products',
            method: 'GET'
          },
          columns: [
            { title: '图片', dataIndex: 'image', render: 'image' },
            { title: '商品名称', dataIndex: 'name' },
            { title: '价格', dataIndex: 'price' },
            { title: '库存', dataIndex: 'stock' },
          ],
          showSearch: true,
          showPagination: true
        }
      }
    }
  ]
}
```

#### 示例 2：订单详情面板（OrderDetailPanel）

```typescript
{
  componentName: 'OrderDetailPanel',
  title: '订单详情面板',
  category: '电商业务',
  group: '订单管理',
  
  props: [
    {
      name: 'orderId',
      propType: 'string',
      description: '订单 ID（可绑定变量）',
      setter: {
        componentName: 'VariableSetter',
        props: {
          supportVariable: true
        }
      }
    },
    {
      name: 'dataSource',
      propType: 'object',
      description: '数据源配置',
      setter: 'ObjectSetter'
    },
    {
      name: 'showActions',
      propType: 'bool',
      description: '是否显示操作按钮',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'actions',
      propType: 'array',
      description: '操作按钮配置',
      setter: {
        componentName: 'ArraySetter',
        props: {
          item: {
            setters: [
              { componentName: 'StringSetter', props: { placeholder: '按钮名称' } },
              { componentName: 'FunctionSetter', props: { placeholder: '点击事件' } },
            ]
          }
        }
      }
    }
  ],
  
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onConfirm', description: '确认订单' },
        { name: 'onCancel', description: '取消订单' },
        { name: 'onShip', description: '发货' },
      ]
    }
  },
  
  snippets: [
    {
      title: '订单详情面板',
      schema: {
        componentName: 'OrderDetailPanel',
        props: {
          orderId: '',
          dataSource: {
            api: '/api/orders/:id',
            method: 'GET'
          },
          showActions: true,
          actions: [
            { text: '确认订单', action: 'onConfirm' },
            { text: '发货', action: 'onShip' },
            { text: '取消订单', action: 'onCancel' },
          ]
        }
      }
    }
  ]
}
```

---

## 四、数据源适配层设计

### 4.1 数据源适配器架构

```typescript
// 数据源适配器接口
interface DataSourceAdapter {
  // 获取数据
  fetch(params?: any): Promise<any>;
  
  // 提交数据
  submit(data: any): Promise<any>;
  
  // 删除数据
  delete(id: string): Promise<any>;
  
  // 更新数据
  update(id: string, data: any): Promise<any>;
}

// REST API 适配器
class RestApiAdapter implements DataSourceAdapter {
  constructor(private config: {
    api: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    transform?: (data: any) => any;
  }) {}
  
  async fetch(params?: any) {
    const response = await fetch(this.config.api, {
      method: this.config.method || 'GET',
      headers: this.config.headers,
      body: JSON.stringify(params)
    });
    
    let data = await response.json();
    
    if (this.config.transform) {
      data = this.config.transform(data);
    }
    
    return data;
  }
  
  // ... 其他方法实现
}

// Mock 数据适配器
class MockDataAdapter implements DataSourceAdapter {
  constructor(private mockData: any) {}
  
  async fetch(params?: any) {
    return this.mockData;
  }
  
  // ... 其他方法实现
}

// 变量绑定适配器
class VariableAdapter implements DataSourceAdapter {
  constructor(private variableGetter: () => any) {}
  
  async fetch(params?: any) {
    return this.variableGetter();
  }
  
  // ... 其他方法实现
}
```

### 4.2 数据源配置面板

```typescript
{
  componentName: 'DataSourceSetter',
  title: '数据源配置',
  
  props: [
    {
      name: 'type',
      propType: 'string',
      description: '数据源类型',
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'REST API', value: 'rest' },
            { label: 'Mock 数据', value: 'mock' },
            { label: '变量绑定', value: 'variable' },
          ]
        }
      }
    },
    {
      name: 'config',
      propType: 'object',
      description: '数据源配置',
      setter: {
        componentName: 'DynamicSetter',
        props: {
          // 根据 type 动态显示不同的配置项
          getSetter: (type: string) => {
            switch (type) {
              case 'rest':
                return {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: [
                        { name: 'api', setter: 'StringSetter' },
                        { name: 'method', setter: 'SelectSetter' },
                        { name: 'headers', setter: 'JSONSetter' },
                        { name: 'transform', setter: 'FunctionSetter' },
                      ]
                    }
                  }
                };
              case 'mock':
                return {
                  componentName: 'JSONSetter'
                };
              case 'variable':
                return {
                  componentName: 'VariableSetter'
                };
            }
          }
        }
      }
    }
  ]
}
```

---

## 五、实施计划（原型验证优先策略）

### 🎯 核心策略：先验证，再扩展

采用**原型验证优先**的策略，先选择一个核心业务场景（商品管理）进行完整的技术验证，确保技术方案可行后再扩展到其他业务模块。

### 阶段零：原型验证（2-3 周）⭐ P0 优先级

#### 目标
通过实现一个完整的商品管理场景，验证整个技术方案的可行性，包括：
- 数据源适配层是否满足需求
- 业务逻辑层是否可以正常工作
- 物料组件是否可以正常注册和使用
- 页面模板是否可以快速生成

#### 任务 0.1：搭建原型项目框架
- **Priority**: P0
- **Depends On**: None
- **Description**:
  - 创建 `plugin-mall-components` 插件目录
  - 搭建基础的物料注册框架
  - 配置构建脚本
  - 创建基础的类型定义文件（复用 mall-admin-web 的类型）
- **Success Criteria**:
  - 插件框架可以正常加载
  - 类型定义可以正常使用
- **Test Requirements**:
  - `programmatic` TR-0.1.1: `npm run build` 成功
  - `human-judgement` TR-0.1.2: 编辑器可以加载插件

#### 任务 0.2：实现数据源适配层（原型版）
- **Priority**: P0
- **Depends On**: 0.1
- **Description**:
  - 实现 DataSourceAdapter 接口
  - 实现 RestApiAdapter（支持 GET/POST）
  - 实现 MockDataAdapter（用于开发测试）
  - 创建数据源配置 Setter（简化版）
- **Success Criteria**:
  - 数据源适配器可以正常工作
  - 可以配置 API 地址和请求方法
  - Mock 数据可以正常加载
- **Test Requirements**:
  - `programmatic` TR-0.2.1: Mock 数据可以正常加载
  - `programmatic` TR-0.2.2: API 请求可以正常发送

#### 任务 0.3：实现商品列表组件（原型版）
- **Priority**: P0
- **Depends On**: 0.2
- **Description**:
  - 开发 ProductList 组件（React 版本）
  - 支持基础的列表展示
  - 支持分页
  - 支持搜索
  - 复用 mall-admin-web 的业务逻辑模式
- **Success Criteria**:
  - 组件可以正常渲染
  - 数据可以正常加载和展示
  - 分页功能正常
  - 搜索功能正常
- **Test Requirements**:
  - `programmatic` TR-0.3.1: 组件可以正常渲染
  - `programmatic` TR-0.3.2: 数据可以正常加载
  - `human-judgement` TR-0.3.3: UI 符合设计规范

#### 任务 0.4：实现商品表单组件（原型版）
- **Priority**: P0
- **Depends On**: 0.2
- **Description**:
  - 开发 ProductForm 组件（React 版本）
  - 支持基础的商品信息录入
  - 支持表单验证
  - 支持提交和取消
- **Success Criteria**:
  - 表单可以正常渲染
  - 表单验证功能正常
  - 提交功能正常
- **Test Requirements**:
  - `programmatic` TR-0.4.1: 表单验证规则生效
  - `programmatic` TR-0.4.2: 表单提交成功

#### 任务 0.5：创建商品管理页面模板（原型版）
- **Priority**: P0
- **Depends On**: 0.3, 0.4
- **Description**:
  - 创建商品列表页模板
  - 创建商品编辑页模板
  - 验证页面模板的可用性
- **Success Criteria**:
  - 页面模板可以快速生成页面
  - 生成的页面功能完整
- **Test Requirements**:
  - `human-judgement` TR-0.5.1: 页面模板可以快速生成页面
  - `programmatic` TR-0.5.2: 生成的页面功能正常

#### 任务 0.6：原型验证总结
- **Priority**: P0
- **Depends On**: 0.5
- **Description**:
  - 总结原型验证的经验和问题
  - 评估技术方案的可行性
  - 调整后续实施计划
  - 编写原型验证报告
- **Success Criteria**:
  - 技术方案可行性得到验证
  - 后续计划得到优化
- **Test Requirements**:
  - `human-judgement` TR-0.6.1: 原型验证报告完整清晰

### 阶段一：基础设施完善（1-2 周）

#### 任务 1.1：完善数据源适配层
- **Priority**: P0
- **Depends On**: 0.6
- **Description**:
  - 完善 RestApiAdapter（支持 PUT/DELETE）
  - 实现 VariableAdapter（支持变量绑定）
  - 完善数据源配置 Setter
  - 添加数据转换功能
- **Success Criteria**:
  - 数据源适配层功能完整
  - 配置面板功能完善

#### 任务 1.2：完善业务逻辑层
- **Priority**: P0
- **Depends On**: 1.1
- **Description**:
  - 提取更多 mall-admin-web 的业务逻辑
  - 重构为框架无关的业务逻辑模块
  - 创建完整的业务逻辑 API
- **Success Criteria**:
  - 业务逻辑模块功能完整
  - API 设计合理

#### 任务 1.3：完善组件开发规范
- **Priority**: P1
- **Depends On**: 1.2
- **Description**:
  - 制定组件开发规范
  - 创建组件开发模板
  - 编写组件开发文档
- **Success Criteria**:
  - 开发规范清晰完整
  - 开发模板可用

### 阶段二：基础业务组件开发（2-3 周）

#### 任务 2.1：完善商品管理组件
- **Priority**: P0
- **Depends On**: 1.3
- **Description**:
  - 完善 ProductList 组件（添加批量操作、状态切换等）
  - 完善 ProductForm 组件（添加更多字段、验证规则等）
  - 开发 ProductCard 组件
  - 开发 ProductTable 组件
- **Success Criteria**:
  - 组件功能完整
  - 符合 mall-admin-web 的业务逻辑

#### 任务 2.2：订单管理组件
- **Priority**: P0
- **Depends On**: 1.3
- **Description**:
  - 开发 OrderList 组件
  - 开发 OrderCard 组件
  - 开发 OrderDetailPanel 组件
  - 开发 OrderForm 组件
- **Success Criteria**:
  - 组件可以正常使用
  - 数据绑定正常
  - 事件触发正常

#### 任务 2.3：营销管理组件
- **Priority**: P1
- **Depends On**: 1.3
- **Description**:
  - 开发 CouponCard 组件
  - 开发 PromotionCard 组件
  - 开发 FlashSaleCard 组件
- **Success Criteria**:
  - 组件可以正常使用
  - 数据绑定正常

#### 任务 2.4：权限管理组件
- **Priority**: P1
- **Depends On**: 1.3
- **Description**:
  - 开发 UserCard 组件
  - 开发 RoleCard 组件
  - 开发 PermissionTree 组件
- **Success Criteria**:
  - 组件可以正常使用
  - 权限逻辑正常

### 阶段三：复合业务组件开发（1-2 周）

#### 任务 3.1：商品选择器组件
- **Priority**: P1
- **Depends On**: 2.1
- **Description**:
  - 开发 ProductSelector 组件
  - 支持搜索、筛选、多选
  - 支持回调事件
- **Success Criteria**:
  - 选择器功能完整
  - 交互流畅

#### 任务 3.2：数据统计组件
- **Priority**: P1
- **Depends On**: 2.1, 2.2
- **Description**:
  - 开发 StatCard 组件
  - 开发 SalesChart 组件
  - 集成 ECharts
- **Success Criteria**:
  - 图表显示正常
  - 数据更新正常

### 阶段四：页面模板开发（1-2 周）

#### 任务 4.1：商品管理页面模板
- **Priority**: P1
- **Depends On**: 2.1, 3.1
- **Description**:
  - 完善商品列表页模板
  - 完善商品详情页模板
  - 完善商品编辑页模板
- **Success Criteria**:
  - 模板可以快速生成页面
  - 页面功能完整

#### 任务 4.2：订单管理页面模板
- **Priority**: P1
- **Depends On**: 2.2
- **Description**:
  - 创建订单列表页模板
  - 创建订单详情页模板
- **Success Criteria**:
  - 模板可以快速生成页面
  - 页面功能完整

#### 任务 4.3：营销管理页面模板
- **Priority**: P2
- **Depends On**: 2.3
- **Description**:
  - 创建优惠券管理页模板
  - 创建秒杀活动页模板
- **Success Criteria**:
  - 模板可以快速生成页面

#### 任务 4.4：权限管理页面模板
- **Priority**: P2
- **Depends On**: 2.4
- **Description**:
  - 创建用户管理页模板
  - 创建角色管理页模板
- **Success Criteria**:
  - 模板可以快速生成页面

### 阶段五：测试与优化（1 周）

#### 任务 5.1：组件测试
- **Priority**: P0
- **Depends On**: 所有组件
- **Description**:
  - 编写单元测试
  - 编写集成测试
  - 性能测试
- **Success Criteria**:
  - 测试覆盖率 > 80%
  - 性能达标

#### 任务 5.2：文档编写
- **Priority**: P1
- **Depends On**: 5.1
- **Description**:
  - 编写组件使用文档
  - 编写 API 文档
  - 编写最佳实践文档
- **Success Criteria**:
  - 文档完整清晰

---

## 实施时间线（总计 8-12 周）

| 阶段 | 时间 | 核心任务 | 优先级 |
|------|------|---------|--------|
| **阶段零** | **第 1-3 周** | **原型验证（商品管理场景）** | **P0** |
| 阶段一 | 第 4-5 周 | 基础设施完善 | P0 |
| 阶段二 | 第 6-8 周 | 基础业务组件开发 | P0-P1 |
| 阶段三 | 第 9-10 周 | 复合业务组件开发 | P1 |
| 阶段四 | 第 11-12 周 | 页面模板开发 | P1-P2 |
| 阶段五 | 第 13 周 | 测试与优化 | P0-P1 |

---

## 六、技术实现细节

### 6.1 组件开发规范

#### 目录结构

```
src/plugins/plugin-mall-components/
├── components/              # 组件实现
│   ├── ProductList/
│   │   ├── index.tsx        # 组件入口
│   │   ├── ProductList.tsx  # 组件实现
│   │   ├── types.ts         # 类型定义
│   │   └── styles.scss      # 样式文件
│   ├── OrderDetail/
│   └── ...
├── adapters/                # 数据源适配器
│   ├── DataSourceAdapter.ts
│   ├── RestApiAdapter.ts
│   ├── MockDataAdapter.ts
│   └── VariableAdapter.ts
├── business/                # 业务逻辑层
│   ├── product/
│   │   ├── productService.ts
│   │   └── productTypes.ts
│   ├── order/
│   └── ...
├── setters/                 # 自定义 Setter
│   ├── DataSourceSetter.tsx
│   └── ...
├── meta/                    # 物料元数据
│   ├── productListMeta.ts
│   ├── orderDetailMeta.ts
│   └── ...
├── index.tsx                # 插件入口
└── README.md
```

#### 组件实现示例

```tsx
// components/ProductList/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Pagination } from 'antd';
import { DataSourceAdapter } from '../../adapters/DataSourceAdapter';
import type { ProductListProps, Product } from './types';
import './styles.scss';

const ProductList: React.FC<ProductListProps> = ({
  dataSource,
  columns = [],
  showSearch = true,
  showPagination = true,
  onRowClick,
  onSearch,
  onPageChange,
  style,
  className,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  
  const adapter = new DataSourceAdapter(dataSource);
  
  useEffect(() => {
    fetchData();
  }, [currentPage, searchText]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await adapter.fetch({
        page: currentPage,
        search: searchText,
      });
      setData(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = (value: string) => {
    setSearchText(value);
    onSearch?.(value);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };
  
  const defaultColumns = [
    { title: '商品名称', dataIndex: 'name', key: 'name' },
    { title: '价格', dataIndex: 'price', key: 'price' },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
  ];
  
  return (
    <div className={`product-list ${className}`} style={style}>
      {showSearch && (
        <div className="product-list-search">
          <Input.Search
            placeholder="搜索商品"
            onSearch={handleSearch}
            style={{ width: 300, marginBottom: 16 }}
          />
        </div>
      )}
      
      <Table
        loading={loading}
        dataSource={data}
        columns={columns.length > 0 ? columns : defaultColumns}
        onRow={(record) => ({
          onClick: () => onRowClick?.(record),
        })}
        pagination={false}
      />
      
      {showPagination && (
        <div className="product-list-pagination">
          <Pagination
            current={currentPage}
            total={total}
            onChange={handlePageChange}
            showSizeChanger
            showTotal={(total) => `共 ${total} 条`}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
```

### 6.2 物料注册

```tsx
// index.tsx
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import ProductListMeta from './meta/productListMeta';
import OrderDetailMeta from './meta/orderDetailMeta';
// ... 导入其他物料

const MallComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'MallComponentsPlugin',
    async init() {
      const { material } = ctx;
      
      // 注册物料
      material.loadIncrementalAssets({
        version: '1.0.0',
        components: [
          ProductListMeta,
          OrderDetailMeta,
          // ... 其他物料
        ],
      });
    },
  };
};

MallComponentsPlugin.pluginName = 'MallComponentsPlugin';

export default MallComponentsPlugin;
```

---

## 七、Mock 数据与 API 对接

### 7.1 Mock 数据设计

```json
// public/mock/products.json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "iPhone 15 Pro",
      "price": 8999,
      "stock": 100,
      "category": "手机",
      "brand": "Apple",
      "image": "https://example.com/iphone15.jpg",
      "status": "active"
    },
    // ... 更多商品
  ],
  "total": 100
}

// public/mock/orders.json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "ORD001",
      "userId": "user123",
      "totalAmount": 8999,
      "status": "pending",
      "createTime": "2024-01-01 10:00:00",
      "items": [
        {
          "productId": "1",
          "productName": "iPhone 15 Pro",
          "quantity": 1,
          "price": 8999
        }
      ]
    },
    // ... 更多订单
  ],
  "total": 50
}
```

### 7.2 API 接口规范

```typescript
// 业务逻辑层 API 规范
interface ProductService {
  // 获取商品列表
  getProducts(params: {
    page?: number;
    pageSize?: number;
    search?: string;
    category?: string;
    brand?: string;
  }): Promise<{ data: Product[]; total: number }>;
  
  // 获取商品详情
  getProduct(id: string): Promise<Product>;
  
  // 创建商品
  createProduct(product: Partial<Product>): Promise<Product>;
  
  // 更新商品
  updateProduct(id: string, product: Partial<Product>): Promise<Product>;
  
  // 删除商品
  deleteProduct(id: string): Promise<void>;
}

interface OrderService {
  // 获取订单列表
  getOrders(params: {
    page?: number;
    pageSize?: number;
    status?: string;
    userId?: string;
  }): Promise<{ data: Order[]; total: number }>;
  
  // 获取订单详情
  getOrder(id: string): Promise<Order>;
  
  // 更新订单状态
  updateOrderStatus(id: string, status: string): Promise<Order>;
  
  // 发货
  shipOrder(id: string, logistics: LogisticsInfo): Promise<void>;
}
```

---

## 八、风险与应对

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| Vue 到 React 重构工作量大 | 高 | 优先实现核心组件，逐步完善 |
| 业务逻辑复杂度高 | 中 | 提取通用逻辑，模块化设计 |
| 数据源适配复杂 | 中 | 设计灵活的适配器接口 |
| 性能问题 | 中 | 虚拟滚动、懒加载、缓存优化 |
| 维护成本高 | 低 | 完善文档、自动化测试 |

---

## 九、原型验证的重要性

### 为什么采用原型验证优先策略？

#### 1. 降低技术风险
- **提前发现问题**：在全面开发前发现技术方案的潜在问题
- **验证可行性**：确保技术选型和架构设计是可行的
- **快速迭代**：原型阶段可以快速调整和优化

#### 2. 提高开发效率
- **明确目标**：通过原型明确最终产品的形态和功能
- **复用经验**：原型开发的经验可以直接应用到后续开发
- **减少返工**：避免在错误的方向上投入大量时间

#### 3. 验证核心价值
- **用户体验**：验证组件的使用体验是否符合预期
- **开发效率**：验证低代码组件是否真的能提高开发效率
- **业务价值**：验证业务场景的覆盖程度

### 原型验证的核心目标

#### 技术验证
- ✅ 数据源适配层是否满足需求
- ✅ 业务逻辑层是否可以正常工作
- ✅ 物料组件是否可以正常注册和使用
- ✅ 页面模板是否可以快速生成

#### 业务验证
- ✅ 商品管理场景是否完整覆盖
- ✅ 组件功能是否满足业务需求
- ✅ 交互流程是否符合用户习惯

#### 经验积累
- ✅ 总结技术实现的最佳实践
- ✅ 识别可复用的模式和组件
- ✅ 优化后续开发计划

### 原型验证的成功标准

#### 必须达成（P0）
1. **技术可行性**：所有核心技术点都得到验证
2. **功能完整性**：商品管理场景的核心功能都能正常工作
3. **用户体验**：组件使用流畅，无明显性能问题

#### 期望达成（P1）
1. **代码质量**：代码结构清晰，易于维护
2. **文档完整**：有清晰的使用文档和开发文档
3. **可扩展性**：架构设计支持后续功能扩展

---

## 十、预期成果

### 10.1 原型验证阶段成果

#### 组件库
- **基础组件**：ProductList、ProductForm（原型版）
- **功能完整性**：支持列表展示、分页、搜索、表单提交
- **代码质量**：结构清晰，可复用

#### 技术资产
- **数据源适配层**：RestApiAdapter、MockDataAdapter（原型版）
- **类型定义**：复用 mall-admin-web 的类型系统
- **开发规范**：组件开发流程和最佳实践

#### 文档
- **原型验证报告**：技术方案可行性评估
- **开发文档**：组件开发指南
- **使用文档**：组件使用说明

### 10.2 最终成果（完整版）

#### 组件库
- **基础业务组件**：15+ 个
- **复合业务组件**：5+ 个
- **页面模板**：10+ 个

#### 功能特性
- ✅ 拖拽式组件使用
- ✅ 数据源灵活配置（REST API、Mock、变量绑定）
- ✅ 事件与逻辑绑定
- ✅ 页面模板快速生成
- ✅ 完整的业务场景覆盖（商品、订单、营销、权限）

#### 开发效率提升
- **页面开发时间**：从 2-3 天缩短到 2-3 小时
- **代码复用率**：> 80%
- **维护成本**：降低 50%

---

## 十一、后续规划

### 11.1 短期（原型验证后 1-2 个月）

- 根据原型验证结果调整技术方案
- 完善基础业务组件
- 实现核心页面模板
- 对接真实 API

### 11.2 中期（3-6 个月）

- 扩展更多业务组件
- 集成 AI 辅助配置
- 优化性能和体验
- 建立组件测试体系

### 11.3 长期（6-12 个月）

- 构建完整的电商物料生态
- 支持自定义组件开发
- 开放物料市场
- 社区建设和推广

---

## 十二、风险与应对

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| 原型验证发现技术方案不可行 | 高 | 及时调整方案，降低损失 |
| Vue 到 React 重构工作量大 | 中 | 优先实现核心组件，逐步完善 |
| 业务逻辑复杂度高 | 中 | 提取通用逻辑，模块化设计 |
| 数据源适配复杂 | 中 | 设计灵活的适配器接口 |
| 性能问题 | 中 | 虚拟滚动、懒加载、缓存优化 |
| 维护成本高 | 低 | 完善文档、自动化测试 |

---

## 附录：参考资料

### A. LowCodeEngine 官方文档

- [LowCodeEngine 官方文档](https://lowcode-engine.cn/)
- [物料开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/material)
- [插件开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/plugin)

### B. 参考项目

- [mall-admin-web](https://github.com/macrozheng/mall-admin-web)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### C. 技术栈文档

- [Ant Design](https://ant.design/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### D. 相关规划文档

- [低代码平台构建计划](./lowcode_platform_plan.md)
- [Ant Design 物料库切换计划](./antd_materials_plan.md)
