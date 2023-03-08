const { getAuth } = require('../../utils/db')
const axios = require('axios')
const { ACCOUNT_TYPE } = require('../../utils/constants')
const ServerError = require('../../utils/error')

/**
 * Verifies the Firebase account of a user and inserts an "account_level" custom claims to the user auth record.
 * @param {Object} data
 * @param {String} data.actionCode - oobCode from email
 * @param {String} data.newPassword - New password
 * @returns {Promise}
 */
const resetPassword = async ({ actionCode, newPassword }) => {
  try {
    const obj = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        oobCode: actionCode,
        newPassword
      }
    }

    // Verify user's email while checking if the oobCode is valid
    return await axios({
      ...obj,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=${process.env.FIREBASE_WEB_API_KEY}`,
      method: 'POST'
    })

    // return response.data
  } catch (err) {
    const { error } = err?.response?.data ?? null
    const errorMsg = error ? error.message : err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = resetPassword
