import { Box, TextField } from '@mui/material'
import { updateSyncV, useSyncV } from 'use-sync-v'

export const SearchFieldComponent = () => {
  const searchKeyword = useSyncV('ui.search.searchKeyword')
  const searchFieldHandler = (e) => {
    e.stopPropagation()
    updateSyncV('ui.search.searchKeyword', e.target.value)
    if (e.target.value === '') {
      updateSyncV('ui.phase.search', false)
    } else {
      updateSyncV('ui.phase.search', true)
    }
  }

  return (
    <Box sx={{
      flex:1,
      display:'flex',
      width:'100%',
    }}>
      <TextField fullWidth autoFocus={true} size="small" value={searchKeyword} onChange={searchFieldHandler}/>
    </Box>
  )
}