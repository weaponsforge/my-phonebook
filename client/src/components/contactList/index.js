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
import { ContactCard } from '@/common/contactCard'
import { Box } from '@mui/material'

function ContactListComponent({ state, eventsHandler }) {
    const theme = useTheme()
    // divide state.contacts into each container
    const sortedContacts = [...state.contacts].sort((a, b) => a.first_name < b.first_name ? -1 : 1)
    const groupedSortedContacts = [...sortedContacts].reduce((acc, curr) => {
        const capitalizedFirstNameFirstLetterChar = curr.first_name.match(new RegExp(
            String.raw`(?<firstLetterChar>^[a-z])|`, 'i'))[0]
        if (!capitalizedFirstNameFirstLetterChar) {
            acc.misc.push(curr) 
        } else {
            acc[capitalizedFirstNameFirstLetterChar]
        }
        console.log(firstNameFirstLetterChar)

    })

    return (
        <Page>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',

            }}>
                <Box sx={{
                    flex: '2'
                }}>
                    Search Bar
                </Box>
                <Box sx={{
                    flex: '4',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {state.contacts.map((el, index) => {
                        return (
                            <ContactCard key={index} contact={el} />
                        )
                    })}
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
