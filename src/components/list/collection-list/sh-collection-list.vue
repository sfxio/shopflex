<template>
  <a-row
    v-if="list && list.length"
    type="flex"
    justify="start"
    wrap
    :gutter="[16, 16]"
    @click="handleClick"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in list" :key="item.id">
      <a-col :span="6">
        <DefaultItem :item="item" :index="index" />
      </a-col>
    </template>
  </a-row>
</template>

<script lang="ts">
import { ProductItem } from '@/types'
import { isVoid, log } from '@/utils'
import { defineComponent, PropType } from 'vue'
import DefaultItem from './items/default-item.vue'

export default defineComponent({
  components: { DefaultItem },
  props: {
    list: {
      type: Array as PropType<ProductItem[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleClick = (e) => {
      const target = e.target
      const index = target.getAttribute('data-index')
      if (isVoid(index)) {
        return
      }
      const item = props.list[index]
      log.verbose('list', 'click item: ', item)
      emit('ShClick', item)
    }
    return {
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.mask {
  .btn {
    display: none;
  }
  &:hover {
    .btn {
      display: inline;
    }
  }
}
</style>
