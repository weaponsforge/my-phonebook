import { LinearProgress } from '@mui/material'

export const LoadingLinear = () => {
  return (
    <LinearProgress
      sx={{
        position: 'fixed',
        width: '100%',
      }}
    />
  )
}