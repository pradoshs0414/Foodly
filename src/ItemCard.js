import React from 'react'
import { Stack,Heading,Flex,Text,Spacer,Button,Image } from '@chakra-ui/react'
import { CDN_URL } from './utils/constant'
const ItemCard = (props) => {
  const {data} =props
  return (
    <Flex padding={4}>
            
            <Stack >
          <Heading as={'h2'} overflow={"hidden"} size={"md"}>{data?.name}</Heading>
          <Text fontSize='s'as={'p'} >{data?.price/100}</Text>
          <Text fontSize='xs'as={'p'} >{data?.description}</Text>
        </Stack>
            <Spacer />
            <Stack>
        <Image src={CDN_URL + data.imageId} alt='Dish Image'rounded='md' width={100}/>
        <Button width={75} top={-19} left={3}>Add</Button>
        
        </Stack>
      </Flex>
  )
}

export default ItemCard