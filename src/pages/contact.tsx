import { Container, VStack } from '@chakra-ui/react'
import Hero from '~/components/Hero'

export default function Contact() {
  return (
    <Container p={{ base: 4, md: 12 }} maxW="container.md">
      <VStack align="stretch" spacing={8}>
        <Hero />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf7uEyHYK1_0NOoY2n5F_M5GrtKHX1dka1Pe0nEJNwvQ7MtxA/viewform?embedded=true"
          width="auto"
          height="800vh"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </VStack>
    </Container>
  )
}
