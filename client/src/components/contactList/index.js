import PropTypes from 'prop-types'

// common
import Page from '@/common/layout/page'

// lib
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import CheckIcon from '@mui/icons-material/Check'
import Paper from '@mui/material/Paper'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'
import TransparentTextfield from '@/common/ui/transparentfield'
import { useTheme } from '@emotion/react'
import { ContactCard } from '@/common/contactsCardContainer/contactCard'
import { Box, TextField } from '@mui/material'
import { ContactCardsContainer } from '@/common/contactsCardContainer'
import { TextFields } from '@mui/icons-material'
import { SearchContactContainer } from '@/common/searchContactContainer'
import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { SearchResultsContainer } from '@/common/searchResultsContainer'
import { useDeferredValue } from 'react'

function ContactListComponent({ state, eventsHandler }) {
    const theme = useTheme()
    const [search, setSearch] = useSyncGlobalVariable('search')
    const deferredSearch = useDeferredValue(search)
    return (
        <Page>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                overflow: 'hidden',
            }}>
                <Paper
                    elevation={10}
                    sx={{
                        flex: 3.14,
                        minWidth: '200px',
                        zIndex: '50',
                        backgroundColor: 'inherit',
                        padding: '20px',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    <Box>
                        <SearchContactContainer />
                    </Box>
                    <Box>
                        {/* this will show a profile if either only 1 result appear after search, or if user click a profile on the right */}
                        <Typography>
                            View Profile
                        </Typography>
                    </Box>
                    <Box>
                        {/* related setting to print or export pdf */}
                        <Typography>
                            Settings
                        </Typography>
                    </Box>
                </Paper>
                <Box
                    sx={{
                        flex: 6.8,
                        minWidth: '500px',
                        maxHeight: '100%',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        overflowY: 'scroll',
                        userSelect: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}>
                    {deferredSearch
                        ?
                            <SearchResultsContainer state={state}/>
                        :
                            <ContactCardsContainer state={state}/>
                    }
                </Box>
            </Box>
        </Page>
    )
}
ContactListComponent.propTypes = {
    state: PropTypes.object,
    eventsHandler: PropTypes.func
}

export default ContactListComponent
