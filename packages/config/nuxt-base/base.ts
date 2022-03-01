import { NuxtConfig } from '@nuxt/types'

export const baseConfig: Partial<NuxtConfig> = {
  // Auto import components: https://go.nuxtjs.dev/config-components
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
        crossOrigin: 'anonymous',
      },
    ],
  },
  components: true,

  tailwindcss: {
    viewer: false,
  },
  // proxy: {
  //   '/api': {
  //     target: process.env.PROXY_API || 'https://api.shopflex.io',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '', // 将 /api 替换掉,如果请求地址中有 /api 则不必替换
  //     },
  //   },
  // },
}
