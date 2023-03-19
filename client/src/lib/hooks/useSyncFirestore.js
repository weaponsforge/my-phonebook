import { useEffect } from 'react'
import { FirebaseFirestore } from '../utils/firebase/firestore'
import { useSyncGlobalVariable } from './useSync'

/**
 * Custom hook that synchronizes a Firestore document with a client react syncGlobalVariable state
 *
 * @param {string} colPath - The path of the collection containing the document.
 * @param {string} docId - The ID of the document to synchronize, if doesn't exist yet, it will create one
 * @returns {[object, function]} An array containing the synchronized client model and a function to update the Firestore document.
 * @usage inside react component, const [model, setModel] = useSyncFirestore(firestoreColPath, firestoreDocId)
 * @abstract this will generate a synced object model of js private global variable using react useSyncExternalStore hook, that is subscribing
 * to a firestore document
 */

export const useSyncFirestore = (docPath) => {
  const [clientModel, setClientModel] = useSyncGlobalVariable(docId)
  const docPath = `${colPath}/${docId}`

  useEffect(() => {
    // Create the document if it does not exist
    FirebaseFirestore.createDoc(docPath)

    // Subscribe to document changes
    FirebaseFirestore.subscribeDoc(docPath, (doc) => {
      setClientModel(doc.data())
    })
  }, [colPath, docId, docPath, setClientModel])

  /**
     * Updates the Firestore document with the provided data.
     *
     * @param {object} data - The data to update the Firestore document with.
     * @returns {Promise} A Promise that resolves when the Firestore document is successfully updated.
     */
  const setFirestore = (data) => {
    return FirebaseFirestore.updateDoc(docPath, data)
  }

  return [clientModel, setFirestore]
}
