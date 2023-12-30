import {
  Heading,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Flex,
} from '@chakra-ui/react'
import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiRuby } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'

export default function Skills() {
  return (
    <VStack align="stretch">
      <Heading>Skills</Heading>
      <Text mb={5}>
        I work across the stack and here are the things I&apos;m currently
        working with:
      </Text>
      <Flex>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 9,
          }}
        >
          <SiJavascript
            style={{
              fontSize: '53px',
              fill: '#f0db4f',
              backgroundColor: '#323330',
              border: '1px solid black',
            }}
          />
          <p>JavaScript</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 9,
            marginLeft: 9,
          }}
        >
          <SiTypescript
            style={{
              fontSize: '53px',
              backgroundColor: 'white',
              fill: '#007acc',
              borderRadius: '5px',
            }}
          />
          TypeScript
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 9,
            marginLeft: 9,
          }}
        >
          <SiReact style={{ fontSize: '55px', fill: '#61DBFB' }} />
          React
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 9,
            justifyContent: 'space-between',
          }}
        >
          <SiRuby style={{ fontSize: '48px', fill: '#820C02' }} />
          <p>Ruby</p>
        </div>
      </Flex>
    </VStack>
  )
}
