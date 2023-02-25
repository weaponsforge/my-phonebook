import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Source: https://github.com/mui/material-ui/tree/master/examples/material-next
// Date: 20230225 @v5.11.10
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#8BC34A',
      light: '#DCEDC8',
      dark: '#689F38'
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
