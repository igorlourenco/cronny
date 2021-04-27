import { Box, Heading, Stack, Text } from '@chakra-ui/layout'
import { useAuth } from '../../contexts/auth'
import { NewProject } from './new-project'

export const FirstProjectBanner = () => {
  const { user } = useAuth()
  return (
    <Stack
      marginTop={['20px', '20px', '50px', '100px']}
      spacing={8}
      boxShadow="lg"
      borderRadius="md"
      padding={8}
      alignItems="center"
      justifyContent="center"
      width={['95%', '85%', '80%', '60%']}
    >
      <Stack>
        <Heading textAlign="center">
          Que bom ter você aqui, {user.name && user.name.split(' ')[0]}!🥳
        </Heading>
        <Text textAlign="center">Para começar na Cronny, basta criar seu primeiro projeto</Text>
      </Stack>

      <NewProject />
    </Stack>
  )
}
