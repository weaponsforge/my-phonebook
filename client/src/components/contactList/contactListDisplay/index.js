import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { Box } from '@mui/material'
import { useDeferredValue } from 'react'
import { ContactCardsContainer } from './contactsCardContainer'
import { SearchResultsContainer } from './searchResultsContainer'

export const ContactListDisplay = ({state}) => {
  const [search] = useSyncGlobalVariable('search')
  const deferredSearch = useDeferredValue(search)
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
        {deferredSearch
          ?
          <SearchResultsContainer state={state} />
          :
          <ContactCardsContainer state={state} />
        }
      </Box>
    </>
  )
}