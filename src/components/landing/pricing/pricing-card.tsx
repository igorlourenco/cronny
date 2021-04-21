import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useAuth } from '../../../contexts/auth'
import { useRouter } from 'next/router'

interface PricingCardProps {
  order: string
  title: string
  price: number
  attributes: {
    description: string
    isActiveToPlan: boolean
  }[]
  buttonTitle: string
}

export const PricingCard = ({
  order,
  title,
  price,
  attributes,
  buttonTitle,
}: PricingCardProps) => {
  const router = useRouter()
  const { user, signIn } = useAuth()

  const handleFreePlan = () => {
    if (user) {
      router.push('/home')
    } else {
      signIn()
    }
  }

  return (
    <Box
      mb={4}
      shadow="base"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderRadius="2xl"
    >
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text>
        <HStack justifyContent="center">
          {price > 0 ? (
            <>
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                {price}
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /mês
              </Text>
            </>
          ) : (
            <Text fontSize="5xl" fontWeight="900">
              Grátis
            </Text>
          )}
        </HStack>
      </Box>
      <VStack py={4} borderBottomRadius={'xl'}>
        <List spacing={3} textAlign="start" px={12}>
          {attributes.map((attribute) => (
            <ListItem>
              <ListIcon
                as={attribute.isActiveToPlan ? IoCheckmarkSharp : IoCloseSharp}
                size={32}
                color={attribute.isActiveToPlan ? 'purple.500' : 'gray.400'}
              />
              {attribute.description}
            </ListItem>
          ))}
        </List>
        <Box w="80%" pt={7}>
          {order === 'first' ? (
            <Button
              w="full"
              rounded="full"
              colorScheme="purple"
              variant="outline"
              onClick={handleFreePlan}
            >
              {buttonTitle}
            </Button>
          ) : (
            <Button
              w="full"
              rounded="full"
              colorScheme="purple"
              variant="solid"
            >
              {buttonTitle}
            </Button>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
