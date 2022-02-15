<template>
  <LDefault>
    <div>TODO: {{ route.params }}</div>
  </LDefault>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import LDefault from '@/layouts/l-default.vue'
useHead({
  title: 'ShopFlex - Integration',
})

const route = useRoute()
</script>

<style scoped></style>
