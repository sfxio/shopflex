<template>
  <form>
    <input
      v-model="emailSubject"
      type="email"
      placeholder="Get Free Sales Strategy Newsletter"
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

<script lang="ts">
import { ref, computed, defineComponent } from '@nuxtjs/composition-api'
import { useResponsive } from '@shopflex-site-ssr/shared'

export default defineComponent({
  setup() {
    const emailSubject = ref('')
    const { responsive } = useResponsive()
    const btnStyle = computed(() => {
      return responsive.value.xm
        ? {
            left: '-16px',
          }
        : {
            left: '-4px',
          }
    })
    return {
      emailSubject,
      btnStyle,
    }
  },
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
