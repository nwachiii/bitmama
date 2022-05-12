import {
	Text,
	Wrap,
	Alert,
	VStack,
	Button,
	HStack,
	Avatar,
	Divider,
	Heading,
	WrapItem,
	AlertIcon,
	AvatarBadge,
} from '@chakra-ui/react';
import React from 'react';
import {msToTime} from '../helpers';
import {CustomBox} from '../components';
import {ActiveSessions} from './ActiveSessions';

export const UserDetails = (Props) => {
	const {username, isPrompted, handleLogout, handleStillHere, getTotalActiveTime, getTotalIdleTime} = Props;
	return (
		<Wrap spacing='70px' alignSelf='center' alignItems='center' py={{base: 150, md: 180}}>
			<WrapItem>
				{isPrompted() ? (
					<CustomBox>
						<HStack>
							<Avatar>
								<AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
							</Avatar>
							<strong>away (Idle)</strong>
						</HStack>
						<Heading as='h3' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>
							{username}! Still there?
						</Heading>

						<Alert maxW={480} borderRadius='md' status='warning'>
							<AlertIcon />
							Hi {username}, Looks like you've been out of touch! You'll be logged out in about 25seconds
							from now`
						</Alert>
						<Button
							size='md'
							height='48px'
							width='200px'
							border='2px'
							borderColor='tomato.500'
							onClick={handleStillHere}>
							I'm still here
						</Button>
					</CustomBox>
				) : (
					<CustomBox px='1.2rem'>
						<HStack>
							<Avatar>
								<AvatarBadge boxSize='1.25em' bg='green.500' />
							</Avatar>
							<strong>online (active)</strong>
						</HStack>

						<Heading
							maxW={480}
							textAlign='center'
							as='h3'
							bgClip='text'
							bgGradient='linear(to-l, #7928CA, #FF0080)'>
							Welcome, {username}!
						</Heading>
						<Text maxW={480} textAlign='center' bgClip='text' bgGradient='linear(to-r, #7928CA, #FF0080)'>
							Thank you for choosing Bitmama! where you can instantly buy and sell crypto at the best
							prices
						</Text>

						<VStack spacing={2} alignItems='left'>
							<Alert maxW={480} borderRadius='md' status='info'>
								<AlertIcon />
								You are now signed in. You can also sign in with a different account on a new tab.
							</Alert>
							<Alert borderRadius='md' status='info'>
								<AlertIcon />
								If no activity is detected on each tab in 60 seconds, you will be logged out
								automatically.
							</Alert>
							<Alert maxW={480} borderRadius='md' status='success'>
								<AlertIcon />

								<Text>
									Total active time: <strong>{msToTime(getTotalActiveTime())}</strong> <br />
									{getTotalIdleTime() > 0 ? (
										<div style={{textAlign: 'center'}}>
											<Text w='100%'>
												Last seen (Total Idle Time):{' '}
												<strong>
													<i>{msToTime(getTotalIdleTime(), 'ago')}</i>
												</strong>
												{}
											</Text>
										</div>
									) : (
										<Text>Total Idle Time: starts counting when user is idle</Text>
									)}
								</Text>
							</Alert>
						</VStack>

						<Button
							size='md'
							height='48px'
							width='200px'
							border='2px'
							borderColor='green.500'
							onClick={handleLogout}>
							Logout
						</Button>
					</CustomBox>
				)}
			</WrapItem>
			
			<WrapItem alignSelf='center'>
				<ActiveSessions />
			</WrapItem>
		</Wrap>
	);
};
