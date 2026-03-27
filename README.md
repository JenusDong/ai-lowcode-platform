# AI 驱动的低代码平台

基于 Alibaba LowCodeEngine 构建的 AI 驱动低代码平台。

## 核心理念

- **协议驱动核心**：复用 LowCodeEngine 成熟的 DSL 协议
- **AI 加速开发**：集成 OpenAI 实现智能代码生成（差异化核心）
- **组件标准化**：利用 LowCodeEngine 的物料生态
- **差异化竞争**：重点投入数据源、逻辑编排、AI 增强功能

## 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 核心引擎 | @alilc/lowcode-engine | 阿里开源低代码引擎 |
| 前端框架 | React 18 | 与 LowCodeEngine 保持一致 |
| 语言 | TypeScript | 完整类型支持 |
| 组件库 | Ant Design | 企业级 UI 组件库 |
| 状态管理 | Zustand | 轻量级状态管理 |
| 图表库 | ECharts | 数据可视化核心 |
| AI | OpenAI API / Claude API | 智能代码生成 |
| 表单 | Formily | 阿里表单解决方案 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建
npm run build

# 类型检查
npm run typecheck

# 代码检查
npm run lint
```

## 项目结构

```
.
├── .github/              # GitHub Actions CI 配置
├── .trae/                # 项目文档和计划
├── public/               # 静态资源
│   ├── index.html        # 入口 HTML
│   └── mock/             # Mock 数据
├── src/                  # 源代码
│   ├── plugins/          # LowCodeEngine 插件
│   │   ├── plugin-editor-init/           # 编辑器初始化
│   │   ├── plugin-save-sample/           # 保存插件
│   │   ├── plugin-preview-sample/        # 预览插件
│   │   └── ...                           # 其他插件
│   ├── services/         # 服务层
│   │   ├── assets.json   # 物料资源配置
│   │   └── schema.json   # 页面 Schema
│   ├── index.ts          # 入口文件
│   └── preview.tsx       # 预览渲染器
├── package.json
├── tsconfig.json
└── README.md
```

## 核心功能

### 已实现（基于 LowCodeEngine）
- ✅ 可视化拖拽编辑器
- ✅ 组件物料库
- ✅ 属性配置面板
- ✅ 数据源面板
- ✅ 代码编辑器
- ✅ 出码功能
- ✅ 预览功能

### 计划开发（差异化功能）
- 🚧 AI Copilot - 自然语言生成页面
- 🚧 智能数据映射 - AI 辅助配置图表和表格
- 🚧 可视化逻辑编排 - 简单的动作链配置
- 🚧 版本控制 - 页面快照和回滚
- 🚧 ECharts 图表组件集成

## 开发工作流

1. 创建 feat 分支：`git checkout -b feat/feature-name`
2. 开发并提交代码
3. 推送到远程：`git push -u origin feat/feature-name`
4. 创建 Pull Request，CI 会自动运行检查
5. 合并到 main 分支

## 文档

- [实施计划](.trae/documents/lowcode_platform_plan.md)
- [GitHub 设置指南](SETUP_GUIDE.md)
- [LowCodeEngine 官方文档](https://lowcode-engine.cn/)

## License

MIT
