export type SkuItem = any
export interface ProductItem {
  id: any
  cover: string
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
