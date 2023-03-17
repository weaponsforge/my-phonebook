import { app } from './config'
import { collection, getDocs, getFirestore, query, updateDoc, doc, deleteDoc, setDoc, getDoc, serverTimestamp, collectionGroup, onSnapshot } from 'firebase/firestore'

export class FirebaseFirestore {
  static db = getFirestore(app)
  /**
     *
     *
     * @static
     * @param {*} path <collectionID>
     * @param {*} data {<key>:<value>}
     * @memberof FirebaseFirestore
     */
  static createDoc = async (path, data) => {
    const colRef = collection(this.db, path)
    const docRef = doc(colRef)
    const uid = docRef.id
    const response = await setDoc(docRef, {
      ...data,
      uid,
      date_created: serverTimestamp(),
      date_updated: serverTimestamp()
    })
    return response
  }
  /**
     *
     *
     * @static
     * @param {*} path <collectionID>/<docID>
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
     * @param {*} queryDef eg: (where('<fieldKey>', '==','<fieldValue>'))
     * @memberof FirebaseFirestore
     */
  static readCollection = async (path, queryDef) => {
    const colRef = collection(this.db, path)
    const q = query(colRef, queryDef)
    const snapshot = await getDocs(q)
    const data = snapshot.docs
      .map((doc) => {
        return {
          ...doc.data()
        }
      })
    return data
  }
  /**
   *
   *
   * @static
   * @param {*} path <collectionID>
   * @param {*} queryDef eg: where('<key>','==','<value>')
   * @memberof FirebaseFirestore
   */
  static readCollectionGroup = async (path, queryDef) => {
    const colGroupRef = collectionGroup(this.db, path)
    const q = query(colGroupRef, queryDef)
    const snapshot = await getDocs(q)
    const data = snapshot.docs
      .map((doc) => {
        return {
          ...doc.data()
        }
      })
    return data
  }

  /**
   *
   *
   * @static
   * @param {*} path eg:/<collectionID>/<docID>
   * @param {*} data {<key>:<value>}
   * @memberof FirebaseFirestore
   */
  static updateDoc = async (path, data) => {
    const docRef = doc(this.db, path)
    const response = await updateDoc(docRef, {
      ...data,
      date_updated: serverTimestamp()
    })
    return response
  }

  /**
   *
   *
   * @static
   * @param {*} path eg:/<collectionID>/<docID>
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
   * @param {*} path eg:/<collectionID>/<docID>
   * @param {*} callback eg: (doc)=>console.log(doc.data())
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
   * @param {*} path <collectionID>/<docID>/<collectionID>
   * @param {*} queryDef where('<key>','==','<value>')
   * @param {*} callback (doc)=>console.log(doc.data())
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
   * @param {*} path <collectionID>
   * @param {*} queryDef where('<key>','==','<value>')
   * @param {*} callback (doc)=>console.log(doc.data())
   * @memberof FirebaseFirestore
   */
  static subscribeCollectionGroup = async (path, queryDef, callback) => {
    const colGroupRef = collectionGroup(this.db, path)
    const q = query(colGroupRef, queryDef)
    const unsubscribe = onSnapshot(q, callback)
    return unsubscribe
  }
}
