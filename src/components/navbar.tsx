import React from 'react'
import { forwardRef } from 'react'
import NextLink from 'next/link'
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
      <Container display="flex" p={2} maxW="container.md">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        ></Stack>
        <Box alignItems="flex-end">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="https://github.com/kathleenkhy">
                  GitHub
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://www.linkedin.com/in/kathleenkohhuiying/"
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
