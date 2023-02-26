import { db } from '@/utils/firebase/config'
import { collection, doc, getDocs, getDoc, query, where, orderBy, limit } from 'firebase/firestore'

export default class FirestoreUtil {
  constructor () {
    // Use these fields sparingly - only when creating Firestore queries on extending classes
    this.db = db
    this.collection = collection
    this.query = query
    this.where = where
    this.limit = limit
    this.orderBy = orderBy
  }

  /**
   * Get all firestore collection documents from a collection
   * @param {String} collectionName - firestore collection name or a slash-separated path to a nested sub-collection
   * @param {String} fieldName - firestore document fieldname to use for ordering data
   * @param {Firestore Query} queryDef - firestore query definition
   */
  async getCollectionData (collectionName, fieldName, queryDef = null) {
    const colRef = collection(db, collectionName)
    const q = (queryDef)
      ? queryDef
      : query(colRef, orderBy(fieldName, 'asc'))

    const snapshot = await getDocs(q)
    const data = snapshot.docs
      .map((doc) => ({ ...doc.data() }))

    return data
  }

  /**
   * Get a single document inside a main or sub (nested) collection
   * @param {String} documentPath - A slash-separated path to a document
   * @param {String} docName - Additional path segments that will be applied relative to the first argument
   * @returns {Object} Firestore DocumentReference instance
   */
  async getDocumentData (documentPath, docName) {
    const docRef = doc(db, documentPath, docName)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return undefined
    }
  }
}
