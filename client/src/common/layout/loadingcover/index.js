import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import Page from '@/common/layout/page'
import TransparentBox from '@/common/ui/transparentbox'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'

function LoadingCover () {
  const [activeTheme] = useSyncLocalStorage('activeTheme')

  return (
    <Page>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          placeContent: 'center',
          height: '100vh'
        }}
      >
        <TransparentBox>
          <span>
            <Typography variant='h6' color='#000'>
            Loading...
            </Typography>
          </span>

          <span>
            <CircularProgress
              color={(activeTheme === 'light') ? 'dark' : 'primary'}
            />
          </span>
        </TransparentBox>
      </Box>
    </Page>
  )
}

export default LoadingCover
