'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '@/components';
import { Product } from '@/assets/types';
import { GET_PRODUCTS_BY_CATEGORY } from '@/assets/enpoints';

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const [categoryProducts, setCategoryProducts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product>(
          `${GET_PRODUCTS_BY_CATEGORY}/${params.category}`
        );
        setCategoryProducts(response.data);
      } catch (error: unknown) {
        //oops un error bro
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{`Products in Category: ${decodeURIComponent(params.category)}`}</h1>
      {categoryProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CategoryPage;
