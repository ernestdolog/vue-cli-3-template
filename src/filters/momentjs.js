import moment from 'moment'
import '@/overrides/moment/de'
import '@/overrides/moment/nl'
import '@/overrides/moment/en'
import Window from '@/common/window'

/**
 * Creates an instance of moment from moment package.
 *
 * @param {string|int} value
 * @param {string} initialFormat
 * @return {object}
 */
export function momentjs (value, initialFormat) {
  if (!value) return ''

  if (initialFormat) return moment(value, initialFormat)

  return moment(value)
}

/**
 * Implements format function from moment package.
 *
 * @param {string|int} value
 * @param {string} format
 * @param {string} initialFormat
 * @return {string}
 */
export function momentjsFormat (value, format, initialFormat) {
  if (!value) return ''
  if (!format) format = 'DD/MM/YYYY'

  if (initialFormat) return moment(value, initialFormat).format(format)

  return moment(value).format(format)
}

/**
 * Implements humanized duration function from moment package.
 *
 * @param {string|int} value
 * @param {string} format
 * @param {string} suffix
 * @return {string}
 */
export function momentjsDuration (value, format, suffix) {
  if (!value) return ''

  return moment.duration(parseInt(value), format).humanize(suffix)
}

/**
 * Implements difference function from moment package.
 *
 * @param {string|int} value
 * @param {string|int} otherValue
 * @param {string} unit
 * @param {boolean} usePrecision
 * @return {string}
 */
export function momentjsDifference (value, otherValue, unit = 'days', usePrecision = false) {
  if (value === undefined || value === null) return ''

  let date = moment(value)
  let date2 = (otherValue === undefined || otherValue === null) ? moment() : moment(otherValue)

  if (!date.isValid() || !date2.isValid()) return ''

  return date.diff(date2, unit, usePrecision)
}

/**
 * Implements format function from unix timestamp.
 *
 * @param {string|int} value
 * @param {string} format
 * @return {string}
 */
export function momentjsUnixFormat (value, format) {
  if (!value) return ''

  return moment.unix(value).format(format)
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Window.moment = moment
  Vue.filter('momentjsFormat', momentjsFormat)
  Vue.filter('momentjsUnixFormat', momentjsUnixFormat)
  Vue.filter('momentjsDuration', momentjsDuration)
  Vue.filter('momentjsDifference', momentjsDifference)
}
