import {useIdleTimer} from 'react-idle-timer';
import React, {useEffect, useState} from 'react';
import {Alert, AlertIcon, VStack} from '@chakra-ui/react';
import {useLocation, useNavigate} from 'react-router-dom';

import {Footer, Header, UserDetails} from '../components';
import { timeout, promptTimeout, onActive} from '../helpers';

export const Home = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const username = location && location.state.username;
	const [remaining, setRemaining] = useState(0);

	const handleLogout = () => {
		navigate('/', {replace: null});
	};
	const handleStillHere = () => {
		window.location.reload(false);
	};

	const onIdle = () => handleLogout();
	const onPrompt = () => {
		return (
			<Alert maxW={480} borderRadius='md' status='warning'>
				<AlertIcon />
				Hi {username}, Looks like you've been out of touch! You'll be logged out in about 20seconds from now`
			</Alert>
		);
	};

	const {getRemainingTime, getTotalIdleTime, isPrompted, getTotalActiveTime} = useIdleTimer({
		timeout,
		promptTimeout,
		onPrompt,
		onIdle,
		onActive
	});

	useEffect(
		() => {
			const interval = setInterval(() => {
				if (isPrompted()) {
					setRemaining(Math.ceil(getRemainingTime() / 1000));
				}
			}, 6000);
			return () => {
				clearInterval(interval);
			};
		},
		[isPrompted, remaining, getRemainingTime]
	);

	return (
		<VStack minH='100vh' flexDirection='column' mx='auto' justifyContent='center'>
			<Header />
			<UserDetails
				onIdle={onIdle}
				onPrompt={onPrompt}
				username={username}
				handleStillHere={handleStillHere}
				isPrompted={isPrompted}
				handleLogout={handleLogout}
				getTotalIdleTime={getTotalIdleTime}
				getTotalActiveTime={getTotalActiveTime}
			/>
			<Footer />
		</VStack>
	);
};
