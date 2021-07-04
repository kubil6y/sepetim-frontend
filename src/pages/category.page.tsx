import React, { FC, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router';
import {
  BigBadge,
  ErrorQuery,
  GenericError,
  Loader,
  RestaurantCard,
} from '../components';
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
  const [callQuery, { data, loading, error }] = useLazyQuery<
    restaurantsByCategoryQuery,
    restaurantsByCategoryQueryVariables
  >(RESTAURANTS_BY_CATEGORY_QUERY);

  useEffect(() => {
    callQuery({
      variables: {
        input: {
          slug,
          //page: 2, TODO
        },
      },
    });
  }, [slug, callQuery]);

  if (loading) return <Loader />;
  if (error) return <ErrorQuery />;

  return (
    <div className='cst-container'>
      {data?.restaurantsByCategory?.results && <BigBadge categorySlug={slug} />}

      {data?.restaurantsByCategory?.results &&
      data?.restaurantsByCategory?.results.length === 0 ? (
        <GenericError message='No restaurants are registered for this category' />
      ) : (
        <div className='w-full my-3 space-y-6'>
          {data?.restaurantsByCategory?.results &&
            data?.restaurantsByCategory?.results.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
      )}

      {!data?.restaurantsByCategory?.results && (
        <GenericError message='Category does not exist' />
      )}
    </div>
  );
};
