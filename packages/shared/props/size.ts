import { TSize } from '@shopflex-site-ssr/tsconfig/@types'

export const sizePropsGen = (
  options: { width?: TSize; height?: TSize } = {},
) => {
  return {
    height: {
      type: [Number, String],
      default: options.height,
    },
    width: {
      type: [Number, String],
      default: options.width,
    },
  }
}
