import { Flex, Box, Text, IconButton } from '@chakra-ui/react'
import { Category as ICategory } from '../../interfaces/category'
import { AiOutlineEdit } from 'react-icons/ai'
import React from 'react'
import { DeleteCategory } from './delete-category'

export const Category = ({ id, label, color }: ICategory) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gridColumnGap={2}>
        <Box width={5} height={5} rounded="md" backgroundColor={color} />
        <Text>{label}</Text>
      </Flex>
      <Flex alignItems="center" gridColumnGap={2}>
        <DeleteCategory id={id} label={label} />
      </Flex>
    </Flex>
  )
}
