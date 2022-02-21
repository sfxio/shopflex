import { AppConfig, MenuItem } from '..'

export interface ConfigState {
  appConfig: AppConfig | null
  globalConfig: any | null
  region?: string
  menu: MenuItem[]
}
