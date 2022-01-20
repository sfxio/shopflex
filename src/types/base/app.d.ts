export interface MenuItem {
  id: unknown
  name: string
  link?: string
  icon?: string
  query?: object
  params?: object
  children?: MenuItem[] | null
}

export interface AppConfig {
  name: string
  title?: string
  description?: string
  channel: string
  platform: string | string[]
  email?: string
  telephone?: string
  telephoneHref?: string
  policy?: string
  about?: string
  usage?: string
  shopLinks?: Record<string, string>
  menu?: any
}
