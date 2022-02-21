import { ProductItem } from '..'
import { BasePagination, BaseParams } from './base'

export interface ProductListParams extends BaseParams {
  // id === undefined 表示默认排序
  id?: number | string
  pageNum?: number
  pageSize?: number
  keyword?: string
  regionCode?: string
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}

export type ProductListRes = BasePagination<ProductItem>
