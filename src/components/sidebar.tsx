import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { AiOutlineUser, AiOutlineHome, AiOutlineFolder } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import { FiMoon, FiSun } from 'react-icons/fi'

interface SidebarProps {
  onClose: () => void
  isOpen: boolean
  variant: string // 'drawer' | 'sidebar'
}

const SidebarContent = () => {
  const router = useRouter()
  const { pathname } = router

  const handleClick = (page: string) => {
    router.push(page)
  }

  const menuItems = [
    {
      label: 'Início',
      pathname: '/home',
      icon: AiOutlineHome,
    },
    {
      label: 'Seu perfil',
      pathname: '/perfil',
      icon: AiOutlineUser,
    },
    {
      label: 'Estatísticas',
      pathname: '/estatisticas',
      icon: GoGraph,
    },
  ]

  return (
    <Stack spacing={10}>
      <Heading paddingLeft={3} fontFamily="Paprika">
        Cronny
      </Heading>
      <List>
        {menuItems.map((item) => (
          <ListItem
            cursor="pointer"
            key={item.pathname}
            display="flex"
            alignItems="center"
            padding={3}
            fontSize={18}
            rounded="md"
            letterSpacing="0.03rem"
            color={pathname === item.pathname ? 'purple.900' : 'gray.500'}
            fontWeight={pathname === item.pathname ? 700 : 500}
            onClick={() => handleClick(item.pathname)}
            _hover={{
              backgroundColor: 'purple.100',
              color: 'gray.600',
            }}
          >
            <ListIcon as={item.icon} marginRight={5} />
            {item.label}
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export const Sidebar = ({ isOpen, variant, onClose }: SidebarProps) => {
  return variant === 'sidebar' ? (
    <Box position="fixed" left={0} p={3} w="auto" top={0} h="100%">
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
