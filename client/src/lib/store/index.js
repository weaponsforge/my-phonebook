import { createSyncV } from 'use-sync-v'

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

export const init = ()=>{}