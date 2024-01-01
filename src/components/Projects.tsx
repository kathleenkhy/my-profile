import {
  Heading,
  VStack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
  chakra,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Projects() {
  const Logos = chakra(Image, {
    shouldForwardProp: (prop: string) =>
      ['width', 'height', 'src', 'alt', 'bg'].includes(prop),
  })

  return (
    <VStack align="stretch">
      <Heading>Projects</Heading>
      <Text>Here are some projects that I have worked on:</Text>
      <Tabs>
        <TabList>
          <Tab>Isomer</Tab>
          <Tab>Fairfare</Tab>
          <Tab>Form.gov.sg</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Logos
              src="/isomerlogo.png"
              alt="Isomer Logo"
              width="170"
              height="59"
              my={4}
              bg={useColorModeValue('white', 'gray.300')}
              p={2}
              borderRadius={10}
            />
            <p>
              Product Manager of{' '}
              <Link
                href="https://isomer.gov.sg"
                target="_blank"
                fontWeight="bold"
              >
                Isomer
              </Link>{' '}
              which is a website builder for the Government.
              <br />
              While managing Isomer, I successfully obtained stakeholder buy-in,
              and oversaw the onboarding of over 330 school sites on to our
              platform.
            </p>
          </TabPanel>
          <TabPanel>
            <Link
              href="https://fairfare.kathleen-dev.com"
              target="_blank"
              fontWeight="bold"
            >
              Fairfare
            </Link>
            <span>
              {' '}
              is a bill splitter web app that help users snap a picture of their
              receipts, upload within the app and handle the split calculations
              for them.
            </span>
          </TabPanel>
          <TabPanel>
            I am currently a software developer working on{' '}
            <Link href="https://forms.gov.sg" target="_blank" fontWeight="bold">
              Forms.gov.sg
            </Link>
            , a form builder for the Government.
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
