"use client";

import { Box, Container, HStack, Span, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const StyledText = styled(Text)`
  padding: 10px;
`;

function Footer() {
  return (
    <Box bgColor={"#121212"} color={"white"}>
      <Container p={20}>
        <HStack alignItems={'stretch'} justifyContent={'space-evenly'} display={{sm:'block' , md:'flex'}}>
          <Box my={{sm:5,md:'none'}}>
            <StyledText as={"h1"} fontSize={"xl"} color={'yellow'}>
              Sparkle Clean Car Wash
            </StyledText>
            <StyledText>
              Address:<Span> 123 Main Street, Anytown, CA 12345</Span>
            </StyledText>
            <StyledText>
              Phone Number:<Span> (123) 456-7890</Span>
            </StyledText>
            <StyledText>
              Email Address:<Span>[email address removed]</Span>
            </StyledText>
          </Box>

          <Box my={{sm:5,md:'none'}}>
          <StyledText as={"h1"} fontSize={"xl"} color={'yellow'}>
              Openning Hours
            </StyledText>
            <StyledText><Span>Mon - Fri </Span>8.00 A.M. - 6.00 P.M.</StyledText>
            <StyledText><Span>Sat - Sun </Span>7.00 A.M. - 7.00 P.M.</StyledText>
          </Box>

          <Box my={{sm:5,md:'none'}}>
          <StyledText as={"h1"} fontSize={"xl"} color={'yellow'}>
             Follow Us On
            </StyledText>
            <StyledText>Facebook</StyledText>
            <StyledText>Instagram</StyledText>
          </Box>


        </HStack>
      </Container>
    </Box>
  );
}

export default Footer;
