import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Accordion from "./AccordionCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const resId = useParams()
  return (
    <div className="body">
      <Stack p={5}>
        <Heading as="h2" size="lg" overflowY="hidden">
          Restaurant Name
        </Heading>
        <Card mt={10} mb={4}>
          <HStack mr={3}>
            <CardBody>
              <Heading as="h2" size="md" overflowY="hidden">
                Restaurant Name
              </Heading>
              <Text>Cusines</Text>

              <Text as="p" fontSize="xs">
                Location, Delivery Time
              </Text>
            </CardBody>
            <Card>
              <CardBody>
                <HStack>
                  <StarIcon color={"green"} />{" "}
                  <Text color={"green"} fontWeight={800}>
                    {" "}
                    4.3
                  </Text>
                </HStack>
                <Divider />
                <Text color={"gray"} fontSize="xs" align={"center"}>
                  Total Ratings
                </Text>
              </CardBody>
            </Card>
          </HStack>
        </Card>
        <Divider size="lg" variant="dashed" />
      </Stack>
      <Accordion />
    </div>
  );
};

export default RestaurantMenu;
