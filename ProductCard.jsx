import { Box, Image, Text, Badge, Flex, IconButton, Skeleton } from '@chakra-ui/react';
import {BiExpand} from 'react-icons/bi';
import React from 'react'

const ProductCard = ({product, loading}) => {
  //loading =false then we can load it
  return <Skeleton isLoaded={!loading} _hover={{size: 1.5}}> 
          <Box
              _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}} //a scale felnagyítja az effektet
              borderWidth='1px' //keret szélesség
              overflow='hidden' //nem akarunk bar-t az oldalra
              p='4' //padding (párnázás)
              shadow='md'> 
                  <Image />
                  {product.stock < 5 ? (//itt megadjuk, hogy ha a mennyiség kevesebb, mint 5 akkor mi történjen
                    <Badge colorScheme='yellow'>már csak {product.stock} maradt</Badge>
                  ) : product.stock < 1 ? ( //illetve, ha kevesebb mint 1, akkor mi történjen

                    <Badge colorScheme='red'>Elfogyott</Badge> //piros színt adunk neki
                  ) : (
                  <Badge colorScheme='green'>Elérhető</Badge> //ml: adtunk neki margint-szegélyhatárt
                )}

                {product.productIsNew &&(
                    <Badge ml='2' colorScheme='purple'> 
                      Új
                      </Badge>
                )} 

          </Box>
  </Skeleton>; 
};

export default ProductCard