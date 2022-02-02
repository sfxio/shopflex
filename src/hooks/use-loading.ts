import { ref } from 'vue'

const defaultOptions = {
  timeout: -1,
}
export const useLoading = (options: Partial<typeof defaultOptions> = {}) => {
  const { timeout } = { ...defaultOptions, ...options }
  const isLoading = ref(false)
  const timer = ref(null)

  const clear = () => {
    if (timer.value) {
      clearTimeout(timer.value)
      timer.value = null
    }
  }

  const run = <T = any>(promise: Promise<T>) => {
    isLoading.value = true

    if (timeout >= 0) {
      timer.value = setTimeout(() => {
        isLoading.value = false
      }, timeout)
    }

    promise = promise
      .then((res) => {
        isLoading.value = false
        clear()
        return res
      })
      .catch((err) => {
        isLoading.value = false
        clear()
        throw err
      })
    return promise
  }
  return {
    run,
    isLoading,
  }
}
