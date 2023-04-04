import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import LoginComponent from '@/components/login'
import { getRandomJoke } from '@/lib/services/random'
import { Validate } from '@/lib/utils/textValidation'
import AuthUtil from '@/lib/utils/firebase/authUtil'
import { updateSyncV, useSyncV } from 'use-sync-v'

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

function Login () {
  const [state, setState] = useState(defaultState)
  const { username, password } = state
  const router = useRouter()
  const { authUser, authLoading } = useSyncV('auth')

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
        updateSyncV('auth', (p) => ({ ...p, authLoading: true, authError: '' }))

        const response = await AuthUtil.signIn(username.value, password.value)
        const errorMessage = response.errorMessage

        if (errorMessage !== undefined) {
          updateSyncV('auth', (p) => ({ ...p, authLoading: false, authError: errorMessage }))
        }
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
    if (!authLoading && authUser) {
      router.push('/contacts')
    }
  }, [router, authUser, authLoading])

  const resetError = () => {
    updateSyncV('auth', (p) => ({ ...p, authError: '' }))
  }

  return (
    <LoginComponent
      state={state}
      eventsHandler={eventsHandler}
      resetError={resetError}
    />
  )
}

export default Login
