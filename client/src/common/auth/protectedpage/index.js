import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import LoadingCover from '@/common/layout/loadingcover'
import WithAuth from '@/common/auth/withauth'

/**
 * Displays a loading cover page while waiting for the remote authentication info to settle in.
 * Displays and returns the contents (children) of a tree if there is a signed-in user from the remote auth.
 * Redirect to the /login page if there is no user info after the remote auth settles in.
 * @param {Component} children
 * @returns {Component}
 */
function ProtectedPage ({ children }) {
  const router = useRouter()
  const { authLoading, authUser } = useSelector(state => state.user)

  useEffect(() => {
    if (!authLoading && !authUser) {
      router.push('/login')
    }
  }, [authUser, authLoading, router])

  const ItemComponent = () => {
    if (authLoading) {
      return <LoadingCover />
    } else if (authUser) {
      return <div>
        {children}
      </div>
    } else {
      return <LoadingCover />
    }
  }

  return (<ItemComponent />)
}

export default WithAuth(ProtectedPage)
