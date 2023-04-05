import Page from '@/common/layout/page'
import { LoadingLinear } from '@/common/ui/loadingLinear'
import { Box, Paper, useMediaQuery } from '@mui/material'
import { useAsyncV, useSyncV } from 'use-sync-v'
import { ContactListDisplay } from './display'
import { SidebarComponent } from './sidebar'
import { ContactFormComponent } from './sidebar/contactForm'

function ContactsComponent() {
  const { loading } = useAsyncV('contacts')
  const maxWidth900 = useMediaQuery('(max-width:900px)')
  const phase = useSyncV('ui.phase')

  return (
    <Page>
      {loading && <LoadingLinear />}
      {!maxWidth900 && (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'scroll',
            userSelect: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <SidebarComponent />
          <ContactListDisplay />
        </Box>
      )}
      {maxWidth900 && (
        <>
          {phase?.editContact || phase?.createContact ? (
            <Paper
              elevation={0}
              sx={{
                flex: 3.14,
                display: 'flex',
                flexDirection: 'column',
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
              <ContactFormComponent />
            </Paper>
          ) : (
            <ContactListDisplay />
          )}
        </>
      )}
    </Page>
  )
}

export default ContactsComponent
