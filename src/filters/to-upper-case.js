/**
 * Safely apply toUpperCase function to a value.
 *
 * @param {string} value
 * @return {string}
 */
export const toUpperCase = (value) => {
  if (!value || !value.toUpperCase) return value

  return value.toUpperCase()
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('toUpperCase', toUpperCase)
}
