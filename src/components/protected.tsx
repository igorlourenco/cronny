import { Button } from '@chakra-ui/button'
import { useAuth } from '../contexts/auth'

interface ProtectedProps {
  children: any
}

export const Protected = ({ children = null }: ProtectedProps) => {
  const { user, signIn } = useAuth()

  if (user === null) return <Button onClick={signIn} />
  return children
}
