/**
 * Making the first element in string wrapped into strong tag.
 *
 * @param {string} string
 * @return {string}
 */
export function firstElementAsBold (string) {
  if (!string) return

  let stringsArray = string.split(' ')
  stringsArray[0] = '<strong>' + stringsArray[0] + '</strong>'
  return stringsArray.join(' ')
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('firstElementAsBold', firstElementAsBold)
}

