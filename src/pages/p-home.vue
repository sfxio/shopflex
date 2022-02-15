<template>
  <LDefault>
    <button class="fs-btn fs-btn-primary">button</button>
    <p v-for="i in 100" :key="i">home{{ i }}</p>
  </LDefault>
</template>

<script setup lang="ts">
import LDefault from '@/layouts/l-default.vue'
</script>

<style scoped></style>
