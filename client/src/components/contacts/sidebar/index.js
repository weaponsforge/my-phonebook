import { Paper } from '@mui/material'
import { useSyncV } from 'use-sync-v'
import { ContactFormComponent } from './contactForm/index.js'

export const SidebarComponent = () => {
  const phase = useSyncV('ui.phase')

  return (
    <>
        <Paper
          elevation={0}
          sx={{
            flex: 3.14,
            display: 'flex',
            flexDirection: 'column',
            minWidth: '320px',
            zIndex: '50',
            backgroundColor: 'inherit',
            padding: '20px',
            paddingBottom: '0',
            width: '100%',
            gap: '20px',
            overflowY: 'scroll',
            userSelect: 'none',
          }}
        >
          {(phase?.editContact || phase?.createContact) && (
            <ContactFormComponent />
          )}
        </Paper>
    </>
  )
}
