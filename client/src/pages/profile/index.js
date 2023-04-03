import { ProfileComponent } from '@/components/profile'
import { useEffect, useRef, useState } from 'react'
import ProtectedPage from '@/common/auth/protectedpage'
import { useAuth } from '@/lib/hooks/useAuth'

const defaultState = {
  user:{
    first_name: '',
    middle_name:'',
    last_name:'',
    email_address:'',
    phone_number:'',
    profile_picture_url:''
  },
  profileChanged:false,
}

const Profile = () => {
  const user_uid = useAuth()?.userAuth?.uid

  const [state, setState] = useState(defaultState)
  const originalProfile = useRef(defaultState.user)

  class eventsHandler {
    static inputHandler = (e) => {
      const key = e.target.id
      const value = e.target.value
      setState(prev=>({
        ...prev,
        user:{
          ...prev.user,
          [key]:value
        }
      }))
    }

    static profilePictureHandler = () => {
      // upload profile picture from user to storage and resize it
      // update profile picture URL in firestore
      // update UI
    }

    static updateUserHandler = () => {
      // update userProfile data in fireStore
      // update UI
    }
  }
  useEffect(()=>{
    const profileChanged = (JSON.stringify(originalProfile.current) !== JSON.stringify(state.user))
    setState(prev=>({
      ...prev,
      profileChanged
    }))
  },[state.user, originalProfile])
  return (
    <ProfileComponent
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default ProtectedPage(Profile)