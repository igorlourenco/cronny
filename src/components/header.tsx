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
import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/router'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import { CgMenu } from 'react-icons/cg'
import ColorModeSwitcher from './color-mode-switcher'

export const Header = () => {
  const router = useRouter()
  const { signOut } = useAuth()
  const { colorMode } = useColorMode()

  const redirectTo = (page: string) => {
    router.push(page)
  }

  return (
    <Flex padding={4} alignItems="center" justifyContent="space-between">
      <Heading>Cronny</Heading>
      <Menu>
        <MenuButton
          rounded="full"
          colorScheme="purple"
          variant="ghost"
          as={IconButton}
          icon={<Box size={24} as={CgMenu} />}
        />
        <MenuList>
          <MenuItem
            icon={<AiOutlineHome />}
            onClick={() => redirectTo('/home')}
          >
            Início
          </MenuItem>
          <MenuItem
            icon={<AiOutlineUser />}
            onClick={() => redirectTo('/perfil')}
          >
            Seu perfil
          </MenuItem>
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
