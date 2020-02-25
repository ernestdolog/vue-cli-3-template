class Cache {
  constructor (store) {
    this.cache = Object.create(null)
    this.store = store
    this.bindToStore()
  }

  bindToStore () {
    this.store.cacheDispatch = function () { return this.cacheDispatch.apply(this, arguments) }.bind(this)
    this.store.removeCache = function () { return this.removeCache.apply(this, arguments) }.bind(this)
    this.store.hasCache = function () { return this.hasCache.apply(this, arguments) }.bind(this)
    this.store.clearCache = function () { return this.clearCache.apply(this, arguments) }.bind(this)
  }

  cacheDispatch () {
    const type = arguments[0]
    if (type in this.cache) {
      return this.cache[type]
    }
    this.cache[type] = this.store.dispatch.apply(this.store, arguments)
    return this.cache[type]
  }

  removeCache (actionName) {
    if (actionName in this.cache) {
      delete this.cache[actionName]
      return true
    }
    return false
  }

  hasCache (key) {
    return key in this.cache
  }

  clearCache () {
    for (const key in this.cache) {
      delete this.cache[key]
    }
    return true
  }
}

/**
 * Provides interface for working with cache from store.
 *
 * @param {Store} store
 * @return {undefined}
 */
export default (store) => new Cache(store)

