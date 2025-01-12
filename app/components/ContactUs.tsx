'use client'

import { Box, Button, Container, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import newStyled from "@emotion/styled";
import React from "react";


const StyledText = newStyled(Text)`
    padding-Top:10px;
    padding-Bottom:10px;
`;


function ContactUs() {
  return (
    <section id="contactus">
        <Container>
          <Text as={"h3"} color={"red"} fontSize={"4xl"} fontWeight={"bold"}>
            Contact Us
          </Text>
          <Text mt={3} fontSize={'xl'}>Feel free to contact us any time you want...</Text>
    
            <Grid templateColumns={'repeat(12,1fr)'} gap={4}>
                <GridItem colSpan={{base:12,sm:12,md:6}}>
                    <Box mt={10}>
                        <form>
                            <StyledText>Name :</StyledText>
                            <Input  type="text" placeholder="John Doe"/>
    
                            <StyledText>Telephone :</StyledText>
                            <Input type="tel" placeholder="+94 78 564 4566"/>
    
                            <StyledText>Email :</StyledText>
                            <Input type="email" placeholder="JohnDoe@gmail.com"/>
    
                            <StyledText>Message :</StyledText>
                            <Input type="text" placeholder="tell us what do you think about us..."/>
                
                            <Button bgColor={'red'} color={'white'} padding={1} width={'15%'} my={5}>Submit</Button>
                        </form>
                    </Box>
                </GridItem>
                <GridItem alignSelf={'center'} colSpan={{base:12,sm:12,md:6}} ml={10} pl={20}>
                    <Image width={'80%'} src="/boy-with-envelope-his-hands_650542-1302.jpg"/>
                </GridItem>
            </Grid>
    
        </Container>
    </section>
  );
}

export default ContactUs;
