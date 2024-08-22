import Head from 'next/head'
import { Container, VStack } from '@chakra-ui/react'
import { Link, Button } from '@opengovsg/design-system-react'
import Hero from '../components/Hero'
import Details from '~/components/Details'

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta
          name="description"
          content="This is Kathleen's portfolio page"
          key="desc"
        />
        <meta property="og:title" content="Portfolio Page" />
        <meta
          property="og:description"
          content="This is Kathleen's portfolio page"
        />
      </Head>
      <Container p={{ base: 4, md: 12 }} maxW="container.md">
        <VStack align="stretch" spacing={8}>
          <Hero />
          <Details />
        </VStack>
      </Container>
    </>
  )
}
