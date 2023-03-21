import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  fetchCreateContact,
  fetchDeleteContact,
  fetchReadContact,
  fetchReadContacts,
  fetchUpdateContact,
} from './contactsThunk'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadContacts.fulfilled, (state, action) => {
      state.entities = action.payload
      state.loading = 'idle'
    }),
    builder.addCase(fetchReadContact.fulfilled, (state, action) => {
      for (let i = 0; i < state.entities.length; i++) {
        if (action.arg.doc_id === state.entities[i].doc_id) {
          state.entities[i] = action.payload
        }
      }
      state.loading = 'idle'
    }),
    builder.addCase(fetchCreateContact.fulfilled, (state, action) => {
      state.entities.push(action.arg.new_contact)
      state.loading = 'idle'
    }),
    builder.addCase(fetchUpdateContact.fulfilled, (state, action) => {
      for (let i = 0; i < state.entities.length; i++) {
        if (action.arg.doc_id === state.entities[i].doc_id) {
          state.entities[i] = action.payload
        }
      }
      state.loading = 'idle'
    }),
    builder.addCase(fetchDeleteContact.fulfilled, (state, action) => {
      for (let i = 0; i < state.entities.length; i++) {
        if (action.arg.doc_id === state.entities[i].doc_id) {
          state.entities.splice(i, 1)
        }
      }
      state.loading = 'idle'
    }),
  }
})

export const { create, update, remove } = contactsSlice.actions

export default contactsSlice.reducer
