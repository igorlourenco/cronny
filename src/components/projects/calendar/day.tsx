import { Text, Box, Flex, BoxProps, Stack, IconButton, Icon } from '@chakra-ui/react'
import { isToday, isSameMonth, isPast } from 'date-fns'
import { formatDate } from '../../../util/helpers'
import { AiOutlinePlus } from 'react-icons/ai'
import { SiTwitter, SiInstagram } from 'react-icons/si'
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
      </Flex>
      {(!isPast(day) || isToday(day)) && (
        <Stack spacing={4}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            padding={2}
            borderColor="twitter.200"
            borderWidth="1px"
            borderStyle="dashed"
            borderRadius="md"
            backgroundColor="twitter.50"
            _hover={{ boxShadow: 'md' }}
          >
            <Flex alignItems="center">
              <Icon as={SiTwitter} w={6} h={6} color="twitter.400" marginRight={3} />
              <Text fontSize={14} fontWeight="600">
                6 tweets
              </Text>
            </Flex>
            <IconButton
              aria-label="Postar"
              icon={<AiOutlinePlus />}
              variant="ghost"
              colorScheme="twitter"
            />
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            padding={2}
            borderColor="pink.200"
            borderWidth="1px"
            borderStyle="dashed"
            borderRadius="md"
            backgroundColor="pink.50"
            _hover={{ boxShadow: 'md' }}
          >
            <Flex alignItems="center">
              <Icon as={SiInstagram} w={6} h={6} color="pink.400" marginRight={3} />
              <Text fontSize={14} fontWeight="600">
                4 posts
              </Text>
            </Flex>
            <IconButton
              aria-label="Postar"
              icon={<AiOutlinePlus />}
              variant="ghost"
              colorScheme="pink"
            />
          </Flex>
        </Stack>
      )}
    </Box>
  )
}
