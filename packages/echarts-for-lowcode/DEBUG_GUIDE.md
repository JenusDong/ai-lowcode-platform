# 高德地图调试指南

## 问题排查步骤

### 1. 检查浏览器控制台日志

打开浏览器开发者工具（F12），查看控制台输出：

#### 正常情况应该看到：
```
[EChartsMap] Loading AMap API with key: YOUR_AMA...
[EChartsMap] AMap API loaded successfully
[EChartsMap] Initializing ECharts with AMap...
[EChartsMap] AMap option: {center: [105, 35], zoom: 5, ...}
[EChartsMap] Series config: [{...}]
[EChartsMap] ECharts with AMap initialized successfully
```

#### 如果看到错误：
- `[EChartsMap] AMap not found` → API密钥无效或网络问题
- `[EChartsMap] Failed to initialize AMap chart` → 配置错误

### 2. 检查网络请求

在开发者工具的 Network 标签页中，查看是否有以下请求：
- `https://webapi.amap.com/maps?v=2.0&key=...` → 高德地图API
- 请求状态应该是 200

### 3. 检查DOM结构

在 Elements 标签页中，检查地图容器：
```html
<div style="height: 600px; width: 100%;">
  <!-- 应该有高德地图的canvas元素 -->
  <canvas class="amap-layer"></canvas>
</div>
```

### 4. 验证API密钥

#### 获取高德地图API密钥：
1. 访问 https://lbs.amap.com/
2. 注册/登录账号
3. 进入控制台 → 应用管理 → 我的应用
4. 创建新应用，添加Key（选择Web端(JS API)）

#### 配置API密钥：
在模板中找到 `amapConfig` 配置：
```json
{
  "useAMap": true,
  "amapConfig": {
    "key": "你的真实API密钥",  // 替换YOUR_AMAP_KEY
    "version": "2.0",
    "plugins": ["AMap.Scale", "AMap.ToolBar"]
  }
}
```

### 5. 常见问题解决

#### 问题1：地图不显示，无报错
**原因**：API密钥无效或未配置
**解决**：
1. 确认已配置真实的API密钥
2. 检查API密钥是否有域名限制
3. 检查API密钥是否已启用Web端JS API服务

#### 问题2：地图显示空白
**原因**：容器高度为0
**解决**：
1. 检查组件的 `style.height` 配置
2. 确保父容器有明确的高度
```json
{
  "style": {
    "width": "100%",
    "flex": 1,
    "minHeight": "600px"  // 确保有高度
  }
}
```

#### 问题3：散点不显示
**原因**：坐标系配置错误
**解决**：
确保series中配置了 `coordinateSystem: "amap"`
```json
{
  "series": [{
    "type": "scatter",
    "coordinateSystem": "amap",  // 必须配置
    "data": [...]
  }]
}
```

### 6. 测试步骤

#### 步骤1：刷新页面
```bash
# 重启开发服务器
npm run start
```

#### 步骤2：导入模板
1. 点击"导入模板"按钮
2. 选择"高德地图天气大屏"
3. 查看控制台日志

#### 步骤3：配置API密钥
1. 在画布中选中EChartsMap组件
2. 在右侧属性面板中找到 `amapConfig.key`
3. 输入你的真实API密钥
4. 查看地图是否显示

### 7. 调试技巧

#### 在浏览器控制台手动测试：
```javascript
// 检查AMap是否加载
console.log('AMap:', window.AMap);

// 检查ECharts是否加载
console.log('ECharts:', window.echarts);

// 检查echarts-amap扩展
console.log('ECharts components:', echarts.bindings);
```

#### 检查地图实例：
```javascript
// 在组件渲染后，查找地图实例
const charts = document.querySelectorAll('div[data-leaf]');
console.log('Chart instances:', charts);
```

### 8. 验证清单

- [ ] API密钥已配置且有效
- [ ] 控制台无错误信息
- [ ] 网络请求成功（200状态）
- [ ] DOM中有canvas元素
- [ ] 容器有明确的高度
- [ ] series配置了coordinateSystem: 'amap'

### 9. 联系支持

如果以上步骤都无法解决问题，请提供：
1. 浏览器控制台完整日志
2. Network标签页截图
3. Elements标签页截图（地图容器部分）
4. API密钥配置信息（密钥可打码）

## 快速测试

### 使用内置中国地图（无需API密钥）
如果暂时没有高德地图API密钥，可以使用内置中国地图：
1. 导入"全国天气大屏"模板
2. 该模板使用ECharts内置地图，无需配置

### 切换到高德地图
1. 在组件props中设置 `useAMap: true`
2. 配置 `amapConfig.key`
3. 确保series使用 `coordinateSystem: 'amap'`
