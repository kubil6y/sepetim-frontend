import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '.';
import { paths } from '../constants';

interface IGenericErrorProps {
  message: string;
}

export const GenericError: FC<IGenericErrorProps> = ({ message }) => (
  <div className='py-20 flex items-center cst-container w-full justify-center space-y-3 flex-col'>
    <h2 className='text-2xl font-bold '>{message}</h2>
    <Link to={paths.home}>
      <Button inner='Home' />
    </Link>
  </div>
);
