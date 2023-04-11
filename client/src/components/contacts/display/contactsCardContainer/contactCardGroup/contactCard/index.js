import { Avatar, Paper, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { updateSyncV, deleteSyncV, useSyncV } from 'use-sync-v'

const getInitial = (first, second, last) => {
  const firstInitial = (first.match(
    new RegExp(String.raw`(?<firstNameInitial>^[a-z])`, 'i')
  ) ?? [''])[0]
  const middleInitial = (second.match(
    new RegExp(String.raw`(?<middleNameInitial>^[a-z])`, 'i')
  ) ?? [''])[0]
  const lastInitial = (last.match(
    new RegExp(String.raw`(?<lastNameInitial>^[a-z])`, 'i')
  ) ?? [''])[0]
  return `${firstInitial}${middleInitial}${lastInitial}`
}

const backgroundColorGenerator = (name) => {
  let value = 0
  for (let i = 0; i < name.length; i++) {
    value = value + name.charCodeAt(i)
  }
  value = value % 255
  return value
}

export const ContactCard = ({ contact }) => {
  const router = useRouter()
  const theme = useTheme()
  
  const initial = getInitial(
    contact.first_name,
    contact.middle_name,
    contact.last_name
  ).toUpperCase()

  const backgroundColor = backgroundColorGenerator(initial)

  const contactClickHandler = (e) => {
    e.stopPropagation()
    router.push(`/contacts/edit/${contact.doc_id}`)
    updateSyncV("show.sidebar", false)
  }
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          backgroundColor: 'inherit',
          backdropFilter: 'blur(2px)',
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: '1fr 6fr',
          gridAutoRows: '1fr',
          padding: '15px',
          gap: '15px',
          alignItems: 'center',
          borderRadius: '10px',
          width: 'auto',
          maxWidth: '80vw',
          '&:hover': {
            backdropFilter: 'contrast(120%)',
          },
        }}
        onClick={contactClickHandler}
      >
        <Avatar
          sx={{
            backgroundColor: `hsla(${backgroundColor},50%,80%,50%)`,
            border: '1px solid grey',
          }}
        >
          {initial}
        </Avatar>

        <Typography
          variant="h8"
          sx={{
            color: theme.palette.primary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {contact.first_name} {contact.middle_name} {contact.last_name}
        </Typography>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'inherit',
          backdropFilter: 'blur(2px)',
          display: { xs: 'grid', md: 'none' },
          gridTemplateColumns: '1fr 6fr',
          gridAutoRows: '1fr',
          padding: '15px',
          gap: '15px',
          alignItems: 'center',
          borderRadius: '10px',
          width: 'auto',
          maxWidth: '80vw',
          '&:hover': {
            backdropFilter: 'contrast(120%)',
          },
        }}
        onClick={contactClickHandler}
      >
        <Avatar
          sx={{
            backgroundColor: `hsla(${backgroundColor},50%,80%,50%)`,
            border: '1px solid grey',
          }}
        >
          {initial}
        </Avatar>

        <Typography
          variant="h8"
          sx={{
            color: theme.palette.primary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {contact.first_name} {contact.middle_name} {contact.last_name}
        </Typography>
      </Paper>
    </>
  )
}
