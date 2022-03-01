import { IBaseProps } from '@shopflex-site-ssr/tsconfig/@types/components'
import {
  TButtonModifier,
  TResponsive,
  TShape,
} from '@shopflex-site-ssr/tsconfig/@types'

export interface FsButtonProps extends IBaseProps {
  /**
   * @default 'primary'
   */
  type?: TButtonModifier
  /**
   * @default 'sm'
   */
  size?: TResponsive
  /**
   * @default false
   */
  loading?: boolean
  shape?: TShape
  /**
   * @default false
   */
  disabled?: boolean
}

export { default as button } from './button.vue'
