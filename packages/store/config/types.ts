export const CONFIG_MODULE_NAME = 'layout'

export const configStateTypes = {
  baseConfig: 'baseConfig',
} as const

export const configMutationTypes = {
  setBaseConfig: 'setBaseConfig',
  // updateLayout: 'updateLayout',
} as const

export const configActionTypes = {
  setBaseConfig: 'setBaseConfig',
} as const

export const configMutationTypesFull = Object.keys(configMutationTypes).reduce(
  (prev, key) => {
    prev[key] = `${CONFIG_MODULE_NAME}/${configMutationTypes[key]}`
    return prev
  },
  {} as {
    [key in keyof typeof configMutationTypes]: string
  },
)

export const configActionTypesFull = Object.keys(configActionTypes).reduce(
  (prev, key) => {
    prev[key] = `${CONFIG_MODULE_NAME}/${configActionTypes[key]}`
    return prev
  },
  {} as {
    [key in keyof typeof configActionTypes]: string
  },
)
