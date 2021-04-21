import { Button } from '@chakra-ui/button'
import { useAuth } from '../contexts/auth'

interface ProtectedProps {
  children: any
}

export const Protected = ({ children = null }: ProtectedProps) => {
  const { user, signInWithGoogle } = useAuth()

  if (user === null) return <Button onClick={signInWithGoogle} />
  return children
}
