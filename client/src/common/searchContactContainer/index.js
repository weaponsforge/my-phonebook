import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const SearchContactContainer = () => {
    const [search, setSearch] = useSyncGlobalVariable('search')

    const searchFieldHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth:'90vw' }}>
            <SearchIcon fontSize="large" sx={{ aspectRatio: 1, }} />
            <TextField
                fullWidth
                size="small"
                variant="outlined"
                value={search ?? ''}
                onChange={searchFieldHandler}
            />
        </Box>
    )
}