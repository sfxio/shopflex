const path = require('path')
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  css: {
    main: resolve('main.scss'),
    element: resolve('element-ui/index.scss'),
  },
}
