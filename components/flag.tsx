import { Text } from '@chakra-ui/react'
import React from 'react'

const Flag = (props: {
  lang: string
  flag: string
  active: boolean
  onClick: (val: string) => void
}) => (
  <Text
    fontSize="30"
    py="2"
    px="5"
    mx="2"
    backgroundColor={props.active ? 'blue.100' : 'gray.100'}
    borderRadius="10"
    cursor="pointer"
    _hover={{
      backgroundColor: 'blue.200',
    }}
    _active={{
      backgroundColor: 'blue.300',
    }}
    onClick={() => props.onClick(props.lang)}
  >
    {props.flag}
  </Text>
)

export default Flag
