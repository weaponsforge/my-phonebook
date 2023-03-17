import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { useDeferredValue, useEffect} from 'react'
import { SearchResultsGroup } from './searchResultsGroup'

const { Box } = require('@mui/material')

export const SearchResultsContainer = ({ state }) => {
  const [search] = useSyncGlobalVariable('search')
  const [, setViewContact] = useSyncGlobalVariable('viewContact')

  const deferredSearch = useDeferredValue(search)

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

  const searchResults = filterContacts(deferredSearch)
  const searchResultsArr = Object.entries(searchResults)
  useEffect(()=>{
    if (searchResultsArr.length === 1) {
      for (let [, value] of Object.entries(searchResults)) {
        if (value.length !== 1) break
        setViewContact(value[0])
      }
    } else {
      setViewContact()
    }
  },[searchResults, searchResultsArr, setViewContact, deferredSearch])

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
    }}>
      <Box sx={{
        opacity: search !== deferredSearch ? 0.5 : 1
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