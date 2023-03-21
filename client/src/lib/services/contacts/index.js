import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { orderBy } from 'firebase/firestore'

export const createContact = async(user_uid, newContact) => {
  const response = await FirebaseFirestore.createDoc(`users/${user_uid}`, newContact)
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