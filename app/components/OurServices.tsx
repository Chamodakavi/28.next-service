import {  Container, Grid, GridItem, Span, Text } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Data } from "../data/Data";

function OurServices() {
  return (
    <section id="ourservices" className="servce-section">
      <Container py={20}>
        <Text color={"red"} as={"h1"} fontWeight={"bolder"} fontSize={"4xl"}>
          OUR SERVICES
        </Text>
        <Text mt={4} fontSize={"2xl"}>
          Committed to provide<Span color={"red"}> the best care </Span>with
          supervision and trust.
        </Text>

        <Grid templateColumns="repeat(12, 1fr)" gap={4} >
          {Data.map((item) => (
            <GridItem
              key={item.id}
              colSpan={{ base: 12, sm: 6, md: 4 }}
            >
              <ServiceCard item={item}/>
            </GridItem>
          ))}
        </Grid>
       
      </Container>
    </section>
  );
}

export default OurServices;
