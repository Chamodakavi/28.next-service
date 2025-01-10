import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ServiceCardProps {
  item: {
    img: string; 
    title1: string;
    p?: string; 
    title2?: string; 
    p1?: string;
    p2?: string; 
    p3?: string;
    p4?:string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <Box pt={5}>
      <img src={item.img} alt="" style={{width:'100%'}}/>
      <Text
        as={"h2"}
        fontWeight={"bold"}
        color={"red"}
        fontSize={"3xl"}
        mt={7}
      >
        {item.title1}
      </Text>
      <VStack
        align={"left"}
        mt={8}
        fontSize={"xl"}
        fontWeight={"bold"}
        borderLeft={"3px solid black"}
        p={5}
        lineHeight={2.3}
      >
        <Text>{item.p}</Text>
        <Text fontSize={"3xl"}>{item.title2}</Text>
        <Text>{item.p1}</Text>
        <Text>{item.p2}</Text>
        <Text>{item.p3}</Text>
        <Text fontSize={"3xl"}>{item.p4}</Text>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
