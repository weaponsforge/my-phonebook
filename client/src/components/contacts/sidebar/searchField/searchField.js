import { setSyncStore, useSyncGlobalVariable, useSyncStore } from '@/lib/hooks/useSync'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useContactsStore } from '@/lib/store/contacts/contactsStore'

export const SearchField = () => {
  const [search, setSearch] = useContactsStore((state)=>[state.searchKeyword, state.setSearchKeyword])

  const [state, setState] = useState({ focused: false })
  const searchFieldHandler = (e) => {
    e.stopPropagation()
    setSearch(e.target.value)
  }

  const focusHandler = () => {
    setState(prev => ({
      ...prev,
      focused: !prev.focused
    }))
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
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