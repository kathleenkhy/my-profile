import { Container, Flex } from '@chakra-ui/react'
import Navbar from '~/components/navbar'

export default function Hero() {
  return (
    <Container>
      <Flex direction="column">
        <Navbar path="/" />
      </Flex>
    </Container>
  )
}
