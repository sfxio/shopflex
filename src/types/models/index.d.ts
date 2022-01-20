type Rec = Record<string, any>

export type SkuItem = any

export interface ProductItem {
  id: any
  cover: string
  imgList?: string[]
  attrList?: { key: string; value: string }[]
  name: string
  description: string
  mpn?: string
  cost: number
  price: number
  categoryId: any
  region: string
  stock: number
  currencyCode: string
  skuList?: SkuItem[]
}

export interface User {
  id: number | string
  name: string
}

export interface Category {
  id: string | number
  name: string
  description?: string
  icon?: string
  children?: Category[]
}
