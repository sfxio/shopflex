<template>
  <form>
    <input
      type="text"
      placeholder="Type here"
      class="fs-input input fs-shadow-lg fs-border-none fs-w-full fs-max-w-xs"
    />
    <button
      class="fs-btn fs-relative fs-w-36 fs-btn-primary hover:fs-bg-primary hover:fs-text-white"
      style="left: -16px;"
      type="submit"
      @click.prevent="handleClick"
    >
      Contact
    </button>
  </form>
</template>

<script setup lang="ts">
const handleClick = () => {}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid var(--color-primary);
  &:focus {
    border: 1px solid var(--color-primary);
  }
}
</style>
