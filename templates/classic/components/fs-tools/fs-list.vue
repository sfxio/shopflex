<template>
  <ARow
    class="fs-list fs-grid fs-gap-12 sm:fs-gap-6 fs-grid-cols-1 sm:fs-grid-cols-2 md:fs-grid-cols-3 xl:fs-grid-cols-4"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <ACol v-for="(item, index) in toolList" :key="index">
      <a
        class="card-item fs-flex fs-flex-col fs-border-1-lightgray fs-text-black fs-shadow hover:fs-shadow-xl"
        target="_blank"
        :href="item.link"
      >
        <header class="header fs-flex-jc-ic fs-h-20 fs-border-b-1-lightgray">
          <template v-if="item.icon && item.name">
            <div class="fs-flex-jc-ic">
              <img
                v-lazy="item.icon"
                style="max-height: 84px"
                v-bind="item.iconProps"
              />
              <span
                class="card-name fs-text-center fs-font-bold fs-text-2xl"
                v-html="item.name"
              ></span>
            </div>
          </template>
          <template v-else-if="item.icon">
            <img
              v-lazy="item.icon"
              style="max-height: 84px"
              v-bind="item.iconProps"
            />
          </template>
          <template v-else-if="item.name">
            <span
              class="card-name fs-text-center fs-font-bold fs-text-2xl"
              v-html="item.name"
            ></span>
          </template>
        </header>

        <section class="content fs-px-4 fs-pt-6 fs-pb-3 fs-h-40">
          <p
            class="description fs-h-full fs-text-base fs-font-medium fs-overflow-hidden"
          >
            {{ item.description }}
          </p>
        </section>
      </a>
    </ACol>
  </ARow>
</template>

<script lang="ts">
import { useResponsive } from '@shopflex-site-ssr/shared'
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const list = computed(() => props.list)
    const { responsive } = useResponsive()
    const notPhone = computed(() => responsive.value.xm)

    return {
      toolList: list,
      notPhone,
    }
  },
})
</script>

<style lang="scss" scoped>
.card-item {
  .description {
    color: #505a64;
    font-size: 14px;
    font-weight: 400;
  }

  .card-name {
    color: black;
  }
}
</style>
