import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const Avalon = localFont({ src:'./fonts/FontsFree-Net-Avalon.ttf'})

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

const themeOptionsLight = {
  palette: {
    mode: 'light',
    primary: {
      main: '#e6d5b3',
    },
    secondary: {
      main: '#d6a3e0',
    },
    dark: {
      main: '#a1957d',
      light: '#deb5e6',
      dark: '#a1957d'
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
}

const themeOptionsDark = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0c2a3',
    },
    secondary: {
      main: '#d6a3e0',
    },
    error: {
      main: '#e0a3a3',
    },
    warning: {
      main: '#e0bea3',
    },
    info: {
      main: '#a3c9e0',
    },
    success: {
      main: '#a3e0aa',
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
}
const lightTheme = createTheme(themeOptionsLight)
const darkTheme = createTheme(themeOptionsDark)

export {
  theme,
  lightTheme,
  darkTheme
}
