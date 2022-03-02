const baseConfig = require('@shopflex-site-ssr/config/tailwindcss.pro')
const merge = require('@shopflex-site-ssr/config/helper/tailwind-merge')

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
        },
      },
      // 'dark', // and some pre-defined theme
    ],
  },
  ...baseConfig,
}

module.exports = merge(baseConfig, config)
