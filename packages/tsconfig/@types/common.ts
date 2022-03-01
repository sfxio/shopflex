export type TSize = number | string
export interface ISize {
  width?: TSize
  height?: TSize
}
export type TFlexDirection = 'column' | 'row'
export interface ICssProps {
  class?: string | object | Array<string>
  style?: ElementCSSInlineStyle | string | Array<string>
}

export type TModifier =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type TButtonModifier =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'
  | 'outline'
  | 'disabled'
  | 'active'

export type TResponsive = 'xs' | 'sm' | 'md' | 'lg'
export type TShape = 'wide' | 'block' | 'circle' | 'square'
