import React from 'react'
import { Box, Button, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const Moon = () => {
  return <Box as={FiMoon} />
}

const Sun = () => {
  return <Box as={FiSun} />
}

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode} leftIcon={colorMode === 'light' ? <Moon /> : <Sun />}>
      {colorMode === 'light' ? 'Usar tema escuro' : 'Usar tema claro'}
    </Button>
  )
}

export default ColorModeSwitcher
