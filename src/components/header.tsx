import { Flex, Image } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      padding={[3, 3, 4, 4]}
      alignItems="center"
      justifyContent="space-between"
      borderTopWidth="5px"
      borderTopColor="purple.500"
    >
      <Image src="/images/brand.svg" width={[10, 10, 12, 12]} height="auto" />
    </Flex>
  )
}
