import type { VNode } from 'vue'
import { IProps } from '@shopflex-site-ssr/tsconfig/@types/components'
import { FsRowProps } from '..'

export interface FsBulletinProps extends FsRowProps {
  link?: string
  title: string
  icon?: string | VNode
}

export interface FsBulletin extends IProps<FsBulletinProps> {}

export { default as bulletin } from './bulletin.vue'
