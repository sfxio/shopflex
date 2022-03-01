<template>
  <row v-bind="props.props">
    {{ props.title }}
  </row>
</template>

<script lang="ts">
import type { FsBulletin } from '.'
import { defineComponent } from '@nuxtjs/composition-api'
import { propGen } from '../../helper'
import { row } from '../grid'

export default defineComponent({
  name: 'FsBulletin',
  props: propGen<FsBulletin>(),
  components: {
    row,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
