import { createContact, deleteContact, readContact, readContacts, updateContact } from '@/lib/services/contacts'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchReadContacts = createAsyncThunk(
  'contacts/readContacts',
  async (arg) =>{
    const response = await readContacts(arg.user_uid)
    return response
  }
)

export const fetchReadContact = createAsyncThunk(
  'contacts/readContact',
  async (arg) =>{
    const response = await readContact(arg.user_uid, arg.doc_id)
    return response
  }
)

export const fetchCreateContact = createAsyncThunk(
  'contacts/createContact',
  async (arg) =>{
    const response = await createContact(arg.user_uid, arg)
    return response
  }
)

export const fetchUpdateContact = createAsyncThunk(
  'contacts/updateContact',
  async (arg) => {
    const response = await updateContact(arg.user_uid, arg.doc_id, arg)
    return response
  }
)

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (arg) => {
    const response = await deleteContact(arg.user_uid, arg.doc_id)
    return response
  }
)