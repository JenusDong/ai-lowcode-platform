# ECharts 高德地图集成指南

## 版本更新

### v1.3.0 - 高德地图集成
- ✅ 安装 `echarts-extension-amap` 扩展（正确的包名）
- ✅ 支持 `useAMap` 属性启用高德地图
- ✅ 自动加载高德地图API
- ✅ 创建高德地图实例并关联ECharts

## 重要说明

**包名更正：**
- ❌ 错误包名：`echarts-amap`
- ✅ 正确包名：`echarts-extension-amap`

## 安装

```bash
npm install @jenusdong/echarts-for-lowcode@1.3.0
```

## 使用方法

### 1. 获取高德地图API密钥

访问 [高德开放平台](https://lbs.amap.com/) 注册并获取API密钥。

### 2. 在组件中配置

```json
{
  "componentName": "EChartsMap",
  "props": {
    "useAMap": true,
    "amapConfig": {
      "key": "YOUR_AMAP_KEY",
      "version": "2.0",
      "plugins": ["AMap.Scale", "AMap.ToolBar"]
    },
    "option": {
      "series": [
        {
          "type": "scatter",
          "coordinateSystem": "amap",
          "data": [
            { "name": "北京", "value": [116.46, 39.92, 22] }
          ]
        }
      ]
    }
  }
}
```

### 3. 配置说明

#### useAMap
- 类型: `boolean`
- 默认值: `false`
- 说明: 是否使用高德地图作为底图

#### amapConfig
高德地图配置对象：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| key | string | 'YOUR_AMAP_KEY' | 高德地图API密钥 |
| version | string | '2.0' | 高德地图API版本 |
| plugins | string[] | ['AMap.Scale', 'AMap.ToolBar'] | 需要加载的插件 |

### 4. 坐标系说明

使用高德地图时，series中的 `coordinateSystem` 必须设置为 `"amap"`：

```json
{
  "series": [
    {
      "type": "scatter",
      "coordinateSystem": "amap",  // 关键配置
      "data": [...]
    }
  ]
}
```

## 示例模板

项目提供了两个天气大屏模板：

1. **全国天气大屏** (`weather-dashboard.json`)
   - 使用ECharts内置中国地图
   - 无需额外配置
   - 开箱即用

2. **高德地图天气大屏** (`amap-weather-dashboard.json`)
   - 使用高德地图作为底图
   - 需要配置API密钥
   - 支持更丰富的地图交互

## 调试方法

打开浏览器控制台，查看日志输出：

```
[EChartsMap] Loading AMap API with key: YOUR_AMA...
[EChartsMap] AMap API loaded successfully
[EChartsMap] Creating AMap instance...
[EChartsMap] AMap instance created successfully
[EChartsMap] ECharts with AMap initialized
```

## 常见问题

### Q: 地图不显示？
A: 检查以下几点：
1. API密钥是否正确
2. API密钥是否有域名访问限制
3. 网络是否能访问高德地图API
4. 查看控制台是否有错误信息

### Q: 如何切换地图样式？
A: 在 `initAMapChart` 方法中修改 `mapStyle` 参数：

```typescript
mapStyle: 'amap://styles/dark'  // 暗色主题
mapStyle: 'amap://styles/normal'  // 标准主题
mapStyle: 'amap://styles/light'  // 浅色主题
```

### Q: 如何添加更多地图控件？
A: 在 `amapConfig.plugins` 中添加：

```json
{
  "plugins": [
    "AMap.Scale",
    "AMap.ToolBar",
    "AMap.Geolocation",
    "AMap.MapType"
  ]
}
```

## 发布说明

### 发布到npm

```bash
cd packages/echarts-for-lowcode
npm login
npm publish
```

### 更新低代码平台配置

更新 `src/services/assets.json`：

```json
{
  "package": "@jenusdong/echarts-for-lowcode",
  "version": "1.3.0",
  "library": "EChartsForLowCode",
  "urls": [
    "https://unpkg.com/@jenusdong/echarts-for-lowcode@1.3.0/build/echarts-for-lowcode.umd.js"
  ],
  "editUrls": [
    "https://unpkg.com/@jenusdong/echarts-for-lowcode@1.3.0/build/echarts-for-lowcode.umd.js"
  ]
}
```

## 技术架构

```
EChartsMap Component
├── useAMap: false (默认)
│   └── registerChinaMap() → ECharts内置地图
│
└── useAMap: true
    ├── loadAMapAPI() → 加载高德地图API
    ├── initAMapChart() → 创建地图实例
    └── coordinateSystem: 'amap' → 关联ECharts
```

## 依赖关系

```
@jenusdong/echarts-for-lowcode@1.3.0
├── echarts@^5.4.0
├── echarts-amap@^1.0.0
└── react@^16.14.0 (peer)
```
