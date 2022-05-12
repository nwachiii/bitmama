import React from 'react';
import {MdCheckCircle} from 'react-icons/md';
import { List, ListIcon, ListItem, Text} from '@chakra-ui/react';
import { CustomBox } from './CustomBox';

export const ActiveSessions = () => {
	return (
		<CustomBox>
			<Text fontSize='24px' fontWeight='bold' as='p' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)' mb={4}>Other active users:</Text>
			<List spacing={3}>
				<ListItem>
					<ListIcon as={MdCheckCircle} color='green.500' />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit
				</ListItem>
				<ListItem>
					<ListIcon as={MdCheckCircle} color='green.500' />
					Assumenda, quia temporibus eveniet a libero incidunt suscipit
				</ListItem>
				<ListItem>
					<ListIcon as={MdCheckCircle} color='green.500' />
					Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
				</ListItem>
			</List>
		</CustomBox>
	);
};
