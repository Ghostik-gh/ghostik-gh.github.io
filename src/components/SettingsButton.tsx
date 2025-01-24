import { Box, Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, StarIcon } from '@chakra-ui/icons';

const SettingsButton = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Button>
        {/* onClick={toggleColorMode} */}
        {colorMode === 'light' ? <StarIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
};

export default SettingsButton;
