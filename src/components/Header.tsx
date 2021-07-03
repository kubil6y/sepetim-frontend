import { FC } from 'react';
import { Logo } from './Logo';
import { FaUserAlt } from 'react-icons/fa';
import { Circle, Search } from '../components';
import { Link } from 'react-router-dom';
import { paths } from '../constants';
import { useMediaQuery } from '@react-hook/media-query';

export const Header: FC = () => {
  const smallScreen = useMediaQuery('only screen and (max-width: 400px)');

  return (
    <div className='cst-container'>
      <div className='flex items-center justify-between px-3 pt-4 pb-2 md:px-10'>
        <Link to={paths.home} className='mr-2 md:mr-10'>
          <div className='flex items-center space-x-3'>
            <Logo size='sm' />
            <h1 className='hidden select-none md:block cst-title'>Sepetim</h1>
          </div>
        </Link>

        {!smallScreen && <Search />}

        <Link to={paths.myProfile} className='ml-2 md:ml-10'>
          <Circle>
            <FaUserAlt />
          </Circle>
        </Link>
      </div>

      {smallScreen && <Search />}
    </div>
  );
};
