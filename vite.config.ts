import * as path from 'path'
import { defineConfig } from 'vite'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import vue from '@vitejs/plugin-vue'

const theme = require('./theme/fashion')

export default defineConfig({
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
          'link-color': theme.primary,
        },
      },
    },
  },
  server: {},
})
