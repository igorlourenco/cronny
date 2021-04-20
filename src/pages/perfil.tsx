import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'

const Profile = () => {
  const { user } = useAuth()
  console.log(user)
  return <Protected>hjkl</Protected>
}

export default Profile
