<template>
  <AConfigProvider :locale="locale">
    <RouterView />
  </AConfigProvider>
</template>

<script name="App" lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import { defineComponent } from 'vue'
import { isNotVoid } from '@/utils'
import { useConfigStore, useUserStore } from '@/store'

export default defineComponent({
  setup() {
    const configStore = useConfigStore()
    const userStore = useUserStore()
    const token = window.localStorage.getItem('token')
    configStore.initAppConfigAsync()
    if (isNotVoid(token)) {
      userStore.setUserByTokenAsync(token)
    }
    return {
      locale: enUS,
    }
  },
})
</script>

<style scoped></style>
