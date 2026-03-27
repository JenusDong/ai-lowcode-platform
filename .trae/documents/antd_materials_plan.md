# 物料库切换计划：Fusion → Ant Design

## 问题分析

### 当前状态
当前项目使用的物料库是 **Fusion Design (@alifd/next)**，而不是 Ant Design：

| 物料包 | 组件库 | 说明 |
|--------|--------|------|
| `@alifd/next` | Fusion Design | 阿里企业级 UI 组件库 |
| `@alilc/lowcode-materials` | 基于 Fusion | 低代码物料库 |
| `@alifd/fusion-ui` | 基于 Fusion | 高级业务组件 |

### 用户需求
1. **管理后台统一样式** - 需要企业元素感觉
2. **导出代码为 Ant Design 组件** - 出码时生成 antd 代码
3. **优先级调高** - 作为 P0 任务处理

### 解决方案
切换物料库到 **Ant Design**，使用官方提供的 `antd-lowcode-materials` 物料库。

---

## 实施计划

### [ ] 任务 A.1：研究 Ant Design 物料库配置
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 研究 LowCodeEngine 官方 antd 物料库配置
  - 查找 antd-lowcode-materials 的 CDN 地址和配置方式
  - 确认出码插件是否支持 antd 代码生成
- **Success Criteria**:
  - 确定 antd 物料库的正确配置
  - 确认出码支持 antd
- **Test Requirements**:
  - `human-judgement` TR-A.1.1: 配置文档清晰完整

### [ ] 任务 A.2：更新 assets.json 配置
- **Priority**: P0
- **Depends On**: A.1
- **Description**: 
  - 替换 Fusion 物料为 Ant Design 物料
  - 更新 packages 配置（antd、moment 等）
  - 更新 components 配置（antd 物料 meta）
  - 更新 sort/groupList 分类
- **Success Criteria**:
  - assets.json 配置正确的 antd 物料
- **Test Requirements**:
  - `programmatic` TR-A.2.1: JSON 格式正确
  - `human-judgement` TR-A.2.2: 物料配置完整

### [ ] 任务 A.3：更新 package.json 依赖
- **Priority**: P0
- **Depends On**: A.2
- **Description**: 
  - 移除 Fusion 相关依赖
  - 添加 antd 相关依赖
  - 确保版本兼容
- **Success Criteria**:
  - 依赖正确安装
  - 无版本冲突
- **Test Requirements**:
  - `programmatic` TR-A.3.1: `npm install --legacy-peer-deps` 成功

### [ ] 任务 A.4：更新编辑器初始化插件
- **Priority**: P0
- **Depends On**: A.3
- **Description**: 
  - 更新 plugin-editor-init 中的物料加载
  - 确保正确加载 antd 物料
  - 更新默认 schema 使用 antd 组件
- **Success Criteria**:
  - 编辑器正确加载 antd 物料
  - 组件面板显示 antd 组件
- **Test Requirements**:
  - `programmatic` TR-A.4.1: 编辑器启动无报错
  - `human-judgement` TR-A.4.2: 组件面板显示 antd 组件

### [ ] 任务 A.5：验证出码功能
- **Priority**: P0
- **Depends On**: A.4
- **Description**: 
  - 测试出码插件生成 antd 代码
  - 验证生成的代码可运行
  - 确保样式正确
- **Success Criteria**:
  - 出码生成正确的 antd React 代码
  - 代码可直接运行
- **Test Requirements**:
  - `programmatic` TR-A.5.1: 生成的代码包含 antd 导入
  - `human-judgement` TR-A.5.2: 生成的代码可编译运行

### [ ] 任务 A.6：更新主题样式
- **Priority**: P1
- **Depends On**: A.5
- **Description**: 
  - 配置 antd 主题（企业蓝色调）
  - 添加企业元素样式
  - 确保管理后台统一视觉风格
- **Success Criteria**:
  - 主题配置正确
  - 视觉风格统一
- **Test Requirements**:
  - `human-judgement` TR-A.6.1: 界面风格统一，有企业感

---

## Ant Design 物料库配置参考

### 需要的物料包

```json
{
  "packages": [
    {
      "package": "antd",
      "version": "4.x",
      "library": "antd",
      "urls": [
        "https://unpkg.com/antd@4.x/dist/antd.min.js",
        "https://unpkg.com/antd@4.x/dist/antd.min.css"
      ]
    },
    {
      "package": "@alilc/antd-lowcode-materials",
      "version": "latest",
      "library": "AlilcAntdLowcodeMaterials",
      "urls": ["..."],
      "editUrls": ["..."]
    }
  ]
}
```

### 官方 Ant Design Demo

LowCodeEngine 官方提供了 antd 物料的 demo：
- Demo 地址：https://lowcode-engine.cn/demo/antd-pro-with-formily.html
- 物料仓库：https://github.com/alibaba/lowcode-materials/tree/main/packages/antd-lowcode-materials

---

## 更新后的整体计划优先级

| 优先级 | 任务 | 说明 |
|--------|------|------|
| **P0** | A.1-A.5 | 物料库切换到 Ant Design |
| **P0** | 1.2 | 定制化编辑器界面（依赖 A.5） |
| **P0** | 2.1-2.3 | 数据源与变量管理 |
| **P1** | A.6 | 主题样式定制 |
| **P1** | 3.1-3.3 | 逻辑编排 |
| **P0** | 4.1-4.4 | AI 增强功能 |

---

## 风险与应对

| 风险 | 应对措施 |
|------|---------|
| antd 物料库 CDN 地址变更 | 使用 unpkg 或自建 CDN |
| 出码插件不支持 antd | 检查并更新出码插件版本 |
| 主题样式不兼容 | 使用 antd 主题配置 API |

---

## 预计时间

| 任务 | 预计时间 |
|------|---------|
| A.1 研究配置 | 0.5 天 |
| A.2-A.4 更新配置 | 0.5 天 |
| A.5 验证出码 | 0.5 天 |
| A.6 主题样式 | 1 天 |
| **总计** | **2.5 天** |
