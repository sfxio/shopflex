<template>
  <ElCol
    v-if="$attrs.span !== 0"
    v-bind="$attrs"
    v-on="$listeners"
    :style="style"
  >
    <slot />
  </ElCol>
</template>

<script lang="ts">
import type { FsCol } from '.'
import { propGen } from '../../helper'
import { defineComponent } from '@nuxtjs/composition-api'
import { useSize } from '@shopflex-site-ssr/shared'
import { ISize } from '@shopflex-site-ssr/tsconfig/@types'

export default defineComponent({
  name: 'FsCol',
  props: propGen<FsCol>(),
  // mixins: [Mixins.useSize()],
  setup(props: FsCol) {
    // console.log('order: ', props.order)
    const { style } = useSize(props.props, {
      extraStyle: props.props.order ? { order: String(props.props.order) } : {},
    })
    return { style }
  },
})
</script>

<style lang="scss" scoped></style>
