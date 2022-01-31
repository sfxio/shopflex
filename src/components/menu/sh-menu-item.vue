<script lang="ts">
import { defineComponent, h, PropType, reactive } from 'vue'
import { MenuItem } from 'ant-design-vue'
import { renderItem } from './_helper'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  setup(props) {
    const { item } = reactive(props)
    return () => h(MenuItem, { key: item.id }, () => renderItem(item))
  },
})
</script>

<style scoped></style>
