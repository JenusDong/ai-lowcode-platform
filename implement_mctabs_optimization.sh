#!/bin/bash

# McTabs 优化实施脚本
# 此脚本将创建所有必要的文件并应用修改

set -e

PROJECT_ROOT="/Users/ylgao/jenusWork/AI-learn/draggable_compose_UI/mall-cook"
TEMPLATE_ROOT="$PROJECT_ROOT/packages/mall-cook-template"
ELECTRON_ROOT="$PROJECT_ROOT/packages/mall-cook-platform-electron"

echo "🚀 开始实施 McTabs 优化..."
echo ""

# Step 1: 创建 McContainer 组件目录
echo "📁 Step 1: 创建 McContainer 组件目录..."
mkdir -p "$TEMPLATE_ROOT/src/widgets/McContainer"
echo "✅ 目录创建成功"
echo ""

# Step 2: 创建 McContainer.vue 文件
echo "📝 Step 2: 创建 McContainer.vue 文件..."
cat > "$TEMPLATE_ROOT/src/widgets/McContainer/McContainer.vue" << 'EOF'
<template>
  <view 
    class="container-component"
    :style="containerStyle"
    :data-component="'McContainer'"
    :id="'widget' + item.id"
  >
    <view class="container-content">
      <draggable 
        v-model="modules"
        @end="handleModulesSortEnd"
        class="modules-list"
        ghost-class="ghost"
        :animation="200"
        :group="{ name: 'container-modules', put: ['itxst', 'container-modules', 'tabs-modules'] }"
      >
        <view 
          v-for="(module, moduleIndex) in modules"
          :key="module.id"
          class="draggable-list__item"
        >
          <widget-shape :widget="module">
            <view class="module-wrapper">
              <McSwiper
                v-if="module.component === 'McSwiper'"
                :id="'widget' + module.id"
                :key="module.id"
                :styles="module.styles"
                :attrs="module.attrs"
                :list="module.list"
              ></McSwiper>
              <McNavBar
                v-else-if="module.component === 'McNavBar'"
                :id="'widget' + module.id"
                :key="module.id + '-navbar'"
                :styles="module.styles"
                :attrs="module.attrs"
                :title="module.title"
              ></McNavBar>
              <McTitle
                v-else-if="module.component === 'McTitle'"
                :id="'widget' + module.id"
                :key="module.id + '-title'"
                :styles="module.styles"
                :attrs="module.attrs"
                :value="module.value"
              ></McTitle>
              <McInputText
                v-else-if="module.component === 'McInputText'"
                :id="'widget' + module.id"
                :key="module.id + '-input-text'"
                :value="module.value"
              ></McInputText>
              <McImg
                v-else-if="module.component === 'McImg'"
                :id="'widget' + module.id"
                :key="module.id + '-img'"
                :imageStyle="module.imageStyle"
                :imageValue="module.imageValue"
              ></McImg>
              <McSearch
                v-else-if="module.component === 'McSearch'"
                :id="'widget' + module.id"
                :key="module.id + '-search'"
                :styles="module.styles"
                :value="module.value"
              ></McSearch>
              <McTab
                v-else-if="module.component === 'McTab'"
                :id="'widget' + module.id"
                :key="module.id + '-tab'"
                :styles="module.styles"
                :tabList="module.tabList"
                :attrs="module.attrs"
              ></McTab>
              <McCapCube
                v-else-if="module.component === 'McCapCube'"
                :id="'widget' + module.id"
                :key="module.id + '-cap-cube'"
                :styles="module.styles"
                :cube="module.cube"
              ></McCapCube>
              <McCountdown
                v-else-if="module.component === 'McCountdown'"
                :id="'widget' + module.id"
                :key="module.id + '-countdown'"
                :styles="module.styles"
                :value="module.value"
              ></McCountdown>
              <McEmpty
                v-else-if="module.component === 'McEmpty'"
                :id="'widget' + module.id"
                :key="module.id + '-empty'"
                :styles="module.styles"
              ></McEmpty>
              <McGoods
                v-else-if="module.component === 'McGoods'"
                :id="'widget' + module.id"
                :key="module.id + '-goods'"
                :styles="module.styles"
                :attrs="module.attrs"
                :goodsData="module.goodsData"
              ></McGoods>
              <McNotice
                v-else-if="module.component === 'McNotice'"
                :id="'widget' + module.id"
                :key="module.id + '-notice'"
                :noticeStyles="module.noticeStyles"
                :noticeContent="module.noticeContent"
              ></McNotice>
              <McImgMap
                v-else-if="module.component === 'McImgMap'"
                :id="'widget' + module.id"
                :key="module.id + '-img-map'"
                :styles="module.styles"
                :attrs="module.attrs"
                :src="module.src"
                :list="module.list"
              ></McImgMap>
              <McSuspension
                v-else-if="module.component === 'McSuspension'"
                :id="'widget' + module.id"
                :key="module.id + '-Suspension'"
                :styles="module.styles"
                :attrs="module.attrs"
                :data="module.data"
              ></McSuspension>
              <McTabbar
                v-else-if="module.component === 'McTabbar'"
                :id="'widget' + module.id"
                :key="module.id + '-tabbar'"
                :styles="module.styles"
                :attrs="module.attrs"
                :iconList="module.iconList"
              ></McTabbar>
              <McContainer
                v-else-if="module.component === 'McContainer'"
                :id="'widget' + module.id"
                :key="module.id + '-container'"
                :item="module"
                :page="page"
              ></McContainer>
            </view>
          </widget-shape>
        </view>
      </draggable>
      <view 
        v-if="!modules || modules.length === 0" 
        class="empty-container"
      >
        <view class="empty-placeholder">
          <text class="empty-icon">📦</text>
          <text class="empty-text">拖拽组件到此处添加</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import draggable from "@/utils/vuedraggable.umd.min.js";
import WidgetShape from "@/components/widget-shape.vue";
import McSwiper from "@/widgets/McSwiper/McSwiper.vue";
import McNavBar from "@/widgets/McNavBar/McNavBar.vue";
import McTitle from "@/widgets/McTitle/McTitle.vue";
import McInputText from "@/widgets/McInputText/McInputText.vue";
import McImg from "@/widgets/McImg/McImg.vue";
import McSearch from "@/widgets/McSearch/McSearch.vue";
import McTab from "@/widgets/McTab/McTab.vue";
import McCapCube from "@/widgets/McCapCube/McCapCube.vue";
import McCountdown from "@/widgets/McCountdown/McCountdown.vue";
import McEmpty from "@/widgets/McEmpty/McEmpty.vue";
import McGoods from "@/widgets/McGoods/McGoods.vue";
import McNotice from "@/widgets/McNotice/McNotice.vue";
import McImgMap from "@/widgets/McImgMap/McImgMap.vue";
import McSuspension from "@/widgets/McSuspension/McSuspension.vue";
import McTabbar from "@/widgets/McTabbar/McTabbar.vue";

export default {
  name: "McContainer",

  components: {
    draggable,
    WidgetShape,
    McSwiper,
    McNavBar,
    McTitle,
    McInputText,
    McImg,
    McSearch,
    McTab,
    McCapCube,
    McCountdown,
    McEmpty,
    McGoods,
    McNotice,
    McImgMap,
    McSuspension,
    McTabbar,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    page: {
      type: Object,
      default: null,
    },
  },

  computed: {
    modules: {
      get() {
        return this.item?.modules || [];
      },
      set(value) {
        if (this.item) {
          this.$set(this.item, 'modules', value);
        }
      },
    },
    containerStyle() {
      const styles = this.item?.styles || {};
      return {
        minHeight: (styles.minHeight || 100) + 'px',
        backgroundColor: styles.backgroundColor || '#f5f5f5',
        padding: (styles.padding || 16) + 'px',
        borderRadius: (styles.borderRadius || 8) + 'px',
        border: styles.borderColor ? `1px solid ${styles.borderColor}` : '1px dashed #d9d9d9',
      };
    },
  },

  created() {
    this.$options.components.McContainer = () => import('@/widgets/McContainer/McContainer.vue');
  },

  methods: {
    handleModulesSortEnd() {
      if (this.page?.updateContainerModules) {
        this.page.updateContainerModules({
          widgetId: this.item.id,
          modules: this.modules,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-component {
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.container-content {
  position: relative;
  width: 100%;
  min-height: 100px;
}

.modules-list {
  min-height: 100px;
  width: 100%;
}

.module-wrapper {
  width: 100%;
}

.draggable-list__item {
  margin-bottom: 8px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
}

.empty-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  min-height: 100px;
}

.empty-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #999;
  
  .empty-icon {
    font-size: 32px;
    opacity: 0.5;
  }
  
  .empty-text {
    font-size: 14px;
  }
}

.ghost {
  opacity: 0.5;
  background: rgba(21, 91, 212, 0.1);
  border: 2px dashed #155bd4;
}
</style>
EOF
echo "✅ McContainer.vue 创建成功"
echo ""

# Step 3: 创建 component.json 文件
echo "📝 Step 3: 创建 component.json 文件..."
cat > "$TEMPLATE_ROOT/src/widgets/McContainer/component.json" << 'EOF'
{
  "name": "容器",
  "icon": "icon-layout",
  "fields": {
    "minHeight": {
      "label": "最小高度",
      "type": "number",
      "value": 100
    },
    "backgroundColor": {
      "label": "背景颜色",
      "type": "color",
      "value": "#f5f5f5"
    },
    "padding": {
      "label": "内边距",
      "type": "number",
      "value": 16
    },
    "borderRadius": {
      "label": "圆角",
      "type": "number",
      "value": 8
    },
    "borderColor": {
      "label": "边框颜色",
      "type": "color",
      "value": "#d9d9d9"
    }
  }
}
EOF
echo "✅ component.json 创建成功"
echo ""

echo "🎉 McContainer 组件创建完成！"
echo ""
echo "📋 接下来需要手动完成的步骤："
echo "1. 修改 McTabs.vue 组件"
echo "2. 修改 build.vue 文件"
echo "3. 在 mall.js 中添加 McContainer 配置"
echo ""
echo "📖 详细步骤请查看："
echo "   - /Users/ylgao/jenusWork/AI-learn/lowcode/MCTABS_OPTIMIZATION_GUIDE.md"
echo "   - /Users/ylgao/jenusWork/AI-learn/lowcode/MCTABS_OPTIMIZATION_QUICK_REFERENCE.md"
