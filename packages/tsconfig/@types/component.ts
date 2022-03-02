import { ElCol, ElRow } from './element'
import type { ICssProps, ISize, TFlexDirection } from '.'

export interface IRowLayout extends Partial<ElRow>, ISize, ICssProps {
  direction?: TFlexDirection
}

export interface IColLayout extends Partial<ElCol>, ISize, ICssProps {
  order?: number
}

export interface IButton {}
