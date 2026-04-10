import { IPublicModelPluginContext } from "@alilc/lowcode-types";
import MallComponents from './entry-components';

const MallComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      // 将组件实现挂载到 window（CDN 版本的 meta 会从 window.MallComponents 获取组件实现）
      if (typeof window !== 'undefined') {
        (window as any).MallComponents = MallComponents;
        console.log('[MallComponents] ✅ Window registered:', Object.keys(MallComponents));
      }
      
      // 注意：meta 描述从 CDN 加载（配置在 assets.json 中）
      // 不在此加载 meta，避免组件重复显示
      console.log('[MallComponents] ✅ Plugin initialized, components registered to window');
    },
  };
}

MallComponentsPlugin.pluginName = 'MallComponentsPlugin';
MallComponentsPlugin.meta = {
  dependencies: [],
};

export default MallComponentsPlugin;
