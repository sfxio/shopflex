<template>
  <footer
    class="fs-py-2 fs-border-t-1 fs-border-solid fs-border-color-lightgray"
  >
    <div :style="innerStyle" class="fs-flex-jb-ic">
      <div class="left">
        <p class="gray">Contact Us: support@shopflex.io</p>
        <p class="gray">
          ShopFlex @2021.
          <a class="gray link" href="https://shopflex.io/privacy">
            Privacy
          </a>
          &
          <a class="gray link" href="https://shopflex.io/terms">
            Terms
          </a>
        </p>
      </div>

      <div class="right fs-flex-ic fs-gap-2">
        <img v-lazy="icons.footerLogo" />
        <h4 class="fs-font-semibold">Hope you get what you want here!</h4>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/store'
import { computed } from 'vue'
import { icons } from '@/assets/icons'

const configStore = useConfigStore()
const globalConfig = computed(() => configStore.globalConfig)

const innerStyle = computed(() => {
  return {
    width: `${globalConfig.value.pageWidth}px`,
    margin: 'auto',
  }
})
</script>

<style scoped lang="scss">
footer {
  p,
  h4 {
    margin-bottom: 0;
  }

  .gray {
    color: #909090;
  }
  .link {
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
