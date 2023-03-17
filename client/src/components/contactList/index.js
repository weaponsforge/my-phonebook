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

import { Avatar, Box, TextField } from '@mui/material'

import { TextFields } from '@mui/icons-material'

import { useSyncGlobalVariable } from '@/lib/hooks/useSync'

import { useDeferredValue, useRef } from 'react'
import { SearchResultsContainer } from './contactListDisplay/searchResultsContainer'
import { ContactCardsContainer } from './contactListDisplay/contactsCardContainer'
import { ContactListSidebar } from './contactListSidebar'
import { ContactListDisplay } from './contactListDisplay'

function ContactListComponent({ state, eventsHandler }) {
    const theme = useTheme()

    return (
        <Page>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                // overflow: 'hidden',
                overflowY: 'scroll',
                userSelect: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                <ContactListSidebar />
                <ContactListDisplay state={state} eventsHandler={eventsHandler}/>
            </Box>
        </Page>
    )
}

ContactListComponent.propTypes = {
    state: PropTypes.object,
    eventsHandler: PropTypes.func
}

export default ContactListComponent
