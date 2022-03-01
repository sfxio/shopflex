import { IProps } from '@shopflex-site-ssr/tsconfig/@types/components'
import { PropType } from '@nuxtjs/composition-api'

export function propGen<P extends IProps<any>>() {
  return {
    props: {
      type: Object as PropType<P['props']>,
      required: true,
    },
    childrenPropsMap: {
      type: Object as PropType<P['childrenPropsMap']>,
      default: () => ({}),
    },
    childrenProps: {
      type: Array as PropType<P['childrenProps']>,
      default: () => [],
    },
  }
}
