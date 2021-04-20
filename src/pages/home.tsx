import { Link } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../contexts/auth'
import { Header } from '../components/header'

function App() {
  const { user } = useAuth()
  return user ? (
    <>
      <Header />
    </>
  ) : (
    <Link href="/">inicio</Link>
  )
}
export default App
