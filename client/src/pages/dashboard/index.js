import { useDispatch } from 'react-redux'
import { authSignOut } from '@/store/users/userThunk'

import ProtectedPage from '@/common/auth/protectedpage'
import DashboardComponent from '@/components/dashboard'

function Dashboard () {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(authSignOut())
  }

  return (
    <ProtectedPage>
      <DashboardComponent
        logout={logout}
      />
    </ProtectedPage>
  )
}

export default Dashboard
