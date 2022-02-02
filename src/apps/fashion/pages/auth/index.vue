<template>
  <LHeaderFooter>
    <div
      class="container sh-w-full sh-h-full sh-flex sh-justify-center sh-items-center"
    >
      <SHLoginForm
        ref="formRef"
        class="sh-w-96"
        @onSuccess="handleLoginSuccess"
        @onError="handleLoginError"
      />
    </div>
  </LHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SHLoginForm from '@/components/form/login.vue'
import LHeaderFooter from '~/layouts/header-footer.vue'
import { useToast } from '~/../../hooks'

export default defineComponent({
  name: 'PAuth',
  components: {
    SHLoginForm,
    LHeaderFooter,
  },
  setup() {
    const { toast } = useToast()
    const handleLoginSuccess = ({ data }) => {
      toast.success('Success')
    }

    const handleLoginError = ({ err }) => {
      toast.error(err.message)
    }
    return { handleLoginSuccess, handleLoginError }
  },
})
</script>
