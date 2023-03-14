import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import LoginComponent from '@/components/login'
import { getRandomJoke } from '@/lib/services/random'
import { Validate } from '@/lib/utils/textValidation'
import AuthUtil from '@/lib/utils/firebase/authUtil'
import WithAuth from '@/common/auth/withauth'

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
  errorMessage:undefined,
  joke:undefined,
  loading:false
}

function Login (props) {
  const [state, setState] = useState(defaultState)
  const { username, password } = state
  const router = useRouter()

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
        setState({ ...state, loading: true, errorMessage: undefined })

        const response = await AuthUtil.signIn(username.value, password.value)
        const errorMessage = response.errorMessage

        setState(prev=>({
          ...prev,
          errorMessage,
          loading: (errorMessage === undefined)
        }))
      })()
    }
  }

  useEffect(()=>{
    (async () =>{
      const randomJoke = await getRandomJoke()
      setState(prev=>({
        ...prev,
        joke:randomJoke
      }))
    })()
  },[])

  useEffect(() => {
    if (!props.authLoading) {
      setState(prev => ({
        ...prev,
        loading: false,
        errorMessage: (props.authError !== '')
          ? props.authError
          : prev.errorMessage
      }))

      if (props.authUser) {
        router.push('/dashboard')
      }
    }
  }, [props.authError, props.authLoading, props.authUser, router])

  const resetError = () => {
    setState({ ...state, errorMessage: undefined })
  }

  return (
    <LoginComponent
      state={state}
      eventsHandler={eventsHandler}
      resetError={resetError}
    />
  )
}

export default WithAuth(Login)
