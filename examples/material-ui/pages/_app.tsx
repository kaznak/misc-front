import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import muiTheme from '../lib/muiTheme'

// https://material-ui.com/components/typography/#install-with-npm
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        {/* PWA primary color */}
        <meta
          key="meta-theme-color"
          name="theme-color"
          content={muiTheme.palette.primary.main}
        />
        <title key="title">Create Next App</title>
        <link key="link-icon" rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
