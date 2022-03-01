<template>
  <div
    id="root"
    ref="rootRef"
    style="height: 100vh"
    class="root fs-relative fs-flex fs-flex-col fs-overflow-x-hidden"
  >
    <ABackTop :visibility-height="400" :target="target">
      <div
        class="top fs-rounded-full fs-shadow fs-bg-white fs-border-1-lightgray fs-flex-jc-ic fs-w-10 fs-h-10 hover:fs-shadow-lg"
      >
        <svg
          class="icon"
          style="
            color: var(--color-primary);
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2029"
        >
          <path
            d="M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z"
            p-id="2030"
          ></path>
        </svg>
      </div>
    </ABackTop>

    <FsHeader />

    <main class="fs-flex-1 fs-pt-16">
      <Nuxt />
    </main>

    <FsFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import FsHeader from '@/components/fs-header.vue'
import FsFooter from '@/components/fs-footer.vue'
import { useScrollProvide } from '@/context'

export default defineComponent({
  components: {
    FsHeader,
    FsFooter,
  },
  setup() {
    const rootRef = ref<HTMLElement>()
    const target = () => rootRef.value
    useScrollProvide(rootRef, 100)

    return {
      rootRef,
      target,
    }
  },
})
</script>

<style scoped></style>
