import { FC } from 'react';
import { Logo } from './Logo';
import { FaUserAlt } from 'react-icons/fa';
import { Circle, Search } from '../components';
import { Link } from 'react-router-dom';
import { paths } from '../constants';

export const Header: FC = () => {
  return (
    <div className='cst-container'>
      <div className='flex items-center justify-between px-3 py-4 md:px-10'>
        <Link to={paths.home} className='mr-2 md:mr-10'>
          <div className='flex items-center space-x-4'>
            <Logo size='sm' />
            <h1 className='hidden select-none md:block cst-title'>Sepetim</h1>
          </div>
        </Link>

        <Search />

        <Link to={paths.profile} className='ml-2 md:ml-10'>
          <Circle>
            <FaUserAlt />
          </Circle>
        </Link>
      </div>
    </div>
  );
};
