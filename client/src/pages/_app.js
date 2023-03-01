import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'

// Redux
import { Provider } from 'react-redux'
import { store } from '@/store/store'

// MUI
import createEmotionCache from '@/lib/mui/createEmotionCache'
import { createTheme } from '@mui/material/styles'
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'

const themeOptionsLight = {
  palette: {
    mode: 'light',
    primary: {
      main: '#e6d5b3',
    },
    secondary: {
      main: '#d6a3e0',
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
  },
}
const lightTheme = createTheme(themeOptionsLight)
const darkTheme = createTheme(themeOptionsDark)

// Source: https://github.com/mui/material-ui/tree/master/examples/material-next
// Date: 20230225 @v5.11.10
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const [activeTheme] = useActiveTheme()
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme === 'light' ? lightTheme : darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
