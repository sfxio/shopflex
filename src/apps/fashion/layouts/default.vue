<template>
  <a-layout style="height: 100vh;">
    <CHeader style="flex-shrink: 0;" />
    <a-layout style="overflow: hidden;">
      <a-layout-sider theme="light" :width="256"><CSider /></a-layout-sider>
      <a-layout-content><slot /></a-layout-content>
    </a-layout>
    <CFooter style="flex-shrink: 0;" />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CHeader from '~/components/header/c-header.vue'
import CFooter from '~/components/footer/c-footer.vue'
import CSider from '~/components/sider/c-sider.vue'

export default defineComponent({
  name: 'LDefault',
  setup() {
    return {}
  },
  components: { CHeader, CFooter, CSider },
})
</script>

<style scoped></style>
