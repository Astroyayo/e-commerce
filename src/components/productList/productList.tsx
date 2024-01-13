'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '@/components';
import './productList.scss';
import { Product } from '@/assets/types';
import { GET_ALL_PRODUCTS } from '@/assets/enpoints';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(GET_ALL_PRODUCTS);
        setProducts(response.data);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading the products</div>;

  return (
    <div>
      <h1>Product List Page</h1>

      <div className='product-list'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
