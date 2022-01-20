/* eslint-disable */
// @ts-nocheck
import axios from 'axios'
import { ERR_CODE_OK } from './_constant'

let baseURL
if (import.meta.env.DEV) {
  baseURL = import.meta.env.SH_API_DEV_BASE_URL
} else if (import.meta.env.PROD) {
  baseURL = import.meta.env.SH_API_PROD_BASE_URL
}

console.log('meta: ', import.meta)
const timeout = import.meta.env.SH_API_TIMEOUT
  ? Number(import.meta.env.SH_API_TIMEOUT)
  : 30 * 1000

console.log('timeout: ', timeout)

export const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  transformRequest: [(data) => JSON.stringify(data)],
  // withCredentials: true,
  timeout,
})

http.interceptors.response.use((res) => {
  const data = res.data
  const code = data.code || ERR_CODE_OK
  return code === ERR_CODE_OK
    ? Promise.resolve(data)
    : Promise.reject({
        message: data.message,
        code,
      })
})
