# 新增组件注意事项

## 一、概述

本文档记录了在低代码平台中新增组件时必须遵循的步骤和注意事项，避免常见的错误。

---

## 二、必须实现的步骤

### 步骤 1：创建组件实现

**文件位置**：`src/plugins/plugin-xxx/components/ComponentName/ComponentName.tsx`

**关键点**：
- 使用 React 函数组件或类组件
- 导出组件：`export default ComponentName`
- 定义清晰的 Props 接口

**示例**：
```typescript
import React from 'react'

interface ComponentNameProps {
  prop1?: string
  prop2?: number
  onEvent?: (data: any) => void
}

const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2,
  onEvent,
}) => {
  return (
    <div className="component-name">
      {/* 组件实现 */}
    </div>
  )
}

export default ComponentName
```

---

### 步骤 2：创建物料元数据

**文件位置**：`src/plugins/plugin-xxx/meta/componentNameMeta.ts`

**关键点**：
- 定义组件的所有属性
- 配置属性面板的 Setter
- 定义组件的事件
- 提供组件模板（snippets）

**示例**：
```typescript
export default {
  componentName: 'ComponentName',
  title: '组件名称',
  docUrl: '',
  screenshot: '',
  npm: {
    package: 'xxx-components',
    version: '1.0.0',
    exportName: 'ComponentName',
    destructuring: true,
  },
  props: [
    {
      name: 'prop1',
      propType: 'string',
      description: '属性1',
      setter: 'StringSetter',
    },
    {
      name: 'prop2',
      propType: 'number',
      description: '属性2',
      setter: 'NumberSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        { name: 'onEvent', description: '事件描述' },
      ],
    },
    props: [
      {
        type: 'group',
        title: '属性配置',
        display: 'accordion',
        items: [
          { name: 'prop1' },
          { name: 'prop2' },
        ],
      },
    ],
  },
  icon: 'https://example.com/icon.png',
  category: '组件分类',
  group: '组件分组',
  snippets: [
    {
      title: '组件模板',
      schema: {
        componentName: 'ComponentName',
        props: {
          prop1: '默认值',
          prop2: 100,
        },
      },
    },
  ],
}
```

---

### 步骤 3：创建插件入口文件

**文件位置**：`src/plugins/plugin-xxx/index.ts`

**关键点**：
- 使用 `IPublicModelPluginContext` 类型
- 通过 `material.loadIncrementalAssets` 注册组件
- 导出插件名称和元数据

**示例**：
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
XxxComponentsPlugin.meta = {
  dependencies: [],
  engines: {
    lowcodeEngine: '^1.1.2',
  },
}

export default XxxComponentsPlugin
```

---

### 步骤 4：注册插件到编辑器

**文件位置**：`src/index.ts`

**关键点**：
- 导入插件
- 使用 `plugins.register` 注册插件

**示例**：
```typescript
import XxxComponentsPlugin from './plugins/plugin-xxx'

async function registerPlugins() {
  // ... 其他插件注册
  
  await plugins.register(XxxComponentsPlugin)
}
```

---

### 步骤 5：创建 UMD 文件 ⭐ 关键步骤

**文件位置**：`public/xxx-components.umd.js`

**关键点**：
- 使用 UMD 格式包装组件
- 暴露全局变量（必须与 assets.json 中的 library 一致）
- 正确处理依赖（React、Ant Design 等）

**示例**：
```javascript
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'antd'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('react'), require('antd'));
  } else {
    var result = factory(root.React, root.antd);
    root.XxxComponents = result;  // ⭐ 全局变量名
    root.XxxComponents.ComponentName = result.ComponentName;
  }
}(typeof self !== 'undefined' ? self : this, function(React, antd) {
  'use strict';
  
  // 组件实现代码
  
  var ComponentName = function(props) {
    // 组件实现
  };
  
  return {
    ComponentName: ComponentName
  };
}));
```

**注意事项**：
- ⚠️ 全局变量名必须与 assets.json 中的 `library` 字段一致
- ⚠️ 必须正确处理外部依赖（React、Ant Design 等）
- ⚠️ 组件必须通过 return 暴露出来

---

### 步骤 6：创建 Meta 文件 ⭐ 关键步骤

**文件位置**：`public/xxx-components-meta.js`

**关键点**：
- 使用 UMD 格式包装元数据
- 暴露全局变量（必须与 assets.json 中的 exportName 一致）
- 元数据必须与源文件中的定义一致

**示例**：
```javascript
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.XxxComponentsMeta = factory();  // ⭐ 全局变量名
  }
}(typeof self !== 'undefined' ? self : this, function() {
  return {
    componentName: 'ComponentName',
    title: '组件名称',
    // ... 其他元数据
  };
}));
```

**注意事项**：
- ⚠️ 全局变量名必须与 assets.json 中的 `exportName` 字段一致
- ⚠️ 元数据内容必须与源文件中的定义完全一致

---

### 步骤 7：更新 assets.json ⭐ 关键步骤

**文件位置**：`src/services/assets.json`

**关键点**：
- 在 `packages` 数组中添加组件包配置
- 在 `components` 数组中添加元数据配置
- ⚠️ 避免重复的包定义

**示例**：
```json
{
  "packages": [
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
  ],
  "components": [
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

**注意事项**：
- ⚠️ `package` 名称必须唯一，不能重复
- ⚠️ `library` 名称必须与 UMD 文件中的全局变量名一致
- ⚠️ `exportName` 必须与 Meta 文件中的全局变量名一致
- ⚠️ `urls` 和 `editUrls` 通常使用相同的路径

---

## 三、常见错误

### 错误 1：组件在面板中显示，但拖拽后显示 "component not found"

**原因**：UMD 文件没有正确暴露全局变量

**解决方案**：
1. 检查 UMD 文件是否存在
2. 检查 UMD 文件是否正确暴露了全局变量
3. 检查 assets.json 中的 `library` 名称是否与 UMD 文件中的全局变量名一致

**示例**：
```javascript
// ❌ 错误：没有暴露全局变量
(function(root, factory) {
  // ...
}(typeof self !== 'undefined' ? self : this, function(React) {
  var ComponentName = function(props) { /* ... */ };
  // ❌ 缺少 return
}));

// ✅ 正确：暴露全局变量
(function(root, factory) {
  // ...
}(typeof self !== 'undefined' ? self : this, function(React) {
  var ComponentName = function(props) { /* ... */ };
  return {
    ComponentName: ComponentName
  };
}));
```

---

### 错误 2：组件库面板显示空白

**原因**：assets.json 配置错误

**解决方案**：
1. 检查是否有重复的包定义
2. 检查 JSON 格式是否正确
3. 检查文件路径是否正确
4. ⚠️ **确保 UMD 文件和 Meta 文件存在**

**示例**：
```json
// ❌ 错误：重复的包定义
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

// ✅ 正确：唯一的包定义
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

**实际案例**：
- **问题**：在添加 `mall-components` 后，组件库面板显示空白，无法选择任何组件
- **原因**：assets.json 中存在重复的 `echarts-component` 包定义
- **解决**：删除重复的包定义，确保每个包只定义一次

---

### 错误 3：组件无法加载依赖

**原因**：UMD 文件没有正确处理外部依赖

**解决方案**：
1. 在 UMD 包装器中声明依赖
2. 使用全局变量访问依赖

**示例**：
```javascript
// ❌ 错误：没有声明依赖
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);  // ❌ 缺少依赖
  } else {
    var result = factory();  // ❌ 缺少依赖
    root.XxxComponents = result;
  }
}(typeof self !== 'undefined' ? self : this, function() {
  // ❌ 无法访问 React 和 antd
  var ComponentName = function(props) {
    return React.createElement('div');  // ❌ React 未定义
  };
}));

// ✅ 正确：声明依赖
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'antd'], factory);  // ✅ 声明依赖
  } else {
    var result = factory(root.React, root.antd);  // ✅ 传入依赖
    root.XxxComponents = result;
  }
}(typeof self !== 'undefined' ? self : this, function(React, antd) {
  // ✅ 可以访问 React 和 antd
  var ComponentName = function(props) {
    return React.createElement('div');
  };
  return {
    ComponentName: ComponentName
  };
}));
```

---

### 错误 4：属性面板配置不生效

**原因**：元数据配置错误

**解决方案**：
1. 检查 props 配置是否正确
2. 检查 Setter 是否存在
3. 检查 configure 配置是否正确

**示例**：
```typescript
// ❌ 错误：Setter 名称错误
{
  name: 'prop1',
  setter: 'StringSettr',  // ❌ 拼写错误
}

// ✅ 正确：Setter 名称正确
{
  name: 'prop1',
  setter: 'StringSetter',  // ✅ 正确
}
```

---

## 四、调试技巧

### 1. 检查文件是否加载

打开浏览器开发者工具的 Network 标签，查看：
- UMD 文件是否成功加载（状态码 200）
- Meta 文件是否成功加载（状态码 200）
- 是否有 404 错误

### 2. 检查全局变量

打开浏览器开发者工具的 Console 标签，输入：
```javascript
// 检查 UMD 文件是否暴露了全局变量
console.log(window.XxxComponents)

// 检查 Meta 文件是否暴露了全局变量
console.log(window.XxxComponentsMeta)
```

### 3. 检查 assets.json

使用 JSON 验证工具检查 assets.json 是否有语法错误：
- JSONLint: https://jsonlint.com/
- VS Code 内置 JSON 验证

### 4. 检查组件注册

打开浏览器开发者工具的 Console 标签，输入：
```javascript
// 检查组件是否注册
console.log(window.AliLowCodeEngine.material.getComponents())
```

---

## 五、最佳实践

### 1. 命名规范

| 类型 | 命名规范 | 示例 |
|------|---------|------|
| 包名 | kebab-case | `mall-components` |
| 全局变量名 | PascalCase | `MallComponents` |
| 组件名 | PascalCase | `ProductList` |
| 元数据导出名 | PascalCase + Meta | `MallComponentsMeta` |
| 插件名 | PascalCase + Plugin | `MallComponentsPlugin` |

### 2. 版本管理

- 使用语义化版本号（如 `1.0.0`）
- 保持 package.json、assets.json 和 meta 文件中的版本号一致
- 使用版本控制管理 UMD 和 Meta 文件

### 3. 文件组织

```
project/
├── public/
│   ├── xxx-components.umd.js      # UMD 文件
│   └── xxx-components-meta.js     # Meta 文件
├── src/
│   ├── plugins/
│   │   └── plugin-xxx/
│   │       ├── components/
│   │       │   └── ComponentName/
│   │       │       ├── ComponentName.tsx
│   │       │       └── index.ts
│   │       ├── meta/
│   │       │   └── componentNameMeta.ts
│   │       └── index.ts
│   ├── services/
│   │   └── assets.json
│   └── index.ts
└── package.json
```

### 4. 文档

为每个组件编写 README.md，包括：
- 组件功能说明
- 属性列表和说明
- 事件列表和说明
- 使用示例
- 已知问题和解决方案

---

## 六、检查清单

在完成组件开发后，请按照以下清单检查：

### 文件检查
- [ ] 组件实现文件存在
- [ ] 元数据文件存在
- [ ] 插件入口文件存在
- [ ] UMD 文件存在
- [ ] Meta 文件存在

### 配置检查
- [ ] assets.json 中添加了包配置
- [ ] assets.json 中添加了组件配置
- [ ] 没有重复的包定义
- [ ] library 名称与 UMD 全局变量名一致
- [ ] exportName 与 Meta 全局变量名一致

### 功能检查
- [ ] 组件在面板中显示
- [ ] 组件可以拖拽到画布
- [ ] 组件可以正常渲染
- [ ] 属性面板可以配置
- [ ] 事件可以绑定

### 调试检查
- [ ] 确保参考DEBUG_GUIDE.md 中的解决方案
- [ ] UMD 文件成功加载（Network 标签）
- [ ] Meta 文件成功加载（Network 标签）
- [ ] 全局变量正确暴露（Console 标签）
- [ ] 组件正确注册（Console 标签）
- [ ] 属性面板配置生效（Console 标签）
---

## 七、参考资源

### 官方文档
- [LowCodeEngine 物料开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/material)
- [LowCodeEngine 插件开发指南](https://lowcode-engine.cn/site/docs/guide/expand/editor/plugin)

### 示例项目
- [ECharts 组件实现](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-echarts)
- [商品列表组件实现](file:///Users/ylgao/jenusWork/AI-learn/lowcode/src/plugins/plugin-mall-components)

---

## 八、更新日志

| 日期 | 版本 | 更新内容 |
|------|------|---------|
| 2026-04-01 | 1.0.0 | 初始版本，记录新增组件的注意事项 |
