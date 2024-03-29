
import {  Box, Typography } from '@mui/material'
import { ContactCard } from '../../contactsCardContainer/contactCardGroup/contactCard'

const groupNameMapping = {
  first_name: 'Matching First Name',
  middle_name: 'Matching Middle Name',
  last_name: 'Matching Last Name',
  phone_number: 'Matching Contact Number',
  email_address: 'Matching Contact Email'
}

export const SearchResultsGroup = ({ content }) => {
  const { group, contacts } = content
  if (!groupNameMapping[group]) {
    return
  }
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '20px',
        borderBottom: '1px dashed grey',
      }}
    >
      <Typography variant="h5"
        sx={{
        }}
      >
        {groupNameMapping[group]}
      </Typography>
      <Box sx={{
        backgroundColor: 'inherit',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        alignItems: 'start',
        gap: '10px',
        flex: '1',
      }}>
        {contacts.map((el, index) => {
          return (
            <ContactCard key={index} contact={el} />
          )
        })}
      </Box>
    </Box>
  )
}