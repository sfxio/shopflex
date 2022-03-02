// import { IBaseComponent } from '@shopflex-site-ssr/tsconfig/@types/components'
import { FsCol, FsRow } from '../../components'

type Omit2<T> = Omit<T, 'tag'>

export interface FsClassicLayout extends Omit<FsRow, 'direction'> {
  childrenPropsMap: {
    header: {
      props: Omit2<FsCol>
    }
    container?: {
      props: Omit2<FsRow>
    }
    sider?: {
      props: Omit2<FsCol>
    }
    content?: {
      props: Omit2<FsCol>
    }
    footer?: {
      props: Omit2<FsCol>
    }
  }
}

export { default as classicLayout } from './classic.vue'
