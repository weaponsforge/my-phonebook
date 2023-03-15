import ProtectedPage from '@/common/auth/protectedpage'
import DashboardComponent from '@/components/dashboard'

function Dashboard () {
  return (
    <ProtectedPage>
      <DashboardComponent />
    </ProtectedPage>
  )
}

export default Dashboard
