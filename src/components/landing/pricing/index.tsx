import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { plans } from '../../../data'
import { PricingCard } from './pricing-card'

export const Pricing = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Use o plano que combina com você
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Faça um teste de 7 dias. Cancele a qualquer hora.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </Stack>
    </Box>
  )
}
