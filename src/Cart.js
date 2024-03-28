//* @CSS
import { Badge, Box, Button, Container, Flex, Grid, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

//* redux & redux actions
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromCart,increaseCartQuantity,decreaseCartQuantity,removeDataFromCart } from './Redux/cartSlice'
import { CDN_URL } from './utils/constant';

//* Currency formatter 
// import { formatCurrency } from '../utilities/formatCurrency';
import { AiFillStar } from 'react-icons/ai';

const CartItem = () => {
    const cartData = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(cartData)

    return (
        <Container maxW='container.xl'>

            <Text fontSize={ '4xl' }>Cart</Text>

            <Flex justify='flex-end' >
                <Button bg='red.500' disabled={ cartData.length < 1 } color='white' _hover={ { color: 'red', bg: 'white', border: '1px solid red' } } m='2' onClick={ () => dispatch(deleteAllFromCart()) }>DELETE ALL
                </Button>
            </Flex>


            <SimpleGrid columns={ [ 1, 2, 3, 4 ] } spacing='40px' pt='10'  >

                { cartData && cartData.map((item) => (
                    <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>

                        <Image src={ CDN_URL+item.imageId } alt={ item.name } h='200px' w='full' p='2'
                            objectFit='contain' />

                        <Box p='6'>
                            {/* <Box display='flex' alignItems='baseline'>

                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Category
                                </Badge>

                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    { item.category }
                                </Box>
                            </Box> */}

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={ 1 }
                            >
                                { item.name }
                            </Box>

                            <Box as='h1' color='gray.600' fontWeight='bold'>
                                {"₹ "+item.price * item.quantity }
                            </Box>

                            {/* <Box display='flex' mt='2' justifyContent='center' alignItems='center'>
                                { Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <Icon as={ AiFillStar }
                                            key={ i }
                                            color={ i < item.rating.rate ? 'teal.500' : 'gray.300' }
                                        />
                                    )) }
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    { item.rating.count } reviews
                                </Box>
                            
                            </Box> */}


                            <Flex justify={'space-evenly'} align='center' mt={ 5 }>

                                <Button w='container.s' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2' disabled={ item.quantity === 1 } onClick={ () => dispatch(decreaseCartQuantity(item.id)) }>-</Button>

                                <Text>{ item.quantity }</Text>

                                <Button w='container.s' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } onClick={ () => {dispatch(increaseCartQuantity(item.id))
                                } } m='2'>+</Button>

                            </Flex>

                            <Button w='full' bg='red.500' color='white' _hover={ { color: 'red', bg: 'white', border: '1px solid red' } } m='2' onClick={ () => dispatch(removeDataFromCart(item.id)) }>DELETE</Button>

                        </Box>
                    </Box>
                )) }
            </SimpleGrid>
        </Container>

    );
};


export default CartItem;
