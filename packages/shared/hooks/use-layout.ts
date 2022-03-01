import { provide as Provide, inject as Inject } from '@nuxtjs/composition-api'

export const USE_LAYOUT_KEY = 'useLayout'
export const useLayout = <T>() => {
  return {
    provide(data: T) {
      Provide(USE_LAYOUT_KEY, data)
    },
    inject() {
      const data: T = Inject(USE_LAYOUT_KEY)
      if (!data) {
        const msg = `${useLayout.name} inject must be used inside ${useLayout.name} provider`
        throw new Error(msg)
      }
      return data
    },
  }
}

export type UseLayoutReturn = ReturnType<typeof useLayout>
