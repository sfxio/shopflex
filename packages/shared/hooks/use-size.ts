import { computed, Ref, unref } from '@nuxtjs/composition-api'
import { isDef, toSize } from '../utils'

type ISize = number | string
export interface IUseSizeProps {
  width?: ISize //| Ref<ISize>
  height?: ISize //| Ref<ISize>
}

export interface IUseSizeOptions {
  /**
   * @default 'px'
   */
  unit?: 'px' | 'rem' | 'em' | 'vh' | 'vw' | string
  extraStyle?: Partial<CSSStyleDeclaration>
}

export const useSize = (
  props: IUseSizeProps,
  options: IUseSizeOptions = {},
) => {
  const { unit, extraStyle = {} } = options
  const style = computed(() => {
    const width = props.width
    const height = props.height
    const res: any = {}
    if (isDef(width)) {
      res.width = toSize(width, unit)
    }
    if (isDef(height)) {
      res.height = toSize(height, unit)
    }

    return {
      ...res,
      ...unref(extraStyle),
    }
  })

  return {
    style,
  }
}

export type IUseSizeReturn = ReturnType<typeof useSize>
