/* eslint-disable */
// @ts-nocheck
import axios from 'axios'
import { asyncTo } from '../utils'
import { ERR_CODE_OK } from './_constant'

let baseURL
if (import.meta.env.DEV) {
  baseURL = import.meta.env.SH_API_DEV_BASE_URL
} else if (import.meta.env.PROD) {
  baseURL = import.meta.env.SH_API_PROD_BASE_URL
}

const timeout = import.meta.env.SH_API_TIMEOUT
  ? Number(import.meta.env.SH_API_TIMEOUT)
  : 30 * 1000

export const defaultHttp = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  transformRequest: [(data) => JSON.stringify(data)],
  // withCredentials: true,
  timeout,
})

defaultHttp.interceptors.response.use((res) => {
  const data = res.data
  const code = data.code || ERR_CODE_OK
  return code === ERR_CODE_OK
    ? Promise.resolve(data)
    : Promise.reject({
        message: data.message,
        code,
      })
})

const httpMethods = ['get', 'post', 'put', 'delete', 'patch']
httpMethods.forEach((method) => {
  const origin = defaultHttp[method]
  defaultHttp[method] = (...args) => asyncTo(origin(...args))
})
