import { useLazyQuery } from '@apollo/client';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { BigBadge, RestaurantCard } from '../components';
import { RESTAURANTS_BY_CATEGORY_QUERY } from '../graphql';
import { CategoryType } from '../types';
import {
  restaurantsByCategoryQuery,
  restaurantsByCategoryQueryVariables,
} from '../__generated__/restaurantsByCategoryQuery';

interface IParams {
  slug: CategoryType;
}

export const CategoryPage: FC = () => {
  const { slug } = useParams<IParams>();
  const [callQuery, { data, loading }] = useLazyQuery<
    restaurantsByCategoryQuery,
    restaurantsByCategoryQueryVariables
  >(RESTAURANTS_BY_CATEGORY_QUERY);

  useEffect(() => {
    callQuery({
      variables: {
        input: {
          slug,
        },
      },
    });
  }, [slug]);

  if (loading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <div className='cst-container'>
      <BigBadge categorySlug={slug} />
      <div>{slug}</div>
      <RestaurantCard coverImg='https://res.cloudinary.com/dnqoeal8o/image/upload/v1625247201/sepetim/mcdonalds_cover_hcu5ul.jpg' />
    </div>
  );
};
