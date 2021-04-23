import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  useColorMode,
  Stack,
  Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { GoGraph } from 'react-icons/go'
import ColorModeSwitcher from './color-mode-switcher'

interface SidebarProps {
  onClose: () => void
  isOpen: boolean
  variant: string // 'drawer' | 'sidebar'
}

const SidebarContent = () => {
  const router = useRouter()
  const { signOut } = useAuth()
  const { colorMode } = useColorMode()
  const { pathname } = router

  const redirectTo = (page: string) => {
    router.push(page)
  }

  return (
    <Stack>
      <Heading>Cronny</Heading>
      <Button
        rounded="full"
        colorScheme={pathname === '/home' ? 'purple' : 'gray'}
        variant={pathname === '/home' ? 'solid' : 'ghost'}
        leftIcon={<AiOutlineHome />}
        onClick={() => redirectTo('/home')}
      >
        Início
      </Button>
      <Button
        rounded="full"
        colorScheme={pathname === '/perfil' ? 'purple' : 'gray'}
        variant={pathname === '/perfil' ? 'solid' : 'ghost'}
        leftIcon={<AiOutlineUser />}
        onClick={() => redirectTo('/perfil')}
      >
        Seu perfil
      </Button>
      <Button
        rounded="full"
        colorScheme={pathname === '/estatisticas' ? 'purple' : 'gray'}
        variant={pathname === '/estatisticas' ? 'solid' : 'ghost'}
        leftIcon={<GoGraph />}
      >
        Estatísticas
      </Button>
      <ColorModeSwitcher />
      <Button
        rounded="full"
        variant="ghost"
        colorScheme="red"
        onClick={signOut}
        leftIcon={<FiLogOut />}
      >
        Sair
      </Button>
    </Stack>
  )
}

export const Sidebar = ({ isOpen, variant, onClose }: SidebarProps) => {
  return variant === 'sidebar' ? (
    <Box position="fixed" left={0} p={3} w="20vw" top={0} h="100%">
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
