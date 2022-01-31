import { AppConfig } from '..'

export interface ConfigState {
  appConfig: AppConfig | null
  globalConfig: any | null
  region?: string
}
