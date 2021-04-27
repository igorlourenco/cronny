import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'
import fetcher from '../util/fetcher'
import useSWR from 'swr'
import { Heading, Spinner, Box } from '@chakra-ui/react'
import { FirstProjectBanner } from '../components/projects/first-project-banner'
import { ProjectsBoard } from '../components/projects/projects-board'

const Home = () => {
  const { user } = useAuth()
  const { data, error } = useSWR(user ? ['/api/projects', user.token] : null, fetcher)

  if (error) {
    console.error(error)
    return <Heading>Ocorreu um erro</Heading>
  }

  if (!data || !data.projects) return <Spinner />

  return (
    <Protected>
      <Box display="flex" width="full" spacing={8} alignItems="center" justifyContent="center">
        {data && data.projects.length > 0 ? (
          <ProjectsBoard projects={data.projects} />
        ) : (
          <FirstProjectBanner />
        )}
      </Box>
    </Protected>
  )
}

export default Home
