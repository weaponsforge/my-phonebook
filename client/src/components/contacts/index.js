import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import { Box} from '@mui/material'
import { Sidebar, SidebarComponent } from './sidebar'
import { ContactListDisplay } from './contactListDisplay'

function ContactsComponent({ eventsHandler }) {

  return (
    <Page>
      <Box>
      </Box>
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'scroll',
        userSelect: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
        <SidebarComponent />
        <ContactListDisplay eventsHandler={eventsHandler} />
      </Box>
    </Page>
  )
}

ContactsComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}

export default ContactsComponent
