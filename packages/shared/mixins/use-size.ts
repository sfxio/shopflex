import type { TSize } from '@shopflex-site-ssr/tsconfig/@types'

export const useSize = (options: { width?: TSize; height?: TSize } = {}) => {
  return {
    props: {
      height: {
        type: [Number, String],
        default: options.height,
      },
      width: {
        type: [Number, String],
        default: options.width,
      },
    },
  }
}

export type UseSizeReturn = ReturnType<typeof useSize>
