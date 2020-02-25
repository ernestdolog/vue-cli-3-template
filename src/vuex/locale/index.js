import LocalStorage from '@/common/local-storage'
import i18n from '@/i18n'
import moment from 'moment'

/**
 * @typedef {Object} Locale
 * @property {string} locale
 */
const state = {
  locale: null,
  localesList: []
}

const LOCAL_STORAGE_NAME = 'locale'
const actions = {}
const getters = {}

const mutations = {
  STORE_TO_LOCAL_STORAGE: (state) => {
    LocalStorage.setItem(LOCAL_STORAGE_NAME, state.locale)
  },
  SET_LOCALE: (state, locale) => {
    i18n.locale = state.locale = locale
    moment.locale(state.locale)
  },
  INITIALIZE: (state) => {
    state.localesList = (process.env.VUE_APP_LOCALES_LIST || '').split('|')
    let currentLocale = LocalStorage.getItem(LOCAL_STORAGE_NAME)
    if (!currentLocale) {
      LocalStorage.setItem(LOCAL_STORAGE_NAME, process.env.VUE_APP_COUNTRY)
    }
    i18n.locale = state.locale = LocalStorage.getItem(LOCAL_STORAGE_NAME)
    moment.locale(state.locale)
  }
}

export default { state, getters, actions, mutations, namespaced: true }
