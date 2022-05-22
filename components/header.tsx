import { Box, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box mb="5">
      <Box display="flex" flexWrap="wrap">
        <Heading as="h1" size="2xl" flex="1" mr="3" textAlign="center">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            Language Practice
          </Link>
        </Heading>
      </Box>
    </Box>
  )
}

export default Header
