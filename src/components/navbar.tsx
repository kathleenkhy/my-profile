import React, { useEffect } from 'react'
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
  Flex,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { navBar } from '~/data/connectionButtons'

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
  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      position="fixed"
      as="header"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      top={0}
      left={0}
      boxShadow="md" // Adjust shadow as needed
      zIndex="sticky"
      px={4}
      h={16}
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
            <Text
              as="span"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="'Shadows Into Light'"
              color={useColorModeValue('teal.600', 'teal.100')}
              cursor="pointer"
              style={{ textDecoration: 'none' }}
            >
              Kathleen.
            </Text>
          </NextLink>
        </Stack>
        <Stack
          flexDir={'column'}
          width="full"
          alignItems="flex-end"
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
                  {navBar.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        as={NextLink}
                        href={item.href}
                        target={item.target}
                      >
                        {item.name}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Flex>
  )
}

export default Navbar
