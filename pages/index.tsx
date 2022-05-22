import { Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import LanguageSelection from '../components/language-selection'
import PageMeta from '../components/page-meta'

const TranslationTable = dynamic(() => import('../components/translation-table'), {
  ssr: false,
})

const IndexPage = () => {
  return (
    <>
      <PageMeta />
      <Container marginTop={10} maxW="container.lg">
        <Header />
        <LanguageSelection />
        <TranslationTable />
        <Footer />
      </Container>
    </>
  )
}

export default IndexPage
