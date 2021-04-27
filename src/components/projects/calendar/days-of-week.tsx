import { startOfWeek, addDays } from 'date-fns'
import { Flex, Text } from '@chakra-ui/react'
import { capitalize, formatDate } from '../../../util/helpers'

interface DaysOfWeekProps {
  currentDate: Date
}

export const DaysOfWeek = ({ currentDate }: DaysOfWeekProps) => {
  const dateFormat = 'eeee'
  const days = []
  const startDate = startOfWeek(currentDate)

  for (let i = 0; i < 7; i++) {
    days.push(
      <Text width="100%" key={i} textAlign="center" fontWeight="700" color="purple.500">
        {capitalize(formatDate(addDays(startDate, i), dateFormat))}
      </Text>,
    )
  }
  return (
    <Flex alignItems="center" justifyContent="space-between">
      {days}
    </Flex>
  )
}
