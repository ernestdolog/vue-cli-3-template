import lodashReplace from 'lodash/replace'

/**
 * Returns replaced string
 *
 * @param {string} string
 * @param {string} pattern
 * @param {string} replacement
 * @return {string}
 */
export function replace (string, pattern, replacement) {
  if (!string) return string

  return lodashReplace(string, pattern, replacement)
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('replace', replace)
}

