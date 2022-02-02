<template>
  <div
    class="card sh-relative sh-w-full sh-rounded-lg sh-bg-white sh-overflow-hidden hover:sh-shadow-lg"
    style="height: 25.5rem;"
  >
    <figure class="sh-relative sh-w-full sh-h-80 sh-mb-0">
      <div
        class="mask sh-mask-1 sh-cursor-pointer sh-flex sh-justify-center sh-items-center"
        :data-index="index"
      >
        <button
          class="btn sh-btn sh-btn-primary sh-btn-sm"
          :data-index="index"
          data-type="add"
        >
          Add to My Product
        </button>
      </div>
      <img v-lazy="item.cover" class="sh-object-cover sh-w-full sh-h-full" />
    </figure>

    <div class="content sh-px-4 sh-py-2">
      <a-tooltip placement="top">
        <template #title>
          <h3 class="sh-text-white first-letter:sh-uppercase">
            {{ item.name }}
          </h3>
        </template>
        <h3
          class="sh-w-full first-letter:sh-uppercase sh-font-bold sh-whitespace-nowrap sh-overflow-ellipsis sh-overflow-hidden"
          :data-index="index"
        >
          {{ item.name }}
        </h3>
      </a-tooltip>
      <div class="sh-flex sh-justify-between">
        <span>Product Cost</span>
        <span>${{ item.cost }}</span>
      </div>
      <div class="sh-flex sh-justify-between">
        <span>Suggested Resale Price</span>
        <span>${{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductItem } from '@/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductItem>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
