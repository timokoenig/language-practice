import { Box, Container, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { app } from '../state/app'

const Header = () => {
  const { t } = useTranslation('common')
  const appState = app.use()
  return (
    <Box mb="10">
      <Box display="flex" flexWrap="wrap">
        <Heading as="h1" size="2xl" flex="1" mr="3" mb="5" textAlign="center">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            Language Practice
          </Link>
        </Heading>
      </Box>
      <Container>
        <Text textAlign="center" fontSize="lg">
          {t('description', { lng: appState.baseLang })}
        </Text>
      </Container>
    </Box>
  )
}

export default Header
