# 贡献指南 - Plugin ECharts

感谢你对 Plugin Echarts 的贡献！本文档帮助你快速了解开发流程和规范。

## 开发环境准备

### 前置条件

- Node.js >= 16
- npm >= 8

### 环境搭建

```bash
# 克隆项目
git clone <repo-url>
cd lowcode/packages/plugin-echarts

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

### ECharts 组件规范

```typescript
// src/components/MyChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface MyChartProps {
  option?: echarts.EChartsOption;
  style?: React.CSSProperties;
}

export const MyChart: React.FC<MyChartProps> = ({ option, style }) => {
  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: '400px', width: '100%', ...style }}
    />
  );
};
```

### Meta 配置规范

每个图表必须提供对应的 meta 配置：

```typescript
// 在 src/plugin.ts 的 components 数组中添加
{
  componentName: 'MyChart',
  title: '我的图表',
  docUrl: '',
  screenshot: '',

  props: [
    { name: 'option', title: '配置项', propType: 'object', defaultValue: {} },
    // ...更多属性
  ],

  configure: {
    supports: {
      style: true,
      events: [{ name: 'onClick', description: '点击事件' }],
    },
    props: [/* 属性面板分组 */],
  },

  icon: Icons.myIcon,
  category: '图表分类',
  group: '分组名称',
}
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
feat(PieChart): 支持环形图配置

- 新增 innerRadius 属性
- 新增 outerRadius 属性
- 默认显示实心饼图
```

## 开发工作流

### 1. 创建分支

```bash
git checkout -b feat/your-chart-name
git checkout -n fix/chart-bug-description
```

### 2. 开发与测试

```bash
# 开发模式（自动构建）
npm run dev

# 手动测试
# 在浏览器中打开低码编辑器，验证图表功能

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

## 图表开发 Checklist

开发新图表时请确保：

- [ ] 组件实现在 `src/components/`
- [ ] 类型定义在 `src/types/chart.ts`
- [ ] Meta 配置在 `src/plugin.ts` 中注册
- [ ] 图标在 `src/meta/icons.ts` 定义（如需要）
- [ ] 通过 `npm run lint` 检查
- [ ] 通过 `npm run typecheck` 检查
- [ ] 通过 `npm run build` 构建
- [ ] 更新 README.md 组件列表

## Setter 开发说明

Plugin Echarts 使用自定义 Setter 来简化图表配置：

### JSONPathSetter

用于通过 JSON Path 直接修改 ECharts option：

```javascript
{
  name: 'titleText',
  setter: makeSetter('title.text', 'StringSetter', { defaultValue: '默认标题' })
}
```

### DataEditorSetter

用于编辑图表数据：

```javascript
{
  name: 'chartData',
  setter: makeDataEditor([
    { name: '类别A', value: 100 },
    { name: '类别B', value: 200 }
  ])
}
```

## 常见问题

### Q: 如何添加新的 ECharts 图表类型？

A:
1. 创建组件文件 `src/components/NewChart.tsx`
2. 在 `src/types/chart.ts` 添加类型定义
3. 在 `src/plugin.ts` 的 `components` 数组中添加配置
4. 配置 `configure` 属性面板（使用 `makeSetter` 和 `makeDataEditor`）

### Q: 如何调试 UMD 构建？

A: 使用 `npm run dev` 启动监听模式，然后在浏览器控制台查看 `window.PluginEcharts`。

### Q: 如何自定义颜色主题？

A: 使用 `makeSetter('color', 'StringSetter')` 或提供预设选项。

## 与 Mall Components 协作

当你的图表组件需要与 Mall Components 集成时：

1. 确保 peerDependencies 版本兼容
2. 复用 Mall Components 的类型定义（如需要）
3. 保持一致的代码风格和命名约定
4. 共享 ESLint 和 Prettier 配置

## 联系方式

如有问题，请提交 Issue 或联系维护者。