<template>
  <div>
    <p v-for="i in 100" :key="i">aaaaaaaaaaa - {{ i }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style scoped></style>
