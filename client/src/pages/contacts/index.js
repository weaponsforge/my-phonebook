import ContactsComponent from '@/components/contacts'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV } from 'use-sync-v'

const user_uid = 'test'

function Contacts() {

  useEffect(() => {
    FirebaseFirestore.subscribeCol(
      `users/${user_uid}/contacts`,
      async (querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        updateAsyncV('contacts', ()=>{
          return data
        })
      }
    )
  }, [])

  const eventsHandler = () => {}
  return (
    <>
      <ContactsComponent eventsHandler={eventsHandler} />
    </>
  )
}

export default Contacts
