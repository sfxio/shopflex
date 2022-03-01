export interface IBaseProps {
  class?: string | string[] | object
  style?: string | string[] | Partial<ElementCSSInlineStyle['style']>
}

export interface IProps<P> {
  props: P
  childrenPropsMap?: { [index: string]: IProps<any> }
  childrenProps?: IProps<any>[]
}
