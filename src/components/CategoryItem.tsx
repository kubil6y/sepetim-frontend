import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICategoryItemProps {
  src: string;
  alt: string;
  to: string;
  name: string;
}

export const CategoryItem: FC<ICategoryItemProps> = ({
  src,
  alt,
  to,
  name,
}) => {
  return (
    <>
      <Link to={to} className='flex flex-col space-y-1 items-center group'>
        <div className='flex items-center justify-center p-3 rounded-full cursor-pointer group-hover:bg-gray-100 cst-transition'>
          <img src={src} alt={alt} className='block w-10 h-10 max-w-full' />
        </div>
        <p className='text-sm capitalize'>{name}</p>
      </Link>
    </>
  );
};
