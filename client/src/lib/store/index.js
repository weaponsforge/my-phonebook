import { createSyncV } from 'use-sync-v'
import { USER_STATES } from '@/store/constants'

createSyncV('ui',{
  activeContact:null,
  phase:{
    createContact:false,
    editContact:false,
    search:false,
    deleteContact:false
  },
  search:{
    searchKeyword:''
  },
})

createSyncV('auth', {
  authUser: null,
  authError: '',
  authStatus: USER_STATES.LOADING,
  authLoading: true
})

export const init = ()=>{}