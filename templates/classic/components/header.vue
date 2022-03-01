<template>
  <div>header</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ProductService } from '@shopflex-site-ssr/services'

export default defineComponent({
  setup() {
    const handleClick = async () => {
      const res = await ProductService.getProduct({
        platform: ['sho', 'wix'],
      })
    }
    return {
      handleClick,
    }
  },
})
</script>

<style scoped></style>
