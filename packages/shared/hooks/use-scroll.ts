import { throttle } from '../utils'
import { ref, Ref, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'

export const useScroll = (
  refEl: Ref<HTMLElement>,
  options: { throttle?: number } = {},
) => {
  const y = ref(0)
  const listener = throttle(
    (e: Event) => {
      const target = e.target as HTMLElement
      y.value = target.scrollTop
    },
    options.throttle || 200,
    { trailing: true, leading: true },
  )

  onMounted(() => {
    refEl.value.addEventListener('scroll', listener, {
      passive: true,
      capture: false,
    })
  })

  onBeforeUnmount(() => {
    refEl.value.removeEventListener('scroll', listener)
  })
  return {
    y,
  }
}
