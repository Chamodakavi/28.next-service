"use client";

import {
  Box,
  Button,
  Container,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  HStack,
  Icon,
  ListItem,
  ListRoot,
  Separator,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";


import newStyled from "@emotion/styled";

const StyledListItem = newStyled(ListItem)`
 padding-Top:30px;
 padding-Bottom:30px;
`;


function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };

  console.log(open);

  return (
    <>
      <Box as={"nav"} bgColor={"white"} position="sticky" top="0" zIndex={10}>
        <Container>
          <HStack padding={7}>
            <Box flex={1}>
              <Text>
                <Link href="/">Car Wash</Link>
              </Text>
            </Box>
            <Box>
              <HStack display={{ mdDown: "none", md: "flex" }}>
                <Link href="/#ourservices">
                  <Text>Our Services</Text>
                </Link>
                <Link href="/#contactus">
                  <Text>Contact Us</Text>
                </Link>
                <Link href="/booking">
                  <Button
                    as={"button"}
                    border={"1px solid"}
                    padding={1}
                    borderRadius={3}
                    bgColor={"red"}
                    color={"white"}
                  >
                    Book Now
                  </Button>
                </Link>
              </HStack>
              <Icon
                onClick={toggleDrawer}
                display={{ md: "none", mdDown: "block" }}
                fontSize={30}
              >
                <IoMdMenu />
              </Icon>
            </Box>
          </HStack>
        </Container>
      </Box>

      {/* ------------------------------- Drawer-------------------------------------------- */}

      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />

        <DrawerContent
          width="50%"
          height={"100vh"}
          position={"fixed"}
          right={0}
          top={0}
          bgColor={"white"}
          color={"black"}
        >
          <ListRoot listStyle={"none"} fontSize={"md"} mt={"50px"} pl={10}>
            <StyledListItem>
              <Link href="/">Home</Link>
            </StyledListItem>
            <Separator width={'90%'} />
            <StyledListItem>
              <Link href="/#ourservices">
                <Text>Our Services</Text>
              </Link>
            </StyledListItem>
            <Separator width={'90%'} />
            <StyledListItem>
              <Link href="/#contactus">
                <Text>Contact Us</Text>
              </Link>
            </StyledListItem>
            <Separator width={'90%'}/>
            <StyledListItem>
              <Link href="/#aboutUs">
                <Text>About Us</Text>
              </Link>
            </StyledListItem>
            <Separator width={'90%'} />
            <StyledListItem>
              <Link href="/booking">
                    <Button
                      as={"button"}
                      border={"1px solid"}
                      padding={1}
                      borderRadius={3}
                      bgColor={"red"}
                      color={"white"}
                      width={'70%'}
                      fontSize={'md'}
                    >
                      Book Now
                    </Button>
                  </Link>
            </StyledListItem>
            <Separator width={'90%'} />
          </ListRoot>
          <DrawerFooter position={'relative'} top={350}>
            <Text fontStyle={'italic'} fontSize={'xl'}>Sparkle Car Wash</Text>
          </DrawerFooter>

          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </>
  );
}

export default Navbar;
