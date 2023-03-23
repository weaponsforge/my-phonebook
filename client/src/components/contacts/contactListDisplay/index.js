import { useSyncGlobalVariable, useSyncStore } from '@/lib/hooks/useSync'
import { useContactsStore } from '@/lib/store/contacts/contactsStore'
import { Box } from '@mui/material'
import { useDeferredValue } from 'react'
import { ContactCardsContainer } from './contactsCardContainer'
import { SearchResultsContainer } from './searchResultsContainer'

export const ContactListDisplay = ({state}) => {
  const search = useContactsStore((state)=>state.searchKeyword)
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
        }}>
        {search
          ?
          <SearchResultsContainer />
          :
          <ContactCardsContainer />
        }
      </Box>
    </>
  )
}