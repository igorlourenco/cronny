import React, { useState, useRef } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Text,
  Switch,
  ModalCloseButton,
  useDisclosure,
  useToast,
  IconButton,
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { Project } from '../../interfaces/project'
import { createProject } from '../../database/client'
import { CronnyInput } from '../custom'
import { useAuth } from '../../contexts/auth'
import { mutate } from 'swr'

export const NewProject = ({ isFirstProject = false }: { isFirstProject?: boolean }) => {
  const nameRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  const [isPublic, setIsPublic] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  const { user } = useAuth()
  const toast = useToast()

  const onSubmit = async (project) => {
    setIsLoading(true)
    const newProject: Project = {
      userId: user.uid,
      isActive: true,
      isPublic,
      createdAt: new Date().toISOString(),
      ...project,
    }
    await createProject(newProject)

    toast({
      title: 'Projeto criado!',
      description: 'Comece a organizar e automatizar suas postagens agora mesmo.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    reset()
    setIsLoading(false)

    await mutate(
      user ? ['/api/projects', user.token] : null,
      async (data) => {
        return { projects: [newProject, ...data.projects] }
      },
      false,
    )

    onClose()
  }

  return (
    <>
      {isFirstProject ? (
        <Button
          leftIcon={<AiOutlinePlus />}
          colorScheme="purple"
          _hover={{ boxShadow: 'md' }}
          onClick={onOpen}
        >
          Meu primeiro projeto
        </Button>
      ) : (
        <IconButton
          aria-label="Novo projeto"
          icon={<AiOutlinePlus />}
          colorScheme="purple"
          _hover={{ boxShadow: 'md' }}
          onClick={onOpen}
        />
      )}

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Novo Projeto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CronnyInput
              ref={nameRef}
              placeholder="Nome do projeto"
              name="name"
              {...register('name', { required: true })}
            />
            <Flex alignItems="center" marginTop={4}>
              <Text marginRight={2}>Deseja compartilhar o projeto?</Text>
              <Switch
                colorScheme="purple"
                isChecked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
                id="public-project"
              />
            </Flex>
            <Text fontSize={10} fontWeight={700} color="gray.500">
              Qualquer um com o link tem acesso ao projeto. Isso pode ser mudado depois.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button rounded="md" isLoading={isLoading} colorScheme="purple" type="submit">
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
