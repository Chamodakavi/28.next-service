import { Box, Container, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    
      <Box as={"nav"} bgColor={'red.200'} >
          <Container>
              <HStack padding={7}>
                <Box flex={1}>
                  <Link href='/'><Text>Car Wash</Text></Link>
                </Box>
                <Box>
                  <HStack>
                    <Link href='/#ourservices'><Text>Our Services</Text></Link>
                    <Link href='/contactus'><Text>Contact Us</Text></Link>
                  </HStack>
                </Box>
              </HStack>
          </Container>
      </Box>
    
  );
}

export default Navbar;
