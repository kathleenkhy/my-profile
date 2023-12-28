import Head from 'next/head'
import {
  Box,
  Card,
  chakra,
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
  Menu,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  useColorModeValue,
  extendTheme,
} from '@chakra-ui/react'
import { Link, Button } from '@opengovsg/design-system-react'
import Navbar from '~/components/navbar'
import { IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import Image from 'next/image'
import isomerlogo from './isomerlogo.png'

const Logos = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

function Hero() {
  return (
    <>
      <Flex direction="column">
        <Navbar path="/" />
        <VStack align="stretch">
          {/* <Box
            textAlign="center"
            borderRadius="lg"
            bg={useColorModeValue('blue.50', '')}
            mt={10}
          >
            <Text p="6px">
              Hello! I am a software engineer at{' '}
              <Link
                href="https://open.gov.sg"
                target="_blank"
                fontWeight="bold"
              >
                Open Government Products
              </Link>
              .<br />I build tech for public good!
            </Text>
          </Box> */}
        </VStack>
      </Flex>
    </>
  )
}

function About() {
  const bg = useColorModeValue('blue.50', '')
  const color = useColorModeValue('gray.800', '')

  return (
    <Card>
      <CardHeader bg={bg}>
        <Heading color={color}>Kathleen Koh</Heading>
      </CardHeader>
      <CardBody bg={bg}>
        <Text color={color}>
          Hi there! I&apos;m a full stack software engineer with background in
          product management at{' '}
          <Link href="https://open.gov.sg" target="_blank" fontWeight="bold">
            Open Government Products
          </Link>
          . I have a strong background in both front-end and back-end
          development, and I&apos;m passionate about building scalable and
          efficient systems.
        </Text>
      </CardBody>
    </Card>
  )
}

function Skills() {
  return (
    <VStack align="stretch">
      <Heading>Skills</Heading>
      <Text>
        I work across the stack and here are the things I&apos;m comfortable at:
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
      <Tabs>
        <TabList>
          <Tab>Isomer</Tab>
          <Tab>Fairfare</Tab>
          <Tab>Form.gov.sg</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {/* <Logos
              src="/images/isomerlogo.png"
              alt="Isomer Logo"
              width="100"
              height="100"
            /> */}
            <p>
              Product Manager of{' '}
              <Link
                href="https://isomer.gov.sg"
                target="_blank"
                fontWeight="bold"
              >
                Isomer
              </Link>{' '}
              where I secured the stakeholder buy-in, and managed the onboarding
              of over 330 school sites on to our platform.
            </p>
          </TabPanel>
          <TabPanel>
            <Link
              href="https://fairfare.kathleen-dev.com"
              target="_blank"
              fontWeight="bold"
            >
              Fairfare
            </Link>
            <span>
              {' '}
              is a bill splitter web app that help users snap a picture of their
              receipts, upload within the app and handle the split calculations
              for them.
            </span>
          </TabPanel>
          <TabPanel>
            I am currently a software developer working on{' '}
            <Link href="https://forms.gov.sg" target="_blank" fontWeight="bold">
              Forms.gov.sg
            </Link>
            .
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}

function Contact() {
  return (
    <VStack align="stretch">
      <Heading>Find me here:</Heading>
      <HStack>
        <Button colorScheme="gray" size="lg">
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
        </Button>
        <Button colorScheme="blue" size="lg">
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
        </Button>
        <Button colorScheme="teal" size="lg">
          <Link
            href="mailto:kathleen.khy@gmail.com"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <MdOutlineEmail />
            Email
          </Link>
        </Button>
      </HStack>
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
