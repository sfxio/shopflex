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
          'primary-color': '#286df8',
        },
      },
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
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
