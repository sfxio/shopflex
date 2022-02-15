<template>
  <template v-if="props.link">
    <a :href="props.link" v-bind="$attrs">
      <slot />
    </a>
  </template>

  <template v-else-if="props.route">
    <RouterLink :to="route" v-bind="$attrs">
      <slot />
    </RouterLink>
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String,
  route: [String, Object],
})
</script>

<style scoped></style>
