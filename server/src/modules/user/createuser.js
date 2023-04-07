const { admin } = require('../../utils/db')
const { createDocument } = require('../../utils/firestore')
const ServerError = require('../../utils/error')

/**
 * Create a new User profile Firestore document.
 * @param {String} userId - Firebase Auth ID
 * @typedef {Object} params - User profile document key-value pairs
 * @param {String} params.first_name - First name
 * @param {String} params.middle_name - Middle name
 * @param {String} params.last_name - Last name
 * @param {String} params.email - User Firebase Auth email
 * @param {String} params.phone_number - User's phone number
 * @returns {Promise}
 * @throws {ServerError}
 */
const createUser = async (userId, params) => {
  try {
    return await createDocument({
      collectionPath: 'users',
      docId: userId,
      params: {
        first_name: params?.first_name ?? '',
        middle_name: params?.middle_name ?? '',
        last_name: params?.last_name ?? '',
        email: params?.email ?? '',
        phone_number: params?.phone_number ?? '',
        date_created: admin.firestore.Timestamp.now(),
        date_updated: admin.firestore.Timestamp.now()
      }
    })
  } catch (err) {
    const errorMsg = err?.response?.data ?? err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = createUser
