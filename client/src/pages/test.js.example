import { useState, useEffect } from 'react'
import { db } from '@/utils/firebase/config'
import { collection, doc, getDocs, getDoc, setDoc, query, where, orderBy, limit, deleteDoc } from 'firebase/firestore'
import { useAuth } from '@/lib/hooks/useAuth'

function TestPage () {
  const [contacts, setContacts] = useState([])
  const { authUser, authLoading } = useAuth()

  useEffect(() => {
    if (!authLoading && authUser) {
      listDocuments()
    }
  }, [authLoading, authUser])

  // Generate a firestore document ID
  const generateFirestoreID = (collectionName) => doc(collection(db, collectionName))

  // Create a document under a sub collection
  const createDocument = async (e) => {
    if (!authUser && !authLoading) {
      console.log('no user')
      return
    }

    e.preventDefault()
    const { first_name, middle_name, last_name, phone_no, photo_url, collection_name } = e.target

    const subcollectionName = `${collection_name.value}/${authUser.uid}/list`
    const docId = generateFirestoreID(subcollectionName)

    const contactObj = {
      id: docId.id,
      first_name: first_name.value,
      middle_name: middle_name.value,
      last_name: last_name.value,
      phone_no: phone_no.value,
      photo_url: photo_url.value
    }

    await setDoc(doc(db, subcollectionName, docId.id), contactObj)
    alert(`New document created!\n${subcollectionName}\n${docId.id}`)
    listDocuments(subcollectionName)
  }

  // Fetch all documents in a subcollection
  const listDocuments = async (collection_name) => {
    const subcollectionName = collection_name || `users/${authUser.uid}/list`
    const querySnapshot = await getDocs(collection(db, subcollectionName))

    const data = querySnapshot.docs.reduce((list, item) => {
      list.push(item.data())
      return list
    }, [])

    setContacts(data)
  }

  // Delete a document by document docID
  const deleteDocument = async (docId) => {
    const docPath = `users/${authUser.uid}/list/${docId}`
    await deleteDoc(doc(db, docPath))
    alert(`Document ${docId}, deleted`)
    listDocuments()
  }

  // Get a single document by docID
  const getDocument = async (docId) => {
    const docPath = `users/${authUser.uid}/list/${docId}`
    const docRef = doc(db, docPath)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const info = JSON.stringify(docSnap.data())
      alert(`Document ${docId}]\n${info}`)
    } else {
      alert(`Document ${docId} does not exist`)
    }
  }

  return (
    <div>
      <h1>Test Page</h1>

      <form onSubmit={createDocument}>
        <input type="text" id="first_name" defaultValue="John" /><br />
        <input type="text" id="middle_name" defaultValue="D" /><br />
        <input type="text" id="last_name" defaultValue="Doe" /><br />
        <input type="text" id="phone_no" defaultValue="09263847263" /><br />
        <input type="text" id="photo_url" defaultValue="https://google.com" /><br />
        <input type="text" id="collection_name" defaultValue="users" disabled /><br />
        <button type="submit">
          Create Document
        </button>
      </form>

      <br />

      {authLoading
        ? <p>Loading...</p>
        : (authUser)
          ? <p>Contacts list of User ID: {authUser.uid}</p>
          : <p>No User</p>
      }

      <ul>
        {contacts.map((item, id) => (
          <li key={id}>
            <span>{item.id}: {item.first_name} {item.middle_name}. {item.last_name}</span>
            <span>
              &nbsp; <button onClick={() => deleteDocument(item.id)}>X</button>
              &nbsp; <button onClick={() => getDocument(item.id)}>View</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestPage
