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

1. **物料库配置**: 所有物料资源 URL 必须使用正确的 CDN 路径
2. **React 版本**: 项目使用 React 16.14.0（与 LowCodeEngine 保持一致）
3. **组件名称**: 使用 Block 而不是 Div（@alifd/layout 不导出 Div）
4. **设计系统**: 所有 UI 开发必须遵循 DESIGN.md

## 联系方式

- 项目仓库：https://github.com/JenusDong/ai-lowcode-platform
- 作者：JenusDong