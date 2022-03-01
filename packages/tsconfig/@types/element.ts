/** Responsive column props */
export interface ResponsiveColumnProperties {
  /** Number of column the grid spans */
  span: number

  /** Number of spacing on the left side of the grid */
  offset: number
}

/** Responsive column property */
export type ResponsiveColumn = number | ResponsiveColumnProperties

/** Colunm Layout Component */
export interface ElCol {
  /** Number of column the grid spans */
  span: number

  /** Number of spacing on the left side of the grid */
  offset: number

  /** Number of columns that grid moves to the right */
  push: number

  /** Number of columns that grid moves to the left */
  pull: number

  /** <768px Responsive columns or column props object */
  xs: ResponsiveColumn

  /** ≥768px Responsive columns or column props object */
  sm: ResponsiveColumn

  /** ≥992px Responsive columns or column props object */
  md: ResponsiveColumn

  /** ≥1200px Responsive columns or column props object */
  lg: ResponsiveColumn

  /** ≥1920px Responsive columns or column props object */
  xl: ResponsiveColumn

  /** custom element tag */
  tag: string
}

/** Horizontal alignment of flex layout */
export type HorizontalAlignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

/** vertical alignment of flex layout */
export type VertialAlignment = 'top' | 'middle' | 'bottom'

/** Row Layout Component */
export interface ElRow {
  /** Grid spacing */
  gutter: number

  /** Layout mode. You can use flex. Works in modern browsers */
  type: string

  /** Horizontal alignment of flex layout */
  justify: HorizontalAlignment

  /** Vertical alignment of flex layout */
  align: VertialAlignment

  /** Custom element tag */
  tag: string
}
