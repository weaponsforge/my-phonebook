import ProtectedPage from '@/common/auth/protectedpage'
import ContactsComponent from '@/components/contacts'
import { ExportPopup } from '@/components/contacts/exportPopup'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV, useSyncV } from 'use-sync-v'

function Contacts() {
  const showExportPopup = useSyncV('show.exportPopup')
  const auth = useSyncV('auth')

  useEffect(() => {
    FirebaseFirestore.subscribeCol(
      `users/${auth.authUser.uid}/contacts`,
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
  }, [auth.authUser.uid])
  return (
    <>
      {showExportPopup && <ExportPopup/>}
      <ContactsComponent />
    </>
  )
}

export default ProtectedPage(Contacts)
