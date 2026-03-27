# AI 驱动的低代码平台

基于 Alibaba LowCodeEngine 构建的 AI 驱动低代码平台。

## 核心理念

- **协议驱动核心**：复用 LowCodeEngine 成熟的 DSL 协议
- **AI 加速开发**：集成 OpenAI 实现智能代码生成（差异化核心）
- **组件标准化**：利用 LowCodeEngine 的物料生态

## 技术栈

| 层级 | 技术选型 |
|------|---------|
| 核心引擎 | @alilc/lowcode-engine |
| 前端框架 | React 18 |
| 语言 | TypeScript |
| 组件库 | Ant Design |
| 状态管理 | Zustand |
| AI | OpenAI API / Claude API |
| 图表 | ECharts |

## 开发

```bash
npm install
npm start
```

## 项目结构

```
.
├── .trae/          # 项目文档和计划
├── packages/        # Monorepo 包
│   ├── editor/    # 编辑器
│   ├── renderer/   # 渲染器
│   └── materials/ # 物料库
└── ...
```
