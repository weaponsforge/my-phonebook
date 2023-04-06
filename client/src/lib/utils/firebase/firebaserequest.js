import { auth } from './config'

/**
 * Attach a fresh Firebase Bearer Authorization header accessToken on an axios HTTP params object.
 * @param {Object} obj - body or params input parameters for a REST API.
 * @returns {Object} Input object with a fresh Firebase Bearer Authorization header.
 */
const setAuthHeaders = async (obj) => {
  let token
  const object = { ...obj }

  try {
    token = await auth.currentUser.getIdToken(true)
  } catch (err) {
    throw new Error(err.message)
  }

  if (token) {
    object.headers.Authorization = `Bearer ${token}`
  } else {
    object.headers.Authorization = ''
  }

  return object
}

/**
 *
 * @typedef {Object} param - Input parameters
 * @param {Object} param.body - Object input to place in an HTTP request body.
 * @param {Object} param.params - Object input to place in an HTTP request params.
 * @param {String} responseType - HTTP response type.
 * @returns {Object} The original request body (or params) with attached Firebase accessToken in the Authorization header.
 */
const createRequestObject = async ({ body, params, responseType }) => {
  const obj = {
    headers: {}
  }

  if (body) {
    obj.data = body
  }

  if (params) {
    obj.params = params
  }

  return await setAuthHeaders(obj)
}

export default createRequestObject
