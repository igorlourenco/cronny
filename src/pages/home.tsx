import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'
import fetcher from '../util/fetcher'
import useSWR from 'swr'
import { Heading, Stack, Spinner, Button, Box } from '@chakra-ui/react'
import { FirstProjectBanner } from '../components/projects/first-project-banner'

const Home = () => {
  const { user } = useAuth()
  const { data, error } = useSWR(user ? ['/api/projects', user.token] : null, fetcher)

  if (error) {
    console.error(error)
    return <Heading>Ocorreu um erro</Heading>
  }

  if (!data) return <Spinner />

  return (
    <Protected>
      <Box display="flex" width="full" spacing={8} alignItems="center" justifyContent="center">
        {data && data.projects ? (
          <Stack boxShadow="lg" width={['95%', '85%', '75%', '65%']}>
            <Button>TES</Button>
          </Stack>
        ) : (
          <FirstProjectBanner />
        )}
      </Box>
    </Protected>
  )
}

export default Home
