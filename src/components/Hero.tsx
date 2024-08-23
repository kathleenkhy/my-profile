import { Flex, VStack } from '@chakra-ui/react'
import Navbar from '~/components/navbar'

export default function Hero() {
  return (
    <>
      <Flex direction="column">
        <Navbar path="/" />
      </Flex>
    </>
  )
}
