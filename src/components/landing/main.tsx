import { useAuth } from '../../contexts/auth'
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const Main = () => {
  const router = useRouter()
  const { user, signInWithGoogle } = useAuth()

  const redirectToHome = () => {
    router.push('/home')
  }

  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.300',
                zIndex: -1,
              }}
            >
              Cronny
            </Text>
            <br />{' '}
            <Text color="gray.700" as="span">
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="purple.600">
            The project board is an exclusive resource for contract work. It's perfect for
            freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded="md">Como funciona</Button>
            {user ? (
              <Button
                onClick={redirectToHome}
                rounded="md"
                bg="purple.700"
                color="white"
                _hover={{
                  bg: 'purple.800',
                }}
              >
                Ir para Home
              </Button>
            ) : (
              <Button
                onClick={signInWithGoogle}
                rounded="md"
                bg="purple.700"
                color="white"
                _hover={{
                  bg: 'purple.800',
                }}
              >
                Comece a usar, é grátis
              </Button>
            )}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}
