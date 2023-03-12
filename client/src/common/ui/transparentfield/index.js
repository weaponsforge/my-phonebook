import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

// Transparent TextField on autofill (HTML autocomplete)
const TransparentTextfield = styled((props) => (
  <TextField { ...props } />
  /* eslint-disable no-unused-vars */
))(({ theme }) => ({
  '& .MuiInputBase-root': {
    '& input': {
      backgroundClip: 'text !important'
    }
  },
  '& .MuiOutlinedInput-input': {
    '&:webkitAutofill': {
      'WebkitBoxShadow': '0 0 0 100px transparent inset'
    }
  }
}))

export default TransparentTextfield
