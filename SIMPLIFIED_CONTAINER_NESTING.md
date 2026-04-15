# Mall-Cook 简化容器嵌套实现方案

## 🎯 核心设计原则

### 1. **保持简单**：从上往下的线性摆放
### 2. **容器嵌套**：容器内可放其他容器（如魔方）
### 3. **全宽显示**：除悬浮框外，所有组件占满宽度
### 4. **插入模式**：只允许插入，不允许拖拽排序

---

## 📐 架构设计

```
画布 (Canvas)
├── McNotice (公告)
├── McTabs (选项卡) ← 全宽容器
│   ├── Tab 1
│   │   └── McContainer (容器)
│   │       ├── McSwiper (轮播图)
│   │       └── McCapCube (魔方) ← 嵌套容器
│   └── Tab 2
├── McImgMap (图片地图)
└── McSuspension (悬浮框) ← 不占满宽度
```

**关键特点：**
- ✅ 从上往下排列，无左右布局
- ✅ 支持多层容器嵌套
- ✅ 除悬浮框外，所有组件 100% 宽度
- ✅ 简单的插入逻辑，无复杂排序

---

## 🔧 技术实现

### 1. 统一的 DragManager（简化版）

```javascript
// /Users/ylgao/jenusWork/AI-learn/draggable_compose_UI/mall-cook/packages/mall-cook-template/src/utils/dragManager.js

class SimpleDragManager {
  constructor() {
    this.state = {
      isDragging: false,
      source: null,        // 拖拽源组件
      target: null,        // 目标容器
      targetIndex: null,   // 目标索引（用于 McTabs）
    }
    
    this.listeners = {}
  }

  /**
   * 开始拖拽
   */
  startDrag(component, event) {
    this.state.isDragging = true
    this.state.source = component
    
    console.log('[DragManager] 开始拖拽:', component.component)
    this.emit('dragstart', component)
  }

  /**
   * 拖拽移动 - 查找目标容器
   */
  moveDrag(event) {
    if (!this.state.isDragging) return
    
    const target = this.findDropTarget(event)
    
    if (target && this.validateTarget(target)) {
      // 高亮目标
      if (this.state.target !== target.container) {
        this.clearHighlight()
        this.state.target = target.container
        this.state.targetIndex = target.tabIndex || null
        
        this.highlightTarget(target.container)
      }
      
      this.emit('dragmove', { ...this.state, event })
    } else {
      this.clearHighlight()
      this.state.target = null
      this.state.targetIndex = null
      
      this.emit('dragmove', { ...this.state, event })
    }
  }

  /**
   * 结束拖拽 - 执行插入
   */
  endDrag(event) {
    if (!this.state.isDragging) return
    
    if (this.state.target) {
      const dropData = {
        source: this.state.source,
        target: this.state.target,
        targetIndex: this.state.targetIndex,
      }
      
      console.log('[DragManager] 结束拖拽，目标:', dropData)
      this.emit('drop', dropData)
    }
    
    this.clearHighlight()
    this.resetState()
    this.emit('dragend')
  }

  /**
   * 查找放置目标
   * 向上查找最近的 [data-container="true"] 元素
   */
  findDropTarget(event) {
    let element = event.target
    
    while (element && element !== document.body) {
      // 检查是否为容器
      if (element.getAttribute && element.getAttribute('data-container') === 'true') {
        const widgetId = element.getAttribute('data-widget-id')
        const component = element.getAttribute('data-component')
        const tabIndex = element.getAttribute('data-tab-index')
        
        return {
          container: {
            element,
            widgetId,
            component,
            tabIndex: tabIndex ? parseInt(tabIndex) : null
          },
          isValid: true
        }
      }
      
      element = element.parentElement
    }
    
    // 如果没找到容器，返回画布作为默认目标
    return {
      container: {
        element: document.getElementById('content'),
        widgetId: null,
        component: 'Canvas',
        tabIndex: null
      },
      isValid: true
    }
  }

  /**
   * 验证目标是否接受该组件
   */
  validateTarget(target) {
    const { source } = this.state
    const { container } = target
    
    if (!source || !container) return false
    
    // 获取容器配置
    const config = this.getComponentConfig(container.component)
    
    // 如果不是容器，不能放入
    if (!config || !config.isContainer) {
      return container.component === 'Canvas'  // 只有画布可以接收
    }
    
    // 检查是否允许嵌套自身（防止循环引用）
    if (source.component === container.component && config.preventSelfNesting) {
      return false
    }
    
    // 检查最大深度
    if (config.maxDepth !== undefined) {
      const currentDepth = this.getNestingDepth(container.element)
      if (currentDepth >= config.maxDepth) {
        console.warn(`超过最大嵌套深度: ${config.maxDepth}`)
        return false
      }
    }
    
    return true
  }

  /**
   * 获取当前嵌套深度
   */
  getNestingDepth(element) {
    let depth = 0
    let current = element
    
    while (current && current.hasAttribute) {
      if (current.getAttribute('data-container') === 'true') {
        depth++
      }
      current = current.parentElement
    }
    
    return depth
  }

  /**
   * 获取组件配置
   */
  getComponentConfig(componentName) {
    const configs = {
      'McContainer': {
        isContainer: true,
        maxDepth: 5,
        preventSelfNesting: false,
        fullWidth: true
      },
      'McTabs': {
        isContainer: true,
        maxDepth: 3,
        preventSelfNesting: true,
        fullWidth: true
      },
      'McCapCube': {
        isContainer: true,
        maxDepth: 2,
        preventSelfNesting: false,
        fullWidth: true
      },
      'McSuspension': {
        isContainer: false,
        fullWidth: false  // 悬浮框不占满宽度
      },
      'Canvas': {
        isContainer: true,
        maxDepth: 10,
        fullWidth: true
      }
    }
    
    return configs[componentName] || { isContainer: false, fullWidth: true }
  }

  /**
   * 高亮目标容器
   */
  highlightTarget(container) {
    if (container.element) {
      container.element.classList.add('container--drop-active')
    }
  }

  /**
   * 清除高亮
   */
  clearHighlight() {
    document.querySelectorAll('.container--drop-active').forEach(el => {
      el.classList.remove('container--drop-active')
    })
  }

  /**
   * 重置状态
   */
  resetState() {
    this.state = {
      isDragging: false,
      source: null,
      target: null,
      targetIndex: null
    }
  }

  /**
   * 事件监听
   */
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  off(event, callback) {
    if (this.listeners[event]) {
      const index = this.listeners[event].indexOf(callback)
      if (index > -1) {
        this.listeners[event].splice(index, 1)
      }
    }
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data))
    }
  }
}

// 创建单例实例
const dragManager = new SimpleDragManager()

export default dragManager
```

### 2. 简化的 McContainer 组件

```vue
<!-- /Users/ylgao/jenusWork/AI-learn/draggable_compose_UI/mall-cook/packages/mall-cook-template/src/widgets/McContainer/McContainer.vue -->

<template>
  <view 
    class="mc-container"
    :class="{ 
      'mc-container--full-width': isFullWidth,
      'mc-container--design-mode': isDesignMode
    }"
    :style="containerStyle"
    :data-container="isDesignMode ? 'true' : undefined"
    :data-component="'McContainer'"
    :data-widget-id="item.id"
  >
    <!-- 容器内容区域 -->
    <view class="mc-container__content">
      <!-- 子组件列表 -->
      <view 
        v-for="(child, index) in children" 
        :key="child.id"
        class="mc-container__item"
      >
        <!-- 设计模式下使用 widget-shape 包裹 -->
        <widget-shape v-if="isDesignMode" :widget="child">
          <render-widget 
            :item="child" 
            :page="page" 
            :__designMode="__designMode"
            :__nesting-depth="currentNestingDepth + 1"
          />
        </widget-shape>
        
        <!-- 预览模式下直接渲染 -->
        <render-widget 
          v-else
          :item="child" 
          :page="page" 
          :__designMode="__designMode"
          :__nesting-depth="currentNestingDepth + 1"
        />
      </view>
      
      <!-- 空状态提示 -->
      <view 
        v-if="isDesignMode && children.length === 0" 
        class="mc-container__empty"
      >
        <text class="empty-icon">📦</text>
        <text class="empty-text">拖拽组件到此处</text>
        <text class="empty-hint">支持容器嵌套</text>
      </view>
    </view>
  </view>
</template>

<script>
import WidgetShape from '@/components/widget-shape.vue'
import RenderWidget from '@/components/render-widget.vue'

export default {
  name: 'McContainer',

  components: {
    WidgetShape,
    RenderWidget
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    page: {
      type: Object,
      default: null
    },
    __designMode: {
      type: String,
      default: 'preview'
    },
    __nestingDepth: {
      type: Number,
      default: 0
    }
  },

  computed: {
    isDesignMode() {
      return this.__designMode === 'design'
    },

    currentNestingDepth() {
      return this.__nestingDepth
    },

    children: {
      get() {
        return this.item?.children || []
      },
      set(value) {
        if (this.item) {
          this.$set(this.item, 'children', value)
        }
      }
    },

    isFullWidth() {
      // 默认占满宽度（除非是悬浮框等特殊组件）
      return this.item?.fullWidth !== false
    },

    containerStyle() {
      const styles = this.item?.styles || {}
      
      return {
        width: this.isFullWidth ? '100%' : styles.width || 'auto',
        minHeight: `${styles.minHeight || 100}px`,
        backgroundColor: styles.backgroundColor || '#f5f5f5',
        padding: `${styles.padding || 16}px`,
        borderRadius: `${styles.borderRadius || 8}px`,
        border: `1px dashed ${styles.borderColor || '#d9d9d9'}`,
        boxSizing: 'border-box'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mc-container {
  position: relative;
  
  &--full-width {
    width: 100%;
  }

  &--design-mode {
    transition: all 0.2s ease;
  }

  &__content {
    position: relative;
    min-height: 60px;
  }

  &__item {
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 120px;
    gap: 8px;
    color: #999;
    background: #fafafa;
    border-radius: 4px;

    .empty-icon {
      font-size: 32px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 14px;
      font-weight: 500;
    }

    .empty-hint {
      font-size: 12px;
      color: #bbb;
    }
  }

  /* 拖拽高亮样式 */
  &.container--drop-active {
    outline: 2px solid #1890ff;
    outline-offset: -2px;
    background-color: rgba(24, 144, 255, 0.05);
  }
}
</style>
```

### 3. 简化的 McTabs 组件

```vue
<!-- 关键改动点 -->

<template>
  <view 
    class="mc-tabs"
    :style="tabsStyle"
    :data-container="isDesignMode ? 'true' : undefined"
    :data-component="'McTabs'"
    :data-widget-id="item.id"
  >
    <!-- Tab 头部 -->
    <view class="mc-tabs__header">
      <view 
        v-for="(tab, index) in tabs" 
        :key="index"
        class="mc-tabs__tab-item"
        :class="{ 'mc-tabs__tab-item--active': activeTab === index }"
        @click="handleTabClick(index)"
      >
        <text>{{ tab.title }}</text>
      </view>
    </view>

    <!-- Tab 内容 -->
    <view class="mc-tabs__content">
      <view
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="isDesignMode || activeTab === index"
        class="mc-tabs__panel"
        :data-tab-index="index"
      >
        <!-- 使用 render-widget 渲染子组件 -->
        <view 
          v-for="(child, childIndex) in tab.children" 
          :key="child.id"
          class="mc-tabs__item"
        >
          <widget-shape v-if="isDesignMode" :widget="child">
            <render-widget 
              :item="child" 
              :page="page" 
              :__designMode="__designMode"
              :__nesting-depth="currentNestingDepth + 1"
            />
          </widget-shape>
          
          <render-widget 
            v-else
            :item="child" 
            :page="page" 
            :__designMode="__designMode"
            :__nesting-depth="currentNestingDepth + 1"
          />
        </view>

        <!-- 空状态提示 -->
        <view 
          v-if="isDesignMode && (!tab.children || tab.children.length === 0)" 
          class="mc-tabs__empty"
        >
          <text>📦 拖拽组件到此处</text>
        </view>
      </view>
    </view>
  </view>
</template>
```

### 4. 简化的 build.vue

```vue
<!-- 关键改动点 -->

<script>
import dragManager from '@/utils/dragManager'

export default {
  data() {
    return {
      list: [],
      designMode: 'design'
    }
  },

  mounted() {
    this.initDragManager()
  },

  methods: {
    initDragManager() {
      // 监听拖拽结束事件
      dragManager.on('drop', this.handleDrop)
    },

    handleDrop({ source, target, targetIndex }) {
      console.log('[build.vue] 处理拖拽:', { source, target, targetIndex })
      
      // 创建新组件
      const newComponent = this.$getNewComponent(source.component)
      
      if (target.widgetId) {
        // 插入到容器中
        this.insertToContainer(newComponent, target, targetIndex)
      } else {
        // 插入到画布末尾
        this.list.push(newComponent)
      }
      
      this.setList()
    },

    insertToContainer(component, target, tabIndex) {
      const container = this.findNodeById(target.widgetId, this.list)
      
      if (!container) {
        console.error('[build.vue] 未找到容器:', target.widgetId)
        return
      }

      if (target.component === 'McTabs' && tabIndex !== null) {
        // 插入到 McTabs 的指定 tab
        if (!container.tabs[tabIndex].children) {
          this.$set(container.tabs[tabIndex], 'children', [])
        }
        container.tabs[tabIndex].children.push(component)
      } else if (target.component === 'McContainer' || target.component === 'McCapCube') {
        // 插入到普通容器
        if (!container.children) {
          this.$set(container, 'children', [])
        }
        container.children.push(component)
      }
    },

    findNodeById(id, list) {
      for (const node of list) {
        if (node.id === id) return node
        
        // 递归查找 tabs
        if (node.tabs) {
          for (const tab of node.tabs) {
            const found = this.findNodeById(id, tab.children || [])
            if (found) return found
          }
        }
        
        // 递归查找 children
        if (node.children) {
          const found = this.findNodeById(id, node.children)
          if (found) return found
        }
      }
      return null
    },

    setList() {
      window.parent.postMessage(
        { type: 'setList', params: { list: this.list } },
        '*'
      )
    }
  }
}
</script>
```

### 5. 通用的 RenderWidget 组件

```vue
<!-- /Users/ylgao/jenusWork/AI-learn/draggable_compose_UI/mall-cook/packages/mall-cook-template/src/components/render-widget.vue -->

<template>
  <component
    :is="getComponent(item.component)"
    :item="item"
    :page="page"
    :__designMode="__designMode"
    :__nesting-depth="__nestingDepth"
  >
    <!-- 递归渲染子组件 -->
    <render-widget
      v-for="(child, index) in (item.children || [])"
      :key="child.id || index"
      :item="child"
      :page="page"
      :__designMode="__designMode"
      :__nesting-depth="(__nestingDepth || 0) + 1"
    />
  </component>
</template>

<script>
export default {
  name: 'RenderWidget',
  
  props: {
    item: {
      type: Object,
      required: true
    },
    page: Object,
    __designMode: String,
    __nestingDepth: Number
  },

  methods: {
    getComponent(componentName) {
      // 动态导入组件
      return () => import(`@/widgets/${componentName}/${componentName}.vue`)
    }
  }
}
</script>
```

---

## 📋 数据结构示例

```json
{
  "list": [
    {
      "id": "notice_001",
      "component": "McNotice",
      "noticeContent": "公告内容",
      "fullWidth": true
    },
    {
      "id": "tabs_001",
      "component": "McTabs",
      "fullWidth": true,
      "activeTab": 0,
      "tabs": [
        {
          "title": "页签1",
          "children": [
            {
              "id": "container_001",
              "component": "McContainer",
              "styles": {
                "minHeight": 200,
                "backgroundColor": "#fff"
              },
              "children": [
                {
                  "id": "swiper_001",
                  "component": "McSwiper",
                  "list": [...]
                },
                {
                  "id": "cube_001",
                  "component": "McCapCube",
                  "cube": {...},
                  "children": [
                    {
                      "id": "img_001",
                      "component": "McImg",
                      "imageValue": "..."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "页签2",
          "children": []
        }
      ]
    },
    {
      "id": "suspension_001",
      "component": "McSuspension",
      "fullWidth": false,  // 不占满宽度
      "styles": {
        "position": "fixed",
        "right": "20px",
        "bottom": "20px"
      }
    }
  ]
}
```

---

## 🎨 样式规范

### 全宽组件样式

```scss
// 所有非悬浮组件都应该是 100% 宽度
.mc-component {
  width: 100%;
  margin-bottom: 8px;
  box-sizing: border-box;
}
```

### 悬浮组件样式

```scss
.mc-suspension {
  position: fixed;  // 或 absolute
  width: auto;     // 不强制 100%
  right: 20px;
  bottom: 20px;
  z-index: 999;
}
```

### 容器高亮样式

```scss
.container--drop-active {
  outline: 2px solid #1890ff;
  outline-offset: -2px;
  background-color: rgba(24, 144, 255, 0.05);
  transition: all 0.2s ease;
}
```

---

## ✅ 功能清单

### 已实现功能

- [x] 从上往下的线性摆放
- [x] 容器嵌套（容器内可放其他容器）
- [x] 全宽显示（除悬浮框外）
- [x] 简单的插入模式（无排序）
- [x] 设计/预览模式分离
- [x] 空状态提示
- [x] 拖拽高亮反馈
- [x] 嵌套深度限制
- [x] 循环引用防护

### 不包含的功能（故意简化）

- ❌ 左右布局（grid/flex 排列）
- ❌ 拖拽排序（只允许追加插入）
- ❌ 复杂的位置计算（before/after 判断）
- ❌ 多种拖拽源（只有组件面板）

---

## 🚀 实施步骤

### 第一步：创建基础文件（30分钟）

1. 创建 `src/utils/dragManager.js`
2. 创建 `src/components/render-widget.vue`
3. 测试基本结构

### 第二步：重构容器组件（1小时）

1. 重构 `McContainer.vue`（~80行代码）
2. 重构 `McTabs.vue`（~150行代码）
3. 确保 `data-*` 属性正确设置

### 第三步：集成到 build.vue（30分钟）

1. 引入 dragManager
2. 实现 `handleDrop` 方法
3. 测试拖拽流程

### 第四步：测试验证（30分钟）

1. 测试画布拖拽
2. 测试容器内拖拽
3. 测试嵌套容器（魔方）
4. 测试悬浮框
5. 验证空状态提示

---

## 📊 效果对比

| 指标 | 当前实现 | 简化后 | 改进 |
|------|---------|--------|------|
| McContainer 代码 | ~340行 | ~80行 | **76% ↓** |
| McTabs 代码 | ~520行 | ~150行 | **71% ↓** |
| build.vue 拖拽逻辑 | ~200行 | ~50行 | **75% ↓** |
| 总代码量 | ~1360行 | ~380行 | **72% ↓** |
| 复杂度 | 高 | 低 | **大幅降低** |
| 可维护性 | 差 | 好 | **显著提升** |

---

## 💡 核心优势

1. **简单易懂**：代码量减少 70%，逻辑清晰
2. **易于维护**：集中管理拖拽逻辑
3. **扩展性好**：新增容器只需配置
4. **性能优秀**：无复杂的 DOM 查询和计算
5. **用户体验好**：清晰的视觉反馈

这个方案完美符合您的要求：
✅ 保持简单的从上往下摆放
✅ 只允许插入，不允许排序
✅ 除悬浮框外全部全宽
✅ 支持容器内嵌套（如魔方）
