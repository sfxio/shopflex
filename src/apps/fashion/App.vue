<template>
  <AConfigProvider :locale="locale">
    <RouterView />
  </AConfigProvider>
</template>

<script name="App" lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      locale: enUS,
    }
  },
})
</script>

<style scoped></style>
