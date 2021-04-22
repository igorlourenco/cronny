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

  const redirectTo = (page: string) => {
    router.push(page)
  }

  return (
    <Stack>
      <Heading>Cronny</Heading>
      <Button leftIcon={<AiOutlineHome />} onClick={() => redirectTo('/home')}>
        Início
      </Button>
      <Button leftIcon={<AiOutlineUser />} onClick={() => redirectTo('/perfil')}>
        Seu perfil
      </Button>
      <Button leftIcon={<GoGraph />}>Estatísticas</Button>
      <ColorModeSwitcher />
      <Button
        color={colorMode === 'dark' ? 'red.200' : 'red.600'}
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
    <Box position="fixed" left={0} p={5} w="20vw" top={0} h="100%">
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
