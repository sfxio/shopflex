/* eslint-disable */
import axios from 'axios'
import { ERR_CODE_OK } from './_constant'

const baseURL = process.env.API_BASE_URL || '/api'

export const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  transformRequest: [(data) => JSON.stringify(data)],
  // withCredentials: true,
  timeout: process.env.API_TIMEOUT
    ? Number(process.env.API_TIMEOUT)
    : 30 * 1000,
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
