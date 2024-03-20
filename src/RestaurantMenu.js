import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  Box,
  CardBody,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Accordion from "./AccordionCard";
import { useParams } from "react-router-dom";
import AccordionCard from "./AccordionCard";
import useRestaurantMenu from "./utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const {resId} = useParams()
  console.log(resId)
  const [menu,setMenu,resInfo,setResInfo] = useRestaurantMenu(resId)



  return (
    <div className="body">
      <Stack p={5}>
        <Heading as="h2" size="lg" overflowY="hidden">
          {resInfo?.name}
        </Heading>
        <Card mt={10} mb={4}>
          <HStack mr={3}>
            <CardBody>
              <Heading as="h2" size="md" overflowY="hidden">
              {resInfo?.name}
              </Heading>
              <Text>{resInfo?.cuisines.join(', ')}</Text>

              <Text as="p" fontSize="xs">
                {resInfo?.areaName}, {resInfo?.sla?.slaString}
              </Text>
            </CardBody>
            <Card>
              <CardBody>
                <HStack>
                  <StarIcon color={"green"} />{" "}
                  <Text color={"green"} fontWeight={800}>
                    {" "}
                    {resInfo?.avgRating}
                  </Text>
                </HStack>
                <Divider />
                <Text color={"gray"} fontSize="xs" align={"center"}>
                  {resInfo?.totalRatingsString}
                </Text>
              </CardBody>
            </Card>
          </HStack>
        </Card>
        <Divider size="lg" variant="dashed" />
      </Stack>
      <Box>
      {menu?.slice(1,-2).map((menuData,index)=>{
        if (menuData?.card?.card?.itemCards?.length != undefined) {
          
          return <AccordionCard id ={index} data={menuData}/>
          
        }
})}
      
      </Box>
      
      
      
    </div>
  );
};

export default RestaurantMenu;
