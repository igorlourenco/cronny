import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react'
import { Header } from '../components/header'
import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'

const Profile = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <Protected>
      <Header />
      {user ? (
        <Center py={6}>
          <Box
            maxW={'320px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
          >
            <Avatar
              size={'xl'}
              src={user.attributes.picture}
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {user.attributes.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {user.attributes.email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              Actress, musician, songwriter and artist. PM for work inquires or{' '}
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>{' '}
              me in your posts
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #music
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Message
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Follow
              </Button>
            </Stack>
          </Box>
        </Center>
      ) : (
        <Spinner />
      )}
    </Protected>
  )
}

export default Profile
