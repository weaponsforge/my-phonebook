import { useState, useEffect } from 'react'
import PromiseWrapper from '@/utils/promiseWrapper'

const defaultState = {
  response: null,
  loading: false,
  error: '',
  status: PromiseWrapper.STATUS.IDLE
}

const RequestStatus = PromiseWrapper.STATUS

/**
 * A helper/wrapper hook for handling async service methods (Promises).
 * Returns the success, error or loading status and response of a Promise as React states.
 * @param {Promise} promise - An async javascript method (Promise) that resolves and rejects.
 * @returns {Object} React state object { response, loading, error, status }
 */
function usePromise (promise) {
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    if (promise !== null) {
      setState(prev => ({
        ...prev,
        response: null,
        loading: true,
        error: '',
        status: PromiseWrapper.STATUS.PENDING
      }))

      promise.then(
        res => {
          setState(prev => ({
            ...prev,
            response: res,
            loading: false,
            status: PromiseWrapper.STATUS.SUCCESS
          }))
        },
        err => {
          setState(prev => ({
            ...prev,
            loading: false,
            error: err?.response?.data ?? err.message,
            status: PromiseWrapper.STATUS.ERROR
          }))
        }
      )
    }
  }, [promise])

  return {
    response: state.response,
    loading: state.loading,
    error: state.error,
    status: state.status
  }
}

export {
  usePromise,
  RequestStatus
}
