import { AxiosRequestConfig } from 'axios'
import { normalizeRes } from '../helper'
import { http } from '../http'

export const ProductService = {
  getProduct(query?: any, config: AxiosRequestConfig = {}) {
    return normalizeRes<{ total: number; list: any[] }>(
      http.get('/distributor/product/list', {
        params: query,
        ...config,
      }),
    )
  },
}
