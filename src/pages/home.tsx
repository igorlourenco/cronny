import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'
import fetcher from '../util/fetcher'
import useSWR from 'swr'
import { Heading, Box, Flex, Center, Stack, Spinner } from '@chakra-ui/react'
import { FirstProjectBanner } from '../components/projects/first-project-banner'
import { TasksBoard } from '../components/tasks/tasks-board'

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
      {data && data.projects[0] ? (
        <Flex direction={['column', 'column', 'column', 'row']} gridGap={8} width="100%">
          <TasksBoard projectId={data.projects[0].id} />
        </Flex>
      ) : (
        <FirstProjectBanner />
      )}
    </Protected>
  )
}

export default Home
