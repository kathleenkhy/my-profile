import Head from 'next/head'
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Icon,
  Tag,
  useColorModeValue,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from '@opengovsg/design-system-react'
import experienceDetails from '../data/experience.json'
import React from 'react'
import Header from '~/components/About'
import Navbar from '~/components/navbar'
import { MdVerified } from 'react-icons/md'

interface CustomTextProps {
  firstTitle: string
  secondTitle: string
  textIcon: string
}

export default function Experience() {
  return (
    <React.Fragment>
      <Box>
        <header>
          <Navbar path={''} />
        </header>
        <main>
          <Container>
            <Heading
              mt="8"
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              {'Experience'}
            </Heading>
            <Box
              mt="8"
              mb="20"
              display={{
                base: 'none',
                lg: 'none',
                md: 'none',
                sm: 'inherit',
                xs: 'inherit',
              }}
            >
              {experienceDetails.map((item, index) => {
                return (
                  <Flex key={index} gap="10">
                    <Box position="relative">
                      <Divider
                        variant="dashed"
                        orientation="vertical"
                        style={{
                          borderWidth: '1px',
                          borderColor: 'teal',
                        }}
                      />
                      <Text
                        w="20px"
                        h="20px"
                        boxShadow="base"
                        borderRadius="full"
                        backgroundColor="black"
                        position="absolute"
                        top={index === 0 ? '13%' : '7.5%'}
                        right="-8.5px"
                        bgGradient="linear(to-tr, teal.500, green.400)"
                      ></Text>
                    </Box>
                    <Flex
                      display={{
                        base: 'none',
                        lg: 'none',
                        md: 'none',
                        sm: 'flex',
                        xs: 'flex',
                      }}
                      flexDirection="column"
                      mt={10}
                    >
                      {/* <Box alignSelf="left">
                        <Text textAlign={'left'}>

                        </Text>
                      </Box> */}
                      <Box
                        borderRadius="base"
                        p="4"
                        position="relative"
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        bgColor={useColorModeValue('white', 'gray.700')}
                        boxShadow="outline"
                        transition={'ease-in-out'}
                        transitionDuration="0.5s"
                        _hover={{ boxShadow: '2xl' }}
                        my="4"
                      >
                        <HStack>
                          <Heading fontSize="lg">{item.role}</Heading>
                          <Icon
                            as={MdVerified}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue('teal', 'white')}
                          />
                        </HStack>
                        <Link isExternal={true} href={item.company_url} mt="2">
                          <Text
                            fontSize="md"
                            textAlign="left"
                            fontWeight="bold"
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue('teal', 'teal.200')}
                          >
                            {item.company}
                          </Text>
                        </Link>
                        <Text>
                          {item.location + ' (' + item.work_type + ')'}
                        </Text>
                        <VStack wrap={'wrap'} mt="2" alignItems="flex-start">
                          {item.role_description.map((item, i) => {
                            return (
                              <HStack key={i} alignItems={'baseline'}>
                                <Text>{'●'}</Text>
                                <Text>{item}</Text>
                              </HStack>
                            )
                          })}
                        </VStack>
                        <Flex
                          wrap="wrap"
                          direction="row"
                          gap={2}
                          mt="4"
                          justify="left"
                        >
                          {item.tech_stack.map((tag, i) => {
                            return (
                              <Tag key={i} size="lg">
                                {tag}
                              </Tag>
                            )
                          })}
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                )
              })}
            </Box>
          </Container>
        </main>
      </Box>
    </React.Fragment>
  )
}
