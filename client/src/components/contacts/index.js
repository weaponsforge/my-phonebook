import Page from '@/common/layout/page'
import { Box } from '@mui/material'
import { ContactListDisplay } from './display'

function ContactsComponent() {
  return (
    <Page>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: 'scroll',
          userSelect: 'none',
          justifyContent: 'center',
        }}
      >
        <ContactListDisplay />
      </Box>
    </Page>
  )
}

export default ContactsComponent
