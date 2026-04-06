import type { PageParam } from './common'

export type PmsProduct = {
  id?: number
  brandId?: number
  productCategoryId?: number
  name: string
  pic?: string
  productSn: string
  deleteStatus?: number
  publishStatus?: number
  newStatus?: number
  recommandStatus?: number
  verifyStatus?: number
  sort?: number
  sale?: number
  price?: number
  promotionPrice?: number
  subTitle?: string
  originalPrice?: number
  stock?: number
  lowStock?: number
  unit?: string
  weight?: number
  previewStatus?: number
  serviceIds?: string
  keywords?: string
  note?: string
  albumPics?: string
  detailTitle?: string
  promotionStartTime?: string
  promotionEndTime?: string
  promotionPerLimit?: number
  promotionType?: number
  brandName?: string
  productCategoryName?: string
  description?: string
  detailDesc?: string
  detailHtml?: string
  detailMobileHtml?: string
}

export type ProductQueryParam = PageParam & {
  publishStatus?: number
  verifyStatus?: number
  productSn?: string
  productCategoryId?: number
  brandId?: number
}
