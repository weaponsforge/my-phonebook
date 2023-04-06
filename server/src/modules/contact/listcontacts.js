const { getCollection, groupByTens } = require('../../utils/firestore')
const ServerError = require('../../utils/error')

/**
 * Fetch Contacts Firestore document/s from a user's /contacts subcollection.
 * @param {String} userId - Firebase Auth ID
 * @param {String[]} [docIds] - (Optional) Array of Contact doc_ids to fetch. Omitting this parameter will fetch all Contacts in a collection.
 * @returns {Object[]} Contact/s Firestore documents.
 */
const listContacts = async (userId, docIds = []) => {
  if (docIds.length > 0) {
    // Return Contact documents by docIDs
    try {
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
  } else {
    // Return all Contact documents in a collection
    return await getCollection({
      collectionPath: `users/${userId}/contacts`
    })
  }
}

module.exports = listContacts
