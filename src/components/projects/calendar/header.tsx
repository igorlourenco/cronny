import { Flex, Heading, IconButton, Image } from '@chakra-ui/react'
import { addMonths, subMonths } from 'date-fns'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { capitalize, formatDate } from '../../../util/helpers'

interface CalendarHeaderProps {
  currentDate: Date
  setCurrentDate: (setCurrentDateFunction: any) => void
}
export const CalendarHeader = ({ currentDate, setCurrentDate }: CalendarHeaderProps) => {
  const dateFormat = 'MMMM yyyy'

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  return (
    <Flex paddingX={4} marginBottom={2} alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Image src="/images/brand.svg" width={[10, 10, 12, 12]} height="auto" />
      </Flex>
      <Flex>
        <IconButton
          aria-label="Voltar ao mês anterior"
          icon={<AiOutlineArrowLeft />}
          variant="ghost"
          colorScheme="purple"
          onClick={previousMonth}
          marginRight={5}
        />
        <Heading color="purple.800">{capitalize(formatDate(currentDate, dateFormat))}</Heading>

        <IconButton
          aria-label="Ir para o próximo mês"
          icon={<AiOutlineArrowRight />}
          variant="ghost"
          colorScheme="purple"
          onClick={nextMonth}
          marginLeft={5}
        />
      </Flex>
    </Flex>
  )
}
