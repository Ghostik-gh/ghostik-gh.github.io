import { Box, Button } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { useNavigate } from 'react-router-dom';
import SettingsButton from './SettingsButton';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        as="header"
        display={'flex'}
        flexDirection={'row'}
        gap={'10px'}
        justifyContent={'flex-end'}
        padding={'15px'}
      >
        <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
        <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
        <Button onClick={() => navigate('/another_wrong_page')}>Another</Button>
        <SettingsButton />
      </Box>
    </>
  );
};

export default Header;
