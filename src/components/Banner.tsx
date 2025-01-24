import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, Container, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface BannerStruct {
  id: number;
  name: string;
  link: string;
  image_url: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<BannerStruct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const fetchBanner = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<BannerStruct[]>(
        'http://localhost:8080/api/banners'
      );
      setBanners(response.data);
      setIsLoading(false);
    } catch (err) {
      setError('Не удалось загрузить продукты');
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBanner();

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  console.log(currentIndex);

  const handleReloadBanner = () => {
    fetchBanner();
  };

  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text color="red.500">{error}</Text>
        <Button onClick={handleReloadBanner}>Попробовать снова</Button>
      </Container>
    );
  }

  if (banners.length === 0) {
    return (
      <Text textAlign="center" color="gray.500">
        Нет доступных банеров
      </Text>
    );
  }

  const variants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <AnimatePresence>
      <Box>
        {banners.map(
          (banner, index) =>
            index === currentIndex && (
              <motion.div
                key={banner.id}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <Link to={banner.link}>
                  <img
                    src={banner.image_url}
                    alt={banner.name}
                    height={'500px'}
                  />
                </Link>
              </motion.div>
            )
        )}
      </Box>
    </AnimatePresence>
  );
};

export default Banner;
