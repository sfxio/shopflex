import { modules, config } from '@/store'
import { createStore, createLogger, Store } from 'vuex'
import { appConfig } from '~/config'

const debug = process.env.NODE_ENV !== 'production'

const init = (store: Store<any>) => {
  store.commit(config.CONFIG_M_SET_APP_CONFIG, appConfig)
}

const plugins = [init]

export default createStore({
  modules: {
    ...modules,
  },
  strict: debug,
  plugins: debug ? [createLogger(), ...plugins] : plugins,
})
