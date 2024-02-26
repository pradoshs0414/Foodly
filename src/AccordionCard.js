import React from 'react'
import {Card,Text, Box,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, HStack, Stack, Heading, MenuDescendantsProvider, Image } from '@chakra-ui/react'

const AccordionCard = () => {
  return (
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <HStack >
        <Stack >

          <Heading as={'h2'} overflow={"hidden"} size={"md"}>Dish Name</Heading>
          <Text fontSize='s'as={'p'} >Price</Text>
          <Text fontSize='xs'as={'p'} >Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</Text>
      </Stack>
        <Stack>
        <Image src='ImageSRC' alt='Dish Image'/>
        
        </Stack>
      </HStack>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  )
}

export default AccordionCard