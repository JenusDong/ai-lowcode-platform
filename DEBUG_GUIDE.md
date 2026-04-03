# LowCodeEngine 组件调试指南

## 常见问题与解决方案

### 1. 新增组件常见问题 ⭐⭐⭐⭐⭐

#### 问题 1.1: "Component Not Found" 错误

**问题表现**
- 新增组件 A 后，画布中提示 `A component not found`
- 控制台没有明显错误
- 组件已注册但无法显示

**根本原因**
UMD 文件未正确加载或组件未正确注册到 LowCodeEngine。

**解决方案**

```bash
# 步骤 1: 检查组件是否正确导出
# 在 src/plugins/plugin-mall-components/index.ts 中
export { ProductList } from './components/ProductList';

# 步骤 2: 检查组件注册
# 在 src/plugins/plugin-mall-components/index.ts 中
import { plugins } from '@alilc/lowcode-engine';
import { ProductList } from './components/ProductList';

plugins.register({
  name: 'mall-components',
  init() {
    // 注册组件
    return {
      components: [ProductList],
    };
  },
});

# 步骤 3: 重新构建 UMD 文件
npm run build

# 步骤 4: 强制刷新浏览器
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

**诊断方法**
```javascript
// 在浏览器控制台检查组件是否注册
console.log('已注册组件:', window.AliLowCodeEngine?.components);

// 检查 UMD 文件是否加载
console.log('UMD 组件:', window.MallComponents);

// 检查 meta 文件
fetch('/mall-components-meta.js')
  .then(r => r.text())
  .then(console.log);
```

**检查清单**
- [ ] 组件是否正确导出（`export`）
- [ ] 组件是否正确注册（`plugins.register`）
- [ ] meta 文件是否正确配置
- [ ] UMD 文件是否成功构建
- [ ] 浏览器是否强制刷新
- [ ] 是否清除了浏览器缓存

---

#### 问题 1.2: "Component Render Error" 错误

**问题表现**
- 画布中提示 `A component render error, please see console error log`
- 控制台有 JavaScript 错误
- 组件显示为错误状态

**根本原因**
组件渲染过程中抛出异常，通常是：
1. 组件代码有语法错误
2. 组件依赖未正确导入
3. 组件 props 类型不匹配
4. 组件内部逻辑错误（如访问 undefined 属性）

**解决方案**

```javascript
// 步骤 1: 查看控制台错误详情
// 打开浏览器控制台（F12），查看具体错误信息

// 步骤 2: 添加错误边界（Error Boundary）
// 在组件中添加 try-catch
function ProductList(props) {
  try {
    // 组件逻辑
    return <div>...</div>;
  } catch (error) {
    console.error('[ProductList] 渲染错误:', error);
    return <div>组件加载失败: {error.message}</div>;
  }
}

// 步骤 3: 检查 props 是否正确
console.log('[ProductList] 接收到的 props:', props);

// 步骤 4: 添加默认值保护
function ProductList({ 
  dataSource = {},
  columns = [],
  loading = false 
}) {
  // 使用默认值，避免 undefined 错误
}
```

**常见错误类型**

| 错误类型 | 原因 | 解决方案 |
|---------|------|---------|
| `Cannot read property 'xxx' of undefined` | 访问未定义对象的属性 | 添加可选链 `obj?.xxx` 或默认值 |
| `xxx is not a function` | 调用非函数类型的变量 | 检查函数定义和导入 |
| `Cannot read property 'map' of undefined` | 对 undefined 调用 map | 添加默认值 `arr || []` |
| `Unexpected token` | 语法错误 | 检查 JSX 语法和括号匹配 |
| `Module not found` | 依赖未安装或路径错误 | 检查 import 路径和 package.json |

**诊断方法**
```javascript
// 1. 检查组件 props
console.log('组件 props:', JSON.stringify(props, null, 2));

// 2. 检查组件依赖
console.log('React:', typeof React);
console.log('Antd:', typeof antd);

// 3. 检查数据源
console.log('dataSource:', dataSource);
console.log('dataSource.list:', dataSource?.list);

// 4. 添加详细错误日志
try {
  // 可能出错的代码
} catch (error) {
  console.error('错误详情:', {
    message: error.message,
    stack: error.stack,
    props: props,
    state: state
  });
}
```

**完整示例：安全的组件实现**
```javascript
function SafeComponent(props) {
  // 1. 参数解构 + 默认值
  const {
    dataSource = {},
    columns = [],
    loading = false,
    onRowClick,
  } = props || {};

  // 2. 数据安全访问
  const data = dataSource?.list || [];
  const total = dataSource?.total || 0;

  // 3. 错误边界
  try {
    // 4. 条件渲染
    if (loading) {
      return <Spin />;
    }

    if (!data || data.length === 0) {
      return <Empty description="暂无数据" />;
    }

    // 5. 正常渲染
    return (
      <Table
        dataSource={data}
        columns={columns}
        onRow={(record) => ({
          onClick: () => onRowClick?.(record), // 可选链调用
        })}
      />
    );
  } catch (error) {
    console.error('[SafeComponent] 渲染错误:', error);
    return (
      <Alert
        type="error"
        message="组件渲染失败"
        description={error.message}
      />
    );
  }
}
```

---

### 2. iframe 沙箱隔离问题 ⭐⭐⭐⭐⭐

#### 问题表现
- 组件在画布中无法访问全局变量
- `window.variableName` 返回 `undefined`
- 控制台定义了变量，但组件读取不到

#### 根本原因
LowCodeEngine 画布使用 **iframe 沙箱** 运行组件，组件的 `window` 对象与主窗口完全隔离。

#### 解决方案
```javascript
// ❌ 错误方式：直接访问 window
var data = window[variableName];

// ✅ 正确方式：检测并访问父窗口
var targetWindow = null;
try {
  if (window.parent && window.parent !== window) {
    targetWindow = window.parent;  // iframe 环境
  } else {
    targetWindow = window;  // 非 iframe 环境
  }
} catch (e) {
  targetWindow = window;  // 跨域限制，回退
}

var data = targetWindow[variableName];
```

#### 诊断方法
```javascript
// 添加诊断日志
console.log('window 对象类型:', typeof window);
console.log('window[variableName]:', window[variableName]);
console.log('window.parent === window:', window.parent === window);
console.log('window 上相关属性:', Object.keys(window).filter(k => k.includes('keyword')));
```

#### 相关文件
- `public/mall-components.umd.js` - UMD 组件文件
- `src/plugins/plugin-mall-components/adapters/DataSourceAdapter.ts` - 数据适配器

---

### 3. React State 更新但画布不刷新 ⭐⭐⭐⭐

#### 问题表现
- `setData()` 调用成功，数据已更新
- 控制台日志显示数据正确
- 但画布中的组件不刷新显示

#### 根本原因
LowCodeEngine 画布模式下，组件渲染由 **schema/props 变化** 驱动，而非 React 内部 state。

#### 解决方案
```javascript
// 方案 1：添加 key 属性强制 DOM 重创建
return React.createElement('div', {
  key: 'component-' + updateCounter,  // ← 关键！
  className: 'my-component'
}, ...);

// 方案 2：使用 forceUpdateCounter 触发重新渲染
var [counter, setCounter] = React.useState(0);

// 检测到变化时
setCounter(c => c + 1);  // 触发重新渲染
```

#### 数据流最佳实践
```javascript
// ❌ 错误：直接使用 state
<Table dataSource={data} />

// ✅ 正确：使用计算后的显示数据
var displayData = dataSourceType === 'variable' ? (liveData || []) : data;
<Table dataSource={displayData} />
```

---

### 4. UMD 文件未更新 ⭐⭐⭐

#### 问题表现
- 修改了源代码
- 重新构建成功
- 但画布中仍显示旧版本代码

#### 根本原因
浏览器缓存了旧的 UMD 文件，或构建工具使用了缓存。

#### 解决方案
```bash
# 1. 清理构建缓存
rm -rf dist/ node_modules/.cache/

# 2. 重新构建
npm run build

# 3. 强制刷新浏览器
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

#### 验证方法
```javascript
// 在组件中添加版本日志
console.log('[Component] Version: 2024-01-XX-XX');
```

---

### 5. 数据源切换不生效 ⭐⭐⭐

#### 问题表现
- 切换数据源类型（Mock → REST API → 变量绑定）
- 属性面板显示正确
- 但组件仍使用旧数据源

#### 根本原因
useEffect 依赖项未包含所有相关配置。

#### 解决方案
```javascript
// ❌ 错误：缺少依赖项
React.useEffect(() => {
  fetchData();
}, []);  // 空依赖数组

// ✅ 正确：包含所有相关依赖
React.useEffect(() => {
  fetchData();
}, [dataSourceType, api, method, variableName, currentPage, pageSize]);
```

---

### 6. 属性配置不生效 ⭐⭐⭐⭐⭐

#### 问题表现
- 修改了组件代码，添加了新的属性配置（如字段显示控制）
- 修改了 Meta 文件，添加了新的配置组
- 文件语法检查通过
- 但在属性面板中看不到新的配置项

#### 根本原因
浏览器缓存了旧版本的 UMD 文件或 Meta 文件，LowCodeEngine 加载的是缓存的旧文件。

#### 解决方案

**步骤 1：验证文件是否正确更新**
```bash
# 检查 UMD 文件是否包含新代码
grep "showName.*props.showName" public/mall-components.umd.js

# 检查 Meta 文件是否包含新配置
grep "字段显示控制" public/mall-components-meta.js

# 验证文件语法
node -c public/mall-components.umd.js
node -c public/mall-components-meta.js
```

**步骤 2：强制刷新浏览器**
```bash
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
# 或清除浏览器缓存后刷新
```

**步骤 3：检查文件加载**
```javascript
// 在浏览器控制台执行
fetch('/mall-components-meta.js?t=' + Date.now())
  .then(r => r.text())
  .then(text => {
    console.log('Meta 文件内容:');
    console.log(text.includes('字段显示控制') ? '✅ 包含新配置' : '❌ 不包含新配置');
  });

fetch('/mall-components.umd.js?t=' + Date.now())
  .then(r => r.text())
  .then(text => {
    console.log('UMD 文件内容:');
    console.log(text.includes('showName') ? '✅ 包含新代码' : '❌ 不包含新代码');
  });
```

**步骤 4：清除 LowCodeEngine 缓存**
```javascript
// 在浏览器控制台执行
localStorage.clear();
sessionStorage.clear();
location.reload();
```

#### 诊断方法
```javascript
// 1. 检查组件 props
console.log('ProductForm props:', props);
console.log('showName:', props.showName);

// 2. 检查 Meta 配置
console.log('ProductForm Meta:', window.MallComponentsMeta);

// 3. 检查组件是否注册
console.log('已注册组件:', Object.keys(window.MallComponents || {}));
```

#### 预防措施
1. **每次修改后添加版本号**
   ```javascript
   // 在组件中添加版本日志
   console.log('[ProductForm] Version: 2026-04-02-v2');
   ```

2. **使用时间戳加载文件**
   ```html
   <!-- 在 HTML 中 -->
   <script src="/mall-components.umd.js?t=<%= Date.now() %>"></script>
   <script src="/mall-components-meta.js?t=<%= Date.now() %>"></script>
   ```

3. **开发时禁用缓存**
   - Chrome DevTools → Network → Disable cache

#### 检查清单
- [ ] 文件是否正确修改（grep 验证）
- [ ] 文件语法是否正确（node -c 验证）
- [ ] 浏览器是否强制刷新
- [ ] 是否清除了浏览器缓存
- [ ] 是否清除了 localStorage
- [ ] 是否检查了文件加载（fetch 验证）

---

### 7. 组件未注册到全局对象 ⭐⭐⭐⭐⭐

#### 问题表现
- UMD 文件已加载（fetch 检查通过）
- Meta 文件已加载（fetch 检查通过）
- 但 `window.MallComponents` 是 `undefined`
- 属性面板中看不到组件配置

#### 根本原因
UMD 文件的注册部分有问题：
1. 依赖项（React/ReactDOM/antd）未正确传递
2. 只注册了部分组件，遗漏了新增组件
3. 注册逻辑有错误

#### 解决方案

**步骤 1：检查 UMD 注册部分**
```javascript
// 错误的注册方式
var result = factory(root.React, root.ReactDOM, root.antd);
root.MallComponents = result;
root.MallComponents.ProductList = result.ProductList;  // ❌ 只注册了一个组件

// 正确的注册方式
var React = root.React || window.React;
var ReactDOM = root.ReactDOM || window.ReactDOM;
var antd = root.antd || window.antd;

if (!React || !ReactDOM || !antd) {
  console.error('[MallComponents] Missing dependencies:', {
    React: !!React,
    ReactDOM: !!ReactDOM,
    antd: !!antd
  });
}

var result = factory(React, ReactDOM, antd);
root.MallComponents = result;
if (result.ProductList) root.MallComponents.ProductList = result.ProductList;
if (result.ProductForm) root.MallComponents.ProductForm = result.ProductForm;
if (result.RestApiTester) root.MallComponents.RestApiTester = result.RestApiTester;

console.log('[MallComponents] Registered successfully:', Object.keys(result));
```

**步骤 2：检查依赖项是否存在**
```javascript
// 在浏览器控制台执行
console.log('React:', typeof window.React);
console.log('ReactDOM:', typeof window.ReactDOM);
console.log('antd:', typeof window.antd);
```

**步骤 3：检查注册结果**
```javascript
// 在浏览器控制台执行
console.log('MallComponents:', window.MallComponents);
console.log('ProductList:', window.MallComponents?.ProductList);
console.log('ProductForm:', window.MallComponents?.ProductForm);
```

#### 预防措施
1. **每次新增组件时，更新注册代码**
   ```javascript
   // 在 UMD 文件的注册部分添加新组件
   if (result.NewComponent) root.MallComponents.NewComponent = result.NewComponent;
   ```

2. **添加注册日志**
   ```javascript
   console.log('[MallComponents] Registered successfully:', Object.keys(result));
   ```

3. **检查依赖项**
   ```javascript
   if (!React || !ReactDOM || !antd) {
     console.error('[MallComponents] Missing dependencies');
   }
   ```

#### 检查清单
- [ ] UMD 文件的注册部分是否包含所有组件
- [ ] 依赖项（React/ReactDOM/antd）是否存在
- [ ] 是否添加了注册日志
- [ ] 浏览器控制台是否有错误信息
- [ ] `window.MallComponents` 是否正确注册

---

### 8. 属性配置更新后未生效 ⭐⭐⭐⭐⭐

#### 问题表现
- 修改了 TypeScript 源文件（如 `productFormMeta.ts`）
- 添加了新的属性配置（如字段显示控制）
- 文件语法检查通过
- 但在属性面板中看不到新的配置项

#### 根本原因
**TypeScript 源文件是真正的配置来源**，插件从 `.ts` 文件导入 Meta，而不是从 UMD 文件。修改源文件后必须重新构建项目。

#### 解决方案

**步骤 1：确认修改了正确的文件**
```bash
# 确认修改的是 TypeScript 源文件
src/plugins/plugin-mall-components/meta/productFormMeta.ts
```

**步骤 2：重新构建项目**
```bash
npm run build
```

**步骤 3：验证构建输出**
```bash
# 检查构建后的文件是否包含新配置
grep "字段显示控制" public/mall-components-meta.js
```

**步骤 4：强制刷新浏览器**
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`

#### 预防措施
1. **修改配置后的标准流程**
   - 修改 `.ts` 源文件
   - 执行 `npm run build`
   - 强制刷新浏览器
   - 验证配置是否生效

2. **检查构建输出目录**
   ```bash
   # 本项目构建输出到 public 目录
   ls -la public/
   ```

3. **验证构建文件时间戳**
   ```bash
   # 检查文件修改时间，确认是最新构建
   ls -l public/mall-components-meta.js
   ```

#### 检查清单
- [ ] 是否修改了 TypeScript 源文件（而不是 UMD 文件）
- [ ] 是否执行了 `npm run build`
- [ ] 构建输出是否包含新配置
- [ ] 是否强制刷新了浏览器
- [ ] 控制台是否有错误信息

---

## 调试流程清单

### 第 1 步：确认问题范围
- [ ] 是否是数据获取问题？（检查 adapter.fetch()）
- [ ] 是否是数据渲染问题？（检查 state 和 props）
- [ ] 是否是环境问题？（检查 iframe 沙箱）

### 第 2 步：添加诊断日志
```javascript
// 数据获取阶段
console.log('[Component] 开始获取数据');
console.log('[Component] 数据源类型:', dataSourceType);
console.log('[Component] 参数:', params);

// 数据处理阶段
console.log('[Component] 获取结果:', response);
console.log('[Component] 处理后数据:', processedData);

// 渲染阶段
console.log('[Component] 渲染数据:', { dataLength, total, counter });
```

### 第 3 步：检查关键点
- [ ] `window` 对象是否正确（主窗口 vs iframe）
- [ ] `useEffect` 依赖项是否完整
- [ ] `key` 属性是否用于强制刷新
- [ ] UMD 文件是否已更新（检查构建时间戳）

### 第 4 步：验证修复
- [ ] 强制刷新浏览器
- [ ] 检查控制台日志是否正确
- [ ] 验证画布显示是否符合预期
- [ ] 测试所有数据源类型

---

## 架构理解要点

### LowCodeEngine 运行环境

```
┌─────────────────────────────────────┐
│  浏览器主窗口                         │
│  - 用户控制台                         │
│  - 全局变量定义                       │
│  - LowCodeEngine 编辑器 UI           │
└────────────┬────────────────────────┘
             │ iframe 隔离
             ↓
┌─────────────────────────────────────┐
│  LowCodeEngine 画布 iframe           │
│  - 组件运行环境                       │
│  - 独立的 window 对象                 │
│  - 无法直接访问主窗口变量              │
│  - 需要通过 window.parent 访问        │
└─────────────────────────────────────┘
```

### 组件渲染机制

```
Schema 变化
    ↓
Props 更新
    ↓
组件重新渲染 ✅

React State 变化
    ↓
组件内部重新执行
    ↓
画布不刷新 ❌（除非有 key 或 props 变化）
```

---

## 经验教训总结

### 1. 架构理解优先
**问题：** 假设组件在主窗口运行，忽略了 iframe 沙箱。
**教训：** 调试前先理解运行环境架构，不要想当然。

### 2. 诊断日志是关键
**问题：** 前 4 次修复都是猜测，没有精确诊断。
**教训：** 添加详细日志，让数据说话，而不是猜测。

### 3. 完整的数据流追踪
**问题：** 只关注数据获取，忽略了数据渲染。
**教训：** 从数据源 → 处理 → 渲染，完整追踪每一步。

### 4. LowCodeEngine 特殊性
**问题：** 用传统 React 思维调试 LowCodeEngine 组件。
**教训：** LowCodeEngine 有特殊的渲染机制和沙箱隔离，需要特殊处理。

---

## 快速参考

### 常用诊断代码片段

```javascript
// 检测 iframe 环境
console.log('是否在 iframe:', window !== window.parent);

// 检查全局变量
console.log('主窗口变量:', window.parent && window.parent['variableName']);
console.log('当前窗口变量:', window['variableName']);

// 检查组件渲染
console.log('渲染次数:', renderCount);
console.log('Props 变化:', JSON.stringify(props));
console.log('State 变化:', JSON.stringify(state));
```

### 常用修复模式

```javascript
// 模式 1：跨窗口访问
var targetWindow = (window.parent && window.parent !== window) 
  ? window.parent 
  : window;

// 模式 2：强制刷新
var [counter, setCounter] = React.useState(0);
// 变化时
setCounter(c => c + 1);

// 模式 3：实时数据读取
var displayData = useMemo(() => {
  return dataSourceType === 'variable' 
    ? (targetWindow[variableName]?.list || [])
    : data;
}, [dataSourceType, variableName, data, counter]);
```

---

## 相关文档

- [LowCodeEngine 官方文档](https://lowcode-engine.cn/)
- [React 调试指南](https://react.dev/learn/debugging)
- [iframe 安全策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

---

**最后更新：** 2026-04-02  
**维护者：** AI Assistant  
**版本：** 1.4  
**更新内容：** 
- 新增"组件未注册到全局对象"章节（UMD 文件注册问题）
- 新增"属性配置更新后未生效"章节（TypeScript 源文件修改后需重新构建）
