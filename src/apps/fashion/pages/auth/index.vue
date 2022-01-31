<template>
  <SHLoginForm ref="formRef" @finish="handleLogin" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SHLoginForm from '@/components/form/login.vue'

export default defineComponent({
  name: 'PAuth',
  components: {
    SHLoginForm,
  },
  setup() {
    const formRef = ref()

    const handleLogin = () => {
      console.log('login', formRef.value.formData)
    }
    return { handleLogin, formRef }
  },
})
</script>
