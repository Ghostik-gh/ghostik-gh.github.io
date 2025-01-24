import styles from './ProductCard.module.css';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  imageUrl2: string;
}

export const ProductCard = ({
  title,
  imageUrl,
  imageUrl2,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      border={isHovered ? '1px' : '0px'}
      width={'200px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      shadow={'xs'}
    >
      <img
        src={isHovered ? imageUrl : imageUrl2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        height={'200px'}
        alt={title}
        className={styles.productImage}
      />
      <Text textAlign={'center'}>{title}</Text>
    </Flex>
  );
};
