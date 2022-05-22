import { Translation } from './models'

export const availableCategories: { key: string; name: Translation }[] = [
  {
    key: 'general',
    name: {
      de: 'Allgemein',
      en: 'General',
      id: 'General',
    },
  },
  {
    key: 'transportation',
    name: {
      de: 'Transportmittel',
      en: 'Transportation',
      id: 'Transportation',
    },
  },
]
