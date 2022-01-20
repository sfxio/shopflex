<template>
  <AConfigProvider :locale="locale">
    <RouterView />
  </AConfigProvider>
</template>

<script name="App" lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'

export default {
  setup() {
    return {
      locale: enUS,
    }
  },
}
</script>

<style scoped></style>
