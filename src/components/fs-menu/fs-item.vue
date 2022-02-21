<template>
  <template v-if="to">
    <RouterLink class="fs-font-semibold" :to="props.to">{{ title }}</RouterLink>
  </template>
  <template v-else></template>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  to: [String, Object],
})
</script>

<style scoped></style>
