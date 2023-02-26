import { useEffect, useState, useRef } from 'react'
import { doc, getDoc, getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '@/utils/firebase/config'

// These firebase hooks fetch Firestore data one-time only during page load

/**
 * Fetch a single Firestore Document
 * @param {String} collectionName - Firestore Collection name
 * @param {String} documentName - Firestore Document name or path segments leading to a Document
 * @returns {Object} [ document: Document, loading: Bool, error: String ]
 */
export function useDocument (collectionName, documentName) {
  const [document, setDoc] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const mounted = useRef(true)

  useEffect(() => {
    const load = async () => {
      try {
        const docRef = doc(db, collectionName, documentName)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setDoc(docSnap.data())
          setLoading(false)
        }
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    load()
    return () => mounted.current = false
  }, [collectionName, documentName])

  return [document, loading, error]
}

/**
 * Fetch Documents inside a Collection.
 * The target Collection is at the top-level (root) hierarchy.
 * @param {String} collectionName - Firestore Collection name or a slash-separated path to nested sub-collections
 * @param {String} fieldName - Field name inside a Document to match the ASC or DESC ordering
 * @param {Query} queryDef - Firestore query definition
 * @returns {Object} {documents[]: Documents, loading: Bool, error: String}
 */
export function useCollection (collectionName, fieldName, queryDef = null) {
  const [documents, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const mounted = useRef(true)

  useEffect(() => {
    const load = async () => {
      try {
        const colRef = collection(db, collectionName)
        const q = (queryDef)
          ? queryDef
          : query(colRef, orderBy(fieldName, 'asc'))

        const snapshot = await getDocs(q)

        // if (mounted.current) {
        setDocs(snapshot.docs
          .map((doc) => ({ ...doc.data() })))
        setLoading(false)
        // }
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    load()
    return () => mounted.current = false
  }, [collectionName, fieldName, queryDef ])

  return { documents, loading, error }
}

