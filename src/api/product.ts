// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { ProductListParams, ProductListRes } from '@/types'
import { http } from './http'
import { log, normalizer } from '@/utils'
import { ERR_CODE_OK } from './_constant'
import { AsyncToRes } from '@/types/utils'

export async function fetchProductList(
  params?: ProductListParams,
): AsyncToRes<ProductListRes> {
  params = normalizer.normalizeProductListParams(params)
  const [err, res] = await http.get('/distributor/product/list', { params })
  if (err) {
    log.http('product', 'fetch product list err with - ', err)
    return Promise.resolve([err, null])
  }

  if (res.code !== ERR_CODE_OK) {
    return [new Error(res.message), null]
  }

  return [null, res.data]
}
