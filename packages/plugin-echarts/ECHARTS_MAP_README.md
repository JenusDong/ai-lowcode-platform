# ECharts 地图组件开发完成

## 📊 组件概述

基于现有ECharts图表组件架构，为可视化大屏功能开发的**ECharts地图组件**，支持多种地图可视化模板，与现有echarts图表组件在视觉风格、交互体验上保持一致。

## ✨ 核心功能特性

### 1. **6种地图可视化类型**
- **分省填色地图 (fillColor)** - 按区域数据值填充颜色，支持渐变配色
- **散点地图 (scatter)** - 在地图上展示数据点分布
- **动态散点地图 (effectScatter)** - 带有涟漪动画效果的散点图
- **热力图 (heatMap)** - 数据密度可视化
- **流向线地图 (lines)** - 展示数据流动方向和路径

### 2. **交互功能**
- ✅ 区域点击事件 (`onRegionClick`)
- ✅ 区域悬停事件 (`onRegionHover`)
- ✅ 地图就绪事件 (`onMapReady`)
- ✅ 数据钻取功能 (`enableDrillDown`)
- ✅ 缩放和平移 (`roam`)
- ✅ 多选模式 (`enableSelect`)

### 3. **主题与样式**
- 🎨 暗色主题（适合数据大屏）
- 🎨 亮色主题（适合常规应用）
- 🎨 自定义主题配置
- 🎨 4种内置配色方案（蓝/红/绿/彩虹）
- 🎨 自定义颜色范围

### 4. **可复用性与扩展性**
- 🔧 完整的TypeScript类型定义
- 🔧 组件化设计，易于集成到低代码平台
- 🔧 支持静态数据和API数据源
- 🔧 灵活的属性配置系统

## 📁 文件结构

```
packages/plugin-echarts/src/
├── components/
│   ├── EChartsMap.tsx          # 核心地图组件实现
│   ├── mapData/
│   │   └── china.json          # 中国地图GeoJSON数据
│   └── EChartsBase.tsx         # 基础图表组件
├── meta.ts                     # 组件元数据配置（已更新）
├── index.ts                    # 导出文件（已更新）
└── demo/
    └── MapDemo.tsx             # 使用示例
```

## 🚀 快速开始

### 基础用法

```tsx
import React from 'react';
import EChartsMap, { MapDataItem } from '@local/plugin-echarts';

const App: React.FC = () => {
  const data: MapDataItem[] = [
    { name: '北京', value: 1000 },
    { name: '上海', value: 1300 },
    { name: '广东', value: 1500 },
    { name: '浙江', value: 1250 }
  ];

  return (
    <EChartsMap
      mapType="china"
      visualType="fillColor"
      data={data}
      theme="dark"
      backgroundColor="#0a1a3a"
      style={{ width: '100%', height: '500px' }}
    />
  );
};
```

### 散点地图示例

```tsx
<EChartsMap
  mapType="china"
  visualType="scatter"
  scatterData={[
    { name: '北京', value: [116.46, 39.92, 1000] },
    { name: '上海', value: [121.48, 31.22, 1300] },
    { name: '广州', value: [113.23, 23.16, 800] }
  ]}
  colorScheme="blue"
/>
```

### 动态散点示例

```tsx
<EChartsMap
  visualType="effectScatter"
  theme="dark"
  onRegionClick={(params) => {
    console.log('点击了:', params.name);
  }}
  enableDrillDown={true}
/>
```

## 📋 完整属性列表

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `mapType` | `'china' \| 'world' \| 'province'` | `'china'` | 地图类型 |
| `visualType` | `'fillColor' \| 'scatter' \| 'heatMap' \| 'effectScatter' \| 'lines'` | `'fillColor'` | 可视化类型 |
| `data` | `MapDataItem[]` | 省份默认数据 | 分省填色数据 |
| `scatterData` | `ScatterDataItem[]` | `undefined` | 散点数据 |
| `theme` | `'dark' \| 'light' \| 'custom'` | `'dark'` | 主题风格 |
| `backgroundColor` | `string` | `'#0a1a3a'` | 背景颜色 |
| `showLegend` | `boolean` | `true` | 显示图例 |
| `showTooltip` | `boolean` | `true` | 显示提示框 |
| `roam` | `boolean` | `true` | 缩放和平移 |
| `zoom` | `number` | `1.2` | 初始缩放比例 |
| `center` | `[number, number]` | `[104, 35]` | 中心点坐标 |
| `colorScheme` | `'blue' \| 'red' \| 'green' \| 'rainbow' \| 'custom'` | `'blue'` | 配色方案 |
| `customColors` | `string[]` | `[]` | 自定义颜色数组 |
| `title` | `object` | `{}` | 标题配置 |
| `enableDrillDown` | `boolean` | `false` | 启用数据钻取 |
| `onRegionClick` | `(params: any) => void` | `undefined` | 区域点击回调 |
| `onRegionHover` | `(params: any) => void` | `undefined` | 区域悬停回调 |
| `onMapReady` | `(instance: echarts.ECharts) => void` | `undefined` | 地图就绪回调 |
| `loading` | `boolean` | `false` | 加载状态 |

## 🎯 低代码平台集成

### 已完成的配置

1. **meta.ts 配置** - 已添加完整的组件描述、属性面板配置
2. **snippets 模板** - 提供5种预设模板：
   - 分省填色地图
   - 散点地图
   - 动态散点地图
   - 热力图地图
   - 流向线地图

3. **component.json** - 为mall-cook-template准备的Vue版本配置

### 在低代码编辑器中使用

用户可以在组件面板中找到 **"ECharts 地图"** 组件，拖拽到画布后：
- 选择地图类型（中国/世界/省份）
- 选择可视化类型（6种可选）
- 配置数据源（静态或API）
- 调整样式主题和配色方案
- 设置交互事件回调

## 💡 最佳实践

### 1. 大屏暗色主题推荐配置

```tsx
<EChartsMap
  theme="dark"
  backgroundColor="#0a1a3a"
  colorScheme="blue"
  showLegend={true}
  showTooltip={true}
  title={{
    text: '全国销售数据分布',
    textStyle: { color: '#ffffff', fontSize: 20 }
  }}
/>
```

### 2. 数据钻取场景

```tsx
<EChartsMap
  enableDrillDown={true}
  onRegionClick={(params) => {
    // 点击省份后加载该省的详细数据
    loadProvinceData(params.name);
  }}
/>
```

### 3. 性能优化建议

- 对于大数据量（>10000个点），使用 `lazyUpdate={true}`
- 频繁更新数据时，设置 `notMerge={false}` 以合并更新
- 复杂交互场景建议启用 `roam={true}` 提升用户体验

## 🔧 扩展开发

### 添加新的可视化类型

在 `EChartsMap.tsx` 中添加新的 case：

```tsx
const getNewVisualOption = useCallback((): echarts.EChartsOption => {
  // 实现新的可视化逻辑
  return { /* echarts option */ };
}, [...]);

// 在 getChartOption 的 switch 中添加
case 'newType':
  return getNewVisualOption();
```

### 添加自定义地图数据

```typescript
// 注册新地图
echarts.registerMap('customMap', customGeoJSON);

// 使用
<EChartsMap mapType="custom" provinceCode="customMap" />
```

## 📦 依赖说明

- **echarts**: ^5.x
- **echarts-for-react**: ^3.x
- **@alilc/lowcode-types**: 低代码平台类型定义

## 🐛 已知问题与解决方案

1. **地图数据显示不正确**
   - 检查数据中的 `name` 字段是否与GeoJSON中的名称一致
   - 使用标准省份名称（如"广东"而非"广东省"）

2. **地图不显示**
   - 确保已正确加载 china.json GeoJSON文件
   - 检查 `echarts.registerMap()` 是否成功调用

3. **性能问题**
   - 减少同时渲染的数据点数量
   - 开启 `lazyUpdate` 选项
   - 考虑使用 WebGL 渲染器

## 📈 后续优化方向

- [ ] 支持3D地图（需要引入 echarts-gl）
- [ ] 添加更多世界地图和国家地图
- [ ] 实现地图图层叠加功能
- [ ] 支持实时数据流更新
- [ ] 添加地图标注和弹窗功能
- [ ] 优化移动端适配

## 📝 更新日志

### v1.0.0 (2026-04-15)
✅ 初始版本发布
✅ 实现5种核心地图可视化类型
✅ 完整的TypeScript类型支持
✅ 低代码平台集成配置
✅ 示例代码和文档

---

**开发者提示**: 本组件完全基于项目现有的ECharts组件架构开发，保持了代码风格和设计模式的一致性。所有配置项都遵循LowCode Engine的标准规范。
