import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'

import { ADAPTER_STATES, USER_STATES } from '@/store/constants'
import { authSignOut } from './userThunk'

const userAdapter = createEntityAdapter({
  selectId: (app) => app.id,
})

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    /** Descriptive Auth status info. One of USER_STATES */
    authStatus: USER_STATES.LOADING,
    /** Firebase Auth is waiting to settle down from 1st page load or during signOut  */
    authLoading: true,
    /** Firebase Auth errors */
    authError: '',
    /** Firebase Auth user account */
    authUser: null,
    /** User Profile document */
    profile: null,
    status: ADAPTER_STATES.IDLE,
    message: '',
    error: ''
  }),
  reducers: {
    authReceived (state, action) {
      state.authUser = action.payload
      state.authLoading = false

      state.authStatus = (action.payload !== null)
        ? USER_STATES.SIGNED_IN
        : USER_STATES.SIGNED_OUT

      if (action.payload !== null) {
        state.authError = ''
      }
    },
    authStatusReceived (state, action) {
      state.authStatus = action.payload
      state.authLoading = (state.authStatus === USER_STATES.LOADING)
    },
    authErrorReceived (state, action) {
      state.authError = action.payload
    },
    authLoadingReceived (state, action) {
      state.authLoading = action.payload

      if (action.payload) {
        state.authStatus == USER_STATES.LOADING
      }
    },
    profileReceived (state, action) {
      state.profile = action.payload
    }
  },
  extraReducers: (builder) => {
    // Sign-out success
    builder.addCase(authSignOut.fulfilled, (state, { payload }) => {
      state.authStatus = USER_STATES.SIGNED_OUT
      state.authLoading = false
      state.authError = payload
    })

    // Sign-out failure
    builder.addCase(authSignOut.rejected, (state, action) => {
      const { message } = action.error
      state.authStatus = USER_STATES.SIGNED_IN
      state.authLoading = false
      state.authError = `${message}. ${action.payload}`
    })
  }
})

export const {
  authErrorReceived,
  authInitReceived,
  authLoadingReceived,
  authReceived,
  authStatusReceived,
  profileReceived,
  userLoading
} = userSlice.actions

export default userSlice.reducer
