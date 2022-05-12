import React, {Fragment} from 'react';
import {Divider, Flex, Image} from '@chakra-ui/react';

import bitmamaLogo from '../assets/logo.svg';
import {SocialIcons} from './SocialIcons';

export const Footer = () => {
	return (
		<Fragment>
			<Flex direction='column' justifyContent='space-around' position='absolute' bottom={{base: 2, md: 4}}>
				<Divider mt={6} mb={2} />
				<Flex w='100vw' justifyContent='space-around' alignItems='center'>
					<Image boxSize='80px' src={bitmamaLogo} alt='Bitmama Logo' />
					<SocialIcons />
				</Flex>
			</Flex>
		</Fragment>
	);
};
