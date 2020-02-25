/**
 * Replace empty value with `--`.
 *
 * @param {string} string
 * @return {string}
 */
export const emptyValueReplacer = (string) => string || '--'

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('emptyValueReplacer', emptyValueReplacer)
}
