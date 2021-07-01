import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Logo } from '../components';

export const NotFound = () => {
  return (
    <div className='cst-container flex items-center justify-center py-24 flex-col space-y-6'>
      <Logo size='lg' />
      <div className='text-3xl font-bold text-red-800'>
        The page you're looking for does not exist or has moved :(
      </div>
      <Link to='/'>
        <Button inner='Home' />
      </Link>
    </div>
  );
};
