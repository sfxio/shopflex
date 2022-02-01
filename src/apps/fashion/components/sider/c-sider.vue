<template>
  <SHMenu
    :data="menuData"
    mode="inline"
    @sh-select="handleSelect"
    class="sh-font-medium"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SHMenu from '@/components/menu/sh-menu.vue'
import { ConfigModel } from '@/api'
import { log } from '@/utils'

export default defineComponent({
  name: 'CSider',
  components: {
    SHMenu,
  },
  setup() {
    const handleSelect = ({ item }) => {
      log.verbose('sider', 'current selected item: ', item)
    }
    const menuData = ref([])

    onMounted(async () => {
      const [err, res] = await ConfigModel.getMenu()
      if (!err) {
        menuData.value = res
      }
    })

    return {
      handleSelect,
      menuData,
    }
  },
})
</script>

<style scoped></style>
