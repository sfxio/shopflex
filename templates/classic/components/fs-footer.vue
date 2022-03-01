<template>
  <footer class="fs-py-2 fs-px-4 fs-border-t-1-lightgray">
    <PageContainer
      class="fs-flex-ic fs-flex-col fs-gap-2 sm:fs-flex-row sm:fs-justify-between"
    >
      <div class="left">
        <p class="gray">Contact Us: support@shopflex.io</p>
        <p class="gray">
          ShopFlex @2021.
          <a class="gray link" href="https://shopflex.io/privacy"> Privacy </a>
          &
          <a class="gray link" href="https://shopflex.io/terms"> Terms </a>
        </p>
      </div>

      <div class="right fs-flex-ic fs-gap-2">
        <img v-lazy="icons.footerLogo" />
        <h4 class="fs-font-semibold">Hope you get what you want here!</h4>
      </div>
    </PageContainer>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { icons } from '@/assets/icons'
import PageContainer from '@/components/container/page-container.vue'
export default defineComponent({
  components: {
    PageContainer,
  },
  setup() {
    return {
      icons,
    }
  },
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
