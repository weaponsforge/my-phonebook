import Box from '@mui/material/Box'

function TransparentBox ({ children }) {
  return (
    <Box sx={{
      width: {
        sm: '600px',
      },
      backgroundColor: {
        xs: 'none',
        sm: 'rgba(255, 255, 255, 0.4)'
      },
      borderRadius: '8px',
      textAlign: 'center',
      margin: '24px !important',
      padding: '24px',
      display: 'grid',
      placeContent: 'center'
    }}>
      {children}
    </Box>
  )
}

export default TransparentBox
