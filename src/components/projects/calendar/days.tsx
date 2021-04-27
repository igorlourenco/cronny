import { isToday, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns'
import { Flex, Spinner, Stack } from '@chakra-ui/react'
import { Day } from './day'
import { formatDate } from '../../../util/helpers'
import useSWR from 'swr'

interface DaysProps {
  currentDate: Date
  projectId: string
}

export const Days = ({ currentDate, projectId }: DaysProps) => {
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const dateFormat = 'd'
  const rows = []
  let days = []
  let day = startDate
  let formattedDate = ''
  let key = 0

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = formatDate(day, dateFormat)
      days.push(
        <Day
          className={isToday(day) ? 'today' : 'another-day'}
          key={i}
          project={projectId}
          day={day}
          month={monthStart}
          date={formattedDate}
        />,
      )
      day = addDays(day, 1)
    }
    rows.push(
      <Flex
        width="100%"
        gridColumnGap={2}
        alignItems="center"
        key={`week-${key}`}
        justifyContent="space-between"
      >
        {days}
      </Flex>,
    )

    key += 1
    days = []
  }
  return <Stack padding={3}>{rows}</Stack>
}
