import { useScroll } from '@shopflex-site-ssr/shared'
import {
  computed,
  inject,
  provide,
  ComputedRef,
  Ref,
} from '@nuxtjs/composition-api'

interface ScrollContext {
  isTop: ComputedRef<boolean>
  y: number
}

export const useScrollProvide = (
  refEl: Ref<HTMLElement>,
  threshold = 64,
  options: { throttle?: number } = {},
) => {
  const { y } = useScroll(refEl, options)
  provide('scroll', {
    y,
    isTop: computed(() => {
      return y.value <= threshold
    }),
  })
}

export const useScrollContext = () => {
  return inject<ScrollContext>('scroll')
}
