import { ref } from '@nuxtjs/composition-api'

export function useLoading() {
  const isLoading = ref(false)

  const run = <T>(
    promise: Promise<T>,
    options: { timeout?: number } = {},
  ): Promise<T> => {
    const { timeout } = options
    let id: ReturnType<typeof setTimeout>

    if (timeout) {
      id = setTimeout(() => {
        isLoading.value = false
        id = undefined
      }, timeout)
    }

    isLoading.value = true
    promise = promise.finally(() => {
      if (id) clearTimeout(id)
      isLoading.value = false
    })

    return promise
  }

  return {
    isLoading,
    run,
  }
}
