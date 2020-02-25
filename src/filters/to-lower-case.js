/**
 * Safely apply toLowerCase function to a value.
 *
 * @param {string} value
 * @return {string}
 */
export const toLowerCase = (value) => {
  if (!value || !value.toLowerCase) return value

  return value.toLowerCase()
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('toLowerCase', toLowerCase)
}
