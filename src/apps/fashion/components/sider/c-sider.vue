<template>
  <SHMenu
    :data="menuData"
    mode="inline"
    @sh-select="handleSelect"
    class="sh-font-medium"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import SHMenu from '@/components/menu/sh-menu.vue'
import { log } from '@/utils'
import { useRouter } from 'vue-router'
import { useConfigStore } from '~/store'

export default defineComponent({
  name: 'CSider',
  components: {
    SHMenu,
  },
  setup() {
    const router = useRouter()
    const configStore = useConfigStore()
    const menuData = computed(() => configStore.$state.menu)
    configStore.initMenuAsync()

    const handleSelect = ({ item }) => {
      log.verbose('sider', 'current selected item: ', item)
      if (item.location) {
        router.push(item.location)
      }
    }

    return {
      handleSelect,
      menuData,
    }
  },
})
</script>

<style scoped></style>
