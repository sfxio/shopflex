<template>
  <a-menu mode="inline" inlineIndent="12">
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CSider',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
