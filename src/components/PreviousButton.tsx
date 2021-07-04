import React from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from '../constants';

export const PreviousButton = () => {
  const history = useHistory();

  return (
    <div className='flex items-center justify-center px-3 py-2 md:text-sm text-xs rounded-full cursor-pointer bg-gray-50 space-x-3 hover:bg-gray-300 cst-transition w-full shadow-lg'>
      <svg
        aria-hidden='true'
        focusable='false'
        viewBox='0 0 24 24'
        className='w-4 h-4'
      >
        <path d='M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z'></path>
      </svg>
      <p className='font-bold' onClick={() => history.push(paths.home)}>
        Home Page
      </p>
    </div>
  );
};
