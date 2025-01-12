import { Box, Button, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


function LandingSection() {

  return (
    <Box
    backgroundImage="url('/bb.jpg')"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    // position="relative"
    width="100%"
    height="90vh"
  >
    <Container pt={20}>
    <Grid templateColumns={'repeat(12,1fr)'}>
      <GridItem colSpan={{base:12 ,sm:9 , md:6}}>
        <Box bgColor={'rgba(202, 176, 176, 0.8)'}  padding={10}  borderRadius={10}>
            
              <Text fontSize={'4xl'} fontWeight={'bolder'} color={'red.600'}>
                SPARKLE CAR WASH
              </Text>
              <Text fontSize={'4xl'} fontWeight={'bolder'} color={'black.600'}>
                COLOMBO
              </Text>
              <Text fontSize={'2xl'} color={'red.800'}>
              We are committed to providing you with a superior service experience, prioritizing cleanliness and decency in every interaction.
              </Text>
              <Link href={'/booking'}><Button bgColor={'red'} color={'white'} mt={5}>BOOK NOW</Button></Link>
            </Box>
      </GridItem>
    </Grid>
      
    </Container>
  </Box>
  
  )
}

export default LandingSection
