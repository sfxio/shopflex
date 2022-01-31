import type { PiniaPluginContext } from 'pinia'
import type { AxiosInstance } from 'axios'
import { clearVoidKey } from '@/utils'
import { CONFIG_MODULE_NAME, useConfigStore } from '..'

export function useEnhanceHttp(http: AxiosInstance) {
  return function (ctx: PiniaPluginContext) {
    const store = ctx.store as ReturnType<typeof useConfigStore>
    if (store.$id !== CONFIG_MODULE_NAME) {
      return
    }

    http.interceptors.request.use((config) => {
      const params = config.params || {}
      const appConfig = store.appConfig
      if (appConfig) {
        params.channel = params.channel || appConfig.channel
        params.platform =
          params.platform ||
          (Array.isArray(appConfig.platform)
            ? appConfig.platform[0]
            : appConfig.platform)
      }
      params.regionCode = params.region || params.regionCode || store.region

      config.params = clearVoidKey(params)
      return config
    })
  }
}
