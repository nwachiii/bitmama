import React from 'react';
import {VStack} from '@chakra-ui/react';

export const CustomBox = ({children}) => {
	return (
		<VStack
			py={50}
			w="100%"
			maxW={480}
			spacing={6}
			rounded='lg'
			boxShadow='2xl'
			borderRadius='lg'
			px={{base: 3, md: '40px'}}
			mx={{base: '1em', md:"auto"}}
			border='1.5px solid lightgray'>
			{children}
		</VStack>
	);
};
