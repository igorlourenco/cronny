import { useState } from 'react'
import { Flex, Popover, PopoverTrigger, PopoverContent, PopoverBody, Box } from '@chakra-ui/react'

interface ColorPickerProps {
  setNewColor: ({ color: string }) => void
  defaultColor: string
}

export const ColorPicker = ({ setNewColor, defaultColor }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor)
  const colors = [
    'black',
    'gray.100',
    'gray.300',
    'red.300',
    'orange.300',
    'yellow.300',
    'green.300',
    'teal.300',
    'blue.300',
    'cyan.300',
    'purple.300',
    'pink.300',
  ]

  const pickColor = async (selectedColor: string) => {
    const payload = { color: selectedColor }
    await setNewColor(payload)

    setColor(selectedColor)
  }

  return (
    <Popover size="sm">
      <PopoverTrigger>
        <Box rounded="md" width={12} height={8} backgroundColor={color} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Flex alignItems="center" justifyContent="space-between">
            {colors.map((color) => (
              <Box
                key={color}
                width={5}
                height={5}
                rounded="md"
                backgroundColor={color}
                onClick={() => pickColor(color)}
              />
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
