import app from '@/app'
import routes from '@/router/routes'
import numeral from 'numeral'
import de from '@/i18n/messages/de'
import en from '@/i18n/messages/en'
import nl from '@/i18n/messages/nl';

app.$i18n.locale = 'de'
app.$router.addRoutes(routes)
app.$i18n.setLocaleMessage('de', de)
app.$i18n.setLocaleMessage('en', en)
app.$i18n.setLocaleMessage('nl', nl)

// load a locale
numeral.register('locale', 'de', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function () {
        return '.'
    },
    currency: {
        symbol: 'EUR'
    }
})

numeral.locale('de')

const store = app.$store

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

/*
    we don't need that in case of server side rendering already sent it in initial state
    1. load parameters from `dist/config` to `window.config`
    2. merge parameters with local storage values
    3. create vuex state to store configuration
 */
store.commit('config/INITIALIZE')
store.commit('locale/INITIALIZE')

// store.commit('module/SYNC_WITH_LOCAL_STORAGE')

app.$mount('#app')
