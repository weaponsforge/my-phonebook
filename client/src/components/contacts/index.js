import Page from '@/common/layout/page'
import { Box, LinearProgress } from '@mui/material'
import { useAsyncV } from 'use-sync-v'
import { ContactListDisplay } from './display'
import { SidebarComponent } from './sidebar'

function ContactsComponent() {
  const { loading } = useAsyncV('contacts')
  return (
    <Page>
      {loading && (
        <LinearProgress
          sx={{
            position: 'fixed',
            width: '100vw',
          }}
        />
      )}
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
    </Page>
  )
}

export default ContactsComponent
