import * as path from 'path'
import { defineConfig } from 'vite'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import theme from './theme/fashion/index'

process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

const app = process.env.APP_NAME
if (!app) {
  throw new Error('Please specify the app name')
}

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, `./src/apps/${app}`),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': theme.primary,
          'info-color': theme.primary,
          'processing-color': theme.primary,
          'link-color': theme.link,
        },
      },
    },
  },
})
