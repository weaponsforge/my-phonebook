import { Box } from '@mui/material'
import { useSyncV } from 'use-sync-v'
import { ContactCardsContainer } from './contactsCardContainer'
import { SearchResultsContainer } from './searchResultsContainer'

export const ContactListDisplay = () => {
  const phase = useSyncV('ui.phase')

  return (
    <>
      <Box
        sx={{
          flex: 6.8,
          maxHeight: '100%',
          maxWidth:'1000px',
          justifyContent:'center',
          width: '100%',
          height: '100%',
          overflowY: 'scroll',
          userSelect: 'none',
        }}
      >
        {phase?.search ? <SearchResultsContainer /> : <ContactCardsContainer />}
      </Box>
    </>
  )
}
