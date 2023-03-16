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
import { Box } from '@mui/material'
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
                gridTemplateColumns: '2fr 5fr',
                gap: '10px',
                position: 'relative'
            }}>
                <Box sx={{ position: 'relative', flex: '200px' }}>
                    Left Container
                </Box>

                <Box sx={{ maxHeight:'100svh'}}>
                    <Box sx={{ overflowY:'auto'}}>
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
