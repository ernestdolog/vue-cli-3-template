import axios from 'axios'

const actions = { send }

/**
 * Sends Log object.
 *
 * @params {object} error
 */
function send ({ rootState }, error) {
  if (!error) throw new Error('No error to send')
  console.log(error)
}

export default { state: {}, getters: {}, actions, mutations: {}, namespaced: true }
