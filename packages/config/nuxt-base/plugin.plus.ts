import type { NuxtConfig } from '@nuxt/types'
import { ui, lazyload } from '@shopflex-site-ssr/plugins'

export const pluginsConfigPlus: Partial<NuxtConfig> = {
  plugins: [
    { src: ui, mode: 'all' },
    { src: lazyload, mode: 'client' },
  ],
}
