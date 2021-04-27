import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: "'Nunito Sans', sans-serif",
  body: "'Nunito Sans', sans-serif",
  mono: "'Menlo', monospace",
}

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
}

const styles = {
  global: {
    'html, body': {
      backgroundColor: '#fffafa',
      color: 'gray.600',
      lineHeight: 'tall',
      letterSpacing: '0.03rem',
    },
  },
}

const theme = extendTheme({
  fonts,
  fontWeights,
  styles,
})

export default theme
