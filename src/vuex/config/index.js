/**
 * @typedef {Object} Config
 * @property {string} VUE_APP_COUNTRY
 * @property {string} VUE_APP_DEFAULT_LOCALE
 * @property {string} VUE_APP_LOCALES_LIST
 *
 */
const state = {
  VUE_APP_COUNTRY: null,
  VUE_APP_DEFAULT_LOCALE: null,
  VUE_APP_LOCALES_LIST: null
}

const actions = {}
const getters = {}

const mutations = {
  INITIALIZE: (state) => {
      state.VUE_APP_COUNTRY = process.env.VUE_APP_COUNTRY
      state.VUE_APP_DEFAULT_LOCALE = process.env.VUE_APP_DEFAULT_LOCALE
      state.VUE_APP_LOCALES_LIST = process.env.VUE_APP_LOCALES_LIST
  }
}

export default { state, getters, actions, mutations, namespaced: true }