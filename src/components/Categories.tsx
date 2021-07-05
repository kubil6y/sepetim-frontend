import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { CategoryItem, GenericError, Loader } from '../components';
import { GET_ALL_CATEGORIES_QUERY } from '../graphql';
import { getAllCategoriesQuery } from '../__generated__/getAllCategoriesQuery';

export const Categories: FC = () => {
  const { data, loading, error } = useQuery<getAllCategoriesQuery>(
    GET_ALL_CATEGORIES_QUERY
  );

  if (loading) return <Loader />;
  if (error) return <GenericError message='Something went wrong' />;

  return (
    <div className='md:flex md:items-center md:justify-center grid grid-cols-3 md:space-x-8'>
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
