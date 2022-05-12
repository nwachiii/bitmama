import {
	Center,
	Input,
	VStack,
	FormLabel,
	InputGroup,
	FormControl,
	useColorMode,
	InputLeftElement,
	useColorModeValue,
	Image,
	Text,
	Button
} from '@chakra-ui/react';
import {FaRegUser} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import {ToggleThemeIcon} from '../components';
import bitmamaLogo from '../assets/logo.svg';
import {theme} from '../theme';

export const Login = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const LocalStorageuserName = JSON.parse(localStorage.getItem('bitmama_UserName'));

	const handleSignIn = () => {
		navigate('/home', {state: {username: name}});
		localStorage.setItem('bitmama_UserName', JSON.stringify(name));
		sessionStorage.setItem('activeSession', JSON.stringify(name));
	};

	const handleInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	useEffect(() => {
		setName(LocalStorageuserName ? LocalStorageuserName : '');
	}, []);

	const color = useColorModeValue('white', 'gray.800');
	const {colorMode} = useColorMode();

	return (
		<Center
			minH='100vh'
			color={color}
			bgGradient={colorMode === 'light' ? 'linear(to-br, black, teal.600)' : 'linear(to-tr, red.100, white)'}>
			<ToggleThemeIcon />
			<VStack spacing={4} align='stretch'>
				<Center
					mb={6}
					flexDirection='column'
					borderRadius={colorMode === 'light' ? '3xl' : 'full'}
					boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
					<Image boxSize='150px' src={bitmamaLogo} alt='Bitmama Logo' />
					<Text pb={4} fontWeight='bold'>
						USER LOGIN
					</Text>
				</Center>
				<FormControl isRequired>
					<FormLabel htmlFor='first-name'>Username</FormLabel>
					<InputGroup>
						<InputLeftElement pointerEvents='none' children={<FaRegUser color='gray.300' />} />
						<Input
							value={name}
							onChange={handleInputChange}
							variant='outline'
							borderColor='gray.400'
							placeholder='Username'
						/>
					</InputGroup>
				</FormControl>
				<Button
					p={6}
					color='#FFF'
					borderRadius='md'
					bg={theme.brand.blue}
					onClick={handleSignIn}
					_hover={{
						bg          : '#FFF',
						color       : '#03a438',
						border : '2px solid #03a438',
					}}>
					Login
				</Button>
			</VStack>
		</Center>
	);
};
