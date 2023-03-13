import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { useGlobalState } from '@/lib/hooks/useGlobalState'

function LoadingButton ({
  label = '',
  variant = 'contained',
  isloading = false,
  disabled = false,
  sx={},
  handleClick
}) {
  const [globalState] = useGlobalState()

  return (
    <Button sx={sx} variant={variant} disabled={isloading || disabled} onClick={handleClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {(isloading)
          ? <CircularProgress
            size={24}
            color={globalState.activeTheme === 'light' ? 'dark' : 'primary'}
          />
          : <span>
            {label}
          </span>
        }
      </div>
    </Button>
  )
}

LoadingButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  isloading: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  sx: PropTypes.object
}

export default LoadingButton
