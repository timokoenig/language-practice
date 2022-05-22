import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { app, setBaseLang, setPracticeLang } from '../state/app'
import { availableLanguages } from '../utils/languages'
import Flag from './flag'

const LanguageSelection = () => {
  const appState = app.use()
  return (
    <>
      <Box mb="5">
        <Center>
          <Heading size="md" fontWeight="regular" mb="2">
            Select your language
          </Heading>
        </Center>
        <Center>
          {availableLanguages.map(lang => (
            <Flag
              key={lang.key}
              lang={lang.key}
              flag={lang.icon}
              active={lang.key == appState.baseLang}
              onClick={setBaseLang}
            />
          ))}
        </Center>
      </Box>
      <Box mb="5">
        <Center>
          <Heading size="md" fontWeight="regular" mb="2">
            Select the language you want to practice
          </Heading>
        </Center>
        <Center>
          {availableLanguages.map(lang => (
            <Flag
              key={lang.key}
              lang={lang.key}
              flag={lang.icon}
              active={lang.key == appState.practiceLang}
              onClick={setPracticeLang}
            />
          ))}
        </Center>
      </Box>
    </>
  )
}

export default LanguageSelection
