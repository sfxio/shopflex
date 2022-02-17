<template>
  <div>
    <header v-if="data.title" class="fs-py-2" v-bind="data.headerProps">
      <slot name="title" :title="data.title">
        <h3 class="fs-mb-0 fs-text-xl fs-font-bold">
          {{ data.title }}
        </h3>
      </slot>
    </header>

    <a-row :gutter="[24, 24]" wrap>
      <a-col
        :span="4"
        v-for="(item, index) in data.list"
        :key="index"
      >
        <a
          class="item fs-flex-ic fs-gap-2 fs-text-black hover:fs-text-primary"
          target="_blank"
          :href="item.link"
        >
          <img
            style="max-width: 42px; max-height: 42px;"
            v-lazy="item.icon"
            :alt="item.name"
          />
          <span class="fs-text-lg fs-font-medium">{{ item.name }}</span>
        </a>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
const data = {
  title: 'Tool',
  headerProps: {},
  list: [
    {
      icon:
        'https://s1.aigei.com/src/img/png/e4/e436d9c90ac5490d8b6d14614f626de5.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_FhJuFIkDVRWA2eSA1-8dy0Rnw4=',
      name: 'ToolsA',
      link: 'https://www.amz123.com/tools-17track',
    },
    {
      icon:
        'https://s1.aigei.com/src/img/png/e4/e436d9c90ac5490d8b6d14614f626de5.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_FhJuFIkDVRWA2eSA1-8dy0Rnw4=',
      name: 'ToolsA',
      link: 'https://www.amz123.com/tools-17track',
    },
    {
      icon:
        'https://s1.aigei.com/src/img/png/e4/e436d9c90ac5490d8b6d14614f626de5.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_FhJuFIkDVRWA2eSA1-8dy0Rnw4=',
      name: 'ToolsA',
      link: 'https://www.amz123.com/tools-17track',
    },
    {
      icon:
        'https://s1.aigei.com/src/img/png/e4/e436d9c90ac5490d8b6d14614f626de5.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_FhJuFIkDVRWA2eSA1-8dy0Rnw4=',
      name: 'ToolsA',
      link: 'https://www.amz123.com/tools-17track',
    },
  ],
}
</script>

<style scoped></style>
