import type { ProductItem, ProductListParams } from '@/types'
import { BasePagination, BaseRes } from '@/types/api/base'

import { clearVoidKey } from '@/utils'
import { defaultHttp as http } from './http'
import { normalizeProductList, transformRes } from './_helper'

/**
 * 兼容后端接口
 */
function normalizeGetProductParams(params: ProductListParams): any {
  let { id, sortBy, orderBy, ...rest } = params as any
  if (id === 1122) {
    rest.newStatus = 1
  } else if (id === 1123) {
    id = 1122
    rest.status = 2
  }

  if (sortBy) {
    rest.sortCode = sortBy
  }
  if (orderBy) {
    rest.sortBy = orderBy
  }

  rest.productCategoryId = id

  return rest
}

export function getProduct(params: ProductListParams = {}) {
  params = normalizeGetProductParams(params)
  console.log('http: ', http.interceptors)
  return transformRes(
    http.get('/distributor/product/list', { params: clearVoidKey(params) }),
    (res) => {
      const { list = [], ...rest } = res.data
      rest.list = normalizeProductList(list)
      return rest
    },
  ) as BaseRes<BasePagination<ProductItem[]>>
}
