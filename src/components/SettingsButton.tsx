import { Box, Button, useColorMode } from '@chakra-ui/react';

const SettingsButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light'
          ? 'Включить ночной режим'
          : 'Включить дневной режим'}
      </Button>
    </Box>
  );
};

export default SettingsButton;
