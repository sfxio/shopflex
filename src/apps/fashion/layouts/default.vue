<template>
  <SHHollySiderLayout>
    <template #header>
      <CHeader />
    </template>

    <template #sider>
      <CSider />
    </template>

    <template #content>
      <slot><CContent /></slot>
    </template>

    <template #footer>
      <CFooter />
    </template>
  </SHHollySiderLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SHHollySiderLayout from '@/layouts/sh-holly-sider/index.vue'
import CHeader from '~/components/header/index.vue'
import CSider from '~/components/sider/index.vue'
import CContent from '~/components/content/index.vue'
import CFooter from '~/components/footer/index.vue'

export default defineComponent({
  name: 'PHome',
  components: {
    SHHollySiderLayout,
    CHeader,
    CSider,
    CContent,
    CFooter,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
