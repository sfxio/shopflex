export type OmitParam0<T> = T extends (param: any, payload: infer P) => infer R
  ? (payload: P) => R
  : T
