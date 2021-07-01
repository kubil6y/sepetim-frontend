import { FC } from 'react';
import logo from '../assets/img/logo.svg';
import clsx from 'clsx';

type TSize = 'lg' | 'md' | 'sm';

interface ILogoProps {
  size: TSize;
}

export const Logo: FC<ILogoProps> = ({ size }) => {
  return (
    <img
      src={logo}
      alt='logo'
      className={clsx(
        'max-w-full block text-green-500 fill-current',
        { 'lg:w-40 lg:h-40 md:w-32 md:h-32 w-20 h-20': size === 'lg' },
        { 'w-25 h-25': size === 'md' },
        { 'w-10 h-10': size === 'sm' }
      )}
    />
  );
};
