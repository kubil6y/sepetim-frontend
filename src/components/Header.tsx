import { FC } from 'react';
import { Logo } from './Logo';
import { FaUserAlt } from 'react-icons/fa';
import { Circle, Search } from '../components';
import { Link } from 'react-router-dom';
import { paths } from '../constants';

export const Header: FC = () => {
  return (
    <div className='cst-container'>
      <div className='flex items-center justify-between px-3 md:px-10 py-4  space-x-4 md:space-x-12'>
        <Link to={paths.home}>
          <div className='flex items-center space-x-4'>
            <Logo size='sm' />
            <h1 className='select-none cst-title'>Sepetim</h1>
          </div>
        </Link>

        <Search />

        <Link to={paths.profile} className='ml-auto'>
          <Circle>
            <FaUserAlt />
          </Circle>
        </Link>
      </div>
      <div className='my-2'>
        <Search />
      </div>
    </div>
  );
};
