import { Text, Link, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface Project {
  description: ReactNode
  image: string
  alt: string
  work_type: string
}

export const projects: Project[] = [
  {
    description: (
      <Text as="p">
        Product Manager of{' '}
        <Link
          href="https://isomer.gov.sg"
          target="_blank"
          fontWeight="bold"
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue('teal.500', 'teal.200')}
        >
          Isomer
        </Link>
        , which is a website builder for the Government. While managing Isomer,
        I successfully obtained stakeholder buy-in, and oversaw the onboarding
        of over 330 school sites onto our platform.
      </Text>
    ),
    image: '/bsc.svg',
    alt: 'Singapore',
    work_type: 'Hybrid',
  },
]
