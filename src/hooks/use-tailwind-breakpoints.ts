import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

export const useTailwindBreakpoints = () => {
  const bks = useBreakpoints(breakpointsTailwind)

  const notPhone = bks.sm
  return {
    ...bks,
    notPhone,
    isPhone: computed(() => !notPhone.value),
  }
}
