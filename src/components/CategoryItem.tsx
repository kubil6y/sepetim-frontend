import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import { Circle } from '../components';
import { capitalize } from '../helpers';

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
      <Link to={to} data-tip={capitalize(name)}>
        <Circle>
          <img src={src} alt={alt} className='block max-w-full w-10 h-10' />
        </Circle>
      </Link>
      <ReactTooltip
        backgroundColor='#F87171'
        effect='solid'
        place='bottom'
        delayShow={150}
      />
    </>
  );
};
