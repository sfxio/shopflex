export const LAYOUT_MODULE_NAME = 'layout'

export const layoutStateTypes = {
  layout: 'layout',
} as const

export const layoutMutationTypes = {
  setLayout: 'setLayout',
  updateLayout: 'updateLayout',
} as const

export const layoutActionTypes = {
  setLayout: 'setLayout',
} as const

export const layoutMutationTypesFull = Object.keys(layoutMutationTypes).reduce(
  (prev, key) => {
    prev[key] = `${LAYOUT_MODULE_NAME}/${layoutMutationTypes[key]}`
    return prev
  },
  {} as {
    [key in keyof typeof layoutMutationTypes]: string
  },
)

export const layoutActionTypesFull = Object.keys(layoutActionTypes).reduce(
  (prev, key) => {
    prev[key] = `${LAYOUT_MODULE_NAME}/${layoutActionTypes[key]}`
    return prev
  },
  {} as {
    [key in keyof typeof layoutActionTypes]: string
  },
)
