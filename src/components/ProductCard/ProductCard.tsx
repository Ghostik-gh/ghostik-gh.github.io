import styles from './ProductCard.module.css';
import { Box } from '@chakra-ui/react';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  return (
    <Box
      border={'1px'}
      width={'200px'}
      display={'flex'}
      flexDirection={'column'}
    >
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>{price} ₽</p>
    </Box>
  );
};
