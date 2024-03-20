import React from "react";
import {
  Flex,
  Card,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Stack,
  Heading,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";
import ItemCard from "./ItemCard";

const AccordionCard = (props) => {
  const {data} = props
  const finalData = data?.card.card
  const cardData =  data?.card?.card?.itemCards || data?.card?.card?.categories?.itemCards
  console.log(finalData)
  return (
    <Accordion p={5} allowToggle allowMultiple={false}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {finalData?.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {
          cardData?.map((cardInfo)=>(
            <ItemCard id={cardInfo?.card?.info?.id} data ={cardInfo?.card?.info}/>
          ))}
          
          
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
