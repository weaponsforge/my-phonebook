import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'

function LoadingButton ({
  label = '',
  variant = 'contained',
  isloading = false,
  disabled = false,
  sx={},
  handleClick
}) {
  const [activeTheme] = useSyncLocalStorage('activeTheme')

  return (
    <Button sx={sx} variant={variant} disabled={isloading || disabled} onClick={handleClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {(isloading)
          ? <CircularProgress
            size={24}
            color={activeTheme === 'light' ? 'dark' : 'main'}
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
