import axios, { AxiosRequestConfig } from 'axios'

const prodBaseURL = process.env.HTTP_PROD_BASE_URL || 'https://api.shopflex.io'
const devBaseURL = process.env.HTTP_DEV_BASE_URL || '/api'

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  transformRequest: data => JSON.stringify(data),

  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}

if (process.env.HTTP_TIMEOUT) {
  defaultConfig.timeout = Number(process.env.HTTP_TIMEOUT || 60 * 1000)
}

export const http = axios.create(defaultConfig)

http.interceptors.response.use(res => res.data)
http.interceptors.request.use(config => {
  let params = config.params || {}
  let body = config.data || {}

  if (params.platform && Array.isArray(params.platform)) {
    params.platform = params.platform[0]
  }

  if (body.platform && Array.isArray(body.platform)) {
    body.platform = body.platform[0]
  }

  return config
})

export const enhanceReq = (
  reqInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig,
) => {
  return http.interceptors.request.use(reqInterceptor)
}

export const enhanceRes = (resInterceptor: (res: any) => any) => {
  return http.interceptors.response.use(resInterceptor)
}

export const enhance = {
  enhanceReq,
  enhanceRes,
}
