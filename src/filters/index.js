import firstElementAsBold from '@/filters/first-element-as-bold'
import numeraljs from '@/filters/numeraljs'
import momentjs from '@/filters/momentjs'
import loanDurations from '@/filters/loan-durations'
import truncate from '@/filters/truncate'
import has from '@/filters/has'
import get from '@/filters/get'
import replace from '@/filters/replace'
import emptyValueReplacer from '@/filters/empty-value-replacer'
import toLowerCase from '@/filters/to-lower-case'
import toUpperCase from '@/filters/to-upper-case'
import isEmpty from '@/filters/is-empty'

/**
 * General install function.
 *
 * @param {Object} Vue
 */
export default function install (Vue) {
  Vue.use(numeraljs)
  Vue.use(momentjs)
  Vue.use(firstElementAsBold)
  Vue.use(loanDurations)
  Vue.use(truncate)
  Vue.use(has)
  Vue.use(get)
  Vue.use(replace)
  Vue.use(emptyValueReplacer)
  Vue.use(toLowerCase)
  Vue.use(toUpperCase)
  Vue.use(isEmpty)
}
