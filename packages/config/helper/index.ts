import { NuxtConfig } from '@nuxt/types'
import deepmerge from 'deepmerge'
export interface IMergeConfig {}

export function mergeNuxtConfig(
  config: Partial<NuxtConfig>,
  ...configs: Partial<NuxtConfig>[]
): Partial<NuxtConfig> {
  return deepmerge.all([config, ...configs], {
    customMerge(key: string) {
      if (key === 'router') {
        return (x = {}, y = {}) => {
          const res: any = deepmerge(x, y)
          const xExtendRoutes = x.extendRoutes ?? (() => {})
          const yExtendRoutes = y.extendRoutes ?? (() => {})
          res.extendRoutes = (...args) => {
            xExtendRoutes(...args)
            yExtendRoutes(...args)
          }
          return res
        }
      }
      return (x, y) => deepmerge(x, y)
    },
  })
}

export function mergeConfigEnhance(
  mergeConfig: IMergeConfig,
  ...configs: Partial<NuxtConfig>[]
) {
  return deepmerge.all(configs, mergeConfig)
}
