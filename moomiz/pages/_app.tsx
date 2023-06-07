import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@/constants/styles/theme'
import { GlobalStyle } from '@/constants/styles/globalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
