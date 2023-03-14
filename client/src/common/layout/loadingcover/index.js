import Box from '@mui/material/Box'
import Page from '@/common/layout/page'

function LoadingCover () {
  return (
    <Page>
      <Box
        sx={{
          display: 'grid',
          placeContent: 'center'
        }}
      >
        <h1>Loading...</h1>
      </Box>
    </Page>
  )
}

export default LoadingCover
