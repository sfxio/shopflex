import type { ConfigState } from '@/types'
import type { PiniaPluginContext } from 'pinia'

import { CONFIG_MODULE_NAME } from '../config'

export function useInitConfig(initState: Partial<ConfigState>) {
  return function initConfig(ctx: PiniaPluginContext) {
    const store = ctx.store
    if (store.$id !== CONFIG_MODULE_NAME) {
      return
    }
    store.$patch(initState as any)
  }
}
