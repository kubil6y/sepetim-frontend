import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { restaurantsByCategoryQuery_restaurantsByCategory_results } from '../__generated__/restaurantsByCategoryQuery';
import { RatingBox } from './RatingBox';
import { Link } from 'react-router-dom';

interface IRestaurantCardProps {
  coverImg: string;
  //slug: string;
  //restaurant: restaurantsByCategoryQuery_restaurantsByCategory_results;
}

export const RestaurantCard: FC<IRestaurantCardProps> = ({
  coverImg,
  //restaurant,
}) => {
  return (
    <Link to={`/restaurants/${'somewhere'}`}>
      <motion.div
        whileTap={{ scale: 0.975 }}
        className='w-full py-10 text-3xl text-white flex items-center justify-between pr-2'
        style={{
          background: `url(${coverImg}) no-repeat center center / cover`,
        }}
      >
        {/* NAMES */}
        <div className='flex items-center inline-block px-2 text-white bg-gray-700 space-x-2'>
          <h2>McDonalds</h2>
          <p className='text-base text-gray-300'>(Kadikoy)</p>
        </div>

        {/* LOGO */}
        <div className='flex items-center justify-center w-20 h-20 rounded-full bg-gray-50'>
          <img
            className='block h-12 max-w-full '
            src='https://res.cloudinary.com/dnqoeal8o/image/upload/v1625247216/sepetim/mcdonalds_j45lyj.webp'
            alt='logo'
          />
        </div>

        {/* RATINGS */}
        <div className='flex items-center justify-center p-2 bg-gray-700 space-x-3'>
          <RatingBox rating={8} title='Taste' />
          <RatingBox rating={8.23} title='Speed' />
          <RatingBox rating={7.23} title='Service' />
        </div>
      </motion.div>
    </Link>
  );
};
