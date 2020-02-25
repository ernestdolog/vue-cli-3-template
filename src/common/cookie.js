import Window from '@/common/window'
import find from 'lodash/find'
import trim from 'lodash/trim'

/**
 * Class uses to work with cookies.
 */
export default class {
  /**
   * @return {boolean}
   */
  static isExist () {
    return !Window.isFake
  }

  /**
   * @param {string} name
   * @param {string} value
   * @param {int} experationDays
   */
  static set (name, value, experationDays) {
    if (!this.isExist()) return

    let date = new Date()
    date.setTime(date.getTime() + (experationDays * 24 * 60 * 60 * 1000))
    let expires = `expires=${date.toUTCString()}`
    Window.document.cookie = `${name}=${value};${expires};path=/`
  }

  /**
   * @param {string} name
   * @return {string|undefined}
   */
  static get (name) {
    if (!this.isExist()) return

    let cookies = (decodeURIComponent(Window.document.cookie) || '').split(';')

    if (!cookies.length) return

    let cookie = find(cookies, (item) => trim(item || '').indexOf(name + '=') === 0)

    if (!cookie) return

    cookie = trim(cookie, ' ;').split('=')

    if (cookie.length < 2) return

    return cookie[1]
  }

  /**
   * @param {string} name
   */
  static remove (name) {
    return this.set(name, '', -1)
  }
}

