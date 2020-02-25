/**
 * Truncating the string.
 *
 * @param {string} value
 * @param {int} limit
 * @param {string} clamp
 * @return {string}
 */
export function truncate (value, limit, clamp) {
  if (!value) return ''

  return value.slice(0, limit) + (limit < value.length ? clamp || '...' : '')
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('truncate', truncate)
}
