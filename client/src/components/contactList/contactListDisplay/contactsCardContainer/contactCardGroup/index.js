import { Box, Typography } from '@mui/material'
import { ContactCard } from '../contactCard'


export const ContactCardsGroup = ({ content }) => {
  const { group, contacts } = content
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        p: '25px',
        borderBottom: '1px dashed grey'
      }}
    >
      <Typography variant="h4"
        sx={{
          padding: '15px',
          paddingLeft: '0',
          aspectRatio: '1',
          position: 'sticky',
          top: 0,
        }}
      >
        {group === 'misc' ? '' : group}
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