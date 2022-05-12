import {extendTheme} from '@chakra-ui/react';

const brand = {
        blue: '#14142b',
        green: '#153e75',
        white: '#2a69ac'
};
const fonts = {
    body    : 'system-ui, sans-serif',
    heading : 'Georgia, serif',
    mono    : 'Menlo, monospace'
}

const config = {
	initialColorMode   : 'dark',
	useSystemColorMode : false
};



export const theme = extendTheme({fonts, brand, config});
