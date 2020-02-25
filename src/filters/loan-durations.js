import forEach from 'lodash/forEach'

/**
 * Finding the minimum duration and converts it to years format.
 *
 * @param {array} durations
 * @return {int}
 */
export function minimumDurationInYears (durations) {
  if (!durations || !durations.length) {
    return
  }

  let min
  forEach(durations, function (item) {
    let duration = parseInt(item) / 12
    min = (min === undefined || min > duration) ? duration : min
  })

  return min
}

/**
 * Finding the maximum duration and converts it to years format.
 *
 * @param {array} durations
 * @return {int}
 */
export function maximumDurationInYears (durations) {
  if (!durations || !durations.length) {
    return
  }

  let max
  forEach(durations, function (item) {
    let duration = parseInt(item) / 12
    max = (max === undefined || max < duration) ? duration : max
  })

  return max
}

/**
 * Install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.filter('maximumDurationInYears', maximumDurationInYears)
  Vue.filter('minimumDurationInYears', minimumDurationInYears)
}
