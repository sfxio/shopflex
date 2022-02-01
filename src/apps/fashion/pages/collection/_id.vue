<template>
  <LDefault>
    <div>collection id: {{ id }}</div>
    <h2>current item:</h2>
    <div>
      {{ currentItemList }}
    </div>
  </LDefault>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import LDefault from '~/layouts/default.vue'
import { useCollectionStore } from '~/store'

export default defineComponent({
  name: 'CollectionId',
  components: { LDefault },
  setup() {
    const route = useRoute()
    const collectionStore = useCollectionStore()
    const id = computed(() => route.params.id)
    const currentItem = computed(() => collectionStore.currentItem)
    const currentItemList = computed(() => currentItem.value?.list)

    const getCollection = (id, item: any = {}) => {
      let { pageSize = 60, pageNum = 0 } = item
      pageNum = pageNum + 1

      collectionStore.setCurrentCollectionItemAsync(id, {
        pageNum,
        pageSize,
      })
    }

    watch(id, () => {
      if (collectionStore.hasItemById(id.value)) {
        collectionStore.setCurrentItemKey(id.value)
        return
      }
      getCollection(id.value, currentItem.value)
    })

    getCollection(id.value)

    return {
      id,
      currentItem,
      currentItemList,
    }
  },
})
</script>

<style scoped></style>
