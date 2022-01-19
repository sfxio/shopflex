<template>
  <div>
    <h1 class="sht-bg-color-primary">home</h1>
    <h2>form</h2>
    <AButton>button</AButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Button as AButton } from 'ant-design-vue'
import 'ant-design-vue/es/button/style/index.less'

export default defineComponent({
  name: 'PHome',
  components: {
    AButton,
  },
})
</script>
<style scoped></style>
