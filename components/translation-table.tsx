/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { app } from '../state/app'
import { languageName } from '../utils/languages'
import { Translation } from '../utils/models'
import TableRow from './table-row'

const translations = require('../translations/translations.json') as [Translation]

const LanguageTranslation = () => {
  const appState = app.use()
  return (
    <TableContainer mb="10">
      <Table variant="simple" alignContent="center">
        <Thead>
          <Tr>
            <Th textAlign="center" width="50%">
              {languageName(appState.baseLang)}
            </Th>
            <Th textAlign="center" width="50%">
              {languageName(appState.practiceLang)}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {translations.map((trans, key) => (
            <Tr key={key}>
              <TableRow lang={appState.baseLang} text={trans[appState.baseLang]} />
              <TableRow lang={appState.practiceLang} text={trans[appState.practiceLang]} />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default LanguageTranslation
