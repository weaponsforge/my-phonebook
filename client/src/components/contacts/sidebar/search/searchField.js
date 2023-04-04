import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { updateSyncV, useSyncV } from 'use-sync-v'

export const SearchFieldComponent = () => {
  const searchKeyword = useSyncV('ui.search.searchKeyword')
  const searchFieldHandler = (e) => {
    e.stopPropagation()
    updateSyncV('ui.search.searchKeyword', e.target.value)
    updateSyncV('ui.phase', (p) => ({
      ...p,
      createContact: false,
      editContact: false,
    }))
    if (e.target.value === '') {
      updateSyncV('ui.phase', (p) => ({
        ...p,
        createContact: false,
        editContact: false,
        search: false,
      }))
    } else {
      updateSyncV('ui.phase.search', true)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <SearchIcon fontSize="large" sx={{ aspectRatio: 1 }} />

      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={searchKeyword ?? ''}
        onChange={searchFieldHandler}
        id="searchField"
      />
    </Box>
  )
}
