<template>
  <SHMenu
    :data="menuData"
    mode="inline"
    @sh-select="handleSelect"
    class="sh-font-medium"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SHMenu from '@/components/menu/sh-menu.vue'
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
    return {
      handleSelect,
      menuData: [
        {
          id: 1,
          icon: 'policy',
          title: 'Policy',
          location: {},
        },
        {
          id: 2,
          icon: 'info',
          title: 'About use',
          badge: {
            count: 22,
          },
          location: {},
        },
        {
          id: 3,
          icon: 'label',
          title: 'categories',
          location: {},
          children: [
            {
              id: 4,
              title: 'bottoms',
              location: {},
            },
            {
              id: 5,
              title: 'denim',
              location: {},
              children: [
                {
                  id: 6,
                  title: 'bottoms',
                  location: {},
                },
                {
                  id: 7,
                  title: 'denim',
                  location: {},
                },
              ],
            },
          ],
        },
      ],
    }
  },
})
</script>

<style scoped></style>
