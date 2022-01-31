<template>
  <a-menu mode="inline" :inlineIndent="12">
    <a-sub-menu key="sub1">
      <template #title>
        <SHItem :item="item" />
      </template>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { Home } from '@icon-park/vue-next'
import { defineComponent, h, onMounted } from 'vue'
import { ConfigModel } from '@/api'
import { useConfigStore } from '~/store'
import { useUserStore } from '~/store/user'
import SHItem from './item.vue'

export default defineComponent({
  name: 'CSider',
  components: {
    SHItem,
  },
  setup() {
    const configStore = useConfigStore()
    const userStore = useUserStore()
    onMounted(async () => {
      try {
        const res = await ConfigModel.getCategory()
        console.log('res: ', res)
      } catch (err) {
        console.log('err: ', err)
      }
    })
    console.log('store: ', configStore.appConfig)
    console.log('store2: ', userStore)
    return {
      item: {
        prepend: Home,
        content: 'Middle',
        append: 'aa',
      },
    }
  },
})
</script>

<style scoped></style>
