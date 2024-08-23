import {
  Box,
  Button,
  Card,
  CardBody,
  useColorModeValue,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { funFacts } from '~/data/randomFacts'

export default function FunFact() {
  const [currentFact, setCurrentFact] = useState(funFacts[0])

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length)
    setCurrentFact(funFacts[randomIndex])
  }

  const bg = useColorModeValue('blue.50', '')
  const color = useColorModeValue('gray.800', '')

  return (
    <Card>
      <CardBody bg={bg}>
        <Box style={{ textAlign: 'center', margin: '20px' }}>
          <Heading fontSize="2xl">Or generate a fact, just for fun!</Heading>
          <Text fontSize="2xl" mt="24px">
            {currentFact}
          </Text>
          <Button
            bg={`teal.400`}
            rounded={'full'}
            px={6}
            _hover={{
              bg: `teal`,
            }}
            onClick={generateRandomFact}
            style={{ padding: '10px', fontSize: '16px', marginTop: '24px' }}
          >
            Generate A Random Fun Fact
          </Button>
        </Box>
      </CardBody>
    </Card>
  )
}
