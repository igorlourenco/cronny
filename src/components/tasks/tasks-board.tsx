import { Checkbox, Divider, Heading, Stack, StackProps, Text } from '@chakra-ui/react'

interface TasksBoardProps extends StackProps {
  projectId: string
}

export const TasksBoard = ({ projectId }: TasksBoardProps) => {
  return (
    <Stack padding={6} rounded="md" boxShadow="lg" maxHeight="80vh" overflowY="scroll">
      <Heading size="lg">Atividades</Heading>
      <Text fontWeight="500">Você tem 12 atividades. 8 delas são para hoje.</Text>
      <Divider />
      <Stack paddingTop={3}>
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
        <Checkbox colorScheme="purple">Checkbox</Checkbox>
      </Stack>
    </Stack>
  )
}
