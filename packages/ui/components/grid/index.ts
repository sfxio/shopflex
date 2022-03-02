import { ISize } from '@shopflex-site-ssr/tsconfig/@types'
import { ElCol, ElRow } from '@shopflex-site-ssr/tsconfig/@types/element'
import {
  IBaseProps,
  IProps,
} from '@shopflex-site-ssr/tsconfig/@types/components'

export interface FsRowProps extends Partial<ElRow>, IBaseProps, ISize {
  /**
   * @default 'row'
   */
  direction?: 'column' | 'row'
}

export interface FsColProps extends Partial<ElCol>, IBaseProps, ISize {
  /**
   * @default 0
   */
  order?: number
}

export interface FsRow extends IProps<FsRowProps> {}
export interface FsCol extends IProps<FsColProps> {}

export { default as col } from './col.vue'
export { default as row } from './row.vue'
