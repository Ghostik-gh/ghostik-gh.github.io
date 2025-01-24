import { Box, Button, Flex } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneIcon } from '@chakra-ui/icons';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="footer"
      flexDirection={'column'}
      backgroundColor={'black'}
      padding={'10px'}
      color={'white'}
    >
      <div id="map"></div>
      <Flex justifyContent={'space-evenly'} margin={'10px'}>
        <Flex gap={'10px'} flexDirection={'column'}>
          <Flex flexDirection={'column'} justifyContent={'center'}>
            <h3>Рабочее время с 09:00-18:00</h3>
            <Link to="tel:+79104576194">
              <Box color="blue">
                <PhoneIcon /> +7 (910) 457-61-94
              </Box>
            </Link>
          </Flex>
          <span>Россия, Тула , Каминского улица, 33</span>
        </Flex>
        <Flex gap={'10px'} flexDirection={'column'}>
          <Button onClick={() => navigate(PageRoutes.Home)}>Home</Button>
          <Button onClick={() => navigate(PageRoutes.About)}>About</Button>
          <Button onClick={() => navigate('/wrong_page')}>Another</Button>
        </Flex>
      </Flex>
      <Box textAlign={'center'}>Тула, {new Date().getFullYear()}</Box>
    </Flex>
  );
};

export default Footer;
