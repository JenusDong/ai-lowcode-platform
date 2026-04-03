import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import OrderList from './components/OrderList'
import OrderForm from './components/OrderForm'
import CouponCard from './components/CouponCard'
import PromotionCard from './components/PromotionCard'
import UserCard from './components/UserCard'
import RoleCard from './components/RoleCard'

export const customComponents = {
  ProductList,
  ProductForm,
  OrderList,
  OrderForm,
  CouponCard,
  PromotionCard,
  UserCard,
  RoleCard,
}

export const componentMeta = {
  ProductList: {
    componentName: 'ProductList',
    title: '商品列表',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'ProductList',
      destructuring: true,
    },
  },
  ProductForm: {
    componentName: 'ProductForm',
    title: '商品表单',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'ProductForm',
      destructuring: true,
    },
  },
  OrderList: {
    componentName: 'OrderList',
    title: '订单列表',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'OrderList',
      destructuring: true,
    },
  },
  OrderForm: {
    componentName: 'OrderForm',
    title: '订单表单',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'OrderForm',
      destructuring: true,
    },
  },
  CouponCard: {
    componentName: 'CouponCard',
    title: '优惠券管理',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'CouponCard',
      destructuring: true,
    },
  },
  PromotionCard: {
    componentName: 'PromotionCard',
    title: '促销活动管理',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'PromotionCard',
      destructuring: true,
    },
  },
  UserCard: {
    componentName: 'UserCard',
    title: '用户管理',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'UserCard',
      destructuring: true,
    },
  },
  RoleCard: {
    componentName: 'RoleCard',
    title: '角色管理',
    npm: {
      package: 'mall-components',
      version: '1.0.0',
      exportName: 'RoleCard',
      destructuring: true,
    },
  },
}

export default customComponents
