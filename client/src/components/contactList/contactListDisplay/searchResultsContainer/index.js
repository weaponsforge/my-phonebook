import { setSyncStore, useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { useEffect} from 'react'
import { SearchResultsGroup } from './searchResultsGroup'

const { Box } = require('@mui/material')

export const SearchResultsContainer = ({ state, search }) => {
  const [, setViewContact] = useSyncGlobalVariable('viewContact')

  const filterContacts = (searchText) => {
    const filteredContactsByField = [...state.contacts].reduce((prev, curr) => {
      for (let [key, value] of Object.entries(curr)) {
        if (new RegExp(String.raw`${searchText}`, 'i').test(value)) {
          if (!prev[key]) {
            prev[key] = []
          }
          prev[key] = [...prev[key], curr]
        }
      }
      return prev
    }, {})
    return filteredContactsByField
  }

  const searchResults = filterContacts(search)
  const searchResultsArr = Object.entries(searchResults)
  useEffect(()=>{
    if (searchResultsArr.length === 1) {
      for (let [, value] of searchResultsArr) {
        if (value.length !== 1) break
        setSyncStore('viewContact', value[0])
      }
    } else {
      setSyncStore('viewContact',)
    }
  },[searchResultsArr])

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
    }}>
      <Box sx={{
        // opacity: search !== deferredSearch ? 0.5 : 1
      }}>
        {
          searchResultsArr.map((el, index) => {
            return (
              <SearchResultsGroup key={index} content={{ 'group': el[0], 'contacts': el[1] }} />
            )
          })
        }
      </Box>
    </Box>
  )
}