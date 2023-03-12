import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { verifyPasswordResetCode } from 'firebase/auth'
import { auth } from '@/lib/utils/firebase/config'

import { handleAccountActionCode, ACCOUNT_ACTION } from '@/services/account'
import PromiseWrapper from '@/lib/utils/promiseWrapper'

import AccountComponent from '@/components/account'
import messages from './messages'

const defaultState = {
  loading: true,
  locked: false,
  message: '',
  error: '',
  success: '',
  mode: '',
  actionCode: '',
  password: ''
}

function Account () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()

  const localPromiseHandler = async ({ promise, lockIfError = false, successMsg = '' }) => {
    setState(prev => ({ ...prev, loading: true, error: '', success: '' }))

    const { error, status } = await PromiseWrapper.wrap(promise)

    setState(prev => ({
      ...prev,
      loading: false,
      locked: (lockIfError && status === PromiseWrapper.STATUS.ERROR),
      success: (status === PromiseWrapper.STATUS.SUCCESS) ? successMsg : '',
      error
    }))
  }

  useEffect(() => {
    if (router.isReady) {
      const { mode, actionCode } = router.query

      if (!Object.values(ACCOUNT_ACTION).includes(mode))  {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid mode' }))
        return
      }

      if (mode && actionCode) {
        setState(prev => ({
          ...prev,
          message: messages.find(item => item.mode === mode)?.message ?? '',
          mode,
          actionCode
        }))

        switch (mode) {
        case ACCOUNT_ACTION.VERIFY_EMAIL:
          localPromiseHandler({
            successMsg: messages.find(item => item.mode === mode)?.success ?? '',
            promise: handleAccountActionCode({
              mode,
              actionCode
            })
          })
          break
        case ACCOUNT_ACTION.RESET_PASSWORD:
          localPromiseHandler({
            promise: verifyPasswordResetCode(auth, actionCode),
            lockIfError: true
          })
          break
        default:
          break
        }
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'Invalid request'
        }))
      }
    }
  }, [router.isReady, router.query])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    localPromiseHandler({
      successMsg: messages.find(item => item.mode === state.mode)?.success ?? '',
      promise: handleAccountActionCode({
        mode: state.mode,
        actionCode: state.actionCode,
        password: e?.target?.password?.value ?? ''
      })
    })
  }

  return (
    <AccountComponent
      state={state}
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Account
