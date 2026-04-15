# 依赖安装问题解决方案

## ❌ 问题现象

```
The requested resource '@typescript-eslint/eslint@^6.0.0' could not be found or you do not have permission to access it
npm error network request to https://npm.aliyun.com/... failed
```

## 🔍 原因分析

1. **网络问题**: npm镜像源(aliyun)无法访问或网络不稳定
2. **版本冲突**: `@typescript-eslint/eslint@^6.0.0` 版本过高，某些镜像源可能没有同步
3. **权限问题**: npm缓存或权限配置问题

## ✅ 解决方案（按推荐顺序）

### 方案1: 切换到官方npm源（推荐）

```bash
# 清除缓存
npm cache clean --force

# 设置官方源
npm config set registry https://registry.npmjs.org/

# 重新安装
cd /Users/ylgao/jenusWork/AI-learn/lowcode
npm install
```

### 方案2: 使用淘宝镜像源

```bash
# 使用淘宝新镜像
npm config set registry https://registry.npmmirror.com/

# 安装
npm install
```

### 方案3: 降低eslint版本要求

编辑 `package.json`，将devDependencies中的：

```json
"@typescript-eslint/eslint": "^6.0.0",
"@typescript-eslint/parser": "^6.0.0",
```

改为：

```json
"@typescript-eslint/eslint": "^5.59.0",
"@typescript-eslint/parser": "^5.59.0",
```

然后重新运行：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 方案4: 跳过eslint相关依赖（临时方案）

如果只是想快速测试地图组件功能：

```bash
# 只安装核心依赖
npm install echarts echarts-for-react react react-dom --save-dev --legacy-peer-deps

# 或者使用yarn
yarn add echarts echarts-for-react --ignore-engines
```

### 方案5: 使用cnpm或pnpm

```bash
# 使用cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install

# 或使用pnpm
npm install -g pnpm
pnpm install
```

## 🚀 验证地图组件是否正常工作

### 快速测试脚本

在项目根目录创建 `test-map.tsx`:

```tsx
import React from 'react';
import EChartsMap from './packages/plugin-echarts/src/components/EChartsMap';

const TestApp = () => {
  return (
    <div style={{ width: '800px', height: '600px' }}>
      <EChartsMap
        mapType="china"
        visualType="fillColor"
        data={[
          { name: '北京', value: 1000 },
          { name: '上海', value: 1300 },
          { name: '广东', value: 1500 }
        ]}
        theme="dark"
        customMapUrl="/path/to/china.json"
        onLoadError={(error) => console.error('地图加载失败:', error)}
      />
    </div>
  );
};

export default TestApp;
```

### 检查点清单

- [ ] `node_modules` 目录存在且包含 `echarts` 和 `echarts-for-react`
- [ ] TypeScript编译无错误 (`npx tsc --noEmit`)
- [ ] 地图组件可以导入使用
- [ ] 无网络错误提示

## 📦 地图组件独立运行方案

如果网络问题持续存在，可以使用**离线模式**：

1. **下载中国地图JSON文件**
   - 从 https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json 下载
   - 放到项目 `public/mapData/china.json`

2. **修改组件配置**

```tsx
<EChartsMap
  mapType="china"
  customMapUrl="/mapData/china.json"
/>
```

3. **或者直接内嵌数据**

将下载的GeoJSON内容复制到组件中替换占位符。

## 🛠️ 常用调试命令

```bash
# 查看当前npm源
npm config get registry

# 查看已安装的echarts版本
npm list echarts echarts-for-react

# 清理并重装
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# 跳过peer依赖检查
npm install --legacy-peer-deps

# 详细日志
npm install --loglevel verbose
```

## 💡 预防措施

1. **锁定依赖版本**: 在项目中添加 `.npmrc` 文件:
   ```
   registry=https://registry.npmmirror.com/
   legacy-peer-deps=true
   ```

2. **使用lock文件**: 确保 `package-lock.json` 提交到版本控制

3. **CI/CD优化**: 在构建环境中预装依赖

## 🆘 如果以上方法都不行

尝试使用Docker或虚拟机环境进行开发：

```bash
# 使用Node.js Docker镜像
docker run -it -v $(pwd):/app node:18 bash
cd /app
npm install
```

---

**注意**: 地图组件本身不依赖 `@typescript-eslint`，这只是开发工具链的依赖。即使暂时无法安装完整依赖，也可以通过以下方式使用地图组件：

1. 直接复制 `src/components/EChartsMap.tsx` 到你的项目
2. 手动安装 `echarts` 和 `echarts-for-react`
3. 导入使用即可
