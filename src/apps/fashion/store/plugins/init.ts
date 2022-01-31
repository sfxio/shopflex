import type { PiniaPluginContext } from 'pinia'
import { ConfigState } from '~/../../types'
import { CONFIG_MODULE_NAME } from '..'

export function useInitConfig(initState: Partial<ConfigState>) {
  return function initConfig(ctx: PiniaPluginContext) {
    const store = ctx.store
    if (store.$id !== CONFIG_MODULE_NAME) {
      return
    }
    store.$patch(initState as any)
  }
}
