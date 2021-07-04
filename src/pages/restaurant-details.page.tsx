import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { GenericError, Loader, PreviousButton, RatingBox } from '../components';
import { GET_RESTAURANT_QUERY } from '../graphql';
import {
  getRestaurantQuery,
  getRestaurantQueryVariables,
} from '../__generated__/getRestaurantQuery';

interface IParams {
  slug: string;
}

export const RestaurantDetails = () => {
  const { slug } = useParams<IParams>();
  const { data, loading, error } = useQuery<
    getRestaurantQuery,
    getRestaurantQueryVariables
  >(GET_RESTAURANT_QUERY, {
    variables: { input: { slug } },
  });

  if (loading) return <Loader />;
  if (error || !data) return <GenericError message='Something went wrong ' />;

  //TODO
  console.log(data?.getRestaurant?.restaurant);

  return (
    <div className='cst-container'>
      <div
        className='relative py-32 shadow'
        style={{
          background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6)), url(${data.getRestaurant.restaurant?.coverImg}) no-repeat center center / cover`,
        }}
      >
        {/* PREVIOUS BUTTON */}
        <div className='absolute md:top-5 md:left-5 top-2 left-2'>
          <PreviousButton />
        </div>

        {/* RESTAURANT TITLE */}
        <div className='absolute left-5 bottom-5 space-y-1'>
          <h1 className='md:text-4xl font-bold text-white capitalize text-xl'>
            {data.getRestaurant.restaurant?.name} (
            {data.getRestaurant.restaurant?.district})
          </h1>
          <p className='text-xs text-white md:text-base'>
            Delivery Fee is free! • min 15–25 Minutes
          </p>
        </div>

        {/* RESTAURANT RATINGS */}
        <div className='flex items-center ml-5 sm:absolute sm:bottom-5 sm:right-5 space-x-3'>
          <RatingBox
            title='Taste'
            rating={
              data?.getRestaurant?.restaurant?.restaurantRating?.taste || 0
            }
          />
          <RatingBox
            title='Speed'
            rating={
              data?.getRestaurant?.restaurant?.restaurantRating?.speed || 0
            }
          />
          <RatingBox
            title='Service'
            rating={
              data?.getRestaurant?.restaurant?.restaurantRating?.service || 0
            }
          />
        </div>
      </div>
    </div>
  );
};
