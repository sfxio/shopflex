import { useScroll } from '@vueuse/core'
import { computed, inject, provide, ComputedRef } from 'vue'

interface ScrollContext extends ReturnType<typeof useScroll> {
  isTop: ComputedRef<boolean>
}

export const useScrollProvide = (ref) => {
  const { y, ...rest } = useScroll(ref)
  provide('scroll', {
    y,
    ...rest,
    isTop: computed(() => {
      return y.value === 0
    }),
  })
}

export const useScrollContext = () => {
  return inject<ScrollContext>('scroll')
}
