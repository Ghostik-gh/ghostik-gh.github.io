import { Box, Button } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <Box display={'flex'} gap={'10px'} justifyContent={'space-evenly'}>
        <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
        <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
        <Button onClick={() => navigate('/another_wrong_page')}>Another</Button>
      </Box>
    </footer>
  );
};

export default Footer;
