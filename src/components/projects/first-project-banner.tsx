import { Box, Heading, Stack, Text } from '@chakra-ui/layout'
import { useAuth } from '../../contexts/auth'
import { NewProject } from './new-project'

export const FirstProjectBanner = () => {
  const { user } = useAuth()
  return (
    <Box
      display="flex"
      width="full"
      height="80vh"
      spacing={8}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        spacing={8}
        boxShadow="lg"
        borderRadius="2xl"
        padding={8}
        alignItems="center"
        justifyContent="center"
        width={['95%', '85%', '80%', '60%']}
      >
        <Stack>
          <Heading textAlign="center">
            Bem-vindo, {user.name.split(' ')[0]}! Vamos começar? 🥳
          </Heading>
          <Text textAlign="center">Para começar na Cronny, basta criar seu primeiro projeto</Text>
        </Stack>

        <NewProject />
      </Stack>
    </Box>
  )
}
