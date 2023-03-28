import Page from '@/common/layout/page'
import { Box } from '@mui/material'
import { SidebarComponent } from './sidebar'
import { ContactListDisplay } from './contactListDisplay'

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
