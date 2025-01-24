import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard/ProductCard';
import {
  Button,
  Container,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  image_url2: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<Product[]>(
        'http://localhost:8080/api/products'
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError('Не удалось загрузить продукты');
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleReloadProducts = () => {
    fetchProducts();
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
        <Button onClick={handleReloadProducts}>Попробовать снова</Button>
      </Container>
    );
  }

  if (products.length === 0) {
    return (
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        margin={'30px'}
        fontSize={'4xl'}
      >
        <h1>Нет доступных продуктов</h1>
      </Flex>
    );
  }

  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacing={4}
      justifyItems={'center'}
      margin={'30px'}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          imageUrl={product.image_url}
          imageUrl2={product.image_url2}
        />
      ))}
    </SimpleGrid>
  );
};

export default Products;
