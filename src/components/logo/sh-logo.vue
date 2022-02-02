<template>
  <div class="sh-logo sh-cursor-pointer" @click="handleClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleClick = () => {
      return router.push('/')
    }
    return {
      handleClick,
    }
  },
})
</script>

<style scoped></style>
