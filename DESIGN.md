# Design System — AI 低代码平台

## Product Context
- **What this is:** 基于 Alibaba LowCodeEngine 构建的 AI 驱动低代码平台，为企业提供快速构建管理后台的能力
- **Who it's for:** 企业内部开发团队、IT 部门、业务部门，需要快速构建和迭代企业级管理系统
- **Space/industry:** 企业级低代码平台、管理后台解决方案
- **Project type:** Web Application / Dashboard / Enterprise Tool

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian（工业实用主义）
- **Decoration level:** Minimal（极简）
- **Mood:** 专业、可靠、高效、清晰。企业用户需要的是信息密度和操作效率，不是视觉花哨。界面应该让用户专注于任务本身，而不是被设计分散注意力。
- **Reference sites:** 
  - Ant Design 官方设计语言
  - 阿里云控制台
  - 腾讯云控制台
  - 华为云控制台

## Typography
- **Display/Hero:** Noto Sans SC (思源黑体) Bold — 企业级、专业、中文优化，清晰的结构和均衡的字重分布
- **Body:** Noto Sans SC Regular — 统一字体系列，清晰易读，16px 基准字号
- **UI/Labels:** Noto Sans SC Medium — 与正文保持一致，通过字重区分层级
- **Data/Tables:** Noto Sans SC (支持 tabular-nums) — 数字对齐，确保数据表格的可读性
- **Code:** JetBrains Mono — 开发者友好，等宽字体，适合代码展示
- **Loading:** Google Fonts CDN (https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600)
- **Scale:** 
  - 12px: 辅助文字、标签
  - 14px: 正文小号、按钮、表格
  - 16px: 正文基准、表单标签
  - 20px: 小标题
  - 24px: 中标题
  - 28px: 大标题
  - 32px: 页面标题
  - 48px: Hero 标题

## Color
- **Approach:** Balanced（平衡）— 主色用于品牌和关键操作，辅助色用于状态反馈，中性色构建界面层级
- **Primary:** #1677FF (阿里蓝) — 品牌色、主要按钮、链接、焦点状态。继承 Ant Design 的企业级基因，专业可靠
- **Secondary:** 无独立辅助色，通过主色的变体实现层级
- **Neutrals:** 
  - #FAFAFA (gray-50) — 最浅背景
  - #F5F5F5 (gray-100) — 页面背景、卡片背景
  - #F0F0F0 (gray-200) — 分割线、边框
  - #D9D9D9 (gray-300) — 边框、分割线
  - #BFBFBF (gray-400) — 禁用边框
  - #8C8C8C (gray-500) — 占位符、辅助文字
  - #595959 (gray-600) — 次要文字
  - #434343 (gray-700) — 正文
  - #262626 (gray-800) — 标题、重要文字
  - #1F1F1F (gray-900) — 最深文字
- **Semantic:** 
  - Success: #52C41A — 成功提示、正向指标、完成状态
  - Warning: #FAAD14 — 警告提示、注意事项、待处理状态
  - Error: #FF4D4F — 错误提示、必填项、删除操作
  - Info: #1677FF — 信息提示、帮助说明
- **Dark mode:** 
  - 降低饱和度 15-20%
  - 重新设计表面层级（bg-base: #141414, bg-elevated: #1F1F1F, bg-surface: #262626）
  - 文字颜色反转（浅色文字在深色背景上）
  - 主色调整为 #3C89FF 以提高对比度

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable（舒适）— 企业用户需要长时间使用，不能太拥挤。在信息密度和舒适度之间取得平衡
- **Scale:** 
  - 2xs: 2px — 最小间距，紧凑元素内部
  - xs: 4px — 紧凑间距，图标与文字
  - sm: 8px — 小间距，按钮内边距
  - md: 16px — 标准间距，卡片内边距、段落间距
  - lg: 24px — 大间距，区块间距
  - xl: 32px — 区块间距，模块之间
  - 2xl: 48px — 大区块间距，页面区块
  - 3xl: 64px — 页面边距，顶部和底部

## Layout
- **Approach:** Grid-disciplined（网格纪律）— 严格的多列布局，可预测的对齐方式。适合数据表格、表单、仪表盘等典型场景
- **Grid:** 
  - Mobile: 4 columns
  - Tablet: 8 columns
  - Desktop: 12 columns
  - Wide: 24 columns
- **Max content width:** 1400px — 适合企业级管理后台的数据密集型界面
- **Border radius:** 
  - sm: 4px — 小按钮、标签
  - md: 8px — 按钮、输入框、卡片
  - lg: 12px — 大卡片、模态框
  - full: 9999px — 圆形按钮、徽章

## Motion
- **Approach:** Minimal-functional（最小功能化）— 仅用于辅助理解的过渡动效。企业产品不需要花哨的动画，动效应该服务于功能
- **Easing:** 
  - enter: ease-out (元素进入)
  - exit: ease-in (元素退出)
  - move: ease-in-out (元素移动)
- **Duration:** 
  - micro: 50-100ms — 按钮点击、图标切换
  - short: 150-250ms — 下拉菜单、工具提示
  - medium: 250-400ms — 模态框、抽屉
  - long: 400-700ms — 页面切换、大型动画

## Component Guidelines

### Buttons
- **Primary:** 用于主要操作（提交、保存、创建）
- **Secondary:** 用于次要操作（取消、返回）
- **Ghost:** 用于低优先级操作（链接、辅助功能）
- **Danger:** 用于破坏性操作（删除、移除），使用 Error 色

### Forms
- 标签使用 14px Medium 字重
- 输入框高度 32px（紧凑）或 40px（舒适）
- 必填项使用 Error 色星号标记
- 错误提示使用 Error 色，显示在输入框下方

### Tables
- 表头使用 14px Semi-bold 字重，背景色 gray-100
- 表格行高 48px（舒适）或 40px（紧凑）
- 数字列使用 tabular-nums 对齐
- 悬停行使用 gray-50 背景色

### Cards
- 背景色 white，边框 gray-200
- 内边距 16px（紧凑）或 24px（舒适）
- 圆角 8px（小卡片）或 12px（大卡片）

### Alerts
- 成功：绿色边框 + 浅绿背景
- 警告：黄色边框 + 浅黄背景
- 错误：红色边框 + 浅红背景
- 信息：蓝色边框 + 浅蓝背景

## Design Principles

1. **功能优先**：设计服务于功能，不为了美观而牺牲可用性
2. **信息密度**：企业级产品需要展示大量信息，但要通过视觉层级保持清晰
3. **一致性**：相同功能使用相同的视觉表达，降低学习成本
4. **可访问性**：确保所有用户都能使用，包括色盲、视力障碍用户
5. **响应式**：适配不同屏幕尺寸，从移动端到桌面端
6. **性能优先**：避免不必要的装饰和动画，确保快速加载

## Implementation Notes

- 所有颜色使用 CSS 变量定义，便于主题切换
- 间距使用 4px 基础单位，通过 CSS 变量定义间距阶梯
- 字体通过 Google Fonts CDN 加载，确保跨平台一致性
- 组件基于 Ant Design，通过主题定制实现设计系统
- 深色模式通过 CSS 变量和 data-theme 属性实现

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-27 | Initial design system created | Created by /design-consultation based on enterprise internal management backend requirements |
| 2026-03-27 | Chose Industrial/Utilitarian aesthetic | Fits enterprise product requirements for efficiency, clarity, and trust |
| 2026-03-27 | Selected Noto Sans SC as primary font | Enterprise-grade, Chinese-optimized, clear and professional |
| 2026-03-27 | Used Ant Design primary color #1677FF | Inherits enterprise-grade DNA from Ant Design ecosystem |
| 2026-03-27 | Chose comfortable spacing density | Enterprise users need long-term usage comfort, not just information density |
| 2026-03-27 | Minimal-functional motion approach | Enterprise products don't need flashy animations, motion should serve function |