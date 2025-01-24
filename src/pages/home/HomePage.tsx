import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from '@chakra-ui/react';
import Products from '../../components/Products';
import Banner from '../../components/Banner';

function HomePage() {
  return (
    <>
      <Header />
      <Container as={'main'} maxW="container.xl">
        <Banner />
        <Products />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
