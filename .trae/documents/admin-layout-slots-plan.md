# AdminLayout 子组件配置方案

## 📋 需求分析

### 当前状态
- AdminLayout 是一个完整的布局容器
- 菜单点击时会打开 Tab 标签
- Tab 内容区域目前显示的是占位文本
- 无法在 LowCode 设计器中配置子组件

### 目标状态
- AdminLayout 支持子组件配置
- 每个菜单项对应一个子组件槽位
- 在设计器中可以拖拽配置子组件
- 运行时根据菜单切换显示对应子组件

## 🎯 技术方案

### 方案对比

#### 方案一：使用 LowCode 的槽位（Slot）机制 ⭐⭐⭐⭐⭐
**优点**：
- 符合 LowCode 引擎标准
- 设计器原生支持
- 用户可以在设计器中直接配置
- 支持任意组件拖拽

**缺点**：
- 需要动态创建槽位
- 槽位数量不确定（根据菜单项数量）

**实现难度**：中等

#### 方案二：使用组件属性配置子组件
**优点**：
- 实现简单
- 配置集中

**缺点**：
- 不符合 LowCode 设计模式
- 用户体验差
- 无法拖拽配置

**实现难度**：简单

#### 方案三：使用容器组件 + 条件渲染
**优点**：
- 灵活性高
- 可以预配置多个子组件

**缺点**：
- 需要额外的配置逻辑
- 不够直观

**实现难度**：中等

### 推荐方案：方案一（槽位机制）

## 🏗️ 实现架构

### 1. 组件结构改造

```typescript
// AdminLayout.tsx
interface AdminLayoutProps {
  // 现有属性...
  children?: React.ReactNode; // 支持子组件
  
  // 新增属性
  slots?: {
    [key: string]: React.ReactNode; // 动态槽位
  };
}
```

### 2. Meta 配置改造

```typescript
// adminLayoutMeta.ts
{
  componentName: "AdminLayout",
  title: "管理后台布局",
  
  // 配置为容器组件
  configure: {
    component: {
      isContainer: true, // 标记为容器
      nestingRule: {
        childWhitelist: [], // 允许所有组件
      },
    },
    
    props: [
      // 现有属性...
      {
        name: "enableDynamicSlots",
        title: "启用动态槽位",
        propType: "bool",
        defaultValue: true,
        setter: "BoolSetter",
      },
    ],
  },
}
```

### 3. 槽位管理机制

#### 3.1 静态槽位（固定菜单项）
```typescript
// 预定义槽位
const staticSlots = [
  { name: 'dashboard', title: '工作台' },
  { name: 'permission', title: '权限管理' },
  { name: 'product', title: '商品管理' },
  { name: 'order', title: '订单管理' },
  { name: 'marketing', title: '营销管理' },
];
```

#### 3.2 动态槽位（根据菜单配置）
```typescript
// 根据菜单项动态生成槽位
const generateSlots = (menuItems: MenuItem[]) => {
  return menuItems.map(item => ({
    name: item.key,
    title: item.label,
    children: item.children ? 
      item.children.map(child => ({
        name: child.key,
        title: child.label,
      })) : []
  }));
};
```

### 4. 子组件渲染逻辑

```typescript
// AdminLayout.tsx
const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  selectedKey,
  tabs,
  activeTabKey,
  // ...
}) => {
  // 获取当前激活的子组件
  const activeChild = useMemo(() => {
    if (!children) return null;
    
    // 如果是数组，根据 selectedKey 找到对应的子组件
    if (Array.isArray(children)) {
      return children.find((child: any) => 
        child?.props?.slot === selectedKey ||
        child?.props?.['data-slot'] === selectedKey
      );
    }
    
    // 单个子组件
    return children;
  }, [children, selectedKey]);

  return (
    <div className="admin-layout">
      {/* ... Sidebar, Navbar ... */}
      
      <div className="content-wrapper">
        <div className="page-container">
          {activeChild || (
            <div style={{ padding: 24 }}>
              <h2>{getLabelFromKey(selectedKey)}</h2>
              <p>请在设计器中为此页面配置子组件</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
```

## 📝 实现步骤

### Phase 1: 基础槽位支持（1-2小时）
1. ✅ 修改 AdminLayout 组件支持 children
2. ✅ 修改 Meta 配置标记为容器
3. ✅ 实现基础的子组件渲染逻辑
4. ✅ 测试静态槽位功能

### Phase 2: 动态槽位机制（2-3小时）
1. ✅ 实现槽位自动识别
2. ✅ 根据菜单项生成槽位
3. ✅ 实现槽位切换逻辑
4. ✅ 添加槽位标识属性

### Phase 3: 设计器集成（2-3小时）
1. ✅ 配置槽位面板
2. ✅ 实现拖拽配置
3. ✅ 添加槽位可视化标识
4. ✅ 优化设计器体验

### Phase 4: 高级功能（1-2小时）
1. ✅ 支持槽位缓存
2. ✅ 实现槽位持久化
3. ✅ 添加槽位管理面板
4. ✅ 优化性能

## 🎨 设计器体验

### 用户操作流程

1. **拖拽 AdminLayout 到画布**
   - 自动创建默认槽位
   - 显示槽位占位符

2. **配置菜单项**
   - 在属性面板配置菜单
   - 自动生成对应槽位

3. **配置子组件**
   - 拖拽组件到对应槽位
   - 槽位高亮显示
   - 支持嵌套容器

4. **预览和调试**
   - 点击菜单切换槽位
   - 实时预览效果
   - 支持热更新

### 槽位可视化

```
┌─────────────────────────────────────┐
│  AdminLayout                        │
│  ┌────────┬──────────────────────┐  │
│  │ 菜单   │  [槽位: 工作台]       │  │
│  │        │  ┌────────────────┐  │  │
│  │ 工作台 │  │ 拖拽组件到这里  │  │  │
│  │ 权限   │  │                │  │  │
│  │ 商品   │  └────────────────┘  │  │
│  │ 订单   │                      │  │
│  │ 营销   │                      │  │
│  └────────┴──────────────────────┘  │
└─────────────────────────────────────┘
```

## 🔧 技术细节

### 1. 槽位标识

```typescript
// 子组件需要添加 slot 属性
<Div slot="dashboard">
  <Text>工作台内容</Text>
</Div>

<Div slot="product/list">
  <ProductList />
</Div>
```

### 2. 槽位切换

```typescript
// 点击菜单时
const handleMenuClick = (key: string) => {
  setSelectedKey(key);
  
  // 更新 Tab
  if (!tabs.find(tab => tab.key === key)) {
    setTabs([...tabs, { key, label: getLabelFromKey(key) }]);
  }
  
  // 切换槽位
  setActiveSlot(key);
};
```

### 3. 槽位缓存

```typescript
// 使用 Map 缓存槽位内容
const slotCache = useRef<Map<string, React.ReactNode>>(new Map());

// 缓存子组件
useEffect(() => {
  if (children) {
    React.Children.forEach(children, (child) => {
      const slotName = child?.props?.slot;
      if (slotName) {
        slotCache.current.set(slotName, child);
      }
    });
  }
}, [children]);
```

## 📊 数据流

```
用户操作
  ↓
拖拽组件到槽位
  ↓
LowCode 引擎更新 Schema
  ↓
AdminLayout 接收 children
  ↓
根据 slot 属性分类
  ↓
点击菜单切换 activeSlot
  ↓
渲染对应的子组件
```

## 🚀 扩展功能

### 1. 槽位管理面板
- 显示所有槽位列表
- 支持槽位重命名
- 支持槽位删除
- 支持槽位排序

### 2. 槽位模板
- 预设常用槽位模板
- 一键生成槽位布局
- 支持模板导入导出

### 3. 槽位权限
- 控制槽位显示权限
- 支持角色级别的槽位配置

## ⚠️ 注意事项

1. **性能优化**
   - 使用 React.memo 缓存子组件
   - 避免不必要的重渲染
   - 虚拟滚动大量子组件

2. **兼容性**
   - 保持向后兼容
   - 支持旧版本的 AdminLayout
   - 平滑迁移方案

3. **用户体验**
   - 清晰的槽位标识
   - 友好的错误提示
   - 完善的文档说明

## 📚 参考资料

- [LowCode 引擎容器组件文档](https://lowcode-engine.cn/site/docs/guide/expand/editor/container)
- [React Children API](https://react.dev/reference/react/Children)
- [Ant Design Pro 布局方案](https://pro.ant.design/zh-CN/docs/layout)

## ✅ 验收标准

1. ✅ AdminLayout 可以作为容器接收子组件
2. ✅ 子组件可以通过拖拽配置到对应槽位
3. ✅ 点击菜单可以切换显示对应的子组件
4. ✅ Tab 标签与子组件槽位联动
5. ✅ 设计器中可以清晰看到槽位标识
6. ✅ 支持嵌套容器组件
7. ✅ 性能良好，无明显卡顿
8. ✅ 文档完善，示例清晰

## 🎯 下一步行动

1. 确认方案可行性
2. 评估开发时间
3. 开始 Phase 1 实现
4. 持续迭代优化
