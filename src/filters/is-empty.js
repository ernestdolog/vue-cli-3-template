import lodashIsEmpty from 'lodash/isEmpty'

/**
 * Wrapper for _.isEmpty().
 *
 * @param {Object} value
 * @return {boolean}
 */
export function isEmpty (value) {
  return lodashIsEmpty(value)
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('isEmpty', isEmpty)
}
