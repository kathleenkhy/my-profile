import Head from 'next/head'
import NextLink from 'next/link'
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  Spacer,
  Flex,
} from '@chakra-ui/react'
import { Link, Button } from '@opengovsg/design-system-react'
import Navbar from '~/components/navbar'
import { IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <>
      <Flex direction="column">
        <Navbar path="/" />
        <VStack align="stretch">
          <Box>
            <Heading size="2xl">Hello there!</Heading>
            <Text p="6px">
              I am a software engineer at{' '}
              <Link
                href="https://open.gov.sg"
                target="_blank"
                fontWeight="bold"
              >
                Open Government Products
              </Link>
              . I build tech for public good!
            </Text>
          </Box>
          <HStack>
            <Link
              target="_blank"
              href="https://github.com/kathleenkhy"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              GitHub
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/kathleenkohhuiying/"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </>
  )
}

function About() {
  return (
    <VStack align="stretch">
      <Heading>About me</Heading>
      <Text>
        Hi there! I&apos;m a full stack software engineer with background in
        product management. I have a strong background in both front-end and
        back-end development, and I&apos;m passionate about building scalable
        and efficient systems.
      </Text>
    </VStack>
  )
}

function Skills() {
  return (
    <VStack align="stretch">
      <Heading>Skills</Heading>
      <Text>
        I work across the stack and herer are the things I&apos;m comfortable
        at:
      </Text>
      <UnorderedList>
        <ListItem>Typescript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Ruby</ListItem>
        <ListItem>Node.js</ListItem>
      </UnorderedList>
    </VStack>
  )
}

function Projects() {
  return (
    <VStack align="stretch">
      <Heading>Projects</Heading>
      <Text>Here are some projects that I have worked on:</Text>
      <UnorderedList>
        <ListItem>
          <Text as="b">Project X</Text> - I was the frontend engineer that was
          working on the backend of Project X
        </ListItem>
        <ListItem>
          <Text as="b">Project Y</Text> - I was the backend engineer that was
          working on the backend of Project Y
        </ListItem>
        <ListItem>
          <Text as="b">Project Z</Text> - I was the infrastructure engineer that
          was working on the backend of Project Z
        </ListItem>
      </UnorderedList>
    </VStack>
  )
}

function Contact() {
  return (
    <VStack align="stretch">
      <Heading>Find me here:</Heading>
      <UnorderedList flex={2}>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/kathleenkhy"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            GitHub
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kathleenkohhuiying/"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <Text as="b">Project Z</Text> - I was the infrastructure engineer that
          was working on the backend of Project Z
        </ListItem>
      </UnorderedList>
    </VStack>
  )
}

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio Page</title>
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
