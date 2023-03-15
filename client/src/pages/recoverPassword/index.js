import RecoverPasswordComponent from '@/components/recoverPassword'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'
import { Validate } from '@/lib/utils/textValidation'

import { sendPasswordResetEmail } from '@/lib/services/account'
import { usePromise, RequestStatus } from '@/lib/hooks/usePromise'
import WithAuth from '@/common/auth/withauth'

const defaultState = {
  username:{
    error:true, helperText:' ',value:'', color:'text'
  },
  joke:undefined,
  method: null
}

const RecoverPassword = () => {
  const [state, setState] = useState(defaultState)
  const { loading, error, status } = usePromise(state.method)

  class eventsHandler {
    static usernameHandler = (e) => {
      const {helperText, error, color} = Validate.email(e.target.value)
      setState(prev=>({
        ...prev,
        username:{
          ...prev.username,
          value:e.target.value,
          error,
          helperText,
          color
        }
      }))
    }

    static recoverPasswordHandler = () => {
      setState({
        ...state,
        method: sendPasswordResetEmail(state.username.value)
      })
    }

    static resetMessage = () => {
      setState({ ...state, message: '' })
    }
  }

  useEffect(()=>{
    (async()=>{
      const randomJoke = await getRandomJoke()
      setState(prev=>({
        ...prev,
        joke:randomJoke
      }))
    })()
  },[])

  return (
    <RecoverPasswordComponent
      state={{
        ...state,
        loading,
        message: (status === RequestStatus.SUCCESS)
          ? 'Email sent. Please check your inbox.'
          : error
      }}
      eventsHandler={eventsHandler}
    />
  )
}

export default WithAuth(RecoverPassword)