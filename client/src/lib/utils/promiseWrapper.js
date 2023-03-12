
export default class PromiseWrapper {
  static STATUS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
    DEFAULT: 'default'
  }

  /**
 * Formats the success or error results of a Promise into a { response, status, error } format.
 * Resolves a rejected Promise without throwing errors.
 * @param {Promise} promise
 * @returns {Object} { response: Object, status: String, error: String }
 */
  static wrap (promise) {
    return new Promise((resolve) => {
      promise.then(
        res => {
          resolve({
            response: res,
            status: PromiseWrapper.STATUS.SUCCESS,
            error: ''
          })
        },
        err => {
          resolve({
            response: null,
            status: PromiseWrapper.STATUS.ERROR,
            error: err?.response?.data ?? err.message
          })
        }
      )
    })
  }
}
