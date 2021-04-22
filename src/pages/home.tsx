import { Header } from '../components/header'
import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'
import fetcher from '../util/fetcher'
import useSWR from 'swr'
import { Heading } from '@chakra-ui/layout'
import { FirstProjectBanner } from '../components/projects/first-project-banner'

const Home = () => {
  const { user } = useAuth()
  const { data, error } = useSWR(user ? ['/api/projects', user.token] : null, fetcher)

  if (error) {
    console.error(error)
    return <Heading>Ocorreu um erro</Heading>
  }

  return (
    <Protected>
      <Header />
      {data && data.projects <= 0 && <FirstProjectBanner />}
    </Protected>
  )
}

export default Home
