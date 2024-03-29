import { useEffect } from 'react'
import { updateSyncV, useSyncV } from 'use-sync-v'
import { SearchResultsGroup } from './searchResultsGroup'

const { Box } = require('@mui/material')

const filterContacts = (searchText, contacts) => {
  const filteredContactsByField = [...contacts].reduce((prev, curr) => {
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

export const SearchResultsContainer = () => {
  const searchKeyword = useSyncV('ui.search.searchKeyword')
  const contacts = useSyncV('contacts.data')

  const searchResults = filterContacts(searchKeyword, contacts)


  // remove doc_id, date_created, date_updated, profile_picture_url group
  delete searchResults.doc_id
  delete searchResults.profile_picture_url
  delete searchResults.date_updated
  delete searchResults.date_created

  // store search results for export purpose
  updateSyncV('data.searchResults', searchResults)

  const searchResultsArr = Object.entries(searchResults)

  useEffect(() => {

    if (searchResultsArr.length === 1) {
      for (let [, value] of searchResultsArr) {
        updateSyncV('ui.activeContact', value[0])
        updateSyncV('ui.phase.editContact', true)
      }
    }
  }, [searchResultsArr])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box>
        {searchResultsArr.map((el, index) => {
          return (
            <SearchResultsGroup
              key={index}
              content={{ group: el[0], contacts: el[1] }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
