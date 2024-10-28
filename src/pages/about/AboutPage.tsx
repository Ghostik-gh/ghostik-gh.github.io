import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Container } from '@chakra-ui/react';

function AboutPage() {
  return (
    <>
      <Header />
      <Container as={'main'}>
        <Box>
          <h2>Директор Типографии</h2>
        </Box>
        <Box>
          <h1>Историия Типографии</h1>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default AboutPage;
