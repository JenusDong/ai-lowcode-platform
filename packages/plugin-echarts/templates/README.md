# 🎨 可视化大屏模板库

## 📋 模板列表

已为你创建了 **4个完整的可视化大屏模板**，涵盖不同行业场景：

| 模板名称 | 文件名 | 适用场景 | 主要特点 |
|---------|--------|---------|---------|
| **销售数据大屏** | `sales-dashboard.json` | 电商、零售、销售监控 | 销售额、订单、用户数据，地图分布 |
| **物流监控大屏** | `logistics-dashboard.json` | 物流、运输、供应链 | 实时路径追踪，流向线地图 |
| **人口统计大屏** | `population-dashboard.json` | 人口、社会、政府统计 | 人口密度分布，年龄结构分析 |
| **金融数据大屏** | `finance-dashboard.json` | 银行、证券、保险 | 资产分布，风险评估，业务分析 |

---

## 🚀 快速使用

### 方法1：直接导入模板

1. 打开低代码编辑器
2. 点击"导入"或"从JSON创建"
3. 选择对应的模板文件（如 `sales-dashboard.json`）
4. 点击确认导入
5. 根据需求修改数据和样式

### 方法2：复制粘贴配置

1. 打开模板文件，复制全部内容
2. 在低代码编辑器中粘贴
3. 保存并预览

---

## 📊 模板详细说明

### 1️⃣ 销售数据大屏

**文件**: [templates/sales-dashboard.json](templates/sales-dashboard.json)

**适用场景**:
- 电商平台销售监控
- 零售连锁店数据展示
- 销售团队业绩看板
- 区域销售分析

**核心功能**:
- ✅ 4个关键指标卡片（总销售额、订单数量、活跃用户、转化率）
- ✅ 全国销售分布地图（分省填色）
- ✅ 销售渠道分布饼图
- ✅ Top 5 销售省份柱状图
- ✅ 销售趋势折线图
- ✅ 产品类别雷达图

**自定义建议**:
```json
// 修改地图数据
"series": [{
  "data": [
    { "name": "你的省份", "value": 你的数值 }
  ]
}]

// 修改指标卡片
"children": [
  {
    "children": [
      { "props": { "children": "你的指标名称" } },
      { "props": { "children": "你的指标数值" } }
    ]
  }
]
```

---

### 2️⃣ 物流监控大屏

**文件**: [templates/logistics-dashboard.json](templates/logistics-dashboard.json)

**适用场景**:
- 物流公司实时监控
- 供应链管理
- 运输路径优化
- 仓储配送调度

**核心功能**:
- ✅ 3个关键指标卡片（在途车辆、今日订单、仓库节点）
- ✅ 全国物流流向地图（流向线 + 动态散点）
- ✅ 运输方式分布饼图
- ✅ 配送时效分析柱状图

**自定义建议**:
```json
// 添加新的物流路径
{
  "coords": [[起点经度, 起点纬度], [终点经度, 终点纬度]],
  "lineStyle": { "color": "#颜色代码", "width": 2 }
}

// 添加仓库节点
{
  "name": "仓库名称",
  "value": [经度, 纬度, 数值]
}
```

---

### 3️⃣ 人口统计大屏

**文件**: [templates/population-dashboard.json](templates/population-dashboard.json)

**适用场景**:
- 政府人口普查展示
- 城市规划决策支持
- 社会科学研究
- 公共服务资源配置

**核心功能**:
- ✅ 3个关键指标卡片（总人口、城镇化率、老龄化率）
- ✅ 全国人口密度分布地图（渐变色填充）
- ✅ 年龄结构饼图
- ✅ 人口增长趋势折线图

**自定义建议**:
```json
// 修改人口数据
"series": [{
  "data": [
    { "name": "省份名称", "value": 人口数量（万人） }
  ]
}]

// 修改年龄结构
"data": [
  { "value": 百分比, "name": "年龄段名称" }
]
```

---

### 4️⃣ 金融数据大屏

**文件**: [templates/finance-dashboard.json](templates/finance-dashboard.json)

**适用场景**:
- 银行业务监控
- 证券交易展示
- 保险业务分析
- 金融风险管控

**核心功能**:
- ✅ 3个关键指标卡片（总资产、交易额、客户数）
- ✅ 全国业务分布地图
- ✅ 业务类型分布饼图
- ✅ 资产趋势面积图
- ✅ 风险评估仪表盘

**自定义建议**:
```json
// 修改业务分布数据
"series": [{
  "data": [
    { "name": "省份名称", "value": 资产规模（亿元） }
  ]
}]

// 修改风险评估值
"data": [{ "value": 风险指数(0-100), "name": "风险指数" }]
```

---

## 🎨 自定义配色方案

### 方案1：深蓝科技风（默认）
```json
{
  "backgroundColor": "#0a1a3a",
  "primaryColor": "#1a90ff",
  "accentColor": "#00ffcc",
  "highlightColor": "#ffcc00"
}
```

### 方案2：暗黑炫酷风
```json
{
  "backgroundColor": "#1a1a2e",
  "primaryColor": "#e94560",
  "accentColor": "#0f3460",
  "highlightColor": "#16213e"
}
```

### 方案3：清新简约风
```json
{
  "backgroundColor": "#f0f2f5",
  "primaryColor": "#1890ff",
  "accentColor": "#52c41a",
  "highlightColor": "#faad14"
}
```

---

## 💡 使用技巧

### 1. 修改数据

找到对应的 `data` 字段，替换为你的实际数据：

```json
// 地图数据
"data": [
  { "name": "北京", "value": 1000 },
  { "name": "上海", "value": 1300 }
]

// 饼图数据
"data": [
  { "value": 1048, "name": "类别A" },
  { "value": 735, "name": "类别B" }
]

// 折线图数据
"data": [820, 932, 901, 934, 1290, 1330, 1320]
```

### 2. 调整布局

修改 `flex` 属性调整组件宽度：

```json
// 左侧占1份
{ "flex": "1" }

// 中间占2份（更宽）
{ "flex": "2" }

// 右侧占1份
{ "flex": "1" }
```

### 3. 修改颜色

找到 `color` 或 `itemStyle.color` 字段：

```json
// 单色
"color": "#1a90ff"

// 渐变色
"color": {
  "type": "linear",
  "x": 0, "y": 0, "x2": 1, "y2": 0,
  "colorStops": [
    { "offset": 0, "color": "#1a90ff" },
    { "offset": 1, "color": "#00ffcc" }
  ]
}
```

### 4. 调整地图缩放

修改 `geo.zoom` 和 `geo.center`：

```json
"geo": {
  "zoom": 1.5,  // 缩放比例（1.0-2.0）
  "center": [104, 35]  // 中心点坐标
}
```

---

## 📐 布局建议

### 三栏布局（推荐）
```
┌─────────────────────────────────────┐
│            标题区域                  │
├──────────┬────────────┬─────────────┤
│ 左侧图表  │  中央地图   │  右侧图表    │
│  (1份)   │   (2份)     │   (1份)     │
├──────────┴────────────┴─────────────┤
│           底部图表区域                │
└─────────────────────────────────────┘
```

### 双栏布局
```
┌─────────────────────────────────────┐
│            标题区域                  │
├──────────────────┬──────────────────┤
│    左侧图表区域    │   右侧图表区域    │
│      (1份)        │      (1份)       │
├──────────────────┴──────────────────┤
│            底部地图区域               │
└─────────────────────────────────────┘
```

---

## 🔧 高级定制

### 添加新的数据卡片

```json
{
  "componentName": "Div",
  "props": {
    "style": {
      "flex": "1",
      "background": "rgba(26, 144, 255, 0.1)",
      "border": "1px solid #1a90ff",
      "borderRadius": "8px",
      "padding": "20px"
    }
  },
  "children": [
    {
      "componentName": "Text",
      "props": {
        "children": "指标名称",
        "style": { "color": "#1a90ff", "fontSize": "14px" }
      }
    },
    {
      "componentName": "Text",
      "props": {
        "children": "指标数值",
        "style": { "color": "#ffffff", "fontSize": "32px", "fontWeight": "bold" }
      }
    }
  ]
}
```

### 添加新的图表组件

```json
{
  "componentName": "EChartsBar",  // 或 EChartsLine, EChartsPie 等
  "props": {
    "style": { "width": "100%", "height": "300px" },
    "option": {
      // ECharts 配置
    }
  }
}
```

---

## 📚 相关资源

- [地图示例库](../MAP_EXAMPLES.md) - 6种地图类型详细配置
- [API文档](../API_DOCUMENTATION.md) - 完整属性和配置说明
- [行业大屏指南](../INDUSTRY_DASHBOARD_GUIDE.md) - 创建指南

---

## 🎯 最佳实践

1. **数据真实性**: 使用真实的业务数据，确保数据准确性
2. **配色一致性**: 保持整个大屏的配色风格统一
3. **交互友好**: 添加必要的提示和交互反馈
4. **性能优化**: 控制数据量，避免过度渲染
5. **响应式设计**: 考虑不同屏幕尺寸的适配

---

## 💬 常见问题

**Q: 如何修改地图的中心点和缩放？**
A: 修改 `geo.center` 和 `geo.zoom` 属性

**Q: 如何添加新的省份/城市数据？**
A: 在 `series[0].data` 数组中添加新的对象

**Q: 如何改变图表的颜色？**
A: 修改 `itemStyle.color` 或 `color` 属性

**Q: 如何调整组件大小？**
A: 修改 `style.width` 和 `style.height` 属性

---

**🎉 现在你可以基于这些模板快速创建你的可视化大屏了！**
