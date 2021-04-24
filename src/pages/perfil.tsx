import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  Spinner,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Feedback } from '../components/feedback'
import { Protected } from '../components/protected'
import { useAuth } from '../contexts/auth'

const Profile = () => {
  const { user, signOut } = useAuth()

  return (
    <Protected>
      {user ? (
        <Center py={6}>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            justifyContent="space-between"
            maxW={['95vw', '75vw', '60vw', '65vw']}
            w={'full'}
            gridGap={8}
          >
            <Stack
              boxShadow={'lg'}
              justifyContent="space-between"
              rounded={'2xl'}
              p={6}
              textAlign={'center'}
              minWidth="43%"
            >
              <Flex alignItems="center" justifyContent="space-between" gridColumnGap={2}>
                <Avatar size={'lg'} src={user.photoUrl} alt={user.name} />
                <Stack alignItems="flex-start">
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {user.name}
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {user.email}
                  </Text>
                </Stack>
              </Flex>

              <Stack align={'center'} gridColumnGap={3} justify={'center'} direction={'row'} mt={6}>
                <Badge px={2} py={1} rounded="full" colorScheme="purple" fontWeight={'600'}>
                  Plano Time
                </Badge>
                <Badge px={2} py={1} rounded="full" colorScheme="purple" fontWeight={'600'}>
                  3 projetos
                </Badge>
                <Badge px={2} py={1} rounded="full" colorScheme="purple" fontWeight={'600'}>
                  53 posts
                </Badge>
              </Stack>

              <Flex alignItems="center" gridColumnGap={3} mt={8} direction={'row'} spacing={4}>
                <Button flex={1} colorScheme="purple" variant="solid" rounded={'full'}>
                  Alterar plano
                </Button>
                <Button
                  size="sm"
                  rounded="full"
                  variant="ghost"
                  colorScheme="red"
                  onClick={signOut}
                  leftIcon={<FiLogOut />}
                >
                  Sair
                </Button>
              </Flex>
            </Stack>

            <Box boxShadow={'lg'} rounded={'2xl'} p={6} textAlign={'center'} minWidth="57%">
              <Feedback />
            </Box>
          </Flex>
        </Center>
      ) : (
        <Spinner />
      )}
    </Protected>
  )
}

export default Profile
