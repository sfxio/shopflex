import type { NuxtConfig } from '@nuxt/types'
import { elementUI, lazyload, responsive } from '@shopflex-site-ssr/plugins'

export const pluginsConfigPlus: Partial<NuxtConfig> = {
  plugins: [
    { src: elementUI, mode: 'all' },
    { src: responsive, mode: 'all' },
    { src: lazyload, mode: 'all' },
  ],
}
