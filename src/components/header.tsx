import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import ColorModeSwitcher from './color-mode-switcher'

export const Header = () => {
  return (
    <Flex
      paddingX={4}
      paddingY={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading>Cronny</Heading>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<Box size={24} as={AiOutlineMenu} />}
        />
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
