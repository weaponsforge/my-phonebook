import { UserProfileComponent } from '@/components/userProfile'
import { useEffect, useRef, useState } from 'react'
import ProtectedPage from '@/common/auth/protectedpage'

const defaultState = {
  user:{
    fullName: 'First Second Third',
    emailAddress: 'test@test.com',
    contactNo: '62812340018900',
    profilePicture: '/vercel.svg'
  },
  profileChanged:false,
}

const UserProfile = () => {
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
    <UserProfileComponent
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default ProtectedPage(UserProfile)