import lodashHas from 'lodash/has'

/**
 * Checks if value exists.
 *
 * @param {object} object
 * @param {Array|string} path
 * @return {*}
 */
export function has (object, path) {
  return lodashHas(object, path)
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('has', has)
}
