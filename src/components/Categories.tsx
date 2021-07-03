import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { CategoryItem } from '../components';
import { GET_ALL_CATEGORIES_QUERY } from '../graphql';
import { getAllCategoriesQuery } from '../__generated__/getAllCategoriesQuery';

export const Categories: FC = () => {
  const { data, loading, error } = useQuery<getAllCategoriesQuery>(
    GET_ALL_CATEGORIES_QUERY
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className='flex items-center justify-center w-full py-3 space-x-6'>
      {data?.getAllCategories?.categories &&
        data.getAllCategories.categories.map(({ slug, name, logoImg }) => (
          <CategoryItem
            key={slug}
            to={`/category/${slug}`}
            src={logoImg}
            alt={`${name} image`}
            name={name}
          />
        ))}
    </div>
  );
};
