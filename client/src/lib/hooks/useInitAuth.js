import { useEffect } from 'react'
import { auth, onAuthStateChanged, signOut } from '@/lib/utils/firebase/config'
import { updateSyncV } from 'use-sync-v'
import { USER_STATES } from '../store/constants'

/**
 * Hook that listens for the Firebase user auth info using the Firebase onAuthStateChanged() method.
 * Sets the global Firebase user auth details in the user { authUser, authLoading, authError, authStatus } useSyncV store.
 * Call this hook only once, preferrably during app start up to avoid having multiple onAuthStateChanged() listeners everywhere.
 *
 * Usage:
 *    1. Use/call the hook (only once): useInitAuth()
 *    2. Listen to the user auth objects being set by the useInitAuth() hook:
 *       const { authUser, authLoading, authError, authStatus } = useSyncV('auth')
 */

export const authSignOut = async () => {
  updateSyncV('auth', (p) => ({ ...p, authLoading: true }))
  return await signOut(auth)
}

export default function useInitAuth () {
  useEffect(() => {
    const handleFirebaseUser = async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user is emailVerified
        if (!firebaseUser?.emailVerified ?? false) {
          await authSignOut()

          updateSyncV('auth', {
            authUser: null,
            authError: 'Email not verified. Please verify your email first.',
            authStatus: USER_STATES.SIGNED_OUT,
            authLoading: false
          })

          return
        }

        try {
          // Retrieve the custom claims information
          const { claims } = await firebaseUser.getIdTokenResult()

          if (claims.account_level) {
            // Keep the firebase auth items of interest
            updateSyncV('auth', {
              authError: '',
              authStatus: USER_STATES.SIGNED_IN,
              authLoading: false,
              authUser: {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                accessToken: firebaseUser.accessToken,
                emailVerified: firebaseUser.emailVerified,
                account_level: claims.account_level
              }
            })
          } else {
            // User did not sign-up using the custom process
            await authSignOut()

            updateSyncV('auth', {
              authUser: null,
              authError: 'Missing custom claims.',
              authStatus: USER_STATES.SIGNED_OUT,
              authLoading: false
            })
          }
        } catch (err) {
          updateSyncV('auth', {
            authUser: null,
            authError: err?.response?.data ?? err.message,
            authStatus: USER_STATES.SIGNED_OUT,
            authLoading: false
          })
        }
      } else {
        // No user is signed-in
        updateSyncV('auth', {
          authUser: null,
          authError: '',
          authStatus: USER_STATES.SIGNED_OUT,
          authLoading: false
        })
      }
    }

    const unsubscribe = onAuthStateChanged(auth, handleFirebaseUser)
    return () => unsubscribe()
  }, [])
}
