import React from 'react'
import { VStack} from '@chakra-ui/react';

export const CustomBox = ({children}) => {
  return (
    	<VStack
						py={50}
						spacing={6}
						maxW={700}
						rounded='lg'
						boxShadow='2xl'
						borderRadius='lg'
						px={{base: 3, md: '40px'}}
						border='1.5px solid lightgray'
    >{children}</VStack>
  )
}

