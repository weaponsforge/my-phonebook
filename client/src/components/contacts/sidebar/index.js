import { FirebaseFirestore } from '@/lib/utils/firebase/firestore.js'
import { Button, Paper, Typography } from '@mui/material'
import { updateSyncV, useSyncV } from 'use-sync-v'
import { SearchFieldComponent } from './search/searchField.js'

import { ContactFormComponent } from './contactForm/index.js'

export const SidebarComponent = () => {
  const doc_id = useSyncV('ui.activeContact.doc_id')
  const phase = useSyncV('ui.phase')
  const createContactHandler = () => {
    updateSyncV('ui.phase.editContact', false)
    updateSyncV('ui.phase.createContact', true)
    updateSyncV('ui.activeContact', {
      doc_id:'',
      first_name:'',
      middle_name:'',
      last_name:'',
      phone_number:'',
      email_address:'',
      profile_picture_url:''
    })
  }

  const deleteContactHandler = () => {
    FirebaseFirestore.deleteDoc(`users/test/contacts/${doc_id}`)
    updateSyncV('ui.activeContact',null)
    updateSyncV('ui.phase',null)
  }

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 3.14,
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        zIndex: '50',
        backgroundColor: 'inherit',
        padding: '20px',
        paddingBottom: '0',
        width: '100%',
        gap: '20px',
        overflowY: 'scroll',
        userSelect: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <SearchFieldComponent />
      {(phase?.editContact || phase?.createContact) && (
        <ContactFormComponent/>
      )}
      {!phase?.createContact && (
        <Button variant="contained" onClick={createContactHandler}>
          <Typography>Create Contact</Typography>
        </Button>
      )}
      <Button variant="contained" onClick={deleteContactHandler}>
        <Typography>Delete Contact</Typography>
      </Button>
    </Paper>
  )
}
