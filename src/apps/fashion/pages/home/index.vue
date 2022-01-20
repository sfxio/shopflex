<template>
  <DefaultLayout>
    aaaaaa
    <AButton @click="handleClick">click</AButton>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ProductModel } from '@/api'
import DefaultLayout from '~/layouts/default.vue'
// import 'ant-design-vue/es/button/style/index.less'

export default defineComponent({
  name: 'PHome',
  components: {
    DefaultLayout,
  },
  setup() {
    const handleClick = async () => {
      const res = await ProductModel.fetchProductList()
      console.log('res: ', res)
    }
    return {
      handleClick,
    }
  },
})
</script>

<style scoped></style>
