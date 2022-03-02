const deepmerge = require('deepmerge')

module.exports = function mergeTailwindConfig(...partialConfig) {
  const options = {
    customMerge(key) {
      if (key === 'daisyui') {
        return (x, y) =>
          deepmerge(x, y, {
            customMerge(key) {
              if (key === 'themes') {
                const xThemes = x.themes || []
                const yThemes = y.themes
                let themes = []
                if (
                  Array.isArray(yThemes) &&
                  yThemes.length &&
                  Array.isArray(xThemes) &&
                  xThemes.length
                ) {
                  themes[0] = deepmerge(xThemes[0], yThemes[0])
                }

                return () => themes
              }
              return (x, y) => deepmerge(x, y)
            },
          })
      }
      return (x, y) => deepmerge(x, y)
    },
  }
  return deepmerge.all(partialConfig, options)
}
