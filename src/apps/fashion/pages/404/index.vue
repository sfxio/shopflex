<template>
  <div>
    not found

    <button @click="handleClick" style="padding: 20px; background: lightgreen;">
      back home
    </button>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  name: 'PNotFound',
  setup() {
    const router = useRouter()
    const handleClick = () => {
      router.push({
        path: '/',
      })
    }

    return {
      handleClick,
    }
  },
}
</script>

<style lang="scss" scoped></style>
