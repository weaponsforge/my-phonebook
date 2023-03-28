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
          minWidth: '500px',
          maxHeight: '100%',
          width: '100%',
          height: '100%',
          overflowY: 'scroll',
          userSelect: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {phase?.search ? <SearchResultsContainer /> : <ContactCardsContainer />}
      </Box>
    </>
  )
}
