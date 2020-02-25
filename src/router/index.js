import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

export function routerPushByName (name) {
  let route = router.resolve({name})
  if (route) return router.push({ name })

  return router.replace({ path: '/' })
}

export function getIsRouteActive (name) {
  let currentRouteName = router.app.$route.name
  if (currentRouteName.indexOf(name) !== -1) return true

  let route = router.resolve({name})
  if (route && route.route && route.route.meta.activeRoutes && route.route.meta.activeRoutes.indexOf(currentRouteName) !== -1) return true

  return false
}

Vue.use(VueRouter)
Vue.use(VueMeta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

let router = new VueRouter({
  mode: 'history',
  base: __dirname
})

router.beforeEach((to, from, next) => {
  next()
})

router.onError((exception) => {
  console.error(exception)
  // router.replace({ path: '/' })
})

export default router
