import React, { FormEvent, useState } from 'react'
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
} from '@chakra-ui/react'
import { CronnyTextarea } from './custom'

export const Feedback = () => {
  const messageRef = React.createRef()
  const [grade, setGrade] = useState(5)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Stack
      as="form"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
      spacing={5}
    >
      <FormControl>
        <FormLabel htmlFor="gradeFeedback">
          Como está sendo sua experiência?
        </FormLabel>
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
              Média
            </Radio>
            <Radio value="4" name="grade" {...register('grade')}>
              Boa
            </Radio>
            <Radio value="5" name="grade" {...register('grade')}>
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
          rounded="full"
          colorScheme="purple"
          isLoading={isSubmitting}
          type="submit"
        >
          Enviar
        </Button>
      </Box>
    </Stack>
  )
}
