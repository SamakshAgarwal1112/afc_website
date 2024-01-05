import React from 'react';
import { Flex, Text, Box, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import { HamburgerIcon } from '@chakra-ui/icons';

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/projects', text: 'Projects' },
  { to: '/achievements', text: 'Achievements' },
  { to: '/team', text: 'Team' },
  { to: '/gallery', text: 'Gallery' },
  { to: '/sponsors', text: 'Sponsors' },
  { to: '/contact', text: 'Contact' },
];

function NavbarLink({ to, text }) {
  return (
    <Link to={to}>
      <Text>{text}</Text>
    </Link>
  );
}

function NavbarMenuItem({ to, text }) {
  return (
    <MenuItem>
      <Link to={to}>
        <Text color="#3E4047">{text}</Text>
      </Link>
    </MenuItem>
  );
}

function Navbar() {
  return (
    <Box w="100%" top="0" pos={"sticky"}>
      <Flex
        bg="transparent"
        w={{ base: "95%", lg: "90%" }}
        h="5rem"
        align={{base:"flex-start",md:"center"}}
        justify="space-between"
        pt={{ base: "0.5rem", md: "0" }}
        pos={"absolute"}
        zIndex={1}
        left={{ base: "2.5%", lg: "5%" }}
        right={{ base: "2.5%", lg: "5%" }}
      >
        <Link to="/">
          <Image
            aspectRatio={'1/1'}
            w={{ base: "2.5rem", sm: "3rem", md: '5rem' }}
            p={'0'}
            src={logo}
          />
        </Link>
        <Box
          fontSize={{ base: "0.75rem", md: "1rem", lg: "1.2rem" }}
          fontWeight={600}
        >
          <Flex display={{ base: "none", md: "flex" }}
            align="center"
            justify="space-between"
            gap={{ base: "1.25rem", lg: "2.25rem" }}>
            {links.map(link => <NavbarLink key={link.to} to={link.to} text={link.text} />)}
          </Flex>
          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                {links.map(link => <NavbarMenuItem key={link.to} {...link} />)}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;