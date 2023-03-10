import { RegisterComponent } from '@/components/register'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'
import { Validate } from '@/lib/utils/textValidation'
import AuthUtil from '@/lib/utils/firebase/authUtil'

const defaultState = {
  joke:undefined,
  username:{
    error:true, 
    helperText:' ',
    value:'', 
    color:'text' 
  },
  password:{
    error:true, 
    helperText:' ',
    value:'', 
    color:'text' 
  },
  passwordConfirmation:{
    error:true, 
    helperText:' ',
    value:'', 
    color:'text' 
  },
  errorMessage:undefined
}

const Register = () => {
  const [state, setState] = useState(defaultState)
  const {username, password, passwordConfirmation } = state

  useEffect(()=>{
    (async() => {
      const randomJoke = await getRandomJoke()
      setState(prev=>({
        ...prev,
        joke:randomJoke
      }))
    })()
  },[])

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

    static passwordHandler = (e)=>{
      const {helperText, error, color } = Validate.password(e.target.value)
      setState(prev=>({
        ...prev,
        password:{
          ...prev.password,
          value:e.target.value,
          error,
          helperText,
          color
        }
      }))
    }
    static passwordConfirmationHandler = (e) => {
      const { helperText, error, color } = Validate.passwordConfirmation(password, e.target.value)
      setState(prev=>({
        ...prev,
        passwordConfirmation:{
          ...prev.passwordConfirmation,
          value:e.target.value,
          error,
          helperText,
          color
        }
      }))
    }

    static registerHandler = () => {
      // only proceed when no error
      const allFieldAreValid = !username.error && !password.error && !passwordConfirmation.error
      if (!allFieldAreValid) return
      // register on firebase
      (async()=>{
        const response = await AuthUtil.signUp(username.value, password.value)
        const errorMessage = response.errorMessage
        setState(prev=>({
          ...prev,
          errorMessage
        }))
      })()
    }
  }
  return (
    <RegisterComponent
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default Register