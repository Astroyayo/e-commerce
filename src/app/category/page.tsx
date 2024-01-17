'use client';
import React, { use } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { GET_ALL_CATEGORIES } from '@/assets/enpoints';

const Category = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>(GET_ALL_CATEGORIES);
        setCategories(response.data);
      } catch (error: any) {
        //oops un error bro
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {categories.map((category: any) => (
        <Link key={category.id} href={`category/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Category;
