import React from 'react';
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const SettingsButton = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('day', 'night');
  const bg = useColorModeValue('red.500', 'red.200');
  const color = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Box mb={4} bg={bg} color={color}>
        <p>{bg}</p>
        <Button onClick={toggleColorMode}>
          {'colorMode' === 'dark'
            ? 'Включить ночной режим'
            : 'Включить дневной режим'}
        </Button>
      </Box>
    </>
  );
};

export default SettingsButton;
