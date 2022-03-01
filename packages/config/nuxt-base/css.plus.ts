import { NuxtConfig } from '@nuxt/types'
import theme from '@shopflex-site-ssr/theme'

export const cssConfigPlus: Partial<NuxtConfig> = {
  // * https://nuxtjs.org/api/configuration-transition
  pageTransition: 'fade',
  layoutTransition: {},

  // * https://vue-nuxt.gitbook.io/nuxt/configuration/loading
  loading: {
    color: `var(--fs-c-primary, #3B8070)`,
    failedColor: `var(--fs-c-danger, red)`,
    height: '2px',
    throttle: 200,
    duration: 5000,
    rtl: false,
  },
  css: [theme.css.main],
}
