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
  Stack,
  Button,
} from '@chakra-ui/react'
import { moreButton } from './About'

export default function Details() {
  const bg = useColorModeValue('blue.50', '')
  const color = useColorModeValue('gray.800', '')

  return (
    <Card
      px={{ base: '4', md: '8' }}
      py={5}
      bg={bg}
      mt={{ base: '12', md: '8' }}
    >
      <CardHeader>
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Image
            src="/kathleen-profile.jpg"
            alt="Profile image"
            borderRadius="full"
            width="150"
            height="150"
            me={{ base: 0, md: 9 }}
            mb={{ base: 5, md: 0 }}
          />
          <Heading color={color}>Kathleen Koh</Heading>
        </Flex>
      </CardHeader>
      <CardBody bg={bg}>
        <Text color={color} textAlign={'justify'}>
          Hi there! I&apos;m currently a Product Owner for{' '}
          <Link
            href="https://educare.bostonscientific.com/apac/s/?language=en_US&sc=apac"
            target="_blank"
            fontWeight="bold"
          >
            EDUCARE
          </Link>{' '}
          with a background in product management and some software development.
          I&apos;m passionate about building scalable and efficient systems to
          create an impact for public good. <br /> <br />
          In my free time, I enjoy watching musicals and plays, as well as
          playing boardgames (some personal favourites include Dominion and
          Cascadia)!
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
          mt="12"
        >
          <Button
            // colorScheme={color}
            bg={`teal.400`}
            rounded={'full'}
            px={6}
            _hover={{
              bg: `teal`,
            }}
            onClick={() => moreButton('/experience')}
          >
            Find out more about my experience!
          </Button>
        </Stack>
      </CardBody>
    </Card>
  )
}
