import ProtectedPage from '@/common/auth/protectedpage'
import DashboardComponent from '@/components/dashboard'

function Dashboard () {
  return (<DashboardComponent />)
}

export default ProtectedPage(Dashboard)
