import { AxiosRequestConfig } from 'axios'
import axios from 'axios'

export const layoutService = {
  async getLayout(query?: any, config: AxiosRequestConfig = {}) {
    return await {
      props: {},
      childrenProps: {
        header: {
          props: {
            height: 52,
            class: ['fs-border-b-1-gray'],
          },
        },
        container: {},
        content: {},
        sider: {
          props: {
            class: ['fs-border-r-1-gray'],
            style: 'min-width: 256px',
            span: 5,
          },
        },
        footer: {
          props: {
            height: 52,
            class: ['fs-border-t-1-gray'],
          },
        },
      },
    }
  },
}
