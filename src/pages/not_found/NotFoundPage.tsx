import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Container } from '@chakra-ui/react';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container as={'main'}>
        <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <p>
            Вы перешли на несуществующую страницу{' '}
            <code>{location.pathname}</code>, пожалуйста вернитесь на главную
          </p>
          <Button
            label="pls go to home page"
            onClick={() => navigate(PageRoutes.Home)}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default NotFoundPage;
