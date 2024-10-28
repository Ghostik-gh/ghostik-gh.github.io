import { Box, Button, Flex } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Flex as="footer" flexDirection={'column'}>
      <Flex gap={'10px'} justifyContent={'space-evenly'}>
        <Flex flexDirection={'column'}>
          <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
          <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
          <Button onClick={() => navigate('/wrong_page')}>Another</Button>
        </Flex>
        <Flex flexDirection={'column'}>
          <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
          <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
          <Button onClick={() => navigate('/wrong_page')}>Another</Button>
        </Flex>
      </Flex>
      <Box textAlign={'center'}>Moscow, {new Date().getFullYear()}</Box>
    </Flex>
  );
};

export default Footer;
