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

function ContactListComponent({ state, eventsHandler }) {
    const theme = useTheme()
    // divide state.contacts into each container
    const sortedContacts = [...state.contacts].sort((a, b) => a.first_name < b.first_name ? -1 : 1)

    const groupedSortedContacts = [...sortedContacts].reduce((acc, curr) => {
        const capitalizedFirstNameFirstLetterChar = curr.first_name.match(new RegExp(
            String.raw`(?<firstLetterChar>^[a-z])|`, 'i'))[0]
        if (!capitalizedFirstNameFirstLetterChar) {
            if (!acc.misc) acc.misc = []
            acc.misc = [...acc.misc, curr]
        } else {
            if (!acc[capitalizedFirstNameFirstLetterChar]) {
                acc[capitalizedFirstNameFirstLetterChar.toUpperCase()] = []
            }
            acc[capitalizedFirstNameFirstLetterChar.toUpperCase()] = [
                ...acc[capitalizedFirstNameFirstLetterChar.toUpperCase()],
                curr
            ]
        }
        return acc
    }, {})
    const groupedSortedContactsArr = Object.entries(groupedSortedContacts)

    return (
        <Page>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                overflow:'hidden'
            }}>
                <Box sx={{ flex:2, minWidth:'200px' }}>
                    <Box>
                        Search bar 
                    </Box>
                    <Box>
                        {/* this will show a profile if either only 1 result appear after search, or if user click a profile on the right */}
                        View Profile
                    </Box>
                    <Box>
                        {/* related setting to print or export pdf */}
                        Settings
                    </Box>
                </Box>
                <Box sx={{ flex:5, border:'2px solid black', maxHeight:'100%', overflowY:'auto'}}>
                    <Box sx={{}}>
                        {groupedSortedContactsArr.map((el, index) => {
                            return (
                                <ContactCardsContainer key={index} content={{ 'group': el[0], 'contacts': el[1] }} />
                            )
                        })}

                    </Box>
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
