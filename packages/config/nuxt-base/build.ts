import { NuxtConfig } from '@nuxt/types'

export const buildConfig: Partial<NuxtConfig> = {
  buildModules: [
    '@nuxt/typescript-build',

    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',

    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // tailwindcss supports tree-shaking
    '@nuxtjs/tailwindcss',
  ],

  build: {
    analyze:
      process.env.NODE_ENV !== 'production' || process.env.ANALYZE != undefined,
    transpile: [/^element-ui/],
    standalone: true,
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': process.env.UI_PRIMARY_COLOR || '#286df8',
          'success-color': process.env.UI_SUCCESS_COLOR || '#1890ff',
          'warning-color': process.env.UI_WARNING_COLOR || '#faad14',
          'error-color': process.env.UI_ERROR_COLOR || '#f5222d',
          'link-color': process.env.UI_LINK_COLOR || '#1890ff',
          'font-size-base': process.env.UI_FONT_SIZE_BASE || '16px',
        },
      },
    },
    babel: {
      // plugins: [
      //   [
      //     'component',
      //     {
      //       libraryName: 'element-ui',
      //       styleLibraryName: 'theme-chalk',
      //     },
      //   ],
      // ],
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        'postcss-import': {},
      },
      preset: {
        autoprefixer: {
          grid: false,
        },
      },
    },
  },
}
