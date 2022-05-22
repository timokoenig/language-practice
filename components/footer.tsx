import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <hr />
      <Center mt="5">
        <Text>
          Made with
          <Text as="span" color="red" mx="1">
            ♥
          </Text>
          for the community
        </Text>
      </Center>
    </>
  )
}

export default Footer
