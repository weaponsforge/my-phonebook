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

      // Merge results
      const contacts = (await Promise.all(maxArrayQueries)).flat(1)

      // Re-order documents in the order of docIds
      return docIds.reduce((list, docId) => {
        const contactsIndex = contacts.findIndex(contact => contact.doc_id === docId)

        if (contactsIndex !== -1) {
          list.push(contacts[contactsIndex])
        }

        return list
      }, [])
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
