import { useState } from 'react'
import { Button, Heading, Box, useBreakpointValue } from '@chakra-ui/react'
import { useAuth } from '../contexts/auth'
import { Sidebar } from './sidebar'
import { Header } from './header'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

interface ProtectedProps {
  children: any
}

export const Protected = ({ children = null }: ProtectedProps) => {
  const { user, signInWithGoogle } = useAuth()
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  if (user === null) return <Button onClick={signInWithGoogle} />
  return (
    <>
      <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Box ml={!variants?.navigationButton && 200}>
        <Header showSidebarButton={variants?.navigationButton} onShowSidebar={toggleSidebar} />
        {children}
      </Box>
    </>
  )
}
