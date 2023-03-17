import { app } from './config'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
  serverTimestamp,
  collectionGroup,
  onSnapshot,
} from 'firebase/firestore'

export class FirebaseFirestore {
  static db = getFirestore(app)
  /**
   *
   *
   * @static
   * @param {String} path <collectionID>
   * @param {Object} data {<key>:<value>}
   * @param {String} path optional <documentID>
   * @memberof FirebaseFirestore
   */
  static createDoc = async (path, data, id) => {
    if (id) {
      const docRef = doc(this.db, path, id)
      const uid = id
      const response = await setDoc(docRef, {
        ...data,
        uid,
        date_created: serverTimestamp(),
        date_updated: serverTimestamp(),
      })
      return response
    } else {
      const colRef = collection(this.db, path)
      const docRef = doc(colRef)
      const uid = docRef.id
      const response = await setDoc(docRef, {
        ...data,
        uid,
        date_created: serverTimestamp(),
        date_updated: serverTimestamp(),
      })
      return response
    }
  }

  /**
   *
   *
   * @static
   * @param {String} path <collectionID>/<docID>
   * @memberof FirebaseFirestore
   */
  static readDoc = async (path) => {
    const docRef = doc(this.db, path)
    const response = await getDoc(docRef)
    const data = response.data()
    return data
  }
  /**
   *
   *
   * @static
   * @param {String} path <collectionID>/<docID>/<collectionID>
   * @param {Object} queryDef eg: (where('<fieldKey>', '==','<fieldValue>'))
   * @memberof FirebaseFirestore
   */
  static readCollection = async (path, queryDef) => {
    const colRef = collection(this.db, path)
    const q = query(colRef, queryDef)
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      }
    })
    return data
  }
  /**
   *
   *
   * @static
   * @param {String} path <collectionID>
   * @param {Object} queryDef eg: where('<key>','==','<value>')
   * @memberof FirebaseFirestore
   */
  static readCollectionGroup = async (path, queryDef) => {
    const colGroupRef = collectionGroup(this.db, path)
    const q = query(colGroupRef, queryDef)
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      }
    })
    return data
  }

  /**
   *
   *
   * @static
   * @param {String} path eg:/<collectionID>/<docID>
   * @param {Object} data {<key>:<value>}
   * @memberof FirebaseFirestore
   * @returns
   * A Promise resolved once the data has been successfully written to the backend (note that it won't resolve while you're offline).
   */
  static updateDoc = async (path, data) => {
    const docRef = doc(this.db, path)
    const response = await updateDoc(docRef, {
      ...data,
      date_updated: serverTimestamp(),
    })
    return response
  }

  /**
   *
   *
   * @static
   * @param {String} path eg:/<collectionID>/<docID>
   * @memberof FirebaseFirestore
   */
  static deleteDoc = async (path) => {
    const docRef = doc(this.db, path)
    const response = await deleteDoc(docRef)
    return response
  }

  /**
   *
   *
   * @static
   * @param {String} path eg:/<collectionID>/<docID>
   * @param {Function} callback eg: (doc)=>console.log(doc.data())
   * @memberof FirebaseFirestore
   */
  static subscribeDoc = async (path, callback) => {
    const docRef = doc(this.db, path)
    const unsubscribe = onSnapshot(docRef, callback)
    return unsubscribe
  }

  /**
   *
   *
   * @static
   * @param {String} path <collectionID>/<docID>/<collectionID>
   * @param {Object} queryDef where('<key>','==','<value>')
   * @param {Function} callback (doc)=>console.log(doc.data())
   * @memberof FirebaseFirestore
   */
  static subscribeCollection = async (path, queryDef, callback) => {
    const colRef = collection(this.db, path)
    const q = query(colRef, queryDef)
    const unsubscribe = onSnapshot(q, callback)
    return unsubscribe
  }

  /**
   *
   *
   * @static
   * @param {String} path <collectionID>
   * @param {Object} queryDef where('<key>','==','<value>')
   * @param {Function} callback (doc)=>console.log(doc.data())
   * @memberof FirebaseFirestore
   */
  static subscribeCollectionGroup = async (path, queryDef, callback) => {
    const colGroupRef = collectionGroup(this.db, path)
    const q = query(colGroupRef, queryDef)
    const unsubscribe = onSnapshot(q, callback)
    return unsubscribe
  }
}
