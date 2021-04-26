import { IconButton } from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useAuth } from '../../contexts/auth'
import { deleteCategory } from '../../database/client'
import { mutate } from 'swr'

interface DeleteCategoryProps {
  id: string
  label: string
}
export const DeleteCategory = ({ id, label }: DeleteCategoryProps) => {
  const { user } = useAuth()
  const removeCategory = async () => {
    await deleteCategory(id)

    await mutate(
      user ? ['/api/categories', user.token] : null,
      async (data) => {
        return { categories: data.categories.filter((category) => category.id !== id) }
      },
      false,
    )
  }

  return (
    <IconButton
      aria-label={`Deletar categoria ${label}`}
      icon={<AiOutlineDelete />}
      size="sm"
      colorScheme="purple"
      variant="ghost"
      onClick={removeCategory}
    />
  )
}
