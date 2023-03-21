import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { USER_STATES } from '@/store/constants'

// Reducers
import userSlice from '@/store/users/userSlice'
import contactsSlice from './contacts/contactsSlice'

const combinedReducer = combineReducers({
  user: userSlice,
  contacts: contactsSlice
})

const rootReducer = (state, action) => {
  if (state && state.user.authState === USER_STATES.SIGNED_OUT) {
    // Clear all store data
    state = undefined
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})
