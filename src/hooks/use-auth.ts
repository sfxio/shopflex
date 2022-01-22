import { isFunction } from '@/utils'
import { useRoute, useRouter } from 'vue-router'

export const useAuth = () => {
  const route = useRoute()
  const router = useRouter()

  const toAuth = (
    authLocation: string | ((route: any, router: any) => any),
  ) => {
    const from = route.fullPath
    let location: any = authLocation

    if (isFunction(location)) {
      location = location(route, router)
      let query = location.query ?? {}
      query = { from, ...query }

      return router.push({
        ...location,
        query,
      })
    }

    if (route.path !== location) {
      return router.push({
        path: location,
        query: { from },
      })
    }
  }

  return {
    toAuth,
  }
}
