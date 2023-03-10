import { useEffect, useState } from 'react'
import LoginComponent from '@/components/login'
import { getRandomJoke } from '@/lib/services/random'
import { Validate } from '@/lib/utils/textValidation'
import AuthUtil from '@/lib/utils/firebase/authUtil'

const defaultState = {
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
  allFieldsAreValid:false,
  errorMessage:undefined,
  joke:undefined,
}

function Login () {
  const [state, setState] = useState(defaultState)
  const { username, password } = state

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

    static passwordHandler = (e) => {
      const {helperText, error, color} = Validate.password(e.target.value)
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

    static loginHandler = () => {
      (async()=>{
        const response = await AuthUtil.signIn(username.value, password.value)
        const errorMessage = response.errorMessage
        setState(prev=>({
          ...prev,
          errorMessage
        }))
      })()
    }
  }

  useEffect(()=>{
    const allFieldsAreValid = !state.username.error && !state.password.error
    setState(prev=>({
      ...prev,
      allFieldsAreValid:allFieldsAreValid
    }))
  },[state.username.error, state.password.error])
  useEffect(()=>{
    (async () =>{
      const randomJoke = await getRandomJoke()
      setState(prev=>({
        ...prev,
        joke:randomJoke
      }))
    })()
  },[])

  return (
    <LoginComponent
      state={state}
      eventsHandler={eventsHandler}
    />
  )
}

export default Login
