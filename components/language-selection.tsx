import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { app, setBaseLang, setPracticeLang } from '../state/app'
import { availableLanguages } from '../utils/languages'
import Flag from './flag'

const LanguageSelection = () => {
  const appState = app.use()
  const { t } = useTranslation('common')
  return (
    <>
      <Box mb="5">
        <Center>
          <Heading size="md" fontWeight="regular" mb="2">
            {t('select.baselang', { lng: appState.baseLang })}
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
      <Box mb="10">
        <Center>
          <Heading size="md" fontWeight="regular" mb="2">
            {t('select.practicelang', { lng: appState.baseLang })}
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
