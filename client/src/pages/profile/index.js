import ProtectedPage from '@/common/auth/protectedpage'
import { ProfileComponent } from '@/components/profile'

const Profile = () => {
  return <ProfileComponent />
}

export default ProtectedPage(Profile)
