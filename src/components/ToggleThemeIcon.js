import React from 'react';
import {HStack, Icon, Text, useColorMode} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import { animation } from '../helpers';

export const ToggleThemeIcon = () => {
	const {colorMode, toggleColorMode} = useColorMode();

   return (
      <HStack spacing={4} position='absolute' top={12} right={12}>
         <Icon
            animation={animation}
            cursor='pointer'
            fontSize="xl"
            variant='contained'
            borderRadius='full'
            colorScheme='blackalpha'
            onClick={toggleColorMode}
            as={colorMode === 'light' ? MoonIcon : SunIcon}
         />
         <Text>{ colorMode === 'light' ? 'Switch Dark Mode' : 'Switch Light Mode'}</Text>
      </HStack>
	);
};
