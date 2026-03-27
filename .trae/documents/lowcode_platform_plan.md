# 低代码平台构建计划（基于 Alibaba LowCodeEngine）

## 核心理念
- **协议驱动核心**：复用 LowCodeEngine 成熟的 DSL 协议
- **AI 加速开发**：集成 OpenAI 实现智能代码生成（差异化核心）
- **组件标准化**：利用 LowCodeEngine 的物料生态
- **差异化竞争**：重点投入数据源、逻辑编排、AI 增强功能

---

## 项目定位

**我们不做完整的低代码引擎**，而是：
- 基于 LowCodeEngine 构建
- 重点补充：数据源管理、逻辑编排、AI 增强
- 目标：开箱即用的 AI 驱动低代码平台

---

## 第一阶段：LowCodeEngine 集成与初始化（P0 - 1-2 周）

### [x] 任务 1.1：项目初始化与 LowCodeEngine 集成
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 初始化项目结构（基于 lowcode-demo）
  - 集成 LowCodeEngine 核心
  - 配置 CDN 资源和 TypeScript 类型
  - 搭建基础开发环境
- **Success Criteria**:
  - LowCodeEngine 编辑器正常启动
  - 可以看到基础编辑界面
- **Test Requirements**:
  - `programmatic` TR-1.1.1: `npm install && npm start` 成功 ✅
  - `human-judgement` TR-1.1.2: 浏览器显示完整编辑器界面 ✅
- **Notes**: 参考 https://github.com/alibaba/lowcode-demo

---

## 第一阶段补充：物料库切换到 Ant Design（P0 - 2-3 天）

> **重要**：当前项目使用的是 Fusion Design 物料，需要切换到 Ant Design 物料以满足：
> - 管理后台统一样式（企业元素感）
> - 导出代码为 Ant Design 组件

### [x] 任务 A.1：研究 Ant Design 物料库配置
- **Priority**: P0
- **Depends On**: 1.1
- **Description**: 
  - 研究 LowCodeEngine 官方 antd 物料库配置
  - 查找 antd-lowcode-materials 的 CDN 地址
  - 确认出码插件支持 antd 代码生成
- **Success Criteria**:
  - 确定 antd 物料库的正确配置
- **Test Requirements**:
  - `human-judgement` TR-A.1.1: 配置文档清晰完整 ✅

### [x] 任务 A.2：更新 assets.json 配置
- **Priority**: P0
- **Depends On**: A.1
- **Description**: 
  - 替换 Fusion 物料为 Ant Design 物料
  - 更新 packages 配置（antd、moment 等）
  - 更新 components 配置（antd 物料 meta）
- **Success Criteria**:
  - assets.json 配置正确的 antd 物料
- **Test Requirements**:
  - `programmatic` TR-A.2.1: JSON 格式正确 ✅

### [x] 任务 A.3：更新 package.json 依赖
- **Priority**: P0
- **Depends On**: A.2
- **Description**: 
  - 移除 Fusion 相关依赖
  - 添加 antd 相关依赖
- **Success Criteria**:
  - 依赖正确安装
- **Test Requirements**:
  - `programmatic` TR-A.3.1: `npm install --legacy-peer-deps` 成功 ✅

### [x] 任务 A.4：更新编辑器初始化插件
- **Priority**: P0
- **Depends On**: A.3
- **Description**: 
  - 更新 plugin-editor-init 中的物料加载
  - 更新默认 schema 使用 antd 组件
  - 替换所有插件中的 Fusion 组件为 Ant Design 组件
- **Success Criteria**:
  - 编辑器正确加载 antd 物料
  - 所有插件使用 antd 组件
- **Test Requirements**:
  - `human-judgement` TR-A.4.1: 组件面板显示 antd 组件 ✅

### [ ] 任务 A.5：验证出码功能
- **Priority**: P0
- **Depends On**: A.4
- **Description**: 
  - 测试出码插件生成 antd 代码
  - 验证生成的代码可运行
- **Success Criteria**:
  - 出码生成正确的 antd React 代码
- **Test Requirements**:
  - `programmatic` TR-A.5.1: 生成的代码包含 antd 导入

---

### [ ] 任务 1.2：定制化编辑器界面
- **Priority**: P0
- **Depends On**: A.5
- **Description**: 
  - 使用 skeleton API 定制编辑器布局
  - 添加自定义工具栏（数据源、AI Copilot 入口）
  - 配置主题和品牌样式（企业蓝色调）
  - 移除不需要的默认插件
- **Success Criteria**:
  - 编辑器界面符合我们的品牌设计
  - 自定义区域正常显示
- **Test Requirements**:
  - `human-judgement` TR-1.2.1: 界面布局合理美观，有企业感
  - `programmatic` TR-1.2.2: 所有自定义功能正常加载

---

## 第二阶段：数据源与变量管理（P0 - 3-4 周）

### [ ] 任务 2.1：变量池系统
- **Priority**: P0
- **Depends On**: 1.2
- **Description**: 
  - 实现全局变量管理面板
  - 支持变量的定义、编辑、删除
  - 实现变量作用域（全局/页面/组件）
  - 集成到组件属性绑定
- **Success Criteria**:
  - 可以创建和管理变量
  - 组件可以绑定变量
  - 变量变更实时反映到画布
- **Test Requirements**:
  - `programmatic` TR-2.1.1: 变量值变更时组件自动更新
  - `human-judgement` TR-2.1.2: 变量管理界面清晰易用

### [ ] 任务 2.2：RESTful API 数据源
- **Priority**: P0
- **Depends On**: 2.1
- **Description**: 
  - 实现 API 数据源配置面板
  - 支持 GET/POST/PUT/DELETE 请求
  - 支持请求头、请求体配置
  - 支持响应数据转换
  - 加载状态管理（loading、error）
- **Success Criteria**:
  - 可以配置 API 数据源
  - 数据可以正常加载
  - 错误处理完善
- **Test Requirements**:
  - `programmatic` TR-2.2.1: API 请求成功返回数据
  - `programmatic` TR-2.2.2: loading/error 状态正确显示
  - `human-judgement` TR-2.2.3: 数据源配置流程顺畅

### [ ] 任务 2.3：数据源绑定与数据映射
- **Priority**: P0
- **Depends On**: 2.2
- **Description**: 
  - 组件可以绑定数据源
  - 实现数据字段映射配置
  - 支持数据过滤和转换
  - 提供可视化数据映射界面
- **Success Criteria**:
  - 组件可以正确绑定并显示 API 数据
  - 数据映射配置灵活易用
- **Test Requirements**:
  - `programmatic` TR-2.3.1: Table 组件正确显示 API 数据
  - `human-judgement` TR-2.3.2: 数据映射界面直观

---

## 第三阶段：逻辑编排（P1 - 3-4 周）

### [ ] 任务 3.1：事件系统
- **Priority**: P1
- **Depends On**: 2.3
- **Description**: 
  - 实现组件事件绑定面板
  - 支持点击、变更、加载等常见事件
  - 事件触发机制
- **Success Criteria**:
  - 可以为组件绑定事件
  - 事件可以正常触发
- **Test Requirements**:
  - `programmatic` TR-3.1.1: 点击按钮触发事件回调

### [ ] 任务 3.2：基础动作库
- **Priority**: P1
- **Depends On**: 3.1
- **Description**: 
  - 实现核心动作：API 请求、变量赋值、消息提示
  - 动作配置界面
  - 支持动作参数绑定
- **Success Criteria**:
  - 可以配置和执行基础动作
  - 动作参数可以绑定变量
- **Test Requirements**:
  - `programmatic` TR-3.2.1: 点击按钮触发 API 请求并更新变量

### [ ] 任务 3.3：动作链与可视化编排
- **Priority**: P1
- **Depends On**: 3.2
- **Description**: 
  - 支持多个动作串联执行
  - 支持条件判断和循环
  - 可视化的动作编排界面
  - 动作执行日志
- **Success Criteria**:
  - 可以配置复杂的动作链
  - 条件判断正常工作
  - 动作执行流程清晰
- **Test Requirements**:
  - `programmatic` TR-3.3.1: 条件动作根据变量值正确执行
  - `human-judgement` TR-3.3.2: 编排界面直观易用

---

## 第四阶段：AI 增强功能（P0 - 4-6 周，差异化核心）

### [ ] 任务 4.1：OpenAI API 集成
- **Priority**: P0
- **Depends On**: 3.3
- **Description**: 
  - 集成 OpenAI API（GPT-4 或 Claude）
  - 实现 API Key 配置
  - 请求限流和错误处理
  - 实现 Prompt 模板管理
- **Success Criteria**:
  - OpenAI API 可以正常调用
  - 错误处理完善
- **Test Requirements**:
  - `programmatic` TR-4.1.1: 测试 API 调用成功返回

### [ ] 任务 4.2：AI Copilot - 自然语言转页面
- **Priority**: P0
- **Depends On**: 4.1
- **Description**: 
  - 实现 AI Copilot 对话框
  - 设计自然语言到 DSL 的 Prompt
  - 实现页面生成和预览
  - 支持迭代修改（"把按钮改成红色"）
- **Success Criteria**:
  - 可以通过自然语言描述生成页面
  - 生成的页面可以正常渲染
  - 支持迭代修改
- **Test Requirements**:
  - `programmatic` TR-4.2.1: 输入描述后生成有效的 DSL
  - `human-judgement` TR-4.2.2: 生成的页面符合用户描述

### [ ] 任务 4.3：AI 数据映射助手
- **Priority**: P1
- **Depends On**: 4.2
- **Description**: 
  - AI 分析 API 返回的数据结构
  - 为 Table/Chart 组件推荐数据映射
  - 一键应用推荐配置
  - 支持用户修正和学习
- **Success Criteria**:
  - AI 能正确识别数据结构
  - 推荐的映射配置合理
  - 一键应用功能正常
- **Test Requirements**:
  - `programmatic` TR-4.3.1: AI 分析 API 响应并给出映射建议
  - `human-judgement` TR-4.3.2: 推荐的映射配置合理可用

### [ ] 任务 4.4：智能逻辑生成
- **Priority**: P1
- **Depends On**: 4.3
- **Description**: 
  - 根据用户描述生成动作链
  - "点击按钮，调用 API，然后刷新表格"
  - 自动识别需要的数据源和变量
  - 生成可编辑的动作配置
- **Success Criteria**:
  - 可以通过描述生成动作链
  - 生成的动作链可以执行
- **Test Requirements**:
  - `programmatic` TR-4.4.1: 生成的动作链可以正常执行
  - `human-judgement` TR-4.4.2: 生成的逻辑符合用户意图

---

## 第五阶段：增强组件与图表（P1 - 2-3 周）

### [ ] 任务 5.1：ECharts 图表组件集成
- **Priority**: P1
- **Depends On**: 2.3
- **Description**: 
  - 基于 LowCodeEngine 物料规范开发图表组件
  - 支持常见图表类型：折线图、柱状图、饼图、雷达图
  - 图表配置面板
  - 数据绑定支持
- **Success Criteria**:
  - 图表组件可以正常使用
  - 可以绑定数据源
  - 图表配置灵活
- **Test Requirements**:
  - `programmatic` TR-5.1.1: 图表正确渲染数据
  - `human-judgement` TR-5.1.2: 图表配置界面易用

### [ ] 任务 5.2：增强表单组件
- **Priority**: P1
- **Depends On**: 2.3
- **Description**: 
  - 集成 Formily 或增强现有表单能力
  - 支持表单验证规则可视化配置
  - 表单提交逻辑模板
  - 文件上传组件
- **Success Criteria**:
  - 表单验证功能完善
  - 表单提交流程顺畅
- **Test Requirements**:
  - `programmatic` TR-5.2.1: 表单验证规则生效
  - `programmatic` TR-5.2.2: 表单提交成功

---

## 第六阶段：发布与生产就绪（P2 - 2-3 周）

### [ ] 任务 6.1：页面版本控制
- **Priority**: P2
- **Depends On**: 1.2
- **Description**: 
  - 实现页面快照保存
  - 版本列表和对比
  - 版本回滚功能
- **Success Criteria**:
  - 可以保存和恢复页面版本
  - 版本对比清晰
- **Test Requirements**:
  - `programmatic` TR-6.1.1: 保存版本后可以成功回滚

### [ ] 任务 6.2：预览与发布
- **Priority**: P2
- **Depends On**: 6.1
- **Description**: 
  - 页面预览功能（独立 URL）
  - 简单的页面管理
  - 导出为静态 HTML
- **Success Criteria**:
  - 预览链接可以访问
  - 页面可以导出
- **Test Requirements**:
  - `programmatic` TR-6.2.1: 预览链接正常访问
  - `programmatic` TR-6.2.2: 导出的 HTML 可以正常运行

### [ ] 任务 6.3：性能优化
- **Priority**: P2
- **Depends On**: 所有核心功能
- **Description**: 
  - 大页面渲染性能优化
  - 拖拽流畅度优化
  - 打包体积优化
- **Success Criteria**:
  - 100+ 组件页面拖拽流畅
  - 首屏加载 < 2s
- **Test Requirements**:
  - `programmatic` TR-6.3.1: 性能测试达标

---

## 实施路线图（总时间：3-4 个月）

| 阶段 | 时间 | 核心目标 |
|------|------|---------|
| 阶段一 | 第 1-2 周 | LowCodeEngine 集成，基础编辑器 |
| 阶段二 | 第 3-6 周 | 数据源管理，变量系统 |
| 阶段三 | 第 7-10 周 | 逻辑编排，动作链 |
| 阶段四 | 第 11-16 周 | **AI 增强功能（核心差异化）** |
| 阶段五 | 第 17-19 周 | 图表组件，增强表单 |
| 阶段六 | 第 20-22 周 | 版本控制，发布，性能优化 |

---

## 技术选型分析

### 候选方案对比

| 项目 | Stars | 技术栈 | 特点 | 适用场景 |
|------|-------|--------|------|---------|
| **lowcode-engine** | 13k+ | React | 完全低代码、可视化拖拽、图表表单自由组合 | 后台大屏、数据可视化、业务表单 |
| **DataV** | 13k+ | Vue | 专注大屏数据可视化、图表丰富 | 数据统计/监控后台大屏 |
| **vue-echarts-admin** | ~2k | Vue + ECharts | 内置丰富图表模板、页面布局清晰 | 快速搭建管理后台 |
| **v-dragable-admin** | - | Vue | 区块/图表可拖拽组合、布局自由切换 | 拖拽式低代码后台 |
| **vue-element-admin** | 84k+ | Vue + Element | 最经典后台模板、社区活跃 | 业务后台管理 |
| **Ant Design Pro** | 37k+ | React + Ant Design | 官方后台模板、插件丰富 | React 企业级后台 |

### 最终选型决策

**核心引擎：LowCodeEngine（阿里）**
- ✅ 完全低代码、可视化拖拽系统
- ✅ 支持图表、表单、页面布局自由组合
- ✅ 活跃社区和大量实际业务应用
- ✅ 二次开发非常强大

**图表组件：ECharts + DataV 风格组件**
- ECharts 作为核心图表库
- 参考 DataV 的大屏可视化组件风格
- 支持丰富的图表类型和交互

**技术栈组合**

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 核心引擎 | @alilc/lowcode-engine | 阿里开源低代码引擎 |
| 前端框架 | React 18 | 与 LowCodeEngine 保持一致 |
| 语言 | TypeScript | 完整类型支持 |
| 组件库 | Ant Design | 企业级 UI 组件库 |
| 状态管理 | Zustand | 轻量级状态管理 |
| 图表库 | ECharts | 数据可视化核心 |
| 图表风格 | DataV 风格 | 大屏可视化组件风格 |
| AI | OpenAI API / Claude API | 智能代码生成 |
| 表单 | Formily | 阿里表单解决方案 |

---

## 核心差异化优势

相比纯 LowCodeEngine，我们的平台提供：

1. ✅ **AI Copilot** - 自然语言生成页面和逻辑
2. ✅ **内置数据源管理** - 开箱即用，无需插件
3. ✅ **可视化逻辑编排** - 简单的动作链配置
4. ✅ **智能数据映射** - AI 辅助配置图表和表格
5. ✅ **版本控制** - 页面快照和回滚

---

## LowCodeEngine 生态利用

- ✅ **物料系统** - 直接使用官方物料库
- ✅ **Setter 组件** - 复用官方 Setter
- ✅ **插件架构** - 利用插件系统扩展功能
- ✅ **出码能力** - 可导出 React 代码
- ✅ **模拟器** - 多端预览

---

## 风险与应对

| 风险 | 应对措施 |
|------|---------|
| LowCodeEngine 更新不兼容 | 锁定版本，定期评估升级 |
| AI 成本过高 | 实现缓存，限制使用频率 |
| 性能问题 | 早期开始性能测试，持续优化 |
