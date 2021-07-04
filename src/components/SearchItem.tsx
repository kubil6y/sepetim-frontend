import { useMediaQuery } from '@react-hook/media-query';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Badge, RatingBox } from '../components';

interface ISearchItemProps {
  name: string;
  slug: string;
  district: string;
  logoImg: string;
  categoryName: string;
  categorySlug: string;
  tasteRating: number;
  setShowBackdrop: any;
}

export const SearchItem: FC<ISearchItemProps> = ({
  name,
  district,
  slug,
  logoImg,
  categoryName,
  categorySlug,
  tasteRating,
  setShowBackdrop,
}) => {
  const smallScreen = useMediaQuery('only screen and (max-width: 400px)');

  return (
    <Link to={`/restaurants/${slug}`}>
      <div
        className='flex items-center hover:bg-gray-100 cst-transition px-5 py-2'
        onMouseEnter={() => setShowBackdrop(true)}
        onMouseLeave={() => setShowBackdrop(false)}
      >
        <div className='w-1/5'>
          <img
            src={logoImg}
            className='block w-8 h-8 md:w-12 md:h-12'
            alt='restaurant logo'
          />
        </div>
        <div className='flex flex-col justify-center w-4/5 mx-2 space-x-2'>
          <div className='flex items-center space-x-3'>
            <p className='text-sm font-bold capitalize md:text-lg'>{name}</p>
            <p className='text-xs text-gray-500 capitalize md:text-sm'>
              ({district})
            </p>
            {!smallScreen && (
              <Badge categorySlug={categorySlug} categoryName={categoryName} />
            )}
          </div>
        </div>
        <div className='ml-auto'>
          <RatingBox title='Taste' rating={tasteRating} />
        </div>
      </div>
    </Link>
  );
};
