import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Box, Container } from '@chakra-ui/react';

function HomePage() {
  return (
    <>
      <Header />
      <Container as={'main'}>
        <Box>
          <h1>Типография</h1>
        </Box>
        <ProductCard title="Card Title" price={100} imageUrl="/vite.svg" />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
