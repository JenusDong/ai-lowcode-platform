# 🗺️ ECharts地图组件 - 完整示例库

## 📊 目录

1. [分省填色地图](#1-分省填色地图)
2. [散点地图](#2-散点地图)
3. [动态散点地图](#3-动态散点地图)
4. [热力图](#4-热力图)
5. [流向线地图](#5-流向线地图)
6. [混合地图](#6-混合地图)

---

## 1. 分省填色地图

### 适用场景
- 全国销售数据分布
- 人口密度展示
- GDP分布
- 各省份数据对比

### 配置示例

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
        "top": 20,
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": {
        "trigger": "item",
        "formatter": "{b}<br/>销售额: ¥{c}"
      },
      "visualMap": {
        "min": 0,
        "max": 2000,
        "left": "left",
        "bottom": 20,
        "text": ["高", "低"],
        "calculable": true,
        "inRange": { "color": ["#50a3ba", "#eac736", "#d94e5d"] },
        "textStyle": { "color": "#ffffff" }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": true, "color": "#ffffff", "fontSize": 10 },
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
      },
      "series": [{
        "name": "销售额",
        "type": "map",
        "geoIndex": 0,
        "data": [
          { "name": "北京", "value": 1800 },
          { "name": "上海", "value": 2000 },
          { "name": "广东", "value": 1900 },
          { "name": "浙江", "value": 1600 },
          { "name": "江苏", "value": 1700 }
        ]
      }]
    }
  }
}
```

---

## 2. 散点地图

### 适用场景
- 城市点位分布
- 门店位置展示
- 重点区域标记
- 数据点分布

### 配置示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "全国重点城市分布",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": {
        "trigger": "item",
        "formatter": function(params) {
          return `${params.name}<br/>经度: ${params.value[0]}<br/>纬度: ${params.value[1]}<br/>数值: ${params.value[2]}`;
        }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": false },
        "itemStyle": {
          "areaColor": "#0d2647",
          "borderColor": "#18579e"
        },
        "emphasis": {
          "itemStyle": { "areaColor": "#1a4a7a" }
        }
      },
      "series": [{
        "name": "城市",
        "type": "scatter",
        "coordinateSystem": "geo",
        "data": [
          { "name": "北京", "value": [116.46, 39.92, 1000] },
          { "name": "上海", "value": [121.48, 31.22, 1300] },
          { "name": "广州", "value": [113.23, 23.16, 800] },
          { "name": "深圳", "value": [114.07, 22.55, 900] },
          { "name": "成都", "value": [104.06, 30.67, 700] },
          { "name": "武汉", "value": [114.31, 30.52, 600] },
          { "name": "西安", "value": [108.95, 34.27, 500] },
          { "name": "杭州", "value": [120.19, 30.26, 850] }
        ],
        "symbolSize": 12,
        "itemStyle": {
          "color": "#1a90ff",
          "shadowBlur": 10,
          "shadowColor": "#1a90ff"
        },
        "label": {
          "show": true,
          "formatter": "{b}",
          "position": "right",
          "color": "#ffffff"
        }
      }]
    }
  }
}
```

---

## 3. 动态散点地图

### 适用场景
- 实时数据展示
- 重点城市高亮
- 动态效果演示
- 数据监控大屏

### 配置示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "实时数据监控",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": false },
        "itemStyle": {
          "areaColor": "#0d2647",
          "borderColor": "#18579e"
        }
      },
      "series": [{
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "data": [
          { "name": "北京", "value": [116.46, 39.92, 1000] },
          { "name": "上海", "value": [121.48, 31.22, 1300] },
          { "name": "广州", "value": [113.23, 23.16, 800] },
          { "name": "深圳", "value": [114.07, 22.55, 900] }
        ],
        "symbolSize": 15,
        "rippleEffect": {
          "brushType": "stroke",
          "scale": 5,
          "period": 4
        },
        "itemStyle": {
          "color": "#ffcc00",
          "shadowBlur": 10,
          "shadowColor": "#ffcc00"
        },
        "label": {
          "show": true,
          "formatter": "{b}",
          "position": "right",
          "color": "#ffffff",
          "fontSize": 12
        }
      }]
    }
  }
}
```

---

## 4. 热力图

### 适用场景
- 人流密度分析
- 活跃度展示
- 数据密度分布
- 热点区域识别

### 配置示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "全国人流热力分布",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": { "trigger": "item" },
      "visualMap": {
        "min": 0,
        "max": 200,
        "calculable": true,
        "inRange": { "color": ["#50a3ba", "#eac736", "#d94e5d"] },
        "textStyle": { "color": "#fff" }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": false },
        "itemStyle": {
          "areaColor": "#0d2647",
          "borderColor": "#18579e"
        }
      },
      "series": [{
        "name": "热力值",
        "type": "heatmap",
        "coordinateSystem": "geo",
        "data": [
          [116.46, 39.92, 180],
          [121.48, 31.22, 200],
          [113.23, 23.16, 150],
          [114.07, 22.55, 160],
          [104.06, 30.67, 120],
          [114.31, 30.52, 110],
          [108.95, 34.27, 90],
          [120.19, 30.26, 140]
        ],
        "pointSize": 20,
        "blurSize": 25
      }]
    }
  }
}
```

---

## 5. 流向线地图

### 适用场景
- 物流路径展示
- 人口迁徙路线
- 贸易流向
- 交通流量分析

### 配置示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "全国物流流向图",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": { "trigger": "item" },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": false },
        "itemStyle": {
          "areaColor": "#0d2647",
          "borderColor": "#18579e"
        }
      },
      "series": [{
        "type": "lines",
        "coordinateSystem": "geo",
        "data": [
          {
            "coords": [[116.46, 39.92], [121.48, 31.22]],
            "lineStyle": { "color": "#1a90ff", "width": 2 }
          },
          {
            "coords": [[116.46, 39.92], [113.23, 23.16]],
            "lineStyle": { "color": "#00ffcc", "width": 2 }
          },
          {
            "coords": [[121.48, 31.22], [114.07, 22.55]],
            "lineStyle": { "color": "#ffcc00", "width": 2 }
          },
          {
            "coords": [[104.06, 30.67], [116.46, 39.92]],
            "lineStyle": { "color": "#d94e5d", "width": 2 }
          }
        ],
        "effect": {
          "show": true,
          "period": 6,
          "trailLength": 0.7,
          "symbol": "arrow",
          "symbolSize": 6,
          "color": "#ffffff"
        },
        "lineStyle": {
          "width": 2,
          "opacity": 0.6,
          "curveness": 0.2
        }
      }]
    }
  }
}
```

---

## 6. 混合地图

### 适用场景
- 综合数据展示
- 多维度分析
- 复杂业务场景
- 高级可视化需求

### 配置示例

```json
{
  "componentName": "EChartsMap",
  "props": {
    "style": { "width": "100%", "height": "600px" },
    "option": {
      "backgroundColor": "#0a1a3a",
      "title": {
        "text": "综合数据展示",
        "left": "center",
        "textStyle": { "color": "#ffffff", "fontSize": 20 }
      },
      "tooltip": { "trigger": "item" },
      "visualMap": {
        "min": 0,
        "max": 2000,
        "left": "left",
        "bottom": 20,
        "text": ["高", "低"],
        "calculable": true,
        "inRange": { "color": ["#50a3ba", "#eac736", "#d94e5d"] },
        "textStyle": { "color": "#ffffff" }
      },
      "geo": {
        "map": "china",
        "roam": true,
        "zoom": 1.2,
        "center": [104, 35],
        "label": { "show": false },
        "itemStyle": {
          "areaColor": "#1a5276",
          "borderColor": "#1a90ff"
        }
      },
      "series": [
        {
          "name": "省份数据",
          "type": "map",
          "geoIndex": 0,
          "data": [
            { "name": "北京", "value": 1800 },
            { "name": "上海", "value": 2000 },
            { "name": "广东", "value": 1900 }
          ]
        },
        {
          "name": "重点城市",
          "type": "effectScatter",
          "coordinateSystem": "geo",
          "data": [
            { "name": "北京", "value": [116.46, 39.92, 1000] },
            { "name": "上海", "value": [121.48, 31.22, 1300] }
          ],
          "symbolSize": 15,
          "rippleEffect": { "scale": 5, "period": 4 },
          "itemStyle": { "color": "#ffcc00" }
        },
        {
          "type": "lines",
          "coordinateSystem": "geo",
          "data": [
            {
              "coords": [[116.46, 39.92], [121.48, 31.22]],
              "lineStyle": { "color": "#00ffcc", "width": 2 }
            }
          ],
          "effect": {
            "show": true,
            "period": 6,
            "trailLength": 0.7,
            "symbol": "arrow",
            "symbolSize": 6
          }
        }
      ]
    }
  }
}
```

---

## 💡 使用技巧

### 1. 数据格式说明

#### 分省填色数据
```json
[
  { "name": "省份名称", "value": 数值 }
]
```

#### 散点数据
```json
[
  { "name": "城市名称", "value": [经度, 纬度, 数值] }
]
```

#### 流向线数据
```json
[
  { "coords": [[起点经度, 起点纬度], [终点经度, 终点纬度]] }
]
```

### 2. 常用坐标

| 城市 | 经度 | 纬度 |
|------|------|------|
| 北京 | 116.46 | 39.92 |
| 上海 | 121.48 | 31.22 |
| 广州 | 113.23 | 23.16 |
| 深圳 | 114.07 | 22.55 |
| 成都 | 104.06 | 30.67 |
| 武汉 | 114.31 | 30.52 |
| 西安 | 108.95 | 34.27 |
| 杭州 | 120.19 | 30.26 |

### 3. 配色方案

#### 蓝色系（推荐）
```json
["#50a3ba", "#eac736", "#d94e5d"]
```

#### 红色系
```json
["#ff4d4f", "#ff7a45", "#ffa940"]
```

#### 绿色系
```json
["#52c41a", "#73d13d", "#95de64"]
```

---

## 📚 相关文档

- [行业大屏模板指南](./INDUSTRY_DASHBOARD_GUIDE.md)
- [完整示例配置](./examples/industry-dashboard.json)
- [ECharts官方文档](https://echarts.apache.org/zh/index.html)

---

**提示**: 所有示例配置都可以直接复制到低代码编辑器中使用！
