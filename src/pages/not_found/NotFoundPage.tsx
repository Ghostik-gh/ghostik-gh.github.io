import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Container, Text } from '@chakra-ui/react';

function NotFoundPage() {
  return (
    <>
      <Header />
      <Container as={'main'}>
        <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <Text fontSize={'4xl'}>
            Вы перешли на несуществующую страницу{' '}
            <code>{location.pathname}</code>, пожалуйста вернитесь на главную
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default NotFoundPage;
