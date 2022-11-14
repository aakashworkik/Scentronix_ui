import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import Header from 'components/header'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const appCss = {
  wrapper: css({
    fontSize: '1.25rem',
  }),
}

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Box  sx={{ marginTop: { xs: '70px', sm: '150px' }, paddingLeft: "15px", paddingRight: "15px"  }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
