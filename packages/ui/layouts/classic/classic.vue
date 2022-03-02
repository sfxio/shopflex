<template>
  <Row direction="column" style="height: 100vh" v-bind="props">
    <Col
      tag="header"
      v-if="childrenProps.header"
      v-bind="childrenProps.header.props"
    >
      <slot name="header" />
    </Col>
    <Col :style="{ flex: 1 }">
      <Row
        :style="{ height: '100%', width: '100%' }"
        v-bind="childrenProps.container.props"
      >
        <Col
          v-if="childrenProps.sider"
          tag="aside"
          style="height: 100%"
          v-bind="childrenProps.sider.props"
        >
          <slot name="sider" />
        </Col>
        <Col
          v-if="childrenProps.content"
          tag="main"
          style="height: 100%"
          v-bind="childrenProps.content.props"
        >
          <slot name="content" />
        </Col>
      </Row>
    </Col>
    <Col tag="footer" v-bind="childrenProps.footer.props">
      <slot name="footer" />
    </Col>
  </Row>
</template>

<script lang="ts">
import type { FsClassicLayout } from '.'
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Row from '../../components/grid/row.vue'
import Col from '../../components/grid/col.vue'

export default defineComponent({
  props: {
    props: {
      type: Object as PropType<FsClassicLayout['props']>,
      required: true,
    },
    childrenProps: {
      type: Object as PropType<FsClassicLayout['childrenPropsMap']>,
      required: true,
    },
  },
  components: {
    Row,
    Col,
  },
})
</script>

<style scoped></style>
