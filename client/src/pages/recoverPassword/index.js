import RecoverPasswordComponent from '@/components/recoverPassword'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'
import { Validate } from '@/lib/utils/textValidation'

import { handleAccountActionCode, ACCOUNT_ACTION } from '@/lib/services/account'
import PromiseWrapper from '@/lib/utils/promiseWrapper'

const defaultState = {
  username:{
    error:true, helperText:' ',value:'', color:'text'
  },
  joke:undefined,
  loading: false,
  errorMsg: ''
}

const RecoverPassword = () => {
  const [state, setState] = useState(defaultState)

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

    static recoverPasswordHandler = async () => {
      setState({ ...state, loading: true  })

      const { error } = await PromiseWrapper.wrap(handleAccountActionCode({
        mode: ACCOUNT_ACTION.SEND_RESET,
        email: state.username.value
      }))


      setState(prev => ({ ...prev, loading: false, errorMsg: error }))
    }

    static resetError = () => {
      setState({ ...state, errorMsg: '' })
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
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default RecoverPassword