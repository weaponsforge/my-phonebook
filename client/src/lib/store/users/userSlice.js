import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'

import { ADAPTER_STATES, USER_STATES } from '@/store/constants'

const userAdapter = createEntityAdapter({
  selectId: (app) => app.id,
})

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    authState: USER_STATES.LOADING,
    message: '',
    error: '',
    profile: null
  }),
  reducers: {
    profileReceived (state, action) {
      state.profile = action.payload
      state.authState = (action.payload !== null)
        ? USER_STATES.SIGNED_IN
        : USER_STATES.SIGNED_OUT
    },
    authStateReceived (state, action) {
      state.authState = action.payload
    },
  }
})

export const {
  authStateReceived,
  profileReceived
} = userSlice.actions

export default userSlice.reducer
