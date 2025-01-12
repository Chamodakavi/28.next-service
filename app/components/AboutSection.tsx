import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  ListItem,
  ListRoot,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { OurNetworkData } from "../data/Data";

function AboutSection() {
  return (
    <section id="aboutUs">
      <Container>
        <Grid templateColumns={"repeat(12, 1fr)"}>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Box mt={9}>
              <VStack align={"left"}>
                <Text
                  as={"h3"}
                  color={"red"}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                >
                  ABOUT US
                </Text>
                <Text as={"h4"} mt={4} fontSize={"2xl"} fontWeight={"bold"}>
                  Over <Span color={"red"}>28 Years</Span> of Excellence in the
                  automotive service industry
                </Text>
                <Text as={"p"} fontSize={"xl"} my={3}>
                  Auto Miraj being Sri Lanka’s largest and the best auto service
                  network; has the most diverse service portfolio. Auto Miraj is
                  your one stop station for all of your maintenance, repairs, and
                  services.{" "}
                  <Span fontWeight={"bold"}>
                    Auto Miraj Family drives to success based on three main
                    pillars which are, Promptness, Respect & Oneness.
                  </Span>
                </Text>
                <Image src="https://automiraj.lk/wp-content/uploads/2023/02/automiraj-three-pillars.png" />
              </VStack>
            </Box>
          </GridItem>
  
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Box mt={9}>
              <VStack align={"left"}>
                <Text
                  as={"h3"}
                  color={"red"}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                >
                  OUR NETWORK
                </Text>
                <Text as={"h4"} mt={4} fontSize={"2xl"} fontWeight={"bold"}>
                  Over <Span color={"red"}>40 State of the Art</Span> Facilities
                  to serve across the country
                </Text>
                <Text as={"p"} fontSize={"xl"} my={5}>
                  Our island wide network covers a vast range of services
                  empowered by modern and latest technologies.
                </Text>
  
                <ListRoot listStyle={"none"}>
                  {OurNetworkData.map((item) => (
                    <ListItem my={5}>
                      <Grid templateColumns={"repeat(12,1fr)"} gap={5}>
                        <GridItem colSpan={{base:12,sm:6}}>
                          <Image width={"90%"} src={item.img} />
                        </GridItem>
                        <GridItem colSpan={{base:12,sm:6}}>
                              <Text as={"p"} fontSize={"md"}>
                                {item.desc}
                              </Text>
                          </GridItem>
                      </Grid>
                    </ListItem>
                  ))}
                </ListRoot>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutSection;
