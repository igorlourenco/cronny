import React from 'react'
import { Input, InputProps, Select, SelectProps, Textarea, TextareaProps } from '@chakra-ui/react'

export const CronnyInput = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <Input
      ref={ref}
      rounded="md"
      border="0"
      color="gray.900"
      fontWeight={500}
      backgroundColor="purple.100"
      _focus={{
        borderColor: 'purple.700',
        backgroundColor: 'purple.200',
      }}
      _placeholder={{
        color: 'gray.500',
        fontWeight: 600,
      }}
      {...props}
    />
  )
})

export const CronnyTextarea = React.forwardRef((props: TextareaProps, ref: any) => {
  return (
    <Textarea
      ref={ref}
      rounded="md"
      border="0"
      color="gray.900"
      fontWeight={500}
      backgroundColor="purple.100"
      _focus={{
        borderColor: 'purple.700',
        backgroundColor: 'purple.200',
      }}
      _placeholder={{
        color: 'gray.500',
        fontWeight: 600,
      }}
      {...props}
    />
  )
})
