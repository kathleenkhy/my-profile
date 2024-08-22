import React from 'react'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { MdHouse } from 'react-icons/md'
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

type NavbarProps = {
  path: string
  // Add any other props and their types here
}

type MenuLinkProps = {
  href: string // Example: A required prop of type string for the href
}

const MenuLink: React.FC<MenuLinkProps> = forwardRef<
  HTMLAnchorElement,
  MenuLinkProps
>((props, ref) => <Link ref={ref} as={NextLink} {...props} />)

MenuLink.displayName = 'MenuLink'

const Navbar: React.FC<NavbarProps> = (props) => {
  const { path } = props

  return (
    <Box
      position="sticky"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <NextLink
            href="/"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <Box as={MdHouse} size="40px" />
          </NextLink>
        </Stack>
        <Stack
          // direction={{ base: 'column' }}
          flexDir={'column'}
          // display={{ base: 'none', md: 'flex' }}
          width="full"
          alignItems="flex-end"
          // // flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Box>
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={NextLink} href="/">
                    Home
                  </MenuItem>
                  <MenuItem as={NextLink} href="/about">
                    About
                  </MenuItem>
                  <MenuItem as={NextLink} href="/experience">
                    Experience
                  </MenuItem>
                  <MenuItem as={NextLink} href="/contact">
                    Contact
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="https://www.linkedin.com/in/kathleenkohhuiying/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
