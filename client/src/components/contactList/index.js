import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import { Box} from '@mui/material'
import { ContactListSidebar } from './contactListSidebar'
import { ContactListDisplay } from './contactListDisplay'

function ContactListComponent({ state, eventsHandler }) {

  return (
    <Page>
      <Box>
      </Box>
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        // overflow: 'hidden',
        overflowY: 'scroll',
        userSelect: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
        <ContactListSidebar />
        <ContactListDisplay state={state} eventsHandler={eventsHandler} />
      </Box>
    </Page>
  )
}

ContactListComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}

export default ContactListComponent
