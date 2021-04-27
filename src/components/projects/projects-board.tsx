import { Stack, Heading, Flex, Box, Link } from '@chakra-ui/react'
import { Project } from '../../interfaces/project'
import { AiOutlineProject } from 'react-icons/ai'
import { NewProject } from './new-project'

interface ProjectsBoardProps {
  projects: Project[]
}

export const ProjectsBoard = ({ projects }: ProjectsBoardProps) => {
  return (
    <Stack
      boxShadow="lg"
      width={['95%', '85%', '75%', '65%']}
      padding={4}
      borderRadius="md"
      spacing={6}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Meus projetos</Heading>
        <NewProject />
      </Flex>
      {projects.map((project) => (
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box as={AiOutlineProject} size={24} color="purple.500" />
            <Link marginLeft={3} href={`/projeto/${project.id}`} isExternal>
              {project.name}
            </Link>
          </Flex>
        </Flex>
      ))}
    </Stack>
  )
}
