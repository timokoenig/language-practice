import { entity, persistence } from 'simpler-state'

export type AppState = {
  baseLang: string
  practiceLang: string
}

export const app = entity<AppState>(
  {
    baseLang: 'en',
    practiceLang: 'de',
  },
  [persistence('app')]
)

export const setBaseLang = (baseLang: string) => {
  app.set({ ...app.get(), baseLang })
}

export const setPracticeLang = (practiceLang: string) => {
  app.set({ ...app.get(), practiceLang })
}
