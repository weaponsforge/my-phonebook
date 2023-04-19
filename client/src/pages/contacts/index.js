import ProtectedPage from '@/common/auth/protectedpage'
import ContactsComponent from '@/components/contacts'
import { ExportPopup } from '@/components/contacts/exportPopup'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV, useSyncV } from 'use-sync-v'

function Contacts() {
  const user = useSyncV('auth')
  const showExportPopup = useSyncV('show.exportPopup')

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
      {showExportPopup && <ExportPopup/>}
      <ContactsComponent />
    </>
  )
}

export default ProtectedPage(Contacts)
