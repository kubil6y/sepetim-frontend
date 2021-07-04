import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { restaurantsByCategoryQuery_restaurantsByCategory_results } from '../__generated__/restaurantsByCategoryQuery';
import { RatingBox } from './RatingBox';
import { Link } from 'react-router-dom';

interface IRestaurantCardProps {
  restaurant: restaurantsByCategoryQuery_restaurantsByCategory_results;
}

export const RestaurantCard: FC<IRestaurantCardProps> = ({ restaurant }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      to={`/restaurants/${restaurant.slug}`}
      className='block w-full overflow-hidden shadow-lg'
    >
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileTap={{ scale: 0.96 }}
        className='relative flex items-center justify-between w-full py-10 pr-2 text-3xl text-white flex-col sm:flex-row space-y-4 sm:space-y-0'
      >
        {/* NAMES */}
        <div className='flex items-center inline-block px-2 text-white bg-gray-700 space-x-2'>
          <h2 className='capitalize'>{restaurant.name}</h2>
          <p className='text-base text-gray-300 capitalize'>
            ({restaurant.district})
          </p>
        </div>

        {/* LOGO */}
        <div className='flex items-center justify-center w-20 h-20 rounded-full shadow-inner bg-gray-50'>
          <img
            className='block h-12 max-w-full '
            src={restaurant.logoImg}
            alt='logo'
          />
        </div>

        {/* RATINGS */}
        <div className='flex items-center justify-center p-2 bg-gray-700 space-x-3'>
          <RatingBox
            rating={restaurant.restaurantRating.taste!}
            title='Taste'
          />
          <RatingBox
            rating={restaurant.restaurantRating.speed!}
            title='Speed'
          />
          <RatingBox
            rating={restaurant.restaurantRating.service!}
            title='Service'
          />
        </div>
        <motion.div
          className='absolute inset-0 w-full h-full'
          initial={{ scale: 1 }}
          animate={
            isHovering
              ? { scale: 1.05, transition: { duration: 0.5 } }
              : { scale: 1 }
          }
          style={{
            background: `url(${restaurant.coverImg}) no-repeat center center / cover`,
            zIndex: -1,
          }}
        ></motion.div>
      </motion.div>
    </Link>
  );
};
