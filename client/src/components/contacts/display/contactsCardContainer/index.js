import { Box } from '@mui/material'
import { useAsyncV } from 'use-sync-v'
import { ContactCardsGroup } from './contactCardGroup'

export const ContactCardsContainer = () => {
  const { data, error } = useAsyncV('contacts')

  const groupedSortedContacts = [...(data ?? [])].reduce((prev, curr) => {
    const capitalizedFirstNameFirstLetterChar = curr.first_name.match(
      new RegExp(String.raw`(?<firstLetterChar>^[a-z])|`, 'i')
    )[0]
    if (!capitalizedFirstNameFirstLetterChar) {
      if (!prev.misc) prev.misc = []
      prev.misc = [...prev.misc, curr]
    } else {
      if (!prev[capitalizedFirstNameFirstLetterChar.toUpperCase()]) {
        prev[capitalizedFirstNameFirstLetterChar.toUpperCase()] = []
      }
      prev[capitalizedFirstNameFirstLetterChar.toUpperCase()] = [
        ...prev[capitalizedFirstNameFirstLetterChar.toUpperCase()],
        curr,
      ]
    }
    return prev
  }, {})

  const groupedSortedContactsArr = Object.entries(groupedSortedContacts)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {data &&
        groupedSortedContactsArr.map((el, index) => {
          return (
            <ContactCardsGroup
              key={index}
              content={{ group: el[0], contacts: el[1] }}
            />
          )
        })}
      {error && <div>Error</div>}
    </Box>
  )
}
