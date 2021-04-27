import { Text, Box, Flex, BoxProps, Heading, IconButton } from '@chakra-ui/react'
import { isToday, isSameMonth, isPast } from 'date-fns'
import { formatDate } from '../../../util/helpers'
import { BiNote } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import React from 'react'

interface DayProps extends BoxProps {
  day: Date
  month: Date
  date: string
  project: string
}

export const Day = ({ day, month, date, project, ...props }: DayProps) => {
  return (
    <Box
      id={`day-${formatDate(day, 'T')}`}
      padding={2}
      width="100%"
      height="200px"
      borderRadius="2xl"
      shadow={isToday(day) ? 'md' : 'sm'}
      _hover={{ shadow: 'md' }}
      backgroundColor={isToday(day) ? 'purple.50' : 'white'}
      {...props}
    >
      <Flex alignItems="center" justifyContent="space-between" marginBottom={2}>
        <Text
          color={isSameMonth(day, month) ? 'black' : 'gray.400'}
          fontWeight={isToday(day) ? '700' : '500'}
        >
          {date}
        </Text>
        {(!isPast(day) || isToday(day)) && (
          <Flex>
            <IconButton
              aria-label="Criar anotação"
              icon={<BiNote />}
              variant="ghost"
              colorScheme="purple"
              marginRight={2}
            />
            <IconButton
              aria-label="Postar"
              icon={<FiSend />}
              variant="ghost"
              colorScheme="purple"
            />
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
