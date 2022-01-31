// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type {
  ProductListParams,
  ProductListRes,
  BaseParams,
  AsyncToRes,
} from '@/types'

import { defaultHttp } from './http'
import { normalizer } from '@/utils'
import { transformRes } from './_helper'

export async function fetchProductList(
  params?: ProductListParams,
): AsyncToRes<ProductListRes> {
  params = normalizer.normalizeProductListParams(params)
  const res = await defaultHttp.get('/distributor/product/list', { params })
  return transformRes(res, (res) => {
    const { list, ...rest } = res.data || {}
    rest.list = normalizer.normalizeProductList(list)

    return rest
  })
}

export const fetchCategories = async (params?: BaseParams) => {
  const res = await defaultHttp.get('/productCategory/aws/list/product/withChildren', {
    params,
  })
  return transformRes(res, (res) => {
    return normalizer.normalizeCategoryList(res.data)
  })
}
