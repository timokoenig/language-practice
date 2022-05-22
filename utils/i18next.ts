/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import i18next from 'i18next'

i18next
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        common: require('../translations/en/common.json'),
      },
      de: {
        common: require('../translations/de/common.json'),
      },
      id: {
        common: require('../translations/id/common.json'),
      },
    },
  })
  .catch(console.log)

export default i18next
