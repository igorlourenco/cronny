import { Link, Button } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../contexts/auth'
import { Header } from '../components/header'

function App() {
  const { user, signOut } = useAuth()
  return user ? (
    <>
      <Header />
      <Button colorScheme="red" onClick={signOut}>
        sair
      </Button>
    </>
  ) : (
    <Link href="/">inicio</Link>
  )
}
export default App
