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
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'
import { lightTheme, darkTheme } from '@/lib/mui/theme'

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
