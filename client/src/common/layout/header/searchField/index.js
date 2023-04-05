import { Box, TextField } from '@mui/material'
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
      updateSyncV('ui.phase.search', false)
    } else {
      updateSyncV('ui.phase.search', true)
    }
  }

  return (
    <Box sx={{
      display:'flex',
      width:'100%'
    }}>
      <TextField fullWidth autoFocus={true} size="small" value={searchKeyword} onChange={searchFieldHandler}/>
    </Box>
  )
}