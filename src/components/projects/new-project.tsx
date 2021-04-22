import React, { useState, useRef } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { Project } from '../../interfaces/project'
import { createProject } from '../../database/client'
import { CronnyInput } from '../custom'
import { useAuth } from '../../contexts/auth'
import { mutate } from 'swr'

export const NewProject = () => {
  const nameRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  const { user } = useAuth()
  const toast = useToast()

  const onSubmit = async (project) => {
    setIsLoading(true)
    const newProject: Project = {
      userId: user.uid,
      isActive: true,
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
      <Button leftIcon={<AiOutlinePlus />} rounded="full" colorScheme="purple" onClick={onOpen}>
        Novo projeto
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
          </ModalBody>
          <ModalFooter>
            <Button rounded="full" isLoading={isLoading} colorScheme="purple" type="submit">
              Criar projeto
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
