import { Button, HStack, Heading, VStack, Link, Box } from '@chakra-ui/react'
import { MdOutlineInsertComment } from 'react-icons/md'
import { connectionButtons } from '~/data/connectionButtons'

export default function Contact() {
  return (
    <VStack align="stretch" mb={20}>
      <Heading mb={3}>Find me here:</Heading>
      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
        <HStack>
          {connectionButtons.map((connection, index) => {
            return (
              <Button
                key={index}
                colorScheme={connection.colourScheme}
                size="lg"
              >
                <Link
                  target={connection.target}
                  href={connection.href}
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  pl={2}
                >
                  {connection.icon}
                  {connection.name}
                </Link>
              </Button>
            )
          })}
        </HStack>
        <HStack
          justifyContent={{ base: 'center' }} // Center horizontally
          ml={{ base: 'none', md: '8px' }}
          mt={{ base: '24px', md: '0px' }}
        >
          <Button colorScheme="cyan" size="lg">
            <Link
              href="/contact"
              display="inline-flex"
              alignItems="center"
              justifyContent={'center'}
              style={{ gap: 4 }}
              pl={2}
            >
              <MdOutlineInsertComment />
              Got Feedback?
            </Link>
          </Button>
        </HStack>
      </Box>
    </VStack>
  )
}
