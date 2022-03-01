import { NuxtConfig } from '@nuxt/types'

export const modulesConfig: Partial<NuxtConfig> = {
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],
}
