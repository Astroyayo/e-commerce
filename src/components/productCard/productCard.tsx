import { Product } from '@/assets/types';
import React from 'react';
import './productCard.scss';

interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='image-container'>
        {product.image && <img src={product.image} alt={product.title} />}
      </div>
      <div className='product-info'>
        <h3 title={product.title}>{product.title}</h3>
        <p className='category'>{product.category}</p>
        <p className='price'>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
