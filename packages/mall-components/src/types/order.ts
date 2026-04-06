export interface OmsOrder {
  id: number
  memberId?: number
  couponId?: number
  orderSn?: string
  createTime: string
  memberUsername?: string
  totalAmount: number
  payAmount: number
  freightAmount: number
  promotionAmount?: number
  integrationAmount?: number
  couponAmount?: number
  discountAmount: number
  payType: number
  sourceType: number
  status: number
  orderType: number
  deliveryCompany?: string
  deliverySn?: string
  autoConfirmDay?: number
  integration?: number
  growth?: number
  promotionInfo: string
  billType?: number
  billHeader?: string
  billContent?: string
  billReceiverPhone?: string
  billReceiverEmail?: string
  receiverName?: string
  receiverPhone?: string
  receiverPostCode?: string
  receiverProvince: string
  receiverCity?: string
  receiverRegion?: string
  receiverDetailAddress?: string
  note?: string
  confirmStatus?: number
  deleteStatus?: number
  useIntegration?: number
  paymentTime: string
  deliveryTime: string
  receiveTime: string
  commentTime: string
  modifyTime?: string
}

export interface OmsOrderItem {
  id: number
  orderId: number
  orderSn: string
  productId: number
  productPic: string
  productName: string
  productBrand: string
  productSn: string
  productPrice: number
  productQuantity: number
  productSkuId: number
  productSkuCode: string
  productCategoryId: number
  promotionName: string
  promotionAmount: number
  couponAmount: number
  integrationAmount: number
  realAmount: number
  giftIntegration: number
  giftGrowth: number
  productAttr: string
}

export interface OmsOrderOperateHistory {
  id: number
  orderId: number
  operateMan: string
  createTime: string
  orderStatus: number
  note: string
}

export interface OrderQueryParam {
  pageNum?: number
  pageSize?: number
  orderSn?: string
  receiverKeyword?: string
  status?: number
  orderType?: number
  sourceType?: number
  createTime?: string
}

export interface OmsOrderDeliveryParam {
  orderId: number
  deliveryCompany?: string
  deliverySn?: string
}

export interface OmsOrderDetail extends OmsOrder {
  orderItemList: OmsOrderItem[]
  historyList: OmsOrderOperateHistory[]
}

export interface OmsReceiverInfoParam {
  orderId: number
  receiverName?: string
  receiverPhone?: string
  receiverPostCode?: string
  receiverDetailAddress?: string
  receiverProvince?: string
  receiverCity?: string
  receiverRegion?: string
  status: number
}

export interface OmsMoneyInfoParam {
  orderId: number
  freightAmount: number
  discountAmount: number
  status: number
}

export const ORDER_STATUS = {
  PENDING_PAYMENT: 0,
  PENDING_DELIVERY: 1,
  DELIVERED: 2,
  COMPLETED: 3,
  CLOSED: 4,
  INVALID: 5,
} as const

export const PAY_TYPE = {
  UNPAID: 0,
  ALIPAY: 1,
  WECHAT: 2,
} as const

export const SOURCE_TYPE = {
  PC: 0,
  APP: 1,
} as const

export const ORDER_TYPE = {
  NORMAL: 0,
  SECKILL: 1,
} as const

export const ORDER_STATUS_OPTIONS = [
  { label: '待付款', value: ORDER_STATUS.PENDING_PAYMENT },
  { label: '待发货', value: ORDER_STATUS.PENDING_DELIVERY },
  { label: '已发货', value: ORDER_STATUS.DELIVERED },
  { label: '已完成', value: ORDER_STATUS.COMPLETED },
  { label: '已关闭', value: ORDER_STATUS.CLOSED },
]

export const PAY_TYPE_OPTIONS = [
  { label: '未支付', value: PAY_TYPE.UNPAID },
  { label: '支付宝', value: PAY_TYPE.ALIPAY },
  { label: '微信', value: PAY_TYPE.WECHAT },
]

export const SOURCE_TYPE_OPTIONS = [
  { label: 'PC订单', value: SOURCE_TYPE.PC },
  { label: 'APP订单', value: SOURCE_TYPE.APP },
]

export const ORDER_TYPE_OPTIONS = [
  { label: '正常订单', value: ORDER_TYPE.NORMAL },
  { label: '秒杀订单', value: ORDER_TYPE.SECKILL },
]
