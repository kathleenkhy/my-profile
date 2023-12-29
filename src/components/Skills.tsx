import {
  Heading,
  VStack,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

export default function Skills() {
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
