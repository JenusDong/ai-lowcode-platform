# 模板中集成真实天气数据 - 使用指南

## 功能概述

已在 EChartsMap 组件中集成了高德天气API，模板可以自动加载全国30个主要城市的实时天气数据。

## 已完成的修改

### 1. EChartsMap组件新增属性

在 [index.tsx](file:///Users/ylgao/jenusWork/AI-learn/lowcode/packages/echarts-for-lowcode/src/index.tsx) 中：

```typescript
export interface EChartsMapProps extends EChartsForLowCodeProps {
  // ... 其他属性
  fetchWeatherData?: boolean;    // 是否自动加载天气数据
  weatherApiKey?: string;        // 天气API密钥（可选，默认使用amapConfig.key）
}
```

**新增功能：**
- ✅ `fetchWeatherData: true` - 启用自动加载天气数据
- ✅ `weatherApiKey: 'YOUR_KEY'` - 指定API密钥
- ✅ 自动更新图表数据
- ✅ 丰富的tooltip显示（气温、天气、湿度、风向、风力）

### 2. 高德地图天气模板已更新

在 [amap-weather-dashboard.json](file:///Users/ylgao/jenusWork/AI-learn/lowcode/public/templates/amap-weather-dashboard.json) 中：

```json
{
  "componentName": "EChartsMap",
  "props": {
    "useAMap": true,
    "amapConfig": {
      "key": "a8ccb6e2ff941475cded213aeb3cf8c5",
      "version": "2.0",
      "plugins": ["AMap.Scale", "AMap.ToolBar"]
    },
    "fetchWeatherData": true,  // ← 新增：启用真实天气数据
    "style": { "width": "100%", "flex": 1, "minHeight": "600px" }
  }
}
```

## 使用方法

### 方法1：直接导入模板（推荐）

1. **刷新浏览器页面**
2. **点击"导入模板"按钮**
3. **选择"高德地图天气大屏"**
4. **查看效果**：
   - 地图自动显示30个城市的实时气温
   - 鼠标悬停显示详细信息（气温、天气、湿度等）
   - 数据颜色根据温度自动调整

### 方法2：手动配置

在任何使用EChartsMap的模板中添加配置：

```json
{
  "componentName": "EChartsMap",
  "props": {
    "useAMap": true,
    "amapConfig": {
      "key": "你的API密钥",
      "version": "2.0"
    },
    "fetchWeatherData": true,
    "option": {
      "series": [{
        "type": "scatter",
        "coordinateSystem": "amap"
      }]
    }
  }
}
```

## 工作原理

### 加载流程

1. **组件挂载** → `componentDidMount()`
2. **初始化地图** → `initAMap()` 或 `registerChinaMap()`
3. **检查配置** → 如果 `fetchWeatherData === true`
4. **延迟1秒后加载** → `setTimeout(() => this.loadWeatherData(), 1000)`
5. **调用API** → `fetchAMapWeatherData(apiKey)`
6. **获取30个城市数据** → 并发请求高德天气API
7. **更新图表** → `chartInstance.setOption(updatedOption)`

### 数据格式

返回的天气数据包含：
```typescript
interface WeatherData {
  name: string;           // 城市名称：北京、上海、广州...
  value: [lng, lat, temp] // [经度, 纬度, 温度]
  temperature: string;    // 温度："22"
  weather: string;        // 天气："晴"、"多云"...
  humidity: string;       // 湿度："45"
  windDirection: string;  // 风向："西"、"东北"...
  windPower: string;      // 风力："≤3"、"3-4级"...
}
```

### Tooltip显示效果

鼠标悬停在散点上会显示：
```
北京
气温: 22°C
天气: 晴
湿度: 45%
风向: 西
风力: ≤3
```

## 支持的城市（30个）

| 区域 | 城市 |
|------|------|
| 华北 | 北京、天津、呼和浩特 |
| 东北 | 哈尔滨、长春、沈阳、大连 |
| 华东 | 上海、南京、杭州、苏州、济南、青岛、厦门 |
| 华中 | 武汉、郑州、长沙 |
| 华南 | 广州、深圳、南宁、海口 |
| 西南 | 成都、重庆、昆明、贵阳、拉萨 |
| 西北 | 西安、兰州、乌鲁木齐、银川 |

## 配置说明

### 必需配置

```json
{
  "useAMap": true,
  "amapConfig": {
    "key": "你的API密钥"  // 必需！用于加载地图和查询天气
  },
  "fetchWeatherData": true  // 启用天气数据加载
}
```

### 可选配置

```json
{
  "weatherApiKey": "另一个密钥",  // 可选，如果不填则使用amapConfig.key
  "option": {
    "visualMap": {...},           // 自定义颜色映射
    "tooltip": {...}              // 自定义提示框样式
  }
}
```

## API配额说明

### 免费版限制
- **Web服务 (REST API)**：5000次/天
- **每次加载消耗**：30次（30个城市）
- **每日可加载次数**：166次（5000 ÷ 30）

### 缓存机制
- 天气数据会缓存，同一页面内不重复请求
- 刷新页面后会重新加载最新数据
- 可以通过控制台清除缓存测试

## 调试技巧

### 查看日志

打开浏览器控制台，应该看到：

```javascript
[EChartsMap] Props received: { useAMap: true, amapConfig: {...}, ... }
[EChartsMap] useAMap is true, initializing AMap...
[EChartsMap] Loading AMap API with key: a8ccb6e...
[EChartsMap] AMap API loaded successfully
[EChartsMap] Initializing ECharts with AMap...
[EChartsMap] ECharts with AMap initialized successfully
[EChartsMap] Loading weather data with key: a8ccb6e...  // ← 这行表示开始加载天气数据
[EChartsMap] Weather data loaded successfully: 30 cities  // ← 加载成功
[EChartsMap] Chart updated with real-time weather data     // ← 图表已更新
```

### 手动测试API

在控制台执行：

```javascript
// 测试单个城市
fetch('https://restapi.amap.com/v3/weather/weatherInfo?city=110000&key=你的密钥&extensions=base&output=JSON')
  .then(r => r.json())
  .then(console.log)

// 测试所有城市
import { fetchAMapWeatherData } from '@jenusdong/echarts-for-lowcode';
const data = await fetchAMapWeatherData('你的密钥');
console.log(data);
```

### 清除缓存

如果需要强制重新加载数据：

```javascript
// 在控制台执行（需要先暴露变量或修改代码）
window.__echarts_map_weather_cache__ = null;
```

## 常见问题

### Q1: 天气数据没有加载？
**A:** 检查控制台是否有以下日志：
- `[EChartsMap] Loading weather data with key:` - 表示已触发加载
- `[EChartsMap] Weather data loaded successfully:` - 表示加载成功

如果没有看到这些日志：
1. 确认 `fetchWeatherData: true` 已配置
2. 确认 `amapConfig.key` 有效
3. 刷新页面重试

### Q2: 显示"未知"天气？
**A:** 可能原因：
- API密钥无效或过期
- 该城市的adcode错误
- 网络问题导致请求失败

解决方法：
1. 检查Network标签页中的API请求状态码
2. 确认API密钥已启用"Web服务"权限
3. 尝试更换其他API密钥

### Q3: 地图底图不随容器扩展？
**A:** 已修复！现在使用ResizeObserver监听容器尺寸变化，地图会自动调整大小。

### Q4: 如何只显示部分城市？
**A:** 修改 `CITY_AD_CODE_MAP` 对象，删除不需要的城市即可。

## 下一步建议

1. **添加定时刷新**：每5分钟自动更新天气数据
2. **添加天气预报**：显示未来几天的天气预报
3. **添加天气图标**：根据天气状况显示对应图标
4. **优化性能**：添加loading状态和错误处理UI

需要我实现这些功能吗？🚀
