const { getCollection, groupByTens } = require('../../utils/firestore')
const ServerError = require('../../utils/error')

/**
 * Fetch Contacts Firestore document/s from a user's /contacts subcollection.
 * @param {String} userId - Firebase Auth ID
 * @param {String[]} docIds - Array of Contact doc_ids to fetch.
 * @returns {Object[]} Contact/s Firestore documents.
 */
const listContacts = async (userId, docIds) => {
  try {
    // Batch IDs by 10's
    const groupIds = groupByTens(docIds)
    const maxArrayQueries = []

    // Batch where-in-array queries by groups of 10
    groupIds.forEach(group => {
      maxArrayQueries.push(getCollection({
        collectionPath: `users/${userId}/contacts`,
        whereQueries: [{ field: 'doc_id', op: 'in', value: group }]
      }))
    })

    const contacts = await Promise.all(maxArrayQueries)
    return contacts.flat(1)
  } catch (err) {
    const errorMsg = err?.response?.data ?? err.message
    throw new ServerError(errorMsg, ServerError.httpErrorCodes._502)
  }
}

module.exports = listContacts
