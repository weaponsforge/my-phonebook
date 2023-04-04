import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import '@/styles/globals.css'

// MUI
import createEmotionCache from '@/lib/mui/createEmotionCache'
import { lightTheme, darkTheme } from '@/lib/mui/theme'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'
import { init } from '@/lib/store'
import useInitAuth from '@/hooks/useInitAuth'

init()
// Source: https://github.com/mui/material-ui/tree/master/examples/material-next
// Date: 20230225 @v5.11.10
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const activeTheme = useSyncLocalStorage('activeTheme')
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  useInitAuth()

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme === 'light' ? lightTheme : darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
