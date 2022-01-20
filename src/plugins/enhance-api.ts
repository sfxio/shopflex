import type { AxiosInstance } from 'axios'
import type { Store } from 'vuex'
import { user, config as sConfig } from '@/store'
import { clearVoidKey, isNotVoid, log } from '@/utils'

const transformParams = (params, store: Store<any>) => {
  const region = store.getters[sConfig.CONFIG_G_REGION]
  const channel = store.getters[sConfig.CONFIG_G_CHANNEL]
  let platform = store.getters[sConfig.CONFIG_G_PLATFORM]

  if (Array.isArray(platform)) {
    platform = platform.join(',')
  }

  params = clearVoidKey({
    regionCode: region,
    channel,
    platform,
    ...params,
  })

  return params
}

const transformHeaders = (headers, store: Store<any>) => {
  const token = store.getters[user.USER_G_TOKEN]
  if (isNotVoid(token)) {
    headers.Authorization = token
  }

  return headers
}

export const enhanceHttp = (
  instance: AxiosInstance,
  store: Store<any>,
  config?: any,
) => {
  log.verbose('plugin', ' enhance http start...')
  instance.interceptors.request.use((instanceConfig) => {
    const params = transformParams(instanceConfig.params ?? {}, store)
    const headers = transformHeaders(instanceConfig.headers ?? {}, store)

    instanceConfig.params = params
    instanceConfig.headers = headers

    return instanceConfig
  })

  log.verbose('plugin', ' enhance http done')
  return instance
}
