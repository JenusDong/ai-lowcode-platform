# 高德地图天气API集成指南

## 功能概述

v1.3.0 版本新增了高德天气API集成功能，可以获取全国30个主要城市的实时天气数据。

## 新增功能

### 1. 天气数据获取函数

```typescript
import { fetchAMapWeatherData, WeatherData } from '@jenusdong/echarts-for-lowcode';

// 获取天气数据
const weatherData = await fetchAMapWeatherData('YOUR_AMAP_KEY');

// 返回数据格式
interface WeatherData {
  name: string;           // 城市名称
  value: [number, number, number]; // [经度, 纬度, 温度]
  temperature: string;    // 温度
  weather: string;        // 天气状况
  humidity: string;       // 湿度
  windDirection: string;  // 风向
  windPower: string;      // 风力
}
```

### 2. 支持的城市（30个）

北京、上海、广州、深圳、杭州、南京、武汉、成都、重庆、西安、天津、苏州、郑州、长沙、沈阳、青岛、大连、厦门、济南、哈尔滨、长春、昆明、贵阳、南宁、海口、兰州、乌鲁木齐、拉萨、呼和浩特、银川

## 使用方法

### 方式一：在代码中使用

```javascript
import { fetchAMapWeatherData } from '@jenusdong/echarts-for-lowcode';

async function loadWeatherData() {
  const data = await fetchAMapWeatherData('你的API密钥');
  
  // 更新ECharts option
  const option = {
    series: [{
      type: 'scatter',
      coordinateSystem: 'amap',
      data: data.map(city => ({
        name: city.name,
        value: city.value,
        temperature: city.temperature,
        weather: city.weather
      }))
    }]
  };
  
  chart.setOption(option);
}
```

### 方式二：在低代码平台中使用

在EChartsMap组件的props中配置：

```json
{
  "componentName": "EChartsMap",
  "props": {
    "useAMap": true,
    "amapConfig": {
      "key": "YOUR_AMAP_KEY",
      "version": "2.0"
    },
    "fetchWeatherData": true,
    "weatherApiKey": "YOUR_AMAP_KEY",
    "option": {
      "series": [{
        "type": "scatter",
        "coordinateSystem": "amap"
      }]
    }
  }
}
```

## 地图Resize修复

### 问题
地图底图不随容器扩展而自动调整大小

### 解决方案
已添加 ResizeObserver 监听器，当容器尺寸变化时：
1. 自动调整 ECharts 图表尺寸
2. 自动调整高德地图实例尺寸
3. 保持地图和图表的同步

### 配置
无需额外配置，自动生效。

## API密钥申请

### 1. 访问高德开放平台
https://lbs.amap.com/

### 2. 创建应用
- 注册/登录账号
- 进入"控制台" → "应用管理" → "我的应用"
- 点击"创建新应用"

### 3. 添加Key
- 选择"Web端(JS API)"
- 填写应用名称
- 获取Key

### 4. 启用服务
确保以下服务已启用：
- ✅ Web服务 (REST API) - 用于天气查询
- ✅ Web端 (JS API) - 用于地图展示

## 天气API详情

### 接口地址
```
GET https://restapi.amap.com/v3/weather/weatherInfo
```

### 参数说明
| 参数 | 必填 | 说明 |
|------|------|------|
| key | 是 | API密钥 |
| city | 是 | 城市编码(adcode) |
| extensions | 否 | 输出类型：base(实况)/all(预报) |
| output | 否 | 返回格式：JSON/XML |

### 返回示例
```json
{
  "status": "1",
  "lives": [
    {
      "province": "北京",
      "city": "北京市",
      "adcode": "110000",
      "weather": "晴",
      "temperature": "22",
      "winddirection": "西",
      "windpower": "≤3",
      "humidity": "45",
      "reporttime": "2026-04-15 20:30+08:00"
    }
  ]
}
```

## 注意事项

1. **API配额**：免费版每天5000次调用，足够日常使用
2. **缓存机制**：天气数据会缓存，避免重复请求
3. **错误处理**：单个城市请求失败不影响其他城市
4. **跨域问题**：已在组件中处理CORS问题

## 调试技巧

### 查看天气数据加载日志
```javascript
// 控制台会显示
[EChartsMap] Weather data loaded: 30 cities
```

### 手动测试API
```bash
# 测试北京天气
curl "https://restapi.amap.com/v3/weather/weatherInfo?city=110000&key=YOUR_KEY&extensions=base&output=JSON"
```

### 清除缓存
```javascript
// 在控制台执行
window.__echarts_map_weather_cache__ = null;
```
