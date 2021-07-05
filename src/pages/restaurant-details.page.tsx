import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import {
  DishCard,
  GenericError,
  Loader,
  PreviousButton,
  RatingBox,
} from '../components';
import { GET_RESTAURANT_QUERY } from '../graphql';
import {
  getRestaurantQuery,
  getRestaurantQueryVariables,
} from '../__generated__/getRestaurantQuery';
import { Helmet } from 'react-helmet-async';

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
  if (!data?.getRestaurant?.restaurant) {
    return <GenericError message='Restaurant does not exist' />;
  }

  return (
    <>
      <Helmet>
        <title>
          Sepetim |{' '}
          {data?.getRestaurant?.restaurant?.name || 'Restaurant Details'}
        </title>
      </Helmet>
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
              No Delivery Fee! • min 15–25 Minutes
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

        {/* MENU */}
        <div className='mt-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-3'>
          {data?.getRestaurant?.restaurant?.menu &&
          data?.getRestaurant?.restaurant?.menu.length === 0 ? (
            <div>no menu here</div>
          ) : (
            <>
              {data?.getRestaurant?.restaurant?.menu.map((dish) => (
                <DishCard dish={dish} key={dish.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
