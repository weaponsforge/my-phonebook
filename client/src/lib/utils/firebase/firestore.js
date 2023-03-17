import { app } from './config'
import { collection, getDocs, getFirestore, query, updateDoc, doc, deleteDoc, setDoc, getDoc, serverTimestamp, collectionGroup, onSnapshot } from 'firebase/firestore'

export class FirebaseFirestore {
  static db = getFirestore(app)
  /**
     *
     *
     * @static
     * @param {*} path put a colRef path eg: collection
     * @param {*} data put a data object eg: {data:'data'}
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
     * @param {*} path docRef eg: /collection/<uid>
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
     * @param {*} path colRef eg: /collection
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

  static updateDoc = async (path, data) => {
    const docRef = doc(this.db, path)
    const response = await updateDoc(docRef, {
      ...data,
      date_updated: serverTimestamp()
    })
    return response
  }

  static deleteDoc = async (path) => {
    const docRef = doc(this.db, path)
    const response = await deleteDoc(docRef)
    return response
  }

  static subscribeDoc = async (path, callback) => {
    const docRef = doc(this.db, path)
    const unsubscribe = onSnapshot(docRef, callback)
    return unsubscribe
  }

  static subscribeCollection = async (path, queryDef, callback) => {
    const colRef = collection(this.db, path)
    const q = query(colRef, queryDef)
    const unsubscribe = onSnapshot(q, callback)
    return unsubscribe
  }

  static subscribeCollectionGroup = async (path, queryDef, callback) => {
    const colGroupRef = collectionGroup(this.db, path)
    const q = query(colGroupRef, queryDef)
    const unsubscribe = onSnapshot(q, callback)
    return unsubscribe
  }
}
