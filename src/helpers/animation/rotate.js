import { keyframes } from '@chakra-ui/react';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20px; }
  25% { transform: scale(2) rotate(0); border-radius: 20px; }
  50% { transform: scale(2) rotate(-180deg); border-radius: 30px; }
  75% { transform: scale(2) rotate(-180deg); border-radius: 30px; }
  100% { transform: scale(1) rotate(0); border-radius: 20px; }
`;

export const animation = `${animationKeyframes} 3s ease-in-out`;
  