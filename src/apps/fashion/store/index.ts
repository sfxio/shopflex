import { modules, config, init } from '@/store'
import { createStore, createLogger, Store } from 'vuex'
import { appConfig } from '~/config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const debug = import.meta.env.DEV

const initApp = (store: Store<any>) => {
  store.commit(config.CONFIG_M_SET_APP_CONFIG, appConfig)
}

const plugins = [initApp, init()]

export default createStore({
  modules: {
    ...modules,
  },
  strict: debug,
  plugins: debug ? [createLogger(), ...plugins] : plugins,
})
