import { Flex, VStack } from '@chakra-ui/react'
import Navbar from '~/components/navbar'

export default function Hero() {
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
