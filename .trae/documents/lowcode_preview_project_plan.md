# 低代码导出代码独立运行项目计划

## 一、背景分析

### 当前项目结构
- 低代码编辑器已安装 `@alilc/lowcode-plugin-code-generator` 出码插件
- 已有 8 个电商业务组件（商品管理、订单管理、营销管理、权限管理）
- Schema 保存在 `src/services/schema.json`

### 导出代码格式
LowCodeEngine 支持两种导出方式：
1. **Schema 导出**：JSON 格式的页面结构描述
2. **代码生成（出码）**：生成可运行的 React 源代码

## 二、目标

建立一个独立的 React 项目，使低代码编辑器导出的页面代码能够：
1. 直接作为该项目的一部分运行
2. 保持组件的完整功能
3. 支持后续开发和维护

## 三、实现方案

### 方案 A：Schema 运行时渲染（推荐）

**原理**：在运行时解析 Schema 并渲染组件

**优点**：
- 无需代码生成步骤
- Schema 更新即可生效
- 保持低代码的灵活性

**缺点**：
- 依赖低代码运行时
- 性能略低于静态代码

**实现步骤**：
1. 创建 React 项目
2. 安装低代码运行时依赖
3. 注册自定义组件
4. 加载 Schema 并渲染

### 方案 B：代码生成（出码）

**原理**：使用 `@alilc/lowcode-code-generator` 生成源代码

**优点**：
- 生成纯 React 代码，可读性强
- 无需低代码运行时依赖
- 性能最优

**缺点**：
- Schema 更新需重新生成
- 生成的代码可能需要调整

**实现步骤**：
1. 使用出码插件生成代码
2. 创建 React 项目
3. 复制生成的代码到项目
4. 安装组件依赖
5. 调整并运行

## 四、详细实施步骤（方案 A - 推荐）

### 步骤 1：创建独立 React 项目

```bash
# 在 lowcode 目录下创建
cd /Users/ylgao/jenusWork/AI-learn/lowcode
npx create-react-app lowcode-preview --template typescript
# 或使用 Vite
npm create vite@latest lowcode-preview -- --template react-ts
```

### 步骤 2：安装依赖

```bash
cd lowcode-preview
npm install @alilc/lowcode-react-simulator-renderer @alilc/lowcode-react-renderer
npm install antd @ant-design/icons moment
npm install axios
```

### 步骤 3：复制组件库

将自定义组件复制到项目中：
- 复制 `src/plugins/plugin-mall-components/components/*` 到 `lowcode-preview/src/components/`
- 复制 `src/plugins/plugin-mall-components/types/*` 到 `lowcode-preview/src/types/`

### 步骤 4：创建组件注册文件

创建 `src/registerComponents.ts`：
```typescript
import { material } from '@alilc/lowcode-engine';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
// ... 其他组件

const registerCustomComponents = () => {
  // 注册组件元数据
  material.loadIncrementalAssets({
    version: '1.0.0',
    components: [
      // 组件 meta 配置
    ],
  });
};
```

### 步骤 5：创建 Schema 渲染器

创建 `src/App.tsx`：
```typescript
import React, { useEffect, useState } from 'react';
import { ReactRenderer } from '@alilc/lowcode-react-renderer';
import { buildComponents } from '@alilc/lowcode-utils';
import schema from './schema.json';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // 加载组件
    const components = buildComponents(/* ... */);
    setData({ components });
  }, []);

  return (
    <ReactRenderer
      schema={schema}
      components={data.components}
    />
  );
};
```

### 步骤 6：导出 Schema

在低代码编辑器中：
1. 点击"保存"按钮保存 Schema
2. 从 localStorage 导出 Schema
3. 复制到 `lowcode-preview/src/schema.json`

## 五、详细实施步骤（方案 B）

### 步骤 1：使用出码功能

在低代码编辑器中：
1. 点击"出码"按钮
2. 选择目标框架（React）
3. 下载生成的代码

### 步骤 2：创建项目并集成

1. 创建 React 项目
2. 复制生成的代码
3. 安装依赖
4. 解决组件引用问题

## 六、文件结构规划

```
lowcode-preview/
├── public/
│   └── index.html
├── src/
│   ├── components/          # 自定义组件
│   │   ├── ProductList/
│   │   ├── ProductForm/
│   │   ├── OrderList/
│   │   ├── OrderForm/
│   │   ├── CouponCard/
│   │   ├── PromotionCard/
│   │   ├── UserCard/
│   │   └── RoleCard/
│   ├── types/               # 类型定义
│   │   ├── product.ts
│   │   ├── order.ts
│   │   ├── marketing.ts
│   │   └── permission.ts
│   ├── adapters/            # 数据适配器
│   ├── schema.json          # 页面 Schema
│   ├── registerComponents.ts # 组件注册
│   ├── App.tsx              # 主应用
│   └── index.tsx            # 入口
├── package.json
└── tsconfig.json
```

## 七、依赖清单

### 核心依赖
- `@alilc/lowcode-react-renderer` - Schema 渲染器
- `@alilc/lowcode-react-simulator-renderer` - 模拟器渲染器
- `react` & `react-dom` - React 框架
- `antd` - UI 组件库
- `@ant-design/icons` - 图标库
- `moment` - 日期处理

### 可选依赖
- `axios` - HTTP 请求
- `@alilc/lowcode-utils` - 工具函数

## 八、验证清单

- [ ] 项目能正常启动
- [ ] Schema 能正确加载
- [ ] 自定义组件能正确渲染
- [ ] 组件交互功能正常
- [ ] 数据源能正常工作
- [ ] 样式显示正确

## 九、后续优化

1. **自动化脚本**：创建脚本自动同步组件和 Schema
2. **热更新**：支持 Schema 热更新
3. **路由集成**：支持多页面路由
4. **状态管理**：集成 Redux/Zustand
5. **API 对接**：对接真实后端 API

## 十、风险与解决方案

| 风险 | 解决方案 |
|------|----------|
| 组件依赖缺失 | 确保所有组件依赖都已安装 |
| Schema 格式变化 | 使用版本控制管理 Schema |
| 样式冲突 | 使用 CSS Modules 或 scoped CSS |
| 性能问题 | 使用懒加载和代码分割 |

## 十一、时间估算

| 任务 | 预计时间 |
|------|----------|
| 创建项目结构 | 15 分钟 |
| 安装配置依赖 | 10 分钟 |
| 复制组件代码 | 10 分钟 |
| 创建渲染器 | 20 分钟 |
| 测试验证 | 15 分钟 |
| **总计** | **约 1-2 小时** |

## 十二、推荐方案

**推荐使用方案 A（Schema 运行时渲染）**，原因：
1. 保持低代码的灵活性
2. Schema 更新无需重新生成代码
3. 实现更简单，维护成本更低
4. 与低代码编辑器保持同步
