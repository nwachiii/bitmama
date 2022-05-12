import {
	Alert,
	AlertIcon,
	Avatar,
	AvatarBadge,
	Button,
	Heading,
	HStack,
	Text,
	VStack,
	Wrap,
	WrapItem
} from '@chakra-ui/react';
import React from 'react';
import {msToTime} from '../helpers';
import {CustomBox} from '../components';
import {ActiveSessions} from './ActiveSessions';

export const UserDetails = (Props) => {
	const {username, isPrompted, handleLogout, handleStillHere, getTotalActiveTime, getTotalIdleTime} = Props;
	return (
		<Wrap spacing='30px' alignSelf='center' alignItems='center' py={{base: 150, md: 180}}>
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
					<CustomBox>
						<HStack>
							<Avatar>
								<AvatarBadge boxSize='1.25em' bg='green.500' />
							</Avatar>
							<strong>online (active)</strong>
						</HStack>

						<Heading as='h3' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>
							Welcome! {username}
						</Heading>

						<VStack maxW={480} spacing={2} alignItems='left'>
							<Text>Timeout: <strong>{'60 seconds (total time)'}</strong></Text>
							<Text>Total active time: <strong>{msToTime(getTotalActiveTime())}</strong></Text>
							{getTotalIdleTime() > 0 ? (
								<div style={{textAlign: 'center'}}>
									<Text>
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
			<WrapItem>
				<ActiveSessions />
			</WrapItem>
		</Wrap>
	);
};
