import { useEffect, useRef, useState } from 'react'
import {
  Stack,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { CronnyInput, CronnyTextarea } from '../custom'
import { Categories } from '../categories'
import { useAuth } from '../../contexts/auth'
import useSWR from 'swr'
import fetcher from '../../util/fetcher'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'

export const CreateTask = () => {
  const { user } = useAuth()
  const { data, error } = useSWR(user ? ['/api/categories', user.token] : null, fetcher)
  const titleRef = useRef(null)
  const notesRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    if (data) setCategories(data.categories)
  }, [data])

  const saveTask = async () => {
    console.log('a')
    onClose()
  }

  return (
    <>
      <IconButton
        aria-label="Nova atividade"
        icon={<AiOutlinePlus />}
        colorScheme="purple"
        onClick={onOpen}
        variant="ghost"
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Nova tarefa</DrawerHeader>
            <DrawerBody>
              <Stack spacing={6}>
                <CronnyInput ref={titleRef} placeholder="Título" type="text" />
                <Flex gridColumnGap={6}>
                  <Flex alignItems="start" overflow="visible">
                    <Categories categories={categories} />
                    <CUIAutoComplete
                      tagStyleProps={{
                        backgroundColor: selectedCategory?.color,
                      }}
                      disableCreateItem
                      hideToggleButton
                      icon={null}
                      label=""
                      placeholder="Selecione a categoria"
                      items={categories}
                      onCreateItem={(item) => {
                        console.log(item)
                        setSelectedCategory(item)
                      }}
                    />
                  </Flex>
                </Flex>
                <CronnyTextarea ref={notesRef} placeholder="Anotações" />
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="ghost" colorScheme="red" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button boxShadow="md" colorScheme="purple" onClick={saveTask}>
                Salvar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
