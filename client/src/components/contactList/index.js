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
      if (!acc[capitalizedFirstNameFirstLetterChar.toUpperCase()]) {
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
  console.log(groupedSortedContacts)
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
            <TextField id="searchField" label="Search" variant="outlined" />
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
            border: '2px solid black',
            maxHeight: '100%',
            width: '100%',
            height: '100%',
            padding: '20px',
            overflowY:'scroll',
            userSelect:'none',
            '&::-webkit-scrollbar': {
              display:'none',
            },
          }}>
          <Box sx={{
            width: '100%',
            height: '100%',
          }}>
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
