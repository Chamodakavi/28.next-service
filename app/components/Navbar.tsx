import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <Box as={"nav"} bgColor={"white"} position="sticky" top="0" zIndex={10}>
      <Container>
        <HStack padding={7}>
          <Box flex={1}>
            <Text>
              <Link href="/">Car Wash</Link>
            </Text>
          </Box>
          <Box>
            <HStack>
              <Link href="/#ourservices">
                <Text>Our Services</Text>
              </Link>
              <Link href="/#contactus">
                <Text>Contact Us</Text>
              </Link>
              <Link href="/#contactus">
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
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
