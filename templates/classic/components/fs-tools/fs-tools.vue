<template>
  <div>
    <header v-if="data.title" class="fs-py-2 fs-mb-8">
      <h2
        :id="data.id"
        class="fs-text-center fs-mb-0 fs-text-4xl fs-font-bold"
        v-html="data.title"
      ></h2>
      <p v-if="data.description">{{ data.description }}</p>
    </header>

    <div class="container fs-flex fs-flex-col fs-gap-12">
      <div v-for="(item, index) in data.children" :key="index" class="wrapper">
        <template v-if="item.children">
          <h3 :id="item.id" class="fs-text-2xl fs-font-semibold fs-mb-4">
            {{ item.name }}
          </h3>
          <ARow class="fs-mb-4 fs-flex fs-gap-4 fs-flex-wrap">
            <ACol>
              <AButton @click="handleBtnClick(item, undefined)">All</AButton>
            </ACol>
            <ACol v-for="cItem in item.children" :key="cItem.id">
              <AButton @click="handleBtnClick(item, cItem.id)">
                {{ cItem.name }}
              </AButton>
            </ACol>
          </ARow>

          <!-- <FadeInOut entry="left" exit="left" :duration="500"> -->
          <FsList :list="getList(item)" />
          <!-- </FadeInOut> -->
        </template>

        <template v-else>
          <h3 :id="item.id" class="fs-text-2xl fs-font-semibold fs-mb-4">
            {{ item.name }}
          </h3>
          <FsList v-if="item.list && item.list.length" :list="item.list" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref, defineComponent } from '@nuxtjs/composition-api'
import FsList from './fs-list.vue'
import { toolsData } from '@/assets/data'

export default defineComponent({
  components: {
    FsList,
  },
  setup() {
    const keyMap = ref({}) as Ref<any>
    const data = toolsData as any

    const getList = parent => {
      const id = keyMap.value[parent.id]
      const children = parent.children
      let res = []
      if (id) {
        return children.find(c => c.id === id).list
      }
      children.forEach(item => {
        res = [...res, ...item.list]
      })
      return res
    }

    const handleBtnClick = (parent, id) => {
      keyMap.value[parent.id] = id
      // force update
      keyMap.value = {
        ...keyMap.value,
      }
    }

    return {
      data,
      getList,
      handleBtnClick,
    }
  },
})
</script>

<style lang="scss" scoped></style>
