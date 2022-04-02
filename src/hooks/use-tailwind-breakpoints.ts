import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, inject, provide } from 'vue'

export const useTailwindBreakpoints = () => {
  const bks = useBreakpoints(breakpointsTailwind)

  const notPhone = bks.sm
  return {
    ...bks,
    notPhone,
    isPhone: computed(() => !notPhone.value),
  }
}

const key = 'useTailwindResponsive'

export const useResponsive = () => {
  const bks = useBreakpoints(breakpointsTailwind)

  const notPhone = bks.sm
  const res = {
    ...bks,
    notPhone,
    isPhone: computed(() => !notPhone.value),
  }

  provide(key, res)
  return res
}

export const useResponsiveInject = () => {
  return inject<ReturnType<typeof useResponsive>>(key)
}
