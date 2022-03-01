import { mergeNuxtConfig } from './helper'
import {
  baseConfig,
  cssConfigPlus,
  pluginsConfigPlus,
  buildConfig,
  modulesConfig,
} from './nuxt-base'

export default mergeNuxtConfig(
  baseConfig,
  cssConfigPlus,
  pluginsConfigPlus,
  buildConfig,
  modulesConfig,
)
