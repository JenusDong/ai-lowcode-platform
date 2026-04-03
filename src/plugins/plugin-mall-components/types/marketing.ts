export interface SmsCoupon {
  id: number
  name: string
  type: number
  platform: number
  count: number
  amount: number
  perLimit: number
  minPoint: number
  startTime: string
  endTime: string
  useType: number
  note: string
  publishCount: number
  useCount: number
  receiveCount: number
  enableTime: string
  code: string
  memberLevel: number
}

export interface SmsCouponHistory {
  id: number
  couponId: number
  memberId: number
  memberNickname: string
  useStatus: number
  useTime: string
  orderId: number
  orderSn: string
  getType: number
}

export interface SmsFlashPromotion {
  id: number
  title: string
  startDate: string
  endDate: string
  status: number
  createTime: string
}

export interface SmsFlashPromotionSession {
  id: number
  name: string
  startTime: number
  endTime: number
  status: number
}

export interface SmsFlashPromotionProductRelation {
  id: number
  flashPromotionId: number
  flashPromotionSessionId: number
  productId: number
  productName: string
  productSn: string
  flashPromotionPrice: number
  flashPromotionCount: number
  flashPromotionLimit: number
  sort: number
}

export interface CouponQueryParam {
  pageNum?: number
  pageSize?: number
  name?: string
  type?: number
  platform?: number
  useType?: number
}

export interface PromotionQueryParam {
  pageNum?: number
  pageSize?: number
  title?: string
  status?: number
}

export const COUPON_TYPE = {
  FULL_REDUCTION: 0,
  DISCOUNT: 1,
} as const

export const COUPON_PLATFORM = {
  ALL: 0,
  MOBILE: 1,
  PC: 2,
  APP: 3,
} as const

export const COUPON_USE_TYPE = {
  ALL: 0,
  CATEGORY: 1,
  PRODUCT: 2,
} as const

export const COUPON_TYPE_OPTIONS = [
  { label: '满减券', value: COUPON_TYPE.FULL_REDUCTION },
  { label: '折扣券', value: COUPON_TYPE.DISCOUNT },
]

export const COUPON_PLATFORM_OPTIONS = [
  { label: '全平台', value: COUPON_PLATFORM.ALL },
  { label: '移动端', value: COUPON_PLATFORM.MOBILE },
  { label: 'PC端', value: COUPON_PLATFORM.PC },
  { label: 'APP端', value: COUPON_PLATFORM.APP },
]

export const COUPON_USE_TYPE_OPTIONS = [
  { label: '全场通用', value: COUPON_USE_TYPE.ALL },
  { label: '指定分类', value: COUPON_USE_TYPE.CATEGORY },
  { label: '指定商品', value: COUPON_USE_TYPE.PRODUCT },
]

export const PROMOTION_STATUS = {
  ENABLED: 1,
  DISABLED: 0,
} as const

export const PROMOTION_STATUS_OPTIONS = [
  { label: '启用', value: PROMOTION_STATUS.ENABLED },
  { label: '禁用', value: PROMOTION_STATUS.DISABLED },
]
