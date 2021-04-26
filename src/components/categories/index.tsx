import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { MdLabelOutline } from 'react-icons/md'
import { Category } from './category'
import { Category as ICategory } from '../../interfaces/category'
import { NewCategory } from './new-category'

interface CategoriesProps {
  categories: ICategory[]
}
export const Categories = ({ categories }: CategoriesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        icon={<MdLabelOutline size={24} />}
        aria-label="Categorias"
        variant="ghost"
        onClick={onOpen}
        backgroundColor="purple.100"
        _focus={{
          borderColor: 'purple.700',
          backgroundColor: 'purple.200',
        }}
        _hover={{
          backgroundColor: 'purple.200',
        }}
        color="gray.500"
      />
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Categorias</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {categories?.length >= 0 &&
              categories.map((category) => <Category key={category.label} {...category} />)}
            <NewCategory marginTop={categories.length > 0 ? 8 : 0} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
