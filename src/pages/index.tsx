import Head from 'next/head'
import { Container, VStack } from '@chakra-ui/react'
import { Link, Button } from '@opengovsg/design-system-react'
import Hero from '../components/Hero'
import About from '~/components/About'
import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'
import NextLink from 'next/link'
import Navbar from '~/components/navbar'

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Kathleen&apos;s Portfolio</title>
        <meta
          name="description"
          content="This is a sample portfolio page"
          key="desc"
        />
        <meta property="og:title" content="Portfolio Page" />
        <meta
          property="og:description"
          content="This is a sample portfolio page"
        />
      </Head>
      <Container p={{ base: 4, md: 12 }} maxW="container.md">
        <VStack align="stretch" spacing={8}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </VStack>
      </Container>
    </>
  )
}
