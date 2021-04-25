import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Box,
  Button,
  Radio,
  RadioGroup,
  Flex,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { CronnyTextarea } from './custom'
import { useAuth } from '../contexts/auth'
import { sendFeedback } from '../database/client'
import { Feedback as IFeedback } from '../interfaces/feedback'

export const Feedback = () => {
  const toast = useToast()
  const messageRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (feedback) => {
    setIsLoading(true)
    const data: IFeedback = {
      userId: user.uid,
      createdAt: new Date().toISOString(),
      ...feedback,
    }
    await sendFeedback(data)

    toast({
      title: 'Muito obrigado!',
      description: 'Sua mensagem foi recebida, obrigado pelo feedback.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    reset()
    setIsLoading(false)
  }

  return (
    <Stack as="form" alignItems="center" onSubmit={handleSubmit(onSubmit)} spacing={5}>
      <FormControl>
        <FormLabel htmlFor="gradeFeedback">Como está sendo sua experiência?</FormLabel>
        <RadioGroup
          id="gradeFeedback"
          name="gradeFeedback"
          defaultValue="5"
          width="100%"
          colorScheme="purple"
        >
          <Flex justifyContent="space-between">
            <Radio value="1" name="grade" {...register('grade')}>
              Péssima
            </Radio>
            <Radio value="2" name="grade" {...register('grade')}>
              Ruim
            </Radio>
            <Radio value="3" name="grade" {...register('grade')}>
              Boa
            </Radio>
            <Radio value="4" name="grade" {...register('grade')}>
              Ótima
            </Radio>
          </Flex>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <CronnyTextarea
          ref={messageRef}
          name="message"
          placeholder="Você quer deixar uma mensagem?"
          {...register('message')}
        />
      </FormControl>
      <Box width="80%">
        <Button
          mt={4}
          width="full"
          rounded="md"
          colorScheme="purple"
          isLoading={isLoading}
          type="submit"
        >
          Enviar
        </Button>
      </Box>
    </Stack>
  )
}
