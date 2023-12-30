import { Button, HStack, Heading, VStack, Link } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <VStack align="stretch" mb={20}>
      <Heading mb={3}>Find me here:</Heading>
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
