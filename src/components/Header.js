import React from 'react';
import {Link} from 'react-router-dom';
import {Flex, Heading} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ToggleThemeIcon} from './ToggleThemeIcon';

export const Header = () => {
	return (
		<motion.div initial={{y: 30}} animate={{y: 0}} transition={{delay: 0.2, type: 'spring', stiffness: 150}} >
			<Flex
				p={3}
				mt={2}
				h='8%'
				mx='auto'
				maxW='90%'
				color='dark-gray'
				alignItems='flex-end'
				justifyContent='space-between'>
				<Link to='/'>
        <Heading as='h4' color='teal.500'  top={{base: 7, md:33}} left={{base: 0, md:10}} position='absolute'>
						<i>{`<nwachiii  />`}</i>
					</Heading>
				</Link>
			</Flex>
				<ToggleThemeIcon />
		</motion.div>
	);
};
