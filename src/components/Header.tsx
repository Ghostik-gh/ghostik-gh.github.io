import { Box, Button } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { useNavigate } from 'react-router-dom';
import SettingsButton from './SettingsButton';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box display={'flex'} gap={'10px'} justifyContent={'space-evenly'}>
        <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
        <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
        <Button onClick={() => navigate('/another_wrong_page')}>Another</Button>
        <SettingsButton />
      </Box>
    </>
  );
};

export default Header;
