import { NuxtConfig } from '@nuxt/types'
import baseConfig from '@shopflex-site-ssr/config/nuxt.plus.config'
import { mergeNuxtConfig } from '@shopflex-site-ssr/config/helper'
import DotEnv from 'dotenv'

DotEnv.config()

const config: Partial<NuxtConfig> = {
  // https://nuxtjs.org/guides/configuration-glossary/configuration-css
  // target: 'static',
  css: ['~/assets/styles/main.scss'],

  buildModules: ['nuxt-typed-vuex'],
  build: {
    extend(config, ctx) {
      config.stats = {
        all: true,
        warnings: false,
      }
    },
  },
}

export default mergeNuxtConfig(baseConfig, config)
