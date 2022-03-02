<template>
  <ElRow v-bind="props" type="flex" v-on="$listeners" :style="style">
    <slot />
  </ElRow>
</template>

<script lang="ts">
import type { FsRow } from '.'
import { ISize, TFlexDirection } from '@shopflex-site-ssr/tsconfig/@types'
import { defineComponent } from '@nuxtjs/composition-api'
import { useSize } from '@shopflex-site-ssr/shared'
import { propGen } from '../../helper'

export default defineComponent({
  // mixins: [Mixins.useSize()],
  name: 'FsRow',
  props: propGen<FsRow>(),
  setup(props: FsRow, { attrs }) {
    const { style } = useSize(props.props, {
      extraStyle: {
        flexDirection: props.props.direction || 'row',
      },
    })
    return {
      style,
    }
  },
})
</script>

<style lang="scss" scoped></style>
