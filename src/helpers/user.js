import {Alert, AlertIcon} from '@chakra-ui/react';

export const timeout = 1000 * 30;
export const promptTimeout = 1000 * 30;

export const onActive = (event) => {
	<Alert status='warning'>
		<AlertIcon />
		You are now active!
	</Alert>;
};
