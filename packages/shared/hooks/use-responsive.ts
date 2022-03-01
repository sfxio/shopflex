import { Ref, ref, useContext, onBeforeUnmount } from '@nuxtjs/composition-api'
import { mobileDetect } from '../utils'

export interface IResponsive {
  xm: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  xxl: boolean
  xxxl: boolean
  listeners: any[]
  queries: MediaQueryList[]
}

const screens = {
  xm: '576px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
  xxxl: '2080px',
}

function setResponsive(responsive: IResponsive, ua): typeof responsive {
  const { isPC, isTablet } = mobileDetect(ua)
  if (isTablet) {
    return {
      ...responsive,
      xm: true,
      sm: true,
      md: true,
    }
  }
  if (isPC) {
    return {
      ...responsive,
      xm: true,
      sm: true,
      md: true,
      xl: true,
      xxl: true,
    }
  }

  return responsive
}

export function useResponsive(): { responsive: Ref<IResponsive> } {
  const responsive = ref({
    xm: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    xxxl: false,
    listeners: [],
    queries: [],
  }) as Ref<IResponsive>
  const ctx = useContext()
  let ua
  if (process.server) {
    ua = ctx.req.headers['user-agent']
  } else {
    ua = window.navigator.userAgent
  }
  responsive.value = setResponsive(responsive.value, ua)

  if (process.client) {
    Object.entries(screens).forEach(([key, value]) => {
      const query = window.matchMedia(`(min-width: ${value})`)
      const listener = query.addEventListener('change', e => {
        responsive.value[key] = e.matches
      })

      responsive.value[key] = query.matches
      responsive.value.queries.push(query)
      responsive.value.listeners.push(listener)
    })
  }

  onBeforeUnmount(() => {
    const queries = responsive.value.queries
    const listeners = responsive.value.listeners
    queries.forEach((query, index) => {
      if (query) {
        query.removeEventListener('change', listeners[index])
      }
    })
  })

  return {
    responsive,
  }
}
