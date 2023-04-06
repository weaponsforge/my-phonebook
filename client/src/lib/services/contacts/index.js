import axios from 'axios'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import createRequestObject from '@/lib/utils/firebase/firebaserequest'
import { orderBy } from 'firebase/firestore'

export const createContact = async(user_uid, newContact) => {
  const response = await FirebaseFirestore.createDoc(`users/${user_uid}/contacts`, newContact)
  return response
}

export const readContacts = async(user_uid) => {
  const response = await FirebaseFirestore.readCol(`users/${user_uid}/contacts`, orderBy('first_name'))
  return response
}

export const readContact = async(user_uid, contact_id) => {
  const response = await FirebaseFirestore.readDoc(`users/${user_uid}/contacts/${contact_id}`)
  return response
}

export const updateContact = async(user_uid, contact_id, newContact) => {
  const response = await FirebaseFirestore.updateDoc(`users/${user_uid}/contacts/${contact_id}`, newContact)
  return response
}

export const deleteContact = async(user_uid) => {
  const response = await FirebaseFirestore.deleteDoc(`users/${user_uid}`)
  return response
}

export const exportContacts = async (type = 'csv', ids = undefined) => {
  const CONTACTS_API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contacts/export`
  const body = { type, ids }

  const obj = await createRequestObject({ body })
  return await axios({ ...obj, url: CONTACTS_API_URL, method: 'POST' })
}
