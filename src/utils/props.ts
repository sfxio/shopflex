export const cssPropGen = (defaultValue: string | object) => {
  return {
    type: [String, Object],
    default: defaultValue,
  }
}

export const cssProps = {
  type: [String, Object],
  default: '',
}
