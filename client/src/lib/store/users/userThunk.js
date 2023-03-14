import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLoadingReceived } from '@/store/users/userSlice'
import { auth, signOut } from '@/lib/utils/firebase/config'

export const authSignOut = createAsyncThunk('auth/signout', async(errorMessage = '', thunkAPI) => {
  thunkAPI.dispatch(authLoadingReceived(true))

  try {
    await signOut(auth)
    return errorMessage
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})
