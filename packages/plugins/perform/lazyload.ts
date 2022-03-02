// TODO(rushui 2021-11-24): load from CDN
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
// @ts-ignore
import loadingImage from './assets//loading-pending.png'
const errorImage = loadingImage

// see also: https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImage,
  loading: loadingImage,
  attempt: 1,
  observer: true, // use IntersectionObserver
  listenEvents: ['scroll'],
  adapter: {
    loaded({ el }) {
      // do something here
      // example for call LoadedHandler
      if (el) {
        const alt = el.getAttribute('data-alt')
        if (alt) {
          el.setAttribute('alt', alt)
          el.removeAttribute('data-alt')
        }
      }
    },
  },
})
