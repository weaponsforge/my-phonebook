import { setSyncStore, useSyncGlobalVariable, useSyncStore } from '@/lib/hooks/useSync'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export const SearchField = () => {
  const search = useSyncStore('search')
  const [state, setState] = useState({ focused: false })
  const searchFieldHandler = (e) => {
    e.stopPropagation()
    setSyncStore('search', e.target.value)
  }

  const focusHandler = () => {
    setState(prev => ({
      ...prev,
      focused: !prev.focused
    }))
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '90vw' }}>
      {
        !state.focused &&
                <SearchIcon fontSize="large" sx={{ aspectRatio: 1 }} />
      }
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={search ?? ''}
        onChange={searchFieldHandler}
        id="searchField"
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
    </Box>
  )
}