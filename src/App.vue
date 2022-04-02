<template>
  <AConfigProvider :locale="locale">
    <LDefault />
  </AConfigProvider>
</template>

<script name="App" lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import { defineComponent } from 'vue'
import LDefault from './layouts/l-default.vue'

export default defineComponent({
  components: { LDefault },
  setup() {
    return {
      locale: enUS,
    }
  },
})
</script>

<style scoped></style>
