export const availableLanguages: { key: string; name: string; icon: string }[] = [
  { key: 'de', name: 'Deutsch', icon: '🇩🇪' },
  { key: 'en', name: 'English', icon: '🇺🇸' },
  { key: 'id', name: 'Indonesian', icon: '🇮🇩' },
]

export const languageName = (key: string): string =>
  availableLanguages.find(lang => lang.key == key)?.name ?? ''
