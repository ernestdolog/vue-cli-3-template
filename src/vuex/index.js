import Vue from 'vue'
import Vuex from 'vuex'
import log from './log'
import config from './config'
import locale from '@/vuex/locale'
import vuexCache from './cache'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    log,
    config,
    locale
  },
  plugins: [
    vuexCache
  ],
  strict: true
})
