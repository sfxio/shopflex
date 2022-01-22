<template>
  <AButton>
    <slot>{{ text }}</slot>
  </AButton>
</template>

<script lang="ts">
import { defineComponent, useAttrs } from 'vue'

export default defineComponent({
  name: 'SHDefaultLoginButton',
  setup() {
    const attrs = useAttrs()
    const text = attrs.text ?? 'Log In'
    return {
      text,
    }
  },
})
</script>

<style scoped></style>
