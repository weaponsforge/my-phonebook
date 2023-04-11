import ProtectedPage from '@/common/auth/protectedpage'
import ContactsComponent from '@/components/contacts'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { useEffect } from 'react'
import { updateAsyncV, useSyncV } from 'use-sync-v'


// managing what to show and what to hide will be based on route instead of useSyncV ui / show
// route will be the phase / sequence of the app, it's saved in browser history, compatible with forward / back
// should be simpler as a whole since we don't need to remember what element is shown or hidden
// no need a reducer for switching phase, since it's embeded on the page itself
// to prevent rewriting the same element that appears several times, we import components
// to prevent refetching the same data over and over again, we cache the data with useQueryV or useAsyncV

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
