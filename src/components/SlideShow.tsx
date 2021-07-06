import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Carousel } from 'react-responsive-carousel';
import { ErrorQuery, Loader } from '../components';
import { GET_FIVE_RESTAURANTS } from '../graphql';
import { getFiveRestaurantsQuery } from '../__generated__/getFiveRestaurantsQuery';

export const SlideShow = () => {
  const { data, loading, error } = useQuery<getFiveRestaurantsQuery>(
    GET_FIVE_RESTAURANTS
  );

  if (loading) return <Loader />;
  if (error || !data?.getFiveRestaurants?.restaurants) return <ErrorQuery />;

  return (
    <div className='flex items-center justify-center'>
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        {data?.getFiveRestaurants?.restaurants &&
          data?.getFiveRestaurants?.restaurants.map((restaurant) => (
            <div key={restaurant?.id}>
              <img src={restaurant?.coverImg} alt='restaurant coverImg' />
              <Link to={`/restaurants/${restaurant?.slug}`}>
                <p className='cursor-pointer legend'>{restaurant?.name}</p>
              </Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
