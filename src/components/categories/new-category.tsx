import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { Category as ICategory } from '../../interfaces/category'
import { CronnyInput } from '../custom'
import { ColorPicker } from '../color-picker'
import { createCategory } from '../../database/client'
import { mutate } from 'swr'
import { useAuth } from '../../contexts/auth'

export const NewCategory = (props: FlexProps) => {
  const { user } = useAuth()
  const labelRef = useRef(null)
  const [color, setColor] = useState('blue.300')
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (category) => {
    setIsLoading(true)
    const newCategory: ICategory = {
      userId: user.uid,
      color,
      ...category,
    }
    await createCategory(newCategory)

    await mutate(
      user ? ['/api/categories', user.token] : null,
      async (data) => {
        return { categories: [newCategory, ...data.categories] }
      },
      false,
    )

    reset()
    setIsLoading(false)
  }

  return (
    <Flex
      as="form"
      alignItems="center"
      gridColumnGap={2}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <ColorPicker defaultColor={color} setNewColor={({ color }) => setColor(color)} />
      <CronnyInput
        ref={labelRef}
        name="label"
        fontWeight="600"
        {...register('label')}
        placeholder="Categoria..."
        size="sm"
      />
      <Button size="sm" isLoading={isLoading} variant="ghost" type="submit" colorScheme="purple">
        Criar
      </Button>
    </Flex>
  )
}
