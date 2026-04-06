# 贡献指南 - Mall Components

感谢你对 Mall Components 的贡献！本文档帮助你快速了解开发流程和规范。

## 开发环境准备

### 前置条件

- Node.js >= 16
- npm >= 8

### 环境搭建

```bash
# 克隆项目
git clone <repo-url>
cd lowcode/packages/mall-components

# 安装依赖
npm install

# 验证环境
npm run build   # 应该成功构建
```

### 推荐的 IDE 配置

- **VS Code** + 以下扩展：
  - ESLint
  - Prettier
  - TypeScript Importer

## 代码规范

### TypeScript

- 使用 TypeScript 编写组件和配置
- 导出类型定义到 `src/types/` 目录
- 避免使用 `any`，优先使用具体类型

### React 组件规范

```typescript
// 组件文件命名：PascalCase.tsx
interface ComponentProps {
  // Props 使用 interface 定义
}

export const MyComponent: React.FC<ComponentProps> = ({ prop1 }) => {
  return (
    <div className="my-component">
      {/* 内容 */}
    </div>
  );
};
```

### 样式规范

- 使用 SCSS 模块化样式
- BEM 命名约定（可选）
- 避免内联样式

```scss
// src/components/MyComponent/index.module.scss
.my-component {
  &__header {
    padding: 16px;
  }
  
  &--active {
    border-color: #1890ff;
  }
}
```

### Meta 配置规范

每个组件必须提供对应的 meta 配置：

```typescript
// src/meta/myComponentMeta.ts
export default {
  componentName: 'MyComponent',
  title: '我的组件',
  docUrl: '',
  screenshot: '',

  props: [
    { name: 'title', title: '标题', setter: 'StringSetter', defaultValue: '' },
    // ...更多属性
  ],

  configure: {
    supports: {
      style: true,
      events: [{ name: 'onClick', description: '点击事件' }],
    },
    props: [/* 属性面板分组 */],
  },

  icon: Icons.myIcon,  // 从 icons.ts 引用
  category: '业务分类',
  group: '分组名称',
};
```

## 提交规范

### Commit Message 格式

```
<type>(<scope>): <subject>

<body>
```

#### Type 列表

| Type | 说明 |
|------|------|
| feat | 新功能 |
| fix | 问题修复 |
| docs | 文档更新 |
| style | 代码格式（不影响运行） |
| refactor | 重构（非新功能、非修复） |
| perf | 性能优化 |
| test | 测试相关 |
| chore | 构建/工具变动 |

#### 示例

```
feat(ProductList): 支持分页配置

- 新增 pageSize 属性
- 新增 showPagination 属性
- 默认每页显示 10 条
```

## 开发工作流

### 1. 创建分支

```bash
git checkout -b feat/your-feature-name
git checkout -b fix/bug-description
```

### 2. 开发与测试

```bash
# 开发模式（自动构建）
npm run dev

# 手动测试
# 在浏览器中打开低码编辑器，验证组件功能

# 运行检查
npm run lint
npm run typecheck
```

### 3. 构建验证

```bash
npm run build
# 确保 build/ 目录生成正确
```

### 4. 提交 PR

- 填写 PR 描述模板
- 关联相关 Issue
- 等待 Code Review

## 组件开发 Checklist

开发新组件时请确保：

- [ ] 组件实现在 `src/components/ComponentName/`
- [ ] Meta 配置在 `src/meta/componentNameMeta.ts`
- [ ] 类型定义在 `src/types/` 相关模块
- [ ] 组件在 `src/index.ts` 导出
- [ ] Meta 在 `src/meta.ts` 导出
- [ ] 图标在 `src/meta/icons.ts` 定义（如需要）
- [ ] 通过 `npm run lint` 检查
- [ ] 通过 `npm run typecheck` 检查
- [ ] 通过 `npm run build` 构建
- [ ] 更新 README.md 组件列表

## 常见问题

### Q: 如何添加外部依赖？

A: 在 `package.json` 的 `peerDependencies` 中添加，并在 `scripts/build.js` 的 `globalMap` 中配置全局变量映射。

### Q: 如何调试 UMD 构建？

A: 使用 `npm run dev` 启动监听模式，然后在浏览器控制台查看 `window.MallComponents`。

### Q: Meta 配置中的 icon 如何设置？

A: 使用 `src/meta/icons.ts` 中预定义的图标，或直接传入 React 元素。

## 联系方式

如有问题，请提交 Issue 或联系维护者。