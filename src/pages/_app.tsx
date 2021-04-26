import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
