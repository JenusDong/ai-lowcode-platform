# LowCodeEngine 新增组件注意事项

## 一、组件开发流程

### 1. 创建组件实现

**目录结构**：
```
src/plugins/plugin-xxx/
├── components/
│   └── ComponentName/
│       ├── ComponentName.tsx    # 组件实现
│       ├── ComponentName.scss   # 样式文件
│       └── index.ts             # 导出文件
├── meta/
│   └── componentNameMeta.ts     # 物料元数据
├── types/
│   └── types.ts                 # 类型定义
└── index.ts                     # 插件入口
```

**关键点**：
- 使用 React 函数组件
- 遵循 TypeScript 类型规范
- 样式使用 SCSS Modules

### 2. 创建物料元数据

**文件**：`meta/componentNameMeta.ts`

```typescript
export default {
  componentName: 'ComponentName',
  title: '组件标题',
  docUrl: '',
  screenshot: '',
  npm: {
    package: 'xxx-components',
    version: '1.0.0',
    exportName: 'ComponentName',
    destructuring: true,
  },
  props: [
    // 组件属性定义
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onClick', description: '点击事件' },
      ],
    },
    props: [
      // 属性面板配置
    ],
  },
  icon: 'https://example.com/icon.png',
  category: '组件分类',
  group: '组件分组',
  snippets: [
    // 组件模板
  ],
}
```

### 3. 创建插件入口文件

**文件**：`index.ts`

```typescript
import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import ComponentNameMeta from './meta/componentNameMeta'

const XxxComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'XxxComponentsPlugin',
    async init() {
      const { material } = ctx
      
      material.loadIncrementalAssets({
        version: '1.0.0',
        components: [
          ComponentNameMeta,
        ],
      })
    },
  }
}

XxxComponentsPlugin.pluginName = 'XxxComponentsPlugin'

export default XxxComponentsPlugin
```

### 4. 注册插件到编辑器

**文件**：`src/index.ts`

```typescript
import XxxComponentsPlugin from './plugins/plugin-xxx'

// 在 registerPlugins 函数中注册
await plugins.register(XxxComponentsPlugin)
```

---

## 二、关键步骤：创建 UMD 文件和 Meta 文件 ⚠️

### 为什么需要这一步？

**问题**：如果只完成上述步骤，组件在编辑器中会显示 "component not found" 错误。

**原因**：LowCodeEngine 需要通过 UMD 格式的文件来加载组件，而不是直接使用源代码。

### 1. 创建 UMD 文件

**文件**：`public/xxx-components.umd.js`

**格式**：
```javascript
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('react'), require('react-dom'));
  } else {
    var result = factory(root.React, root.ReactDOM);
    root.XxxComponents = result;
    root.XxxComponents.ComponentName = result.ComponentName;
  }
}(typeof self !== 'undefined' ? self : this, function(React, ReactDOM) {
  'use strict';
  
  // 组件实现代码
  var ComponentName = function(props) {
    // 组件逻辑
  };
  
  return {
    ComponentName: ComponentName
  };
}));
```

**关键点**：
- 必须使用 UMD 格式
- 必须暴露全局变量（如 `XxxComponents`）
- 必须将组件挂载到全局变量上（如 `XxxComponents.ComponentName`）

### 2. 创建 Meta 文件

**文件**：`public/xxx-components-meta.js`

**格式**：
```javascript
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.XxxComponentsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  return {
    componentName: 'ComponentName',
    title: '组件标题',
    // ... 其他元数据
  };
}));
```

**关键点**：
- 必须使用 UMD 格式
- 必须暴露全局变量（如 `XxxComponentsMeta`）
- 元数据必须与 `meta/componentNameMeta.ts` 保持一致

---

## 三、关键步骤：配置 assets.json ⚠️

### 为什么这一步很重要？

**问题**：如果 assets.json 配置错误，会导致：
1. 组件库面板显示空白
2. 无法选择组件
3. 编辑器加载失败

### 正确的配置方式

**文件**：`src/services/assets.json`

#### 1. 在 packages 数组中添加组件包

```json
{
  "packages": [
    // ... 其他包
    {
      "package": "xxx-components",
      "version": "1.0.0",
      "library": "XxxComponents",
      "urls": [
        "/xxx-components.umd.js"
      ],
      "editUrls": [
        "/xxx-components.umd.js"
      ]
    }
  ]
}
```

**关键点**：
- `package`：包名，必须与 meta 中的 `npm.package` 一致
- `library`：全局变量名，必须与 UMD 文件中暴露的变量名一致
- `urls`：UMD 文件的路径
- `editUrls`：编辑器中使用的 UMD 文件路径（通常与 urls 相同）

#### 2. 在 components 数组中添加元数据

```json
{
  "components": [
    // ... 其他组件
    {
      "exportName": "XxxComponentsMeta",
      "npm": {
        "package": "xxx-components",
        "version": "1.0.0"
      },
      "url": "/xxx-components-meta.js"
    }
  ]
}
```

**关键点**：
- `exportName`：元数据全局变量名，必须与 Meta 文件中暴露的变量名一致
- `npm.package`：包名，必须与 packages 中的 `package` 一致
- `url`：Meta 文件的路径

### 常见错误

#### 错误 1：重复的包定义

**错误示例**：
```json
{
  "packages": [
    {
      "package": "echarts-component",
      "version": "1.0.0",
      "library": "EChartsComponent",
      "urls": ["/echarts-component.umd.js"]
    },
    {
      "package": "echarts-component",  // ❌ 重复定义
      "version": "1.0.0",
      "library": "EChartsComponent",
      "urls": ["/echarts-component.umd.js"]
    }
  ]
}
```

**正确示例**：
```json
{
  "packages": [
    {
      "package": "echarts-component",
      "version": "1.0.0",
      "library": "EChartsComponent",
      "urls": ["/echarts-component.umd.js"]
    }
  ]
}
```

#### 错误 2：library 名称不一致

**错误示例**：
```json
{
  "packages": [
    {
      "package": "mall-components",
      "library": "MallComponent",  // ❌ 名称不一致
      "urls": ["/mall-components.umd.js"]
    }
  ]
}
```

**正确示例**：
```json
{
  "packages": [
    {
      "package": "mall-components",
      "library": "MallComponents",  // ✅ 与 UMD 文件中的全局变量一致
      "urls": ["/mall-components.umd.js"]
    }
  ]
}
```

#### 错误 3：exportName 不一致

**错误示例**：
```json
{
  "components": [
    {
      "exportName": "MallComponentMeta",  // ❌ 名称不一致
      "npm": {
        "package": "mall-components"
      },
      "url": "/mall-components-meta.js"
    }
  ]
}
```

**正确示例**：
```json
{
  "components": [
    {
      "exportName": "MallComponentsMeta",  // ✅ 与 Meta 文件中的全局变量一致
      "npm": {
        "package": "mall-components"
      },
      "url": "/mall-components-meta.js"
    }
  ]
}
```

---

## 四、完整流程检查清单

### 开发阶段

- [ ] 创建组件实现（React 组件）
- [ ] 创建物料元数据（meta.ts）
- [ ] 创建类型定义（types.ts）
- [ ] 创建插件入口文件
- [ ] 注册插件到编辑器

### 构建阶段

- [ ] 创建 UMD 文件
- [ ] 创建 Meta 文件
- [ ] 确保 UMD 文件暴露正确的全局变量
- [ ] 确保 Meta 文件暴露正确的全局变量

### 配置阶段

- [ ] 在 assets.json 的 packages 数组中添加组件包
- [ ] 在 assets.json 的 components 数组中添加元数据
- [ ] 确保 package 名称一致
- [ ] 确保 library 名称与 UMD 文件一致
- [ ] 确保 exportName 与 Meta 文件一致
- [ ] 检查是否有重复的包定义

### 测试阶段

- [ ] 启动开发服务器
- [ ] 检查组件面板是否显示组件
- [ ] 拖拽组件到画布
- [ ] 检查组件是否正常渲染
- [ ] 测试组件属性配置
- [ ] 测试组件事件绑定

---

## 五、调试技巧

### 1. 检查浏览器控制台

打开浏览器控制台，查看是否有以下错误：
- `Component not found`
- `Failed to load resource`
- `Uncaught TypeError`

### 2. 检查全局变量

在浏览器控制台中输入：
```javascript
// 检查组件全局变量
console.log(window.XxxComponents)

// 检查元数据全局变量
console.log(window.XxxComponentsMeta)
```

### 3. 检查网络请求

打开浏览器开发者工具的 Network 标签，查看：
- UMD 文件是否成功加载
- Meta 文件是否成功加载
- 是否有 404 错误

### 4. 检查 assets.json

使用 JSON 验证工具检查 assets.json 是否有语法错误。

---

## 六、最佳实践

### 1. 命名规范

- **包名**：使用 kebab-case（如 `mall-components`）
- **全局变量名**：使用 PascalCase（如 `MallComponents`）
- **组件名**：使用 PascalCase（如 `ProductList`）
- **元数据导出名**：使用 PascalCase + Meta（如 `MallComponentsMeta`）

### 2. 版本管理

- 使用语义化版本号（如 `1.0.0`）
- 保持 package.json、assets.json 和 meta 文件中的版本号一致

### 3. 文件组织

- UMD 文件和 Meta 文件放在 `public/` 目录
- 源代码放在 `src/plugins/` 目录
- 类型定义放在 `types/` 目录

### 4. 文档

- 为每个组件编写 README.md
- 记录组件的属性、事件和使用示例
- 记录已知问题和解决方案

---

## 七、常见问题 FAQ

### Q1: 为什么组件在面板中显示，但拖拽后显示 "component not found"？

**A**: 这是因为 UMD 文件没有正确暴露全局变量。请检查：
1. UMD 文件是否存在
2. UMD 文件是否正确暴露了全局变量
3. assets.json 中的 library 名称是否与 UMD 文件中的全局变量名一致

### Q2: 为什么组件库面板显示空白？

**A**: 这通常是因为 assets.json 配置错误。请检查：
1. 是否有重复的包定义
2. JSON 格式是否正确
3. 是否有语法错误

### Q3: 为什么组件无法加载？

**A**: 请检查：
1. UMD 文件路径是否正确
2. Meta 文件路径是否正确
3. 网络请求是否成功（查看 Network 标签）

### Q4: 如何调试组件？

**A**: 
1. 在浏览器控制台中检查全局变量
2. 使用 `console.log` 输出调试信息
3. 使用 React Developer Tools 检查组件状态

---

## 八、参考资源

### 官方文档

- [LowCodeEngine 官方文档](https://lowcode-engine.cn/)
- [物料开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/material)
- [插件开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/plugin)

### 示例项目

- [ECharts 组件](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-echarts)
- [Layout 组件](file:///Users/ylgao/jenusWork/AI-learn/lowcode/public/layout-components.umd.js)
- [电商组件](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-mall-components)

### 相关文档

- [电商业务模块集成规划](./mall_components_integration_plan.md)
- [商品管理系统原型验证计划](./mall_prototype_validation_plan.md)
