import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IBannerProps {
  message: string;
  to: string;
}

export const Banner: FC<IBannerProps> = ({ message, to }) => {
  return (
    <div className='h-16 w-full bg-red-500 flex items-center justify-center text-white select-none'>
      <Link
        to={to}
        className='text-xs font-bold tracking-wide transition-colors duration-300 hover:underline'
      >
        <div>{message}</div>
      </Link>
    </div>
  );
};
