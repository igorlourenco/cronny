import { Button, Box } from '@chakra-ui/react'
import { useAuth } from '../contexts/auth'
import { Header } from './header'

interface ProtectedProps {
  children: any
}

export const Protected = ({ children = null }: ProtectedProps) => {
  const { user, signInWithGoogle } = useAuth()

  if (user === null) return <Button onClick={signInWithGoogle} />
  return (
    <>
      <Header />
      <Box padding={[3, 5, 7, 9]}>{children}</Box>
    </>
  )
}
