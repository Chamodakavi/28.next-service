import { Box,  Text, VStack } from "@chakra-ui/react";

import React from "react";

function ServiceCard({item}) {
  return (
    
      <Box pt={5}>
         <img src={item.img} alt="" />
        <Text as={"h2"}>{item.title1}</Text>
        <VStack align={"left"}>
          <Text>{item.p}</Text>
          <Text>{item.title2}</Text>
          <Text>{item.p1}</Text>
          <Text>{item.p2}</Text>
          <Text>{item.p3}</Text>
          
        </VStack>
      </Box>
    
  );
}

export default ServiceCard;
