# AI 低代码平台 - Claude AI 助手指南

## 项目概述

这是一个基于 Alibaba LowCodeEngine 构建的 AI 驱动低代码平台，为企业提供快速构建管理后台的能力。

**核心特性：**
- 协议驱动核心：复用 LowCodeEngine 成熟的 DSL 协议
- AI 加速开发：集成 OpenAI 实现智能代码生成
- 组件标准化：利用 LowCodeEngine 的物料生态
- 企业级设计：统一的视觉风格和交互体验

**技术栈：**
- 核心引擎：@alilc/lowcode-engine
- 前端框架：React 18 + TypeScript
- UI 组件库：Ant Design
- 状态管理：Zustand
- 图表库：ECharts

## Design System

**⚠️ 重要：所有视觉和 UI 决策必须遵循 DESIGN.md**

在进行任何 UI/UX 相关的开发时，请务必先阅读 [DESIGN.md](./DESIGN.md) 文件。

### 核心设计原则

1. **字体系统**
   - 主字体：Noto Sans SC (思源黑体)
   - 代码字体：JetBrains Mono
   - 字号阶梯：12px / 14px / 16px / 20px / 24px / 28px / 32px / 48px

2. **色彩系统**
   - 主色：#1677FF (阿里蓝)
   - 成功色：#52C41A
   - 警告色：#FAAD14
   - 错误色：#FF4D4F
   - 中性色：#FAFAFA 至 #1F1F1F

3. **间距系统**
   - 基础单位：4px
   - 间距阶梯：2px / 4px / 8px / 16px / 24px / 32px / 48px / 64px
   - 密度：舒适（Comfortable）

4. **组件规范**
   - 按钮：Primary / Secondary / Ghost / Danger
   - 表单：14px 标签，32px/40px 输入框高度
   - 表格：48px 行高，tabular-nums 数字对齐
   - 卡片：white 背景，gray-200 边框，8px/12px 圆角

### 设计系统遵循规则

- ✅ **必须遵循** DESIGN.md 中定义的所有字体、颜色、间距规范
- ✅ **必须使用** CSS 变量来定义颜色和间距，便于主题切换
- ✅ **必须确保** 组件与 Ant Design 的设计语言保持一致
- ❌ **禁止偏离** 设计系统，除非有明确的业务需求并经过用户确认
- ❌ **禁止使用** DESIGN.md 中未定义的颜色或字体

### QA 检查

在进行 QA 测试时，请检查：
1. 所有颜色是否符合 DESIGN.md 中定义的色彩系统
2. 所有字体是否符合 DESIGN.md 中定义的字体系统
3. 所有间距是否符合 DESIGN.md 中定义的间距系统
4. 所有组件是否符合 DESIGN.md 中定义的组件规范

如果发现任何不符合设计系统的代码，请标记为问题并建议修复。

## 开发规范

### 代码风格
- 使用 TypeScript 进行开发
- 遵循 ESLint 配置
- 组件使用函数式组件 + Hooks
- 样式使用 SCSS Modules

### Git 提交规范
- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 重构
- test: 测试相关
- chore: 构建/工具相关

### 分支管理
- main: 主分支，稳定版本
- develop: 开发分支
- feature/*: 功能分支
- hotfix/*: 紧急修复分支

## 常用命令

```bash
# 启动开发服务器
npm start

# 构建生产版本
npm run build

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 代码格式化
npm run lint --fix
```

## 项目结构

```
.
├── src/
│   ├── plugins/          # LowCodeEngine 插件
│   ├── services/         # 服务层（assets, schema 等）
│   ├── appHelper.ts      # 应用辅助函数
│   ├── global.scss       # 全局样式
│   ├── index.ts          # 入口文件
│   └── preview.tsx       # 预览入口
├── public/               # 静态资源
├── DESIGN.md             # 设计系统文档 ⭐
├── CLAUDE.md             # 本文件
└── package.json
```

## 重要文件

- **DESIGN.md**: 设计系统文档，所有 UI/UX 决策的依据
- **src/services/assets.json**: 物料资源配置
- **src/services/defaultPageSchema.json**: 默认页面 schema
- **src/plugins/**: LowCodeEngine 插件目录

## 注意事项

### ⚠️ 关键架构问题：UMD 文件必须与源代码保持同步（已发生多次！）

**问题描述：**
项目中存在两套组件实现代码：
1. **TypeScript 源代码**：`src/plugins/plugin-mall-components/components/` 目录下的 `.tsx` 文件
2. **UMD 打包文件**：`public/mall-components.umd.js` 和 `build/mall-components.umd.js`

**根本原因：**
- `public/mall-components.umd.js` 是手动维护的独立文件
- `npm run build` 会将此文件复制到 `build/` 目录
- **构建工具不会自动从 TypeScript 源代码编译生成 UMD 文件**
- 当修改源代码后，如果忘记更新 UMD 文件，会导致运行时使用旧版本代码

**典型症状：**
- ❌ 画布中组件显示 "No Data"
- ❌ Props 传递不正确（期望 `props.dataSource` 但实际传入的是分散的 props）
- ❌ 新增的功能不生效
- ❌ 控制台报错或数据为空

**解决方案和检查清单：**

#### ✅ 必要流程（每次修改组件后必须执行）

1. **修改 TypeScript 源代码**
   ```bash
   # 编辑 src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx
   ```

2. **同步更新 public/mall-components.umd.js**
   - 将源代码中的逻辑转换成兼容的 JavaScript (ES5)
   - 确保所有 props 解构、默认值、数据处理逻辑保持一致
   - 特别注意：
     - Props 接收方式（分散的 props vs 完整对象）
     - 默认数据的定义和处理
     - useEffect 的依赖项
     - 数据适配器的调用方式

3. **重新构建项目**
   ```bash
   npm run build
   ```

4. **验证文件一致性**
   ```bash
   # 检查 build 目录的文件是否已更新
   ls -lh build/mall-components.umd.js
   
   # 对比关键代码段
   grep "var ProductList = function" build/mall-components.umd.js
   ```

5. **浏览器测试**
   - 刷新页面
   - 打开开发者工具（F12）查看 Console 日志
   - 验证功能是否正常工作

#### 🔍 常见排查步骤

当遇到组件异常时，按以下顺序排查：

1. **检查 UMD 文件中的实现是否与源代码一致**
   ```bash
   # 查看 UMD 文件中的 ProductList 实现
   sed -n '/var ProductList = function/,/^  };$/p' public/mall-components.umd.js
   
   # 对比源代码
   cat src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx | head -100
   ```

2. **检查 props 传递方式**
   - Meta 配置传递的是分散的 props：`dataSourceType`, `mockData`, `api`, `method`
   - UMD 文件应该接收这些分散的 props，而不是 `props.dataSource`

3. **检查默认数据**
   - 确保 UMD 文件中包含完整的默认 Mock 数据
   - 即使没有传入 mockData，也应该有 fallback 数据

4. **检查控制台日志**
   - `[ProductList] 组件渲染，props:` - 查看 props 是否正确接收
   - `[ProductList] 处理后的 mockData:` - 查看 mockData 是否正确处理
   - `[MockDataAdapter] 最终返回数据:` - 查看返回的数据结构

#### 📝 长期改进建议

**方案 A：自动化构建流程（推荐）**
```javascript
// 在 build.plugin.js 中添加自定义插件
// 自动从 TypeScript 源码编译生成 UMD 文件
```

**方案 B：统一代码维护**
- 只维护 UMD 文件，删除或归档 TypeScript 源代码
- 或只维护 TypeScript 源代码，配置 webpack 插件自动生成 UMD

**方案 C：版本控制提醒**
- 在 git hooks 中添加检查脚本
- 如果修改了 .tsx 文件但未更新 .umd.js，阻止提交

---

### 其他注意事项

1. **物料库配置**: 所有物料资源 URL 必须使用正确的 CDN 路径
2. **React 版本**: 项目使用 React 16.14.0（与 LowCodeEngine 保持一致）
3. **组件名称**: 使用 Block 而不是 Div（@alifd/layout 不导出 Div）
4. **设计系统**: 所有 UI 开发必须遵循 DESIGN.md

## 联系方式

- 项目仓库：https://github.com/JenusDong/ai-lowcode-platform
- 作者：JenusDong