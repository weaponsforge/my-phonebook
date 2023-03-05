const { getAuth } = require('../../utils/db')
const axios = require('axios')
const { ACCOUNT_TYPE } = require('../../utils/constants')
const ServerError = require('../../utils/error')

// Verifies the Firebase account of a user and inserts an "account_level" custom claims to the user auth record.
const verifyEmail = async (actionCode) => {
  let oobResult = null

  try {
    const obj = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        oobCode: actionCode
      }
    }

    // Verify user's email while checking if the oobCode is valid
    oobResult = await axios({
      ...obj,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.FIREBASE_WEB_API_KEY}`,
      method: 'POST'
    })
  } catch (err) {
    const { error } = err?.response?.data ?? null
    const errorMsg = error ? error.message : err.message
    throw new ServerError(errorMsg, {
      cause: { code: ServerError.httpErrorCodes._502 }
    })
  }

  if (oobResult) {
    const { data } = oobResult

    // Set custom claims
    const claims = { account_level: ACCOUNT_TYPE.USER }

    try {
      await getAuth().setCustomUserClaims(data.localId, claims)
    } catch (err) {
      throw new ServerError(err.msg, ServerError.httpErrorCodes._502)
    }

    try {
      // Fetch the updated user auth record
      return await getAuth().getUserByEmail(data.email)
    } catch (err) {
      throw new ServerError(err.msg, ServerError.httpErrorCodes._502)
    }
  } else {
    throw new ServerError(
      'Failed to fetch the oobCode',
      ServerError.httpErrorCodes._502)
  }
}

module.exports = verifyEmail
