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
      <Text>
        I work across the stack and here are the things I&apos;m currently
        working with:
      </Text>
      <Flex>
        <div style={{ position: 'relative', marginRight: 15, marginLeft: 9 }}>
          <SiJavascript
            style={{
              fontSize: '53px',
              fill: '#f0db4f',
              backgroundColor: '#323330',
              border: '1px solid black',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              padding: '5px',
              border: '1px solid black',
              borderRadius: '5px',
              display: 'none',
            }}
          >
            javascript
          </span>
        </div>
        <div style={{ position: 'relative', marginRight: 9, marginLeft: 9 }}>
          <SiTypescript
            style={{
              fontSize: '53px',
              backgroundColor: 'white',
              fill: '#007acc',
              borderRadius: '5px',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'blue',
              backgroundColor: 'white',
              padding: '5px',
              border: '1px solid black',
              display: 'none',
            }}
          >
            typescript
          </span>
        </div>
        <div style={{ position: 'relative', marginRight: 9, marginLeft: 9 }}>
          <SiReact style={{ fontSize: '55px', fill: '#61DBFB' }} />
          <span
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              padding: '5px',
              border: '1px solid black',
              borderRadius: '5px',
              display: 'none',
            }}
          >
            react
          </span>
        </div>
        <div style={{ position: 'relative', marginLeft: 9 }}>
          <SiRuby style={{ fontSize: '48px', fill: '#820C02' }} />
          <span
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'blue',
              backgroundColor: 'white',
              padding: '5px',
              border: '1px solid black',
              borderRadius: '5px',
              display: 'none',
            }}
          >
            ruby
          </span>
        </div>
      </Flex>
    </VStack>
  )
}
