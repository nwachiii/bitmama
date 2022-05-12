import React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {SiInstagram, SiFacebook} from 'react-icons/si';
import { HStack, Icon, Link} from '@chakra-ui/react';

export const SocialIcons = () => {
	return (
				<HStack spacing={4} mb={4} alignItems="center" my="auto">
					<Link href='https://web.facebook.com/bitmama
' isExternal>
						<Icon
							color='green.700'
							aria-label='bitmama_fb'
							fontSize='40px'
							as={SiFacebook}
						/>
					</Link>
					<Link href='https://twitter.com/bitmamaexchange
' isExternal>
						<Icon
							color='green.700'
							aria-label='bitmama_twitter'
							fontSize='40px'
							as={AiFillTwitterCircle}
						/>
					</Link>
					<Link href='https://www.instagram.com/bitmamaexchange/
' isExternal>
						<Icon
							color='green.700'
							aria-label='bitmama_instagram'
							fontSize='40px'
							as={SiInstagram }
						/>
					
					</Link>
				</HStack>
	);
};
