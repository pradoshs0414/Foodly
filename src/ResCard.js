import React from "react";
import { Card, CardBody, Stack, Heading, Text, Image,HStack } from "@chakra-ui/react";
import { CDN_URL } from "./utils/constant";

const ResCard = (props) => {
  const { data } = props;
  const cuisines = data?.cuisines;

  return (

    <Card  mt="3" p="5" maxW="25vw">
        <Image
          src={CDN_URL + data.cloudinaryImageId}
          alt="Restaurant Image"
          borderRadius="lg"
        />
        <Stack mt="3" spacing="2">
          <Heading as='h2' size="md" overflowY="hidden">{data.name} </Heading>
          <HStack>
          <Text>{data.avgRating}
          </Text>
          <Text as='li'>{data.sla.slaString}</Text>
          </HStack>
          <Text fontSize="md">
            {cuisines.length > 4
              ? cuisines.slice(0, 4).join(" , ")
              : cuisines.join(" , ")}
          </Text>
        </Stack>

    </Card>
    
  );
};

export default ResCard;
