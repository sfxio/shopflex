<template>
  <button
    class="fs-button fs-btn"
    :class="classes"
    v-bind="$attrs"
    v-on="listeners"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { TButtonModifier, TResponsive, TShape } from '@shopflex-site-ssr/tsconfig/@types'

export default defineComponent({
  name: 'FsButton',
  props: {
    type: {
      type: String as PropType<TButtonModifier>,
      default: 'primary',
    },
    size: {
      type: String as PropType<TResponsive>,
      default: 'sm',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String as PropType<TShape>,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const ls = { ...this.$listeners }
      delete ls.click
      return ls
    },
  },
  methods: {
    handleClick(e) {
      if (this.loading || this.disabled || !this.$listeners.click) {
        return
      }

      this.$listeners.click(e)
    },
  },
  setup(props) {
    const classes = computed(() => {
      const res = [`fs-btn-${props.size}`, `fs-btn-${props.type}`]
      if (props.loading) {
        res.push(`fs-loading`)
      }
      if (props.disabled) {
        res.push(`fs-cursor-not-allowed`)
      }
      if (props.shape) {
        res.push(`fs-btn-${props.shape}`)
      }
      return res
    })
    return {
      classes,
    }
  },
})
</script>
