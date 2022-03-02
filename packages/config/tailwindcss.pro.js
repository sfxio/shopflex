const baseConfig = require('./tailwindcss.base')
const deepmerge = require('deepmerge')

const config = {
  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    // daisyui
    themes: [
      {
        mytheme: {
          primary: process.env.UI_PRIMARY_COLOR || '#286df8',
          'primary-focus': process.env.UI_SECONDARY_COLOR || '#56a7ff',
          'primary-content': '#ffffff',

          secondary: process.env.UI_SECONDARY_COLOR || '#56a7ff',
          'secondary-focus': process.env.UI_SECONDARY_COLOR || '#ff5757',
          'secondary-content': '#ffffff',

          accent: process.env.UI_ACCENT_COLOR || '#ffc0c0',
          'accent-focus': process.env.UI_ACCENT_COLOR || '#ffc0c0',
          'accent-content': '#ffffff',

          neutral: process.env.UI_NEUTRAL_COLOR || '#2A2E37',
          'neutral-focus': process.env.UI_ACCENT_COLOR || '#2A2E37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-content': '#000000',
          'base-200': '#ffffff',
          'base-300': '#ffffff',

          info: process.env.UI_INFO_COLOR || '#3ABFF8',
          'info-focus': process.env.UI_INFO_COLOR || '#3ABFF8',
          'info-content': '#000000',

          success: process.env.UI_SUCCESS_COLOR || '#1890ff',
          'success-focus': process.env.UI_SUCCESS_COLOR || '#1890ff',
          'success-content': '#000000',

          warning: process.env.UI_WARNING_COLOR || '#faad14',
          'warning-focus': process.env.UI_WARNING_COLOR || '#faad14',
          'warning-content': '#000000',

          error: process.env.UI_ERROR_COLOR || '#f5222d',
          'error-focus': process.env.UI_ERROR_COLOR || '#f5222d',
          'error-content': '#000000',
        },
      },
      // 'dark', // and some pre-defined theme
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },
}

module.exports = deepmerge(baseConfig, config)
