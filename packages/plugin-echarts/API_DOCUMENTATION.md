# 📚 ECharts地图组件 - API文档

## 🎯 组件概述

**组件名称**: `EChartsMap`  
**组件分组**: 地图可视化  
**版本**: v1.0.0  
**依赖**: `echarts`, `React`

---

## 📋 Props属性列表

### 基础属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| `option` | `EChartsOption` | `{}` | 否 | 完整的ECharts配置对象（优先级最高） |
| `style` | `CSSProperties` | `{ width: '100%', height: '500px' }` | 否 | 容器样式 |
| `className` | `string` | `''` | 否 | 容器类名 |
| `theme` | `string` | `undefined` | 否 | ECharts主题名称 |

### 交互属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| `notMerge` | `boolean` | `false` | 否 | 是否不合并配置 |
| `lazyUpdate` | `boolean` | `true` | 否 | 是否延迟更新 |
| `showLoading` | `boolean` | `false` | 否 | 是否显示加载动画 |
| `loadingOption` | `object` | `{}` | 否 | 加载动画配置 |

### 事件属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| `onChartReady` | `(instance: ECharts) => void` | `undefined` | 否 | 图表初始化完成回调 |
| `onClick` | `(params: any) => void` | `undefined` | 否 | 点击事件回调 |

---

## 🔧 Option配置详解

### 完整Option结构

```typescript
interface MapOption {
  backgroundColor?: string;          // 背景颜色
  title?: TitleOption;               // 标题配置
  tooltip?: TooltipOption;           // 提示框配置
  legend?: LegendOption;             // 图例配置
  visualMap?: VisualMapOption;       // 视觉映射组件
  geo?: GeoOption;                   // 地理坐标系组件
  series?: SeriesOption[];           // 系列列表
  animationDuration?: number;        // 动画时长
}
```

### 1. Title配置

```typescript
interface TitleOption {
  text?: string;                     // 主标题文本
  subtext?: string;                  // 副标题文本
  left?: string | number;            // 左侧距离
  top?: string | number;             // 顶部距离
  textStyle?: {
    color?: string;                  // 文字颜色
    fontSize?: number;               // 字体大小
    fontWeight?: string;             // 字体粗细
  };
}
```

**示例**:
```json
{
  "title": {
    "text": "全国销售数据分布",
    "subtext": "2024年数据",
    "left": "center",
    "top": 20,
    "textStyle": {
      "color": "#ffffff",
      "fontSize": 20,
      "fontWeight": "bold"
    }
  }
}
```

### 2. Tooltip配置

```typescript
interface TooltipOption {
  trigger?: 'item' | 'axis';         // 触发类型
  formatter?: string | Function;     // 内容格式器
  backgroundColor?: string;          // 背景颜色
  borderColor?: string;              // 边框颜色
  borderWidth?: number;              // 边框宽度
  textStyle?: {
    color?: string;                  // 文字颜色
    fontSize?: number;               // 字体大小
  };
}
```

**示例**:
```json
{
  "tooltip": {
    "trigger": "item",
    "formatter": "{b}<br/>数值: {c}",
    "backgroundColor": "rgba(0, 0, 0, 0.7)",
    "borderColor": "#1a90ff",
    "textStyle": {
      "color": "#ffffff",
      "fontSize": 14
    }
  }
}
```

### 3. VisualMap配置

```typescript
interface VisualMapOption {
  min?: number;                      // 最小值
  max?: number;                      // 最大值
  left?: string | number;            // 左侧距离
  bottom?: string | number;          // 底部距离
  text?: [string, string];           // 两端的文本
  calculable?: boolean;              // 是否显示拖拽手柄
  inRange?: {
    color?: string[];                // 颜色范围
  };
  textStyle?: {
    color?: string;                  // 文字颜色
  };
}
```

**示例**:
```json
{
  "visualMap": {
    "min": 0,
    "max": 2000,
    "left": "left",
    "bottom": 20,
    "text": ["高", "低"],
    "calculable": true,
    "inRange": {
      "color": ["#50a3ba", "#eac736", "#d94e5d"]
    },
    "textStyle": {
      "color": "#ffffff"
    }
  }
}
```

### 4. Geo配置

```typescript
interface GeoOption {
  map?: string;                      // 地图名称（'china'）
  roam?: boolean | 'scale' | 'move'; // 是否开启缩放和平移
  zoom?: number;                     // 缩放比例
  center?: [number, number];         // 中心点坐标
  label?: {
    show?: boolean;                  // 是否显示标签
    color?: string;                  // 标签颜色
    fontSize?: number;               // 标签字号
  };
  itemStyle?: {
    areaColor?: string;              // 区域填充色
    borderColor?: string;            // 边界线颜色
    borderWidth?: number;            // 边界线宽度
  };
  emphasis?: {
    itemStyle?: ItemStyleOption;     // 高亮样式
    label?: LabelOption;             // 高亮标签样式
  };
}
```

**示例**:
```json
{
  "geo": {
    "map": "china",
    "roam": true,
    "zoom": 1.2,
    "center": [104, 35],
    "label": {
      "show": true,
      "color": "#ffffff",
      "fontSize": 10
    },
    "itemStyle": {
      "areaColor": "#1a5276",
      "borderColor": "#1a90ff",
      "borderWidth": 1
    },
    "emphasis": {
      "itemStyle": {
        "areaColor": "#2980b9",
        "borderColor": "#ffcc00",
        "borderWidth": 2
      }
    }
  }
}
```

### 5. Series配置

#### 5.1 分省填色（Map类型）

```typescript
interface MapSeries {
  name?: string;                     // 系列名称
  type: 'map';                       // 系列类型
  geoIndex?: number;                 // 地理坐标系索引
  data: Array<{
    name: string;                    // 区域名称
    value: number;                   // 数值
  }>;
}
```

**示例**:
```json
{
  "series": [{
    "name": "销售额",
    "type": "map",
    "geoIndex": 0,
    "data": [
      { "name": "北京", "value": 1800 },
      { "name": "上海", "value": 2000 }
    ]
  }]
}
```

#### 5.2 散点图（Scatter类型）

```typescript
interface ScatterSeries {
  name?: string;                     // 系列名称
  type: 'scatter';                   // 系列类型
  coordinateSystem: 'geo';           // 坐标系
  data: Array<{
    name: string;                    // 点名称
    value: [number, number, number]; // [经度, 纬度, 数值]
  }>;
  symbolSize?: number;               // 标记大小
  itemStyle?: {
    color?: string;                  // 标记颜色
  };
  label?: {
    show?: boolean;                  // 是否显示标签
    formatter?: string;              // 标签格式
    position?: string;               // 标签位置
    color?: string;                  // 标签颜色
  };
}
```

**示例**:
```json
{
  "series": [{
    "name": "城市",
    "type": "scatter",
    "coordinateSystem": "geo",
    "data": [
      { "name": "北京", "value": [116.46, 39.92, 1000] },
      { "name": "上海", "value": [121.48, 31.22, 1300] }
    ],
    "symbolSize": 12,
    "itemStyle": {
      "color": "#1a90ff"
    },
    "label": {
      "show": true,
      "formatter": "{b}",
      "position": "right",
      "color": "#ffffff"
    }
  }]
}
```

#### 5.3 动态散点（EffectScatter类型）

```typescript
interface EffectScatterSeries {
  type: 'effectScatter';             // 系列类型
  coordinateSystem: 'geo';           // 坐标系
  data: Array<ScatterDataItem>;
  symbolSize?: number;               // 标记大小
  rippleEffect?: {
    brushType?: 'stroke' | 'fill';   // 涟漪类型
    scale?: number;                  // 缩放比例
    period?: number;                 // 动画周期
  };
}
```

**示例**:
```json
{
  "series": [{
    "type": "effectScatter",
    "coordinateSystem": "geo",
    "data": [
      { "name": "北京", "value": [116.46, 39.92, 1000] }
    ],
    "symbolSize": 15,
    "rippleEffect": {
      "brushType": "stroke",
      "scale": 5,
      "period": 4
    },
    "itemStyle": {
      "color": "#ffcc00"
    }
  }]
}
```

#### 5.4 热力图（Heatmap类型）

```typescript
interface HeatmapSeries {
  type: 'heatmap';                   // 系列类型
  coordinateSystem: 'geo';           // 坐标系
  data: Array<[number, number, number]>; // [经度, 纬度, 数值]
  pointSize?: number;                // 点大小
  blurSize?: number;                 // 模糊大小
}
```

**示例**:
```json
{
  "series": [{
    "type": "heatmap",
    "coordinateSystem": "geo",
    "data": [
      [116.46, 39.92, 180],
      [121.48, 31.22, 200]
    ],
    "pointSize": 20,
    "blurSize": 25
  }]
}
```

#### 5.5 流向线（Lines类型）

```typescript
interface LinesSeries {
  type: 'lines';                     // 系列类型
  coordinateSystem: 'geo';           // 坐标系
  data: Array<{
    coords: [[number, number], [number, number]]; // [[起点经纬度], [终点经纬度]]
    lineStyle?: {
      color?: string;                // 线条颜色
      width?: number;                // 线条宽度
    };
  }>;
  effect?: {
    show?: boolean;                  // 是否显示特效
    period?: number;                 // 特效周期
    trailLength?: number;            // 特效尾迹长度
    symbol?: string;                 // 特效标记
    symbolSize?: number;             // 特效标记大小
  };
}
```

**示例**:
```json
{
  "series": [{
    "type": "lines",
    "coordinateSystem": "geo",
    "data": [
      {
        "coords": [[116.46, 39.92], [121.48, 31.22]],
        "lineStyle": {
          "color": "#1a90ff",
          "width": 2
        }
      }
    ],
    "effect": {
      "show": true,
      "period": 6,
      "trailLength": 0.7,
      "symbol": "arrow",
      "symbolSize": 6
    }
  }]
}
```

---

## 🎨 主题配置

### 深蓝科技风（推荐）

```json
{
  "backgroundColor": "#0a1a3a",
  "colors": ["#1a90ff", "#00ffcc", "#ffcc00", "#d94e5d"],
  "geo": {
    "itemStyle": {
      "areaColor": "#1a5276",
      "borderColor": "#1a90ff"
    }
  }
}
```

### 暗黑炫酷风

```json
{
  "backgroundColor": "#1a1a2e",
  "colors": ["#e94560", "#0f3460", "#16213e"],
  "geo": {
    "itemStyle": {
      "areaColor": "#16213e",
      "borderColor": "#e94560"
    }
  }
}
```

---

## 📊 数据格式

### 分省填色数据

```typescript
type MapData = Array<{
  name: string;    // 省份名称（必须与GeoJSON中的名称一致）
  value: number;   // 数值
}>;
```

### 散点数据

```typescript
type ScatterData = Array<{
  name: string;                          // 点名称
  value: [number, number, number];       // [经度, 纬度, 数值]
}>;
```

### 流向线数据

```typescript
type LinesData = Array<{
  coords: [[number, number], [number, number]]; // [[起点经纬度], [终点经纬度]]
  lineStyle?: {
    color?: string;
    width?: number;
  };
}>;
```

---

## 🚀 完整示例

### 最简示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "option": {
      "geo": { "map": "china" },
      "series": [{
        "type": "map",
        "data": [{ "name": "北京", "value": 100 }]
      }]
    }
  }
}
```

### 完整示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "全国销售数据分布",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": { "trigger": "item" },
      "visualMap": {
        "min": 0,
        "max": 2000,
        "left": "left",
        "bottom": 20,
        "calculable": true,
        "inRange": { "color": ["#50a3ba", "#eac736", "#d94e5d"] }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": true, "color": "#ffffff" },
        "itemStyle": {
          "areaColor": "#1a5276",
          "borderColor": "#1a90ff"
        }
      },
      "series": [{
        "name": "销售额",
        "type": "map",
        "geoIndex": 0,
        "data": [
          { "name": "北京", "value": 1800 },
          { "name": "上海", "value": 2000 }
        ]
      }]
    }
  }
}
```

---

## 💡 最佳实践

### 1. 性能优化

```json
{
  "lazyUpdate": true,
  "notMerge": false,
  "series": [{
    "data": [] // 控制数据量在500个点以内
  }]
}
```

### 2. 响应式设计

```javascript
// 监听窗口大小变化
window.addEventListener('resize', () => {
  chartInstance.resize();
});
```

### 3. 数据更新

```javascript
// 更新数据
chartInstance.setOption({
  series: [{
    data: newData
  }]
}, false, true);
```

---

## 📚 相关资源

- [地图示例库](./MAP_EXAMPLES.md)
- [行业大屏指南](./INDUSTRY_DASHBOARD_GUIDE.md)
- [ECharts官方文档](https://echarts.apache.org/zh/index.html)
