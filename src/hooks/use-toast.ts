import { createToaster } from '@meforma/vue-toaster'

const defautlOptions = {
  position: 'top',
}
export const useToast = (options = defautlOptions) => {
  const toast = createToaster(options)
  return {
    toast,
  }
}
