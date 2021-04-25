import { ColorMode, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const initialColorMode: ColorMode = 'light'

const config = {
  initialColorMode: initialColorMode,
  useSystemColorMode: false,
}

const fonts = {
  heading: "'Lato', sans-serif",
  body: "'Lato', sans-serif",
  mono: "'Menlo', monospace",
}

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
}

const global = (props) => ({
  body: {
    fontFamily: 'body',
    color: props.colorMode === 'dark' ? 'white' : 'gray.600',
    lineHeight: 'base',
  },
})

const theme = extendTheme({
  config,
  fonts,
  fontWeights,
  styles: { global },
})

export default theme
