import { Flex, Button } from '@chakra-ui/react'

interface HeaderProps {
  onShowSidebar: () => void
  showSidebarButton?: boolean
}

export const Header = ({ showSidebarButton = true, onShowSidebar }: HeaderProps) => {
  return (
    <Flex padding={4} alignItems="center" justifyContent="space-between">
      {showSidebarButton && <Button onClick={onShowSidebar}>aqui</Button>}
    </Flex>
  )
}
