import { USER_STATES } from '@/store/constants'
import { updateSyncV } from 'use-sync-v'

updateSyncV('show',{
  searchField:false,
  searchResults:false,
  createContactForm:false,
  editContactForm:false,
  contacts:true,
  deleteContactButton:false,
})

updateSyncV('data',{
  activeContact:null,
  contacts:null,

})

export class Phase {
  static contacts = () => {
    updateSyncV('show',{
        searchField:false,
        searchResults:false,
        createContactForm:false,
        editContactForm:false,
        contacts:true,
        deleteContactButton:false,
    })
  }
  static addContact = () => {
    updateSyncV('show',{
      searchField:false,
      searchResults:false,
      createContactForm:true,
      editContactForm:false,
      contacts:false,
      deleteContactButton:false,
    })
  }

  static editContact = (editedContact) => {
    updateSyncV('show',{
      searchField:false,
      searchResults:false,
      createContactForm:false,
      editContactForm:true,
      contacts:false,
      deleteContactButton:true,
    })
  }
  static search = () => {
    updateSyncV('show',{
      searchField:true,
      searchResults:true,
      createContactForm:false,
      editContactForm:false,
      contacts:true,
      deleteContactButton:false,
    })
  }
}



updateSyncV('ui', {
  activeContact: null,
  phase: {
    createContact: false,
    editContact: false,
    search: false,
    deleteContact: false,
  },
  search: {
    searchKeyword: '',
  },
})

updateSyncV('auth', {
  authUser: null,
  authError: '',
  authStatus: USER_STATES.LOADING,
  authLoading: true,
})

export const init = () => {}
