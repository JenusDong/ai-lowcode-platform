import { IPublicModelPluginContext } from "@alilc/lowcode-types";
import { meta } from './entry-meta';
import MallComponents from './entry-components';

const MallComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { material } = ctx;
      
      // 1. 将组件实现挂载到 window（引擎通过 library 名解析）
      if (typeof window !== 'undefined') {
        (window as any).MallComponents = MallComponents;
        console.log('[MallComponents] ✅ Window registered:', Object.keys(MallComponents));
      }
      
      // 2. 加载 meta 描述（meta 中 npm 字段告诉引擎从 window.MallComponents 获取组件实现）
      await material.loadIncrementalAssets({
        version: '1.0.0',
        components: meta.components,
      });

      console.log('[MallComponents] ✅ Plugin initialized, loaded', meta.components.length, 'components');
    },
  };
}

MallComponentsPlugin.pluginName = 'MallComponentsPlugin';
MallComponentsPlugin.meta = {
  dependencies: [],
};

export default MallComponentsPlugin;
