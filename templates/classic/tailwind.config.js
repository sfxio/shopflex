const baseConfig = require('@shopflex-site-ssr/config/tailwindcss.pro')
const deepmerge = require('deepmerge')
const config = {
  daisyui: {
    styled: true,
    // daisyui
    themes: [
      {
        mytheme: {
          primary: '#286df8',
          'primary-focus': '#56a7ff',
          'primary-content': '#ffffff',

          secondary: '#56a7ff',
          'secondary-focus': '#ff5757',
          'secondary-content': '#ffffff',

          accent: '#ffc0c0',
          'accent-focus': '#ffc0c0',
          'accent-content': '#ffffff',

          neutral: '#2A2E37',
          'neutral-focus': '#2A2E37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-content': '#000000',
          'base-200': '#ffffff',
          'base-300': '#ffffff',

          info: '#3ABFF8',
          'info-focus': '#3ABFF8',
          'info-content': '#000000',

          success: '#36D399',
          'success-focus': '#36D399',
          'success-content': '#000000',

          warning: '#FBBD23',
          'warning-focus': '#FBBD23',
          'warning-content': '#000000',

          error: '#ff0000',
          'error-focus': '#ff0000',
          'error-content': '#000000',
        },
      },
      // 'dark', // and some pre-defined theme
    ],
  },
  ...baseConfig,
}
module.exports = deepmerge(baseConfig, config)
