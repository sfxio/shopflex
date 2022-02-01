<template>
  <LDefault>
    <div>collection id: {{ id }}</div>
    <h2>current item:</h2>
    <div class="wrapper sh-px-8">
      <ShCollectionList :list="currentItemList" />
    </div>
  </LDefault>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import LDefault from '~/layouts/default.vue'
import { useCollectionStore } from '~/store'
import ShCollectionList from '@/components/list/collection-list/sh-collection-list.vue'

export default defineComponent({
  name: 'CollectionId',
  components: { LDefault, ShCollectionList },
  setup() {
    const route = useRoute()
    const collectionStore = useCollectionStore()
    const id = computed((): any => route.params.id)
    const currentItem = computed(() => {
      console.log('key: ', id.value)
      return collectionStore.collectionItems[id.value]
    })
    const currentItemList = computed(() => currentItem.value?.list)

    watch(id, () => {
      if (collectionStore.hasItemById(id.value)) {
        return
      }
      collectionStore.setCollectionItemAsync(id.value, {
        id: id.value,
        pageNum: 1,
        pageSize: 60,
      })
    })

    return {
      id,
      currentItem,
      currentItemList,
    }
  },
})
</script>

<style scoped></style>
