import ProtectedPage from '@/common/auth/protectedpage'
import ContactsComponent from '@/components/contacts'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV, useSyncV } from 'use-sync-v'

function Contacts() {
  const user = useSyncV('auth')
  useEffect(() => {
    FirebaseFirestore.subscribeCol(
      `users/${user.authUser.uid}/contacts`,
      (querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        updateAsyncV('contacts', () => {
          return data
        })
      },
      orderBy('sorting')
    )
  }, [user.authUser.uid])

  return (
    <>
      <ContactsComponent />
    </>
  )
}

export default ProtectedPage(Contacts)
