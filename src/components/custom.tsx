import React from 'react'
import { Input, InputProps, Textarea, TextareaProps } from '@chakra-ui/react'

export const CronnyInput = (props: InputProps) => {
  return (
    <Input
      rounded="full"
      border="0"
      color="gray.900"
      backgroundColor="purple.100"
      _focus={{
        borderColor: 'purple.700',
      }}
      _placeholder={{
        color: 'gray.500',
      }}
      {...props}
    />
  )
}

export const CronnyTextarea = React.forwardRef(
  (props: TextareaProps, ref: any) => {
    return (
      <Textarea
        ref={ref}
        rounded="2xl"
        border="0"
        color="gray.900"
        backgroundColor="purple.100"
        _focus={{
          borderColor: 'purple.700',
        }}
        _placeholder={{
          color: 'gray.500',
        }}
        {...props}
      />
    )
  },
)
