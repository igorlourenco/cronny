import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  useColorMode,
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { useAuth } from '../contexts/auth'
import ColorModeSwitcher from './color-mode-switcher'

export const Header = () => {
  const { signOut } = useAuth()
  const { colorMode } = useColorMode()

  return (
    <Flex padding={4} alignItems="center" justifyContent="space-between">
      <Heading>Cronny</Heading>
      <Menu>
        <MenuButton
          rounded="full"
          as={IconButton}
          backgroundColor="transparent"
          icon={<Box size={24} as={AiOutlineMenu} />}
        />
        <MenuList>
          <MenuItem icon={<AiOutlineUser />}>Seu perfil</MenuItem>
          <MenuItem icon={<GoGraph />}>Estatísticas</MenuItem>
          <ColorModeSwitcher />
          <MenuItem
            color={colorMode === 'dark' ? 'red.200' : 'red.600'}
            onClick={signOut}
            icon={<FiLogOut />}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
