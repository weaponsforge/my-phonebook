import { useEffect, createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authErrorReceived, authReceived } from '@/store/users/userSlice'
import { authSignOut } from '@/lib/store/users/userThunk'
import { auth, onAuthStateChanged } from '@/lib/utils/firebase/config'

/**
 * Context provider that listens for the Firebase user auth info using the Firebase onAuthStateChanged() method.
 * Sets the global Firebase user auth details in the user { authUser, authLoading, authError, authStatus } redux store.
 * Also returns the user { authUser, authLoading, authError, authStatus } redux data for convenience.
 * @returns {Object} authUser - partial, relevant signed-in Firebase user data
 * @returns {Bool} authLoading - Firebase auth status is being fetched from Firebase (from intial page load or during sign-out)
 * @returns {String} authError - Firebase authentication error
 * @returns {String} authStatus - Descriptive Auth status info. One of USER_STATES
 * Usage: const { authUser, authLoading, authError, authStatus } = useAuth()
 */

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const authUser = useFirebaseAuth()
  return <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useFirebaseAuth () {
  const { authUser, authLoading, authStatus, authError } = useSelector(state => state.user)
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
        // No user is signed-in
        dispatch(authReceived(null))
      }
    }

    const unsubscribe = onAuthStateChanged(auth, handleFirebaseUser)
    return () => unsubscribe()
  }, [dispatch])

  return {
    authUser,
    authLoading,
    authStatus,
    authError,
    authSignOut
  }
}
