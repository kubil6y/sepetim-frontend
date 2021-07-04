import React, { FC, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router';
import {
  BigBadge,
  Button,
  ErrorQuery,
  Loader,
  RestaurantCard,
} from '../components';
import { RESTAURANTS_BY_CATEGORY_QUERY } from '../graphql';
import { CategoryType } from '../types';
import {
  restaurantsByCategoryQuery,
  restaurantsByCategoryQueryVariables,
} from '../__generated__/restaurantsByCategoryQuery';
import { Link } from 'react-router-dom';
import { paths } from '../constants';

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
      <BigBadge categorySlug={slug} />
      <div>{slug}</div>
      {data?.restaurantsByCategory?.results &&
      data?.restaurantsByCategory?.results.length === 0 ? (
        <div className='py-20 flex items-center cst-container w-full justify-center space-y-3 flex-col'>
          <h2 className='text-2xl font-bold '>
            No restaurants are registered for this category.
          </h2>
          <Link to={paths.home}>
            <Button inner='Home' />
          </Link>
        </div>
      ) : (
        <div className='w-full my-3 space-y-6'>
          {data?.restaurantsByCategory?.results &&
            data?.restaurantsByCategory?.results.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
      )}
    </div>
  );
};

/*

 */
