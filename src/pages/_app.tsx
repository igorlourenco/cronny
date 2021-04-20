import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'
import { ChakraProvider } from '@chakra-ui/react'
import ColorModeSwitcher from '../components/color-mode-switcher'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <AuthProvider>
        <ColorModeSwitcher />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
