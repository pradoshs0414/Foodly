import React from 'react'
import { Stack,Heading,Flex,Text,Spacer,Button,Image, useToast } from '@chakra-ui/react'
import { CDN_URL } from './utils/constant'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { addToCart } from './Redux/cartSlice'
const ItemCard = (props) => {
  // const {id} = props
  const {data} =props
  const{id,name,description,imageId} = data
  const price = data.price?data?.price/100:data?.defaultPrice/100
  const toast = useToast()
  const dispatch = useDispatch()

  const handleAddtoCart = (data) => {
      dispatch(addToCart(data))
      toast({
        title: 'Operation successful',
        description: 'Item was added successfully.',
        status: 'success',
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Adds a close button to the toast
        position:'top'
      });
    }
  return (
    <Flex padding={4}>
            
            <Stack maxW={"2xl"}>
          <Heading as={'h2'} overflow={"hidden"} size={"md"}>{name}</Heading>
          <Text fontSize='s'as={'p'} >₹{price}</Text>
          <Text fontSize='xs'as={'p'} >{description}</Text>
        </Stack>
            <Spacer />
            <Stack>
        <Image src={CDN_URL + imageId} alt='Dish Image'rounded='md' width={100}/>
        <Button width={75} top={-19} left={3} onClick={()=>handleAddtoCart({id,name,description,price,imageId,quantity:1})}>Add +</Button>
        
        </Stack>
      </Flex>
      
  )
}

export default ItemCard