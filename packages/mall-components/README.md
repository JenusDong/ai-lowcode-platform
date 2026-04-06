# Mall Components

电商低代码物料库 - 基于 Ant Design 的商城组件集合

## 概述

Mall Components 是为低代码平台设计的电商业务组件库，提供商品管理、订单管理、营销活动、权限管理等场景的预置组件。

## 组件列表

| 组件 | 说明 | 分类 |
|------|------|------|
| ProductList | 商品列表 | 商品管理 |
| ProductForm | 商品表单 | 商品管理 |
| OrderList | 订单列表 | 订单管理 |
| OrderForm | 订单表单 | 订单管理 |
| CouponCard | 优惠券卡片 | 营销管理 |
| PromotionCard | 活动卡片 | 营销管理 |
| UserCard | 用户卡片 | 权限管理 |
| RoleCard | 角色卡片 | 权限管理 |

## 目录结构

```
mall-components/
├── src/
│   ├── components/      # 组件实现
│   │   ├── ProductList/
│   │   ├── ProductForm/
│   │   └── ...
│   ├── meta/            # 组件元数据（属性面板配置）
│   │   ├── productListMeta.ts
│   │   └── icons.ts
│   ├── setters/         # 自定义设置器
│   ├── types/           # 类型定义
│   ├── adapters/        # 数据适配器
│   ├── shims/           # 运行时兼容
│   ├── index.ts         # 组件入口
│   └── meta.ts          # 元数据入口
├── scripts/
│   └── build.js         # 构建脚本
├── package.json
├── tsconfig.json
└── .prettierrc.json
```

## 快速开始

### 安装依赖

```bash
cd packages/mall-components
npm install
```

### 开发模式

```bash
npm run dev    # 监听模式，自动重新构建
```

### 构建

```bash
npm run build  # 构建到 build/ 目录
```

### 代码检查

```bash
npm run lint       # ESLint 检查
npm run lint:fix   # 自动修复
npm run format     # Prettier 格式化
npm run typecheck  # TypeScript 类型检查
```

## 技术栈

- **React** 16.14+ / 17.x / 18.x
- **Ant Design** 4.21+
- **@ant-design/icons** 4.7+
- **TypeScript** 5.0+
- **ESBuild** - 打包工具
- **Sass** - 样式预处理

## 集成方式

### UMD 方式（推荐）

组件库通过 UMD 格式暴露到全局 `window.MallComponents`：

```html
<script src="/mall-components.umd.js"></script>
<script>
  const { ProductList, OrderList } = window.MallComponents;
</script>
```

### Meta 集成

元数据通过 `window.MallComponentsMeta` 暴露：

```javascript
const { components } = window.MallComponentsMeta;
// 注册到低码引擎
material.loadIncrementalAssets({ components });
```

## 开发新组件

1. 在 `src/components/` 创建组件目录
2. 实现 React 组件（TSX + SCSS）
3. 在 `src/meta/` 创建对应的 meta 配置
4. 在 `src/index.ts` 导出组件
5. 在 `src/meta.ts` 导出 meta
6. 运行 `npm run build` 构建

## 版本规范

遵循 [语义化版本](https://semver.org/lang/zh-CN/)：

- **MAJOR**: 不兼容的 API 变更
- **MINOR**: 向下兼容的功能新增
- **PATCH**: 向下兼容的问题修复

## License

MIT