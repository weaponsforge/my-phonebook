const { getCollection } = require('../../utils/firestore')
const ServerError = require('../../utils/error')

/**
 * Fetch Contacts Firestore document/s from a user's /contacts subcollection.
 * @param {String} userId - Firebase Auth ID
 * @param {String[]} docIds - Array of Contact doc_ids to fetch.
 * @returns {Object[]} Contact/s Firestore documents.
 */
const listContacts = async (userId, docIds) => {
  try {
    return await getCollection({
      collectionPath: `users/${userId}/contacts`,
      whereQueries: [{ field: 'doc_id', op: 'in', value: docIds }]
    })
  } catch (err) {
    const errorMsg = err?.response?.data ?? err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = listContacts
