import React from 'react';
//import { useRouter } from 'next/router';

const CategoryPage = ({ params }: { params: { category: string } }) => {
  //const router = useRouter();
  //const { category } = router.query;

  return (
    <div>
      <h1>{`Products in Category: ${params.category}`}</h1>
      {/* Category-specific product listing components here */}
    </div>
  );
};

export default CategoryPage;
