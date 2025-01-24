import { Box, Button, Flex } from '@chakra-ui/react';
import { PageRoutes } from '../pages/PageRoutes';
import { Link, useNavigate } from 'react-router-dom';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box as="header">
        <Flex
          flexDirection={'row'}
          justifyContent={'space-between'}
          gap={'10px'}
          padding={'15px'}
          backgroundColor={'gray.50'}
        >
          <Flex alignItems={'center'} fontSize={'4xl'}>
            Тульский полиграфист
          </Flex>

          <Flex
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <h3>Рабочее время {'\n'}</h3>
            <h3>с 09:00-18:00</h3>
            <Link to="tel:+79104576194">
              <Box color="blue">
                <PhoneIcon /> +7 (910) 457-61-94
              </Box>
            </Link>
          </Flex>

          <Flex flexDirection={'column'} justifyContent={'center'}>
            <Flex alignItems={'center'} gap={'5px'}>
              <EmailIcon />
              <h3
                title=""
                data-clipboard="info@giprint.ru"
                data-toggle="tooltip"
                data-original-title="Скопировать"
              >
                info@giprint.ru
              </h3>
            </Flex>
            <Link to={'mailto:info@giprint.ru'}>
              <h3>Написать</h3>
            </Link>
          </Flex>

          <Flex
            flexDirection={'row'}
            gap={'10px'}
            justifyContent={'flex-end'}
            padding={'15px'}
            flexWrap={'wrap'}
          >
            <Button onClick={() => navigate(PageRoutes.Home)}>
              <h3>Главная страница</h3>
            </Button>
            <Button onClick={() => navigate(PageRoutes.About)}>
              <h3>История</h3>
            </Button>
            <Button onClick={() => navigate('/order')}>
              <h3>Оформить предзаказ</h3>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
