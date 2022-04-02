import type { RouteLocation } from 'vue-router'

export interface MenuItem {
  id: string
  title: string
  icon?: string
  children?: MenuItem[]
  location: Partial<RouteLocation>
  badge?: any
  queryTo?: string
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
