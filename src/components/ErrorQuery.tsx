import { Link } from 'react-router-dom';
import { paths } from '../constants';
import { Button } from './Button';

export const ErrorQuery = () => {
  return (
    <div className='py-20 flex flex-col items-center cst-container w-full justify-center space-y-4'>
      <div className='text-lg font-bold '>Something went wrong</div>
      <Link to={paths.home}>
        <Button inner='Home' />
      </Link>
    </div>
  );
};
