import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authErrorReceived, authReceived } from '@/store/users/userSlice'
import { authSignOut } from '@/lib/store/users/userThunk'
import { auth, onAuthStateChanged } from '@/lib/utils/firebase/config'

/**
 * HOC that listens for the Firebase user auth info using the onAuthStateChanged() method.
 * Returns a Component with auth props for convenience.
 * Sets the global Firebase user auth details in the user { authUser, authLoading, authError, authStatus } redux store.
 * @param {*} Component
 * @returns
 */
function WithAuth (Component) {
  function AuthListener (props) {
    const { authUser, authLoading, authError } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
      const handleFirebaseUser = async (firebaseUser) => {
        if (firebaseUser) {
          // Check if user is emailVerified
          if (!firebaseUser?.emailVerified ?? false) {
            dispatch(authSignOut('Email not verified. Please verify your email first.'))
            return
          }

          try {
            // Retrieve the custom claims information
            const { claims } = await firebaseUser.getIdTokenResult()

            if (claims.account_level) {
              // Get the firebase auth items of interest
              dispatch(authReceived({
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                accessToken: firebaseUser.accessToken,
                emailVerified: firebaseUser.emailVerified,
                account_level: claims.account_level
              }))
            } else {
              // User did not sign-up using the custom process
              dispatch(authSignOut('Missing custom claims'))
            }
          } catch (err) {
            dispatch(authErrorReceived(err?.response?.data ?? err.message))
            dispatch(authReceived(null))
          }
        } else {
          dispatch(authReceived(null))
        }
      }

      const unsubscribe = onAuthStateChanged(auth, handleFirebaseUser)
      return () => unsubscribe()
    }, [dispatch])

    return (
      <Component
        {...props}
        authUser={authUser}
        authLoading={authLoading}
        authError={authError}
      />)
  }

  return AuthListener
}

export default WithAuth
