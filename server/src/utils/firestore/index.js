const { db } = require('../db')
const ServerError = require('../error')

/**
 * Create a new Firestore document.
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - (Optional) Document name or ID. Firestore will generate a random document ID if ommitted.
 * @param {Object} param.params - Key-value pairs that make up a Document
 * @returns {Promise}
 */
const createDocument = async ({ collectionPath, docId, params }) => {
  const documentId = (docId) || db.collection(collectionPath).doc().id

  return await db
    .collection(collectionPath)
    .doc(documentId)
    .set({
      ...params,
      doc_id: documentId
    })
}

/**
 * Update an existing Firestore document.
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @param {Object} param.params - Key-value pairs to update in the Document
 * @returns {Promise}
 */
const updateDocument = async ({ collectionPath, docId, params }) => {
  return await db
    .collection(collectionPath)
    .doc(docId)
    .update(params)
}

/**
 * Delete a Firestore document
 * @param {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @returns {Promise}
 * @throws {Error}
 */
const deleteDocument = async ({ collectionPath, docId }) => {
  const doc = await getDocument({ collectionPath, docId })

  if (doc.exists) {
    return await db.collection(collectionPath).doc(docId).delete()
  } else {
    throw new ServerError(
      'Document does not exist',
      ServerError.httpErrorCodes._404)
  }
}

/**
 * Fetch/get an existing Firestore document
 * @param {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @returns {Promise}
 */
const getDocument = async ({ collectionPath, docId }) => {
  return await db.collection(collectionPath).doc(docId).get()
}

module.exports = {
  createDocument,
  updateDocument,
  deleteDocument,
  getDocument
}
