import { IPublicModelPluginContext } from '@alilc/lowcode-types'
import ProductListMeta from './meta/productListMeta'
import ProductFormMeta from './meta/productFormMeta'
import OrderListMeta from './meta/orderListMeta'
import OrderFormMeta from './meta/orderFormMeta'
import CouponCardMeta from './meta/couponCardMeta'
import PromotionCardMeta from './meta/promotionCardMeta'
import UserCardMeta from './meta/userCardMeta'
import RoleCardMeta from './meta/roleCardMeta'
import RestApiTester from './setters/RestApiTester'

const MallComponentsPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'MallComponentsPlugin',
    async init() {
      const { material, setters } = ctx
      
      console.log('[MallComponentsPlugin] 开始加载电商组件')
      
      try {
        await material.loadIncrementalAssets({
          version: '1.0.0',
          components: [
            ProductListMeta,
            ProductFormMeta,
            OrderListMeta,
            OrderFormMeta,
            CouponCardMeta,
            PromotionCardMeta,
            UserCardMeta,
            RoleCardMeta,
          ],
        })

        console.log('[MallComponentsPlugin] 注册自定义 Setter: RestApiTester')
        setters.registerSetter('RestApiTester', RestApiTester)
        
        console.log('[MallComponentsPlugin] 电商组件加载成功')
      } catch (error) {
        console.error('[MallComponentsPlugin] 电商组件加载失败:', error)
      }
    },
  }
}

MallComponentsPlugin.pluginName = 'MallComponentsPlugin'
MallComponentsPlugin.meta = {
  dependencies: [],
  engines: {
    lowcodeEngine: '^1.1.2',
  },
}

export default MallComponentsPlugin
