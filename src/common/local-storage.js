/**
 * Class uses as wrapper for local storage.
 */
export default class {
  /**
   * @return {boolean}
   */
  static isExist () {
    return typeof window !== 'undefined'
  }

  /**
   * @param {string} itemName
   * @param {object} itemValue
   */
  static setItem (itemName, itemValue) {
    if (this.isExist()) {
      window.localStorage.setItem(itemName, JSON.stringify(itemValue))
    }
  }

  /**
   * @param {string} itemName
   * @return {object|null}
   */
  static getItem (itemName) {
    return this.isExist() ? JSON.parse(window.localStorage.getItem(itemName)) : null
  }

  /**
   * @param {string} itemName
   */
  static removeItem (itemName) {
    if (this.isExist()) {
      window.localStorage.removeItem(itemName)
    }
  }

  static clear () {
    if (this.isExist()) {
      window.localStorage.clear()
    }
  }
}
