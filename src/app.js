import Vue from 'vue'
import axios from 'axios'
import i18n from '@/i18n'
import App from '@/components/App.vue'
import router from '@/router'
import store from '@/vuex'

Vue.config.productionTip = false

if (!Window.isFake) {
    Window.onerror = function (messageOrEvent, source, lineno, colno, error) {
        let errorObject = {}
        if (navigator) {
            errorObject.userAgent = navigator.userAgent
            errorObject.appName = navigator.appName
            errorObject.appVersion = navigator.appVersion
        }

        errorObject.href = Window.location.href

        if (store && store.state && store.state.user && store.state.user.id) {
            errorObject.user = store.state.user.id
        }

        errorObject.line = lineno
        errorObject.col = colno
        errorObject.source = source
        errorObject.error = {}
        errorObject.error.message = error.message
        errorObject.error.stack = error.stack
        errorObject.error.apiuri = error.apiuri
        errorObject.error.responseBody = error.responseBody
        errorObject.error.responseStatus = error.responseStatus
        errorObject.messageOrEvent = messageOrEvent

        store.dispatch('log/send', errorObject)
    }

    // Add a response interceptor =
    axios.interceptors.response.use(null, (error) => {
        if (!Window.onerror) return Promise.reject(error)
        if (error.config.url.indexOf('public-api/v1/log') !== -1) return Promise.reject(error)

        Window.onerror(error.message, 'axios', null, null, {
            message: error.message,
            stack: error.stack,
            apiuri: error.config.url,
            responseBody: error.response.data,
            responseStatus: error.response.status
        })
        return Promise.reject(error)
    })
}

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

app.$i18n.clearLocaleMessages = function (locale, editMode) {
    app.$i18n.locale = editMode ? locale : 'none'
}

export default app