import lodashHas from 'lodash/has'
import lodashGet from 'lodash/get'

/**
 * Returns value if exists.
 *
 * @param {object} object
 * @param {Array|string} path
 * @return {*}
 */
export function get (object, path) {
  if (!lodashHas(object, path)) return null

  return lodashGet(object, path)
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('get', get)
}

