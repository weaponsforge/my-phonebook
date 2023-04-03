import ProtectedPage from '@/common/auth/protectedpage'
import ContactsComponent from '@/components/contacts'
import { useAuth } from '@/lib/hooks/useAuth'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV } from 'use-sync-v'

function Contacts() {
  const user = useAuth()

  useEffect(() => {
    FirebaseFirestore.subscribeCol(
      `users/${user.authUser.uid}/contacts`,
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

export default ProtectedPage(Contacts)
