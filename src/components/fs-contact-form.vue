<template>
  <form>
    <input
      type="email"
      placeholder="Get Free Sales Strategy Newsletter"
      v-model="emailSubject"
      class="fs-input input fs-shadow-lg fs-border-none fs-w-48 sm:fs-w-full fs-max-w-xs"
    />
    <!-- type="submit"
      @click.prevent="handleClick" -->
    <a
      class="fs-btn fs-relative fs-w-36 fs-btn-primary hover:fs-bg-primary hover:fs-text-white"
      :style="btnStyle"
      :href="
        emailSubject
          ? `mailto:support@shopflex.io?subject=${emailSubject}`
          : `mailto:support@shopflex.io`
      "
    >
      Subscribe
    </a>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTailwindBreakpoints } from '@/hooks'

// const handleClick = () => {}
const emailSubject = ref('')
const bks = useTailwindBreakpoints()
const btnStyle = computed(() => {
  return bks.notPhone.value
    ? {
      left: '-16px',
    }
    : {
      left: '-4px',
    }
})
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid var(--color-primary);
  &:focus {
    border: 1px solid var(--color-primary);
  }
}
</style>
