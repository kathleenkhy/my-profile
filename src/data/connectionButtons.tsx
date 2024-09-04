import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { ReactNode } from 'react'

interface connectionButton {
  name: string
  icon?: ReactNode
  colourScheme?: string
  href: string
  target?: string
}

export const connectionButtons: connectionButton[] = [
  {
    name: 'GitHub',
    icon: <IoLogoGithub />,
    colourScheme: 'gray',
    href: 'https://github.com/kathleenkhy',
    target: '_blank',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    colourScheme: 'blue',
    href: 'https://www.linkedin.com/in/kathleenkohhuiying/',
    target: '_blank',
  },
  {
    name: 'Email',
    icon: <MdOutlineEmail />,
    colourScheme: 'teal',
    href: 'mailto:kathleen.khy@gmail.com',
    target: '',
  },
]

export const navBar: connectionButton[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Experience',
    href: '/experience',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Resume',
    href: 'https://app.box.com/s/h4t5zqyw0oyx3bnbay8l4ypr38482bec',
  },
]
