import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react'

export default function About() {
  const bg = useColorModeValue('blue.50', '')
  const color = useColorModeValue('gray.800', '')

  return (
    <Card px={10} py={5} bg={bg}>
      <CardHeader>
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Image
            src="/Kathleen.jpg"
            alt="Profile image"
            borderRadius="full"
            width="150"
            height="150"
            me={{ base: 0, md: 9 }}
          />
          <Heading color={color}>Kathleen Koh</Heading>
        </Flex>
      </CardHeader>
      <CardBody bg={bg}>
        <Text color={color}>
          Hi there! I&apos;m a full stack software engineer with background in
          product management at{' '}
          <Link href="https://open.gov.sg" target="_blank" fontWeight="bold">
            Open Government Products
          </Link>
          . I have a background in both front-end and back-end development, and
          I&apos;m passionate about building scalable and efficient systems to
          create an impact for public good.
        </Text>
      </CardBody>
    </Card>
  )
}
