import RecoverPasswordComponent from '@/components/recoverPassword'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'
import { Validate } from '@/lib/utils/textValidation'

const defaultState = {
  username:{
    error:true, helperText:' ',value:'', color:'text' 
  },
  joke:undefined
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

    static recoverPasswordHandler = () => {

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