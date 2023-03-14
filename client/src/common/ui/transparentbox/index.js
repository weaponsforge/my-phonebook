import Box from '@mui/material/Box'

function TransparentBox ({ children }) {
  return (
    <Box sx={{
      width: {
        md: '800px',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      boxShadow: 'box-shadow: 0 10px 40px rgb(0 0 0 / 14%)',
      textAlign: 'center',
      padding: '24px',
      display: 'grid',
      placeContent: 'center'
    }}>
      {children}
    </Box>
  )
}

export default TransparentBox
