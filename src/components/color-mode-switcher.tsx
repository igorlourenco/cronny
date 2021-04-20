import React from 'react'
import { Box, MenuItem, useColorMode } from '@chakra-ui/react'
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
    <MenuItem
      aria-label={'Color Mode'}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <Moon /> : <Sun />}
    >
      Mudar tema
    </MenuItem>
  )
}

export default ColorModeSwitcher
