/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
import { Box, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { app } from '../state/app'
import { availableCategories } from '../utils/categories'
import { languageName } from '../utils/languages'
import { Translation } from '../utils/models'
import TableRow from './table-row'

const translations = require('../translations/translations.json') as [Translation]

const LanguageTranslation = () => {
  const appState = app.use()
  return availableCategories.map(cat => (
    <Box key={cat.key}>
      <Heading size="md" textAlign="center">
        {cat.name[appState.baseLang]}
      </Heading>
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
            {translations[cat.key].map((trans, key) => (
              <Tr key={key}>
                <TableRow lang={appState.baseLang} text={trans[appState.baseLang]} />
                <TableRow lang={appState.practiceLang} text={trans[appState.practiceLang]} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  ))
}

export default LanguageTranslation
