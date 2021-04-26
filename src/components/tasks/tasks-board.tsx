import {
  Flex,
  Checkbox,
  IconButton,
  Divider,
  Heading,
  Stack,
  StackProps,
  Text,
  Box,
  Link,
} from '@chakra-ui/react'
import React from 'react'
import { CreateTask } from './create-task'

interface TasksBoardProps extends StackProps {
  projectId: string
}

export const TasksBoard = ({ projectId }: TasksBoardProps) => {
  return (
    <Stack paddingTop={4} rounded="md" boxShadow="lg" maxHeight="80vh" overflow="hidden">
      <Box paddingX={4} overflow="hidden">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg">Tarefas</Heading>
          <CreateTask />
        </Flex>
        <Text fontWeight="600" fontSize={14}>
          Você tem 12 tarefas para hoje
        </Text>
        <Divider marginTop={1} />
        <Stack paddingTop={4}>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
          <Checkbox colorScheme="purple">Checkbox</Checkbox>
        </Stack>
      </Box>
      <Text paddingLeft={4}>e mais...</Text>
      <Stack padding={2} backgroundColor="purple.100" alignItems="center" justifyContent="center">
        <Link href="/profile" fontWeight="600" isExternal>
          ver no calendário
        </Link>
      </Stack>
    </Stack>
  )
}
