import { modules } from '@/store'
import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    ...modules,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
