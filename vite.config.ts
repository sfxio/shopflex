import * as path from 'path'
import { defineConfig } from 'vite'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

process.env.SH_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
  process.env.SH_APP_BUILD_EPOCH = new Date().getTime().toString()
}

const proxyApiTarget = process.env.SH_API_PROD_BASE_URL
const APP_NAME = process.env.SH_APP_NAME
const theme = require(`./theme/${APP_NAME}`)
console.log('vite config ', 'starting ', APP_NAME)

if (!APP_NAME) {
  throw new Error('Please specify the app name')
}

export default defineConfig({
  envPrefix: 'SH_',
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, `./src/apps/${APP_NAME}`),
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
  server: {
    proxy: {
      '/api': {
        target: proxyApiTarget,
        changeOrigin: true,
        rewrite: (path) => {
          const res = path.replace(/^\/api/, '')
          return res
        },
      },
    },
  },
})
