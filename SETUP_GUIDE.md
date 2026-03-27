# GitHub 仓库设置指南

## 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/JenusDong
2. 点击 "New" 创建新仓库
3. 仓库名称建议：`ai-lowcode-platform`
4. 选择 **Public** 或 **Private**
5. **不要**初始化 README、.gitignore 或 LICENSE（我们已经有了）
6. 点击 "Create repository"

## 步骤 2: 关联本地仓库与远程仓库

在本地项目目录执行：

```bash
# 替换为你的实际仓库地址
git remote add origin https://github.com/JenusDong/ai-lowcode-platform.git

# 推送到 main 分支
git push -u origin main
```

## 步骤 3: 功能开发流程

### 创建 feat 分支

```bash
# 从 main 创建新的 feat 分支
git checkout -b feat/your-feature-name

# 开发完成后提交
git add .
git commit -m "feat: describe your feature"

# 推送到远程
git push -u origin feat/your-feature-name
```

### 创建 Pull Request

1. 在 GitHub 上打开你的仓库
2. 点击 "Compare & pull request"
3. 填写 PR 描述
4. 创建 PR
5. GitHub Actions 会自动运行 CI 检查

## CI 流程说明

### 触发条件

- **push** 到 `feat/**` 分支或 `main` 分支
- **pull_request** 到 `main` 分支

### CI 检查内容

1. ✅ 依赖安装 (`npm ci`)
2. ✅ TypeScript 类型检查 (`npm run typecheck`)
3. ✅ 代码 lint (`npm run lint`)
4. ✅ 测试运行 (`npm run test`)
5. ✅ 项目构建 (`npm run build`)

### 合并 PR

只有当所有 CI 检查通过后，才能合并 PR 到 main 分支。

## 分支命名规范

| 类型 | 前缀 | 示例 |
|------|------|------|
| 新功能 | `feat/` | `feat/user-login` |
| Bug 修复 | `fix/` | `fix/login-error` |
| 文档 | `docs/` | `docs/update-readme` |
| 重构 | `refactor/` | `refactor/component-structure` |
| 性能优化 | `perf/` | `perf/improve-rendering` |
| 测试 | `test/` | `test/add-unit-tests` |
| 构建/CI | `chore/` | `chore/update-deps` |

## Commit 消息规范

遵循 Conventional Commits 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型 (type)：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

示例：
```
feat: add AI copilot for page generation

- Implement natural language to DSL conversion
- Add iterative modification support
- Add prompt template management

Closes #123
```
