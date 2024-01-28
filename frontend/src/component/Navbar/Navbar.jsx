import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Text, chakra, useColorModeValue, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import ToggleColorMode from '../theme/ToggleColorMode';
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

const options1 = {
  items: ["Home", "Services", "About Us", "Blog", "Contact Us"],
  links: ["/", "/services", "/aboutus", "/blog", "/contactus"]
};

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/* <Logo /> */}
                {/* <VisuallyHidden>Choc</VisuallyHidden> */}
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                3Hands India
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                {options1.items.map((el, index) => (
                  <Link key={index} to={options1.links[index]}>
                    <Button variant="ghost">
                      {el}
                    </Button>
                  </Link>
                ))}

                <Text
                  cursor="pointer"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <ToggleColorMode />
                </Text>
              </HStack>
              <Button colorScheme="brand" size="sm">
                Get Started
              </Button>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={onOpen}
                />
                <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>3Hands India</DrawerHeader>
                    <DrawerBody>
                      {options1.items.map((el, index) => (
                        <Box key={index} m="25px auto" fontSize={18} fontWeight={"500"}>

                          <Link to={options1.links[index]} onClick={onClose}>
                            <Text
                              cursor="pointer"
                              color="black"
                              fontFamily="Serif"
                            >
                              {el}
                            </Text>
                          </Link>
                        </Box>
                      ))}
                      <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                        <Link to={""}>
                          <ToggleColorMode />
                        </Link>
                      </Box>
                      <Box m="25px auto"></Box>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </Fragment>
    </div>
  );
}

export default Navbar;
