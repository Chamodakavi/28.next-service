"use client";

import {
  Box,
  Button,
  Container,
  FieldRoot,
  Fieldset,
  Grid,
  GridItem,
  HStack,
  Input,
  List,
  ListItem,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Field } from "../../components/ui/field";

import styled from "@emotion/styled";
import { Services2, Services1 } from "../data/Data";

import "./page.css";
const StyledInput = styled(Input)`
  border: 1px solid rgb(172, 166, 166);
`;

function ContactUs() {
  return (
    <section id="booking">
      <Box>
        <Container py={10}>
          <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>
            Appointment Reservation
          </Text>

          <FieldRoot mt={5}>
            <Fieldset.Root>
              <Fieldset.Content>
                <Grid templateColumns={"repeat(12,1fr)"} gap={5}>
                  <GridItem colSpan={{ base: 12, md: 6 }} width={"80%"}>
                    <Text>
                      Name<Span color={"red"}>*</Span>
                    </Text>

                    <Field label="First Name">
                      <StyledInput type="text" placeholder="John" />
                    </Field>

                    <Field label="Last Name" mt={5}>
                      <StyledInput type="text" placeholder="Doe" />
                    </Field>
                  </GridItem>

                  <GridItem colSpan={{ base: 12, md: 6 }} mt={6} width={"80%"}>
                    <Text>Phone</Text>
                    <StyledInput type="tel" placeholder="+94 78 564 5678" />
                  </GridItem>
                </Grid>

                <HStack
                  justifyContent={"space-between"}
                  display={{ md: "flex", sm: "block" }}
                >
                  <VStack width={{ md: "50%", sm: "100%" }} align={"left"}>
                    <Text>Vehicle Type</Text>
                    <StyledInput
                      width={"79.5%"}
                      type="text"
                      placeholder="car / van"
                    />
                  </VStack>

                  <VStack width={{ md: "50%", sm: "100%" }} align={"left"}>
                    <Text>Vehicle Number</Text>
                    <StyledInput
                      width={"79.5%"}
                      type="text"
                      placeholder="BFO - 5857"
                    />
                  </VStack>
                </HStack>

                <Text>Select Services</Text>

                <List.Root listStyle={"none"}>
                  <Grid templateColumns={"repeat(12,1fr)"} gap={5}>
                    <GridItem colSpan={{ base: 12, md: 3, sm: 6 }}>
                      {Services1.map((service) => (
                        <ListItem lineHeight={2} key={service.label}>
                          <label>
                            <input
                              type="checkbox"
                              name={service.label}
                              id={service.label}
                              value={service.value}
                            />
                            {service.label}
                          </label>
                        </ListItem>
                      ))}
                    </GridItem>

                    <GridItem colSpan={{ base: 12, md: 3, sm: 6 }}>
                      {Services2.map((service) => (
                        <ListItem lineHeight={2} key={service.label}>
                          <label>
                            <input
                              type="checkbox"
                              name={service.label}
                              id={service.label}
                              value={service.value}
                            />
                            {service.label}
                          </label>
                        </ListItem>
                      ))}
                    </GridItem>
                  </Grid>
                </List.Root>

                <HStack
                  justifyContent={"space-between"}
                  display={{ md: "flex", sm: "block" }}
                >
                  <VStack width={{ md: "50%", sm: "100%" }} align={"left"}>
                    <Text>Date </Text>
                    <StyledInput
                      width={"79.5%"}
                      type="date"
                      onFocus={(e) =>
                        e.target.showPicker && e.target.showPicker()
                      }
                    />
                    <Text>Time</Text>
                    <StyledInput
                      width={"79.5%"}
                      type="time"
                      onFocus={(e) =>
                        e.target.showPicker && e.target.showPicker()
                      }
                    />
                  </VStack>

                  <VStack width={{ md: "50%", sm: "100%" }} align={"left"}>
                    <Text>Anything Else</Text>
                    <StyledInput
                      width={"79.5%"}
                      type="text"
                      placeholder="Enter your message..."
                    />
                  </VStack>
                </HStack>
              </Fieldset.Content>
              <Button
                bgColor={"red"}
                color={"white"}
                fontSize={"1.1rem"}
                type="submit"
                alignSelf="flex-start"
              >
                Submit
              </Button>
            </Fieldset.Root>
          </FieldRoot>
        </Container>
      </Box>
    </section>
  );
}

export default ContactUs;
