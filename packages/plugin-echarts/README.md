# Plugin ECharts

低代码平台 ECharts 图表插件 - 提供饼图、折线图、柱状图等可视化组件

## 概述

Plugin ECharts 是为低代码平台设计的图表组件插件，基于 Apache ECharts 5.x，提供丰富的数据可视化能力。

## 组件列表

| 组件 | 说明 | 图表类型 |
|------|------|----------|
| PieChart | 饼图 | 饼图/玫瑰图 |
| LineChart | 折线图 | 折线图/面积图 |
| BarChart | 柱状图 | 柱状图/条形图 |
| AreaChart | 面积图 | 堆叠面积图 |

## 目录结构

```
plugin-echarts/
├── src/
│   ├── components/      # 组件实现
│   │   └── EChartsBase.tsx
│   ├── meta/            # 元数据和图标
│   │   └── icons.ts
│   ├── setters/         # 自定义设置器（从原位置迁移）
│   ├── types/           # 类型定义
│   │   └── chart.ts
│   ├── index.ts         # 库入口
│   ├── plugin.ts        # 插件入口
│   └── meta.ts          # Meta 入口
├── scripts/
│   └── build.js         # 构建脚本
├── package.json
├── tsconfig.json
└── .prettierrc.json
```

## 快速开始

### 安装依赖

```bash
cd packages/plugin-echarts
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
- **ECharts** 5.4+
- **echarts-for-react** 3.0+
- **@ant-design/icons** 4.7+
- **TypeScript** 5.0+
- **ESBuild** - 打包工具

## 集成方式

### UMD 方式（推荐）

通过全局变量暴露：

```html
<script src="/plugin-echarts.umd.js"></script>
<script>
  const { EChartsBase } = window.PluginEcharts;
</script>
```

### 插件注册

在低码引擎中注册：

```javascript
import { plugin } from './packages/plugin-echarts/src/plugin';

// 注册到引擎
plugins.register(plugin);
```

### Meta 集成

```javascript
import { components } from './packages/plugin-echarts/src/meta';

material.loadIncrementalAssets({ components });
```

## 开发新图表组件

1. 在 `src/components/` 创建图表组件
2. 在 `src/types/chart.ts` 定义配置类型
3. 在 `src/plugin.ts` 的 `components` 数组中添加定义
4. 配置 `configure` 属性面板
5. 运行 `npm run build` 构建

## 与 Mall Components 的对比

| 特性 | Mall Components | Plugin Echarts |
|------|-----------------|----------------|
| 用途 | 业务 UI 组件 | 数据可视化组件 |
| 依赖 | antd | echarts-for-react |
| 构建 | ESBuild UMD | ESBuild UMD |
| 文档 | README + CONTRIBUTING | README + CONTRIBUTING |
| Lint | ESLint + Prettier | ESLint + Prettier |

## 版本规范

遵循 [语义化版本](https://semver.org/lang/zh-CN/)：

- **MAJOR**: 不兼容的 API 变更
- **MINOR**: 向下兼容的功能新增
- **PATCH**: 向下兼容的问题修复

## License

MIT