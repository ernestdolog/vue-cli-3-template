import numeral from 'numeral'

/**
 * Implements format function from numeral package.
 *
 * @param {string|int} value
 * @param {string} format
 * @return {string}
 */
export function numeraljsUnsafe (value, format) {
  return numeral(Number(value)).format(format)
}

/**
 * Implements format function from numeral package with a check for empty value.
 *
 * @param {string|int} value
 * @param {string} format
 * @return {string}
 */
export function numeraljs (value, format) {
  if (!value) return ''

  return numeraljsUnsafe(value, format)
}

/**
 * Global currency filter.
 *
 * @param {int} value
 * @return {string}
 */
export function currency (value) {
  if (value === 0) value = '0.0'
  if (!value) return '0'
  return numeraljs(value, '0,0.00')
}

/**
 * Global Short Currency filter.
 *
 * @param {int} value
 * @return {string}
 */
export function currencyShort (value) {
  if (!value) return '0'

  return numeraljs(value, '0,0')
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('currency', currency)
  Vue.filter('currencyShort', currencyShort)
  Vue.filter('numeraljs', numeraljs)
  Vue.filter('numeraljsUnsafe', numeraljsUnsafe)
}
